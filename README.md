# byeongGuks.github.io

Personal academic homepage. Plain static HTML, no build step.

## Files
- `index.html`: about, news, publications, experience
- `publications.html`: redirects to the publications section of `index.html`
- `style.css`, `main.js`: shared styles and BibTeX/dark-mode toggles
- `cv.pdf`: linked from the nav bar and the CV icon
- `assets/profile.jpg`: profile photo (square, at least 460x460). Until it exists, a "BJ" placeholder is shown.

## Deploy on GitHub Pages
1. Create a public repo named `byeongGuks.github.io` on GitHub.
2. Upload every file in this folder (and the `assets/` folder) to the repo root.
3. Repo Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
4. After a minute the site is live at https://byeongguks.github.io

## Updating
- New paper: copy one `<li class="pub">` block in `index.html` and edit it.
- News: add a `<tr>` row at the top of the news table.
- New CV: replace `cv.pdf`.
