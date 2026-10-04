# Logan Hysen — academic website

This is a small Jekyll site deployed with GitHub Pages. The homepage, CV page,
teaching foundation, and optional project/presentation sections are intentionally
kept data-driven and dependency-light.

## Updating the site

- Edit `index.html` for homepage prose. Add or update the guiding questions in
  `_data/research_interests.yml`; each question can optionally include an image.
- Add the homepage landscape as `assets/img/hero-landscape.jpg`. The hero detects
  the file automatically and applies the image with a readability overlay.
- Add the current CV as `assets/docs/logan-hysen-cv.pdf`. The CV page detects it
  automatically and otherwise shows a contact fallback.
- Add research projects to `_data/projects.yml`. Projects with `show_on_map: true`
  appear on the map; projects with `show_on_map: false` appear in the "Projects
  beyond the map" section. Edit `_pages/projects.html` for that page's layout and
  introduction.
- Add talks, posters, or workshops to `_data/presentations.yml`. The homepage
  section and navigation link appear automatically when entries exist.
- Edit `_pages/teaching.md` as the teaching portfolio develops. It is deliberately
  excluded from primary navigation for now.

## Project data example

```yaml
- title: Example project
  show_on_map: true
  location: East Lansing, Michigan, USA
  coordinates: [42.7018, -84.4822]
  status: Ongoing
  summary: A short description of the research question and approach.
  image: /assets/img/projects/example-project.jpg
  image_alt: A concise description of the project image.
  image_credit: Photographer or image-source credit.
  themes:
    - Landscape ecology
    - Connectivity
  project_url: https://example.com
  publication_url:
  publication_urls:
    - https://doi.org/example-one
    - https://doi.org/example-two
  code_url:
```

Use `publication_url` for one publication or `publication_urls` for multiple
publication links. A project with `show_on_map: true` must provide `location` and
`coordinates`. For work without one geographic location, use `show_on_map: false`
and omit those two fields.

## Research-interest data example

```yaml
- title: Human–wildlife coexistence
  question: How can people and wildlife coexist in shared landscapes?
  image: /assets/img/research-interests/coexistence.jpg
  image_alt: Honeybees gathering at the entrance of a wooden hive.
```

The image and alternative text are optional. Questions without images use the
site's text-led card design, so no placeholder artwork is needed.

## Presentation data example

```yaml
- title: Example presentation
  event: Conference or workshop name
  date: 2026
  type: Talk
  url: https://example.com/slides
  file:
```

Use either `url` or `file` for each presentation. Local presentation files can be
stored under `assets/presentations/`.

## Deployment

Pull requests run the production build without publishing. Pushes to `master`
build and deploy through the single workflow in `.github/workflows/deploy.yml`.
