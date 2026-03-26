# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
Static HTML/CSS3/JS website featuring animated 3D boxes. No build step, no package manager, no dependencies to install. See `README.md`.

### Running the dev server
Serve the site from the repository root with any static HTTP server:
```
python3 -m http.server 8080
```
Then open `http://localhost:8080/` in a browser.

### Notes
- jQuery is loaded from Google CDN (`ajax.googleapis.com`) — requires internet access.
- The `assets/scrollbar/` directory referenced by `index.html` is missing from the repo; the mCustomScrollbar plugin won't load, but the core 3D box interactions still work.
- `contact.php` requires a PHP runtime and a configured MTA to send mail. It is optional for development — the rest of the site works without PHP.
- There is no linter, test runner, or build tool configured in this project.
