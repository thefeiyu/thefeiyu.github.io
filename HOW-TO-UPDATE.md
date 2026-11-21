# Updating your site

All text lives in content.js. You rarely need to touch index.html, style.css, or app.js.

Add a project: in content.js, copy one whole { ... } block inside `projects: [ ... ]`,
paste it, and edit it. Give it a unique `slug`. Order in the list = order on the site.

Add photos: put them in assets/, then use "assets/photo.jpg" for `cover` or in a
section's `images: [{ src: "assets/photo.jpg", caption: "..." }]`. Keep images under ~500 KB.

New resume: replace assets/Feiyu_Wu_Resume.pdf (same file name) and update `resume` in content.js.

Bump `updated` at the top of content.js; it shows in the footer.

Preview: double-click index.html. Publish: commit and push to GitHub.
