# DMG Solar Price Calculator

A static solar and battery quote calculator built from the pricing logic in the local workbook.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```sh
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Deploy With GitHub Pages

This repo includes a GitHub Actions workflow that publishes the static site to GitHub Pages.

After pushing to GitHub:

1. Open the GitHub repository.
2. Go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main`; the site will deploy automatically.
