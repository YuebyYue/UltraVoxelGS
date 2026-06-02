# UltraVoxelGS Project Page

Static project homepage for:

**UltraVoxelGS: Voxel-First Feed-Forward Gaussian Splatting for 3D Ultrasound Reconstruction**

Core message:

> Making hidden 3D coverage visible during 2D ultrasound scanning.

This repository hosts a lightweight GitHub Pages-ready website. The page is designed as a story-first research homepage: Problem -> Barrier -> Method -> Result -> Clinical Vision.

## Current Page Status

- Static HTML/CSS/JS only. No build step is required.
- No public paper, code, poster, slide, arXiv, citation, or BibTeX links are included yet.
- The method section uses the paper pipeline figure as the primary technical visual.
- The first-screen story emphasizes hidden coverage, visible incompleteness, and re-scan guidance.
- The UltraVision+ Lab logo is included in the header and clinical vision section.

## Repository Structure

```text
.
|-- index.html
|-- static/
|   |-- css/
|   |   `-- site.css
|   |-- js/
|   |   `-- site.js
|   `-- assets/
|       |-- paper-pipeline.png
|       |-- paper-clinical-workflow.png
|       |-- paper-paradigm-shift.png
|       |-- paper-main-results.png
|       |-- paper-quality-tradeoff.png
|       |-- paper-decoupled-attenuation.png
|       |-- paper-raa-time-transfer.png
|       |-- volume-reconstruction.png
|       |-- volume-reconstruction-cutout.png
|       |-- hero-posed-slices.png
|       |-- hero-rendered-views.png
|       `-- ultravision-lab-logo.svg
|-- .nojekyll
|-- .gitignore
`-- README.md
```

## Local Preview

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

Because this is a static page, opening `index.html` directly also works for a quick check, but the local server is closer to GitHub Pages behavior.

## GitHub Pages Deployment

Upload these files/folders to the GitHub repository root:

```text
index.html
static/
.nojekyll
.gitignore
README.md
```

Then enable GitHub Pages:

1. Go to the repository on GitHub.
2. Open **Settings** -> **Pages**.
3. Set **Source** to `Deploy from a branch`.
4. Select branch `main` and folder `/root`.
5. Save and wait for GitHub Pages to publish the site.

For a user site, the repository can be named:

```text
<username>.github.io
```

For a project site, the URL will usually be:

```text
https://<username>.github.io/<repo-name>/
```

## Do Not Upload

The following local materials are source/reference files and are intentionally excluded by `.gitignore`:

```text
*.pptx
Yue_3DGS_US/
nerfies.github.io-main/
```

These are not needed for the public static page. The website already uses curated images inside `static/assets/`.

## Design Direction

The visual style is intentionally clinical and research-oriented:

- Background: off-white / pale blue white.
- Primary text: deep navy.
- Main accent: medical blue.
- Secondary accent: teal.
- 3D / Gaussian representation: soft purple.
- Missing evidence and re-scan cue: coral red.

Coral red should only be used for missing evidence, visible incompleteness, or re-scan guidance. Avoid random neon effects, dark cyber backgrounds, decorative particles, or animations that do not explain the method.

## Future Release Notes

When the paper/code becomes publicly available, the page can be updated with:

- Paper link.
- Code link.
- Demo or dataset link.
- Citation / BibTeX section.

Until then, the current page keeps the project self-contained and avoids implying a public release that does not exist yet.
