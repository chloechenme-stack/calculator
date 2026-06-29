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

This is a static site and can be published directly from the `main` branch.

After pushing to GitHub:

1. Open the GitHub repository.
2. Go to `Settings` -> `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Select `main` and `/ (root)`.
5. Save the setting; GitHub Pages will publish the site.

## Google Sheet Login

To read a private Google Sheet from the deployed page, create a Google OAuth Client ID:

1. Open Google Cloud Console.
2. Create or select a project.
3. Enable `Google Sheets API`.
4. Create an OAuth 2.0 Client ID for a Web application.
5. Add authorized JavaScript origins:

```text
http://localhost:8000
https://chloechenme-stack.github.io
```

6. Copy the Client ID into the app, click `Google 登录`, then click `加载 Google Sheet`.

The app requests read-only access:

```text
https://www.googleapis.com/auth/spreadsheets.readonly
```
