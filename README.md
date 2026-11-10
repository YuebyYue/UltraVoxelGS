# UltraVoxelGS Project Page

[View the live project page](https://yuebyyue.github.io/UltraVoxelGS/)

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
|-- sitemap.xml
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
sitemap.xml
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

## Search indexing and Google Search Console

- Live project: https://yuebyyue.github.io/UltraVoxelGS/
- Sitemap: https://yuebyyue.github.io/UltraVoxelGS/sitemap.xml
- The HTML declares the canonical HTTPS URL, a descriptive title and description, and explicit indexing permissions. Indexing is allowed by default; the robots meta tag does not force Google to index the page.
- The sitemap lists the canonical homepage only. Section anchors are not separate pages. Add future public pages using absolute canonical URLs. No lastmod is emitted rather than publishing a stale or guessed modification date.
- Google reads robots.txt only at https://yuebyyue.github.io/robots.txt, which is managed by the separate YuebyYue.github.io repository. A robots.txt inside this project directory would not apply. The root robots.txt currently permits crawling. The project sitemap can be submitted directly in Search Console without modifying that repository.
- The sitemap link in the HTML is supplementary; use Search Console submission for discovery.

### Submit this project

1. Open https://search.google.com/search-console and add a **URL-prefix** property: https://yuebyyue.github.io/UltraVoxelGS/ (including HTTPS and the trailing slash). A Domain property requires DNS verification, which is not appropriate for this GitHub-hosted subdomain.
2. If the parent website is already verified in your account, this property may verify automatically. Otherwise choose **HTML tag** under the available verification methods.
3. Copy the exact Google-provided meta tag named google-site-verification into the head of index.html. Commit and deploy it, confirm it is present in the live HTML, then click **Verify**. Do not invent a token or remove it after verification.
4. Open **Sitemaps** and submit https://yuebyyue.github.io/UltraVoxelGS/sitemap.xml. If the form already displays the property prefix, enter only sitemap.xml. Confirm the sitemap status becomes Success.
5. Use **URL inspection** for https://yuebyyue.github.io/UltraVoxelGS/. Select **Test live URL** and, if eligible and not already indexed, **Request indexing**.
6. Review indexing status later. Successful sitemap processing or a live URL test does not guarantee indexing or a particular ranking. Crawling can take days to weeks.

For discovery, link the live project page from the code repository, personal homepage, and laboratory publication entry where appropriate.

Official references:
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
