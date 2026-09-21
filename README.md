# Logan Hysen — academic website

This is a small Jekyll site deployed with GitHub Pages. The homepage, CV page,
teaching foundation, and optional project/presentation sections are intentionally
kept data-driven and dependency-light.

## Updating the site

- Edit `index.html` for homepage prose and broad research interests.
- Add the homepage landscape as `assets/img/hero-landscape.jpg`. The hero detects
  the file automatically and applies the image with a readability overlay.
- Add the current CV as `assets/docs/logan-hysen-cv.pdf`. The CV page detects it
  automatically and otherwise shows a contact fallback.
- Add research projects to `_data/projects.yml`. The map and project cards appear
  on `/projects/`, linked from the homepage and navigation. Edit
  `_pages/projects.html` for that page's layout and introduction.
- Add talks, posters, or workshops to `_data/presentations.yml`. The homepage
  section and navigation link appear automatically when entries exist.
- Edit `_pages/teaching.md` as the teaching portfolio develops. It is deliberately
  excluded from primary navigation for now.

## Project data example

```yaml
- title: Example project
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
  code_url:
```

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
