---
title: Curriculum Vitae
permalink: /cv/
description: Curriculum vitae for Logan Hysen.
body_class: cv
---

{% assign cv_file = site.static_files | where: "path", "/assets/docs/logan-hysen-cv.pdf" | first %}
<section class="document-section">
  <div class="page-shell narrow-shell">
    <h1 class="document-title">Curriculum vitae</h1>
    {% if cv_file %}
      <div class="document-actions reveal">
        <a class="button button-primary" href="{{ '/assets/docs/logan-hysen-cv.pdf' | relative_url }}" target="_blank" rel="noopener">Open PDF</a>
        <a class="text-link" href="{{ '/assets/docs/logan-hysen-cv.pdf' | relative_url }}" download>Download PDF <span aria-hidden="true">↓</span></a>
      </div>
      <object class="pdf-viewer reveal" data="{{ '/assets/docs/logan-hysen-cv.pdf' | relative_url }}" type="application/pdf">
        <p>Your browser cannot display the PDF inline. <a href="{{ '/assets/docs/logan-hysen-cv.pdf' | relative_url }}">Open the CV instead.</a></p>
      </object>
    {% else %}
      <div class="document-empty reveal">
        <p class="eyebrow">Update in progress</p>
        <h2>The latest CV is being prepared.</h2>
        <p>Please contact me for a current copy, or return soon for the downloadable version.</p>
        <a class="button button-primary" href="mailto:{{ site.author.email }}?subject=CV%20request">Request a copy</a>
      </div>
    {% endif %}
  </div>
</section>
