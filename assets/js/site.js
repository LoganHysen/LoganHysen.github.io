(() => {
  document.documentElement.classList.remove("no-js");

  const header = document.querySelector("[data-site-header]");
  const nav = document.querySelector("#site-navigation");
  const toggle = document.querySelector(".nav-toggle");

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeNavigation = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  toggle?.addEventListener("click", () => {
    const opening = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(opening));
    nav?.classList.toggle("is-open", opening);
    document.body.classList.toggle("nav-open", opening);
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNavigation();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
    reveals.forEach((element) => observer.observe(element));
  }

  const mapElement = document.querySelector("#research-map");
  const projectData = document.querySelector("#project-data");
  if (!mapElement || !projectData || typeof window.L === "undefined") return;

  let projects;
  try {
    projects = JSON.parse(projectData.textContent);
  } catch (error) {
    mapElement.textContent = "The research map could not be loaded.";
    return;
  }

  const validProjects = projects.filter(
    (project) => Array.isArray(project.coordinates) && project.coordinates.length === 2
  );
  if (!validProjects.length) return;

  const map = window.L.map(mapElement, { scrollWheelZoom: false, worldCopyJump: true });
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  const bounds = [];
  validProjects.forEach((project) => {
    const coordinates = project.coordinates.map(Number);
    if (!coordinates.every(Number.isFinite)) return;
    bounds.push(coordinates);

    const popup = document.createElement("div");
    popup.className = "map-popup";
    if (project.image) {
      const image = document.createElement("img");
      image.className = "map-popup-image";
      image.src = project.image;
      image.alt = project.image_alt || project.title || "Research project";
      popup.append(image);
    }
    const title = document.createElement("strong");
    const location = document.createElement("div");
    title.textContent = project.title || "Research project";
    location.textContent = project.location || "";
    popup.append(title, location);

    window.L.marker(coordinates).addTo(map).bindPopup(popup);
  });

  if (bounds.length === 1) map.setView(bounds[0], 5);
  else map.fitBounds(bounds, { padding: [40, 40], maxZoom: 6 });
})();
