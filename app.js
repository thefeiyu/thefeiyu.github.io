/* Renders everything in content.js. You shouldn't need to edit this file to add projects. */
(function () {
  "use strict";
  const S = window.SITE;
  const page = document.getElementById("page");
  const dir = document.getElementById("dir");
  const pathEl = document.getElementById("path");
  const block = document.getElementById("titleblock");
  const dirToggle = document.getElementById("dirToggle");
  const themeToggle = document.getElementById("themeToggle");

  const list = (arr, fn) => (arr || []).map(fn).join("");
  const ext = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

  /* ---------- the "files" on the site ---------- */
  const views = [
    { id: "readme", file: "readme.md", title: S.name, render: readme },
    { id: "resume", file: "resume.md", title: "Resume", render: resume },
    { id: "projects", file: "projects/", title: "Projects", render: projectIndex },
    ...S.projects.map((p) => ({
      id: "projects/" + p.slug, file: "projects/" + p.slug + ".md",
      title: p.title, parent: "projects", render: () => project(p),
    })),
    { id: "publications", file: "publications.md", title: "Publications", render: publications },
    { id: "contact", file: "contact.md", title: "Contact", render: contact },
  ];

  /* ---------- directory tree ---------- */
  function line(prefix, v, label) {
    return `<a href="#${v.id}" data-id="${v.id}"><span class="branch" aria-hidden="true">${prefix}</span>${label || v.file}</a>`;
  }
  function buildDir() {
    const top = views.filter((v) => !v.parent);
    let html = `<div class="tree-root">~/</div>`;
    top.forEach((v, i) => {
      const last = i === top.length - 1;
      html += line(last ? "└── " : "├── ", v);
      if (v.id === "projects") {
        const kids = views.filter((k) => k.parent === "projects");
        kids.forEach((k, j) => {
          const pre = (last ? "    " : "│   ") + (j === kids.length - 1 ? "└── " : "├── ");
          html += line(pre, k, k.file.split("/")[1]);
        });
      }
    });
    dir.innerHTML = html;
  }

  /* ---------- shared pieces ---------- */
  function linkRow() {
    const L = S.links;
    return `<ul class="links">
      <li><a class="btn" href="#resume">Resume</a></li>
      <li><a class="btn" href="mailto:${S.email}">Email</a></li>
      ${L.github ? `<li>${ext(L.github, "GitHub").replace("<a ", '<a class="btn" ')}</li>` : ""}
      ${L.linkedin ? `<li>${ext(L.linkedin, "LinkedIn").replace("<a ", '<a class="btn" ')}</li>` : ""}
    </ul>`;
  }
  function projectList(items) {
    return `<ul class="proj-list">${list(items, (p) => `
      <li><a class="proj-row${p.cover ? " has-thumb" : ""}" href="#projects/${p.slug}">
        ${p.cover ? `<img src="${p.cover}" alt="" loading="lazy">` : ""}
        <span class="proj-text">
          <span class="proj-title">${p.title}</span>
          <span class="meta">${p.dates}${p.status ? " / " + p.status : ""}</span>
          <span class="proj-summary">${p.summary}</span>
        </span>
      </a></li>`)}</ul>`;
  }
  function pubList() {
    return `<ol class="pubs">${list(S.publications, (p) => `
      <li><span class="pub-title">${p.title}</span>
      <span class="pub-authors">${p.authors.replace(S.authorName, `<strong>${S.authorName}</strong>`)}</span>
      <span class="meta">${p.venue}</span>${p.doi ? ` ${ext("https://doi.org/" + p.doi, "doi:" + p.doi)}` : ""}</li>`)}</ol>`;
  }
  function entry(title, place, sub, dates, bullets) {
    return `<section class="entry">
      <div class="entry-row"><h3>${title}</h3><span class="meta">${place || ""}</span></div>
      <div class="entry-row"><span class="entry-sub">${sub || ""}</span><span class="meta">${dates || ""}</span></div>
      ${bullets && bullets.length ? `<ul>${list(bullets, (b) => `<li>${b}</li>`)}</ul>` : ""}
    </section>`;
  }

  /* ---------- views ---------- */
  function readme() {
    const featured = S.projects.filter((p) => p.featured);
    return `
      <h1>${S.name}</h1>
      <p class="lede">${S.tagline}</p>
      <h2>about</h2>
      ${list(S.about, (p) => `<p>${p}</p>`)}
      ${featured.length ? `<h2>featured projects</h2>${projectList(featured)}<p><a href="#projects">See all projects</a></p>` : ""}
      <h2>links</h2>
      ${linkRow()}`;
  }

  function resume() {
    const R = S.resume;
    return `
      <div class="resume-head">
        <h1>resume</h1>
        <a class="btn btn-primary" href="${S.resumePdf}" download>Download PDF</a>
      </div>
      <p class="meta">${S.email} / ${S.location}</p>
      <h2>education</h2>
      ${list(R.education, (e) => entry(e.school, e.location, e.detail, e.dates, e.bullets))}
      <h2>experience</h2>
      ${list(R.experience, (e) => entry(e.org, e.location, e.role, e.dates, e.bullets))}
      <h2>skills</h2>
      <dl class="skills">${list(R.skills, (s) => `<dt>${s.group}</dt><dd>${s.items.join(", ")}</dd>`)}</dl>
      <h2>publications</h2>
      ${pubList()}
      <h2>activities</h2>
      ${list(R.activities, (a) => entry(a.org, a.location, a.role, a.dates, a.bullets))}
      <h2>interests</h2>
      <p>${R.interests}</p>`;
  }

  function projectIndex() {
    return `<h1>projects</h1><p class="lede">${S.projectsIntro}</p>${projectList(S.projects)}`;
  }

  function project(p) {
    let n = 0;
    const figure = (im) => `<figure>
      <img src="${im.src}" alt="${im.alt || im.caption || ""}" loading="lazy">
      ${im.caption ? `<figcaption>fig. ${++n}: ${im.caption}</figcaption>` : ""}
    </figure>`;
    const i = S.projects.indexOf(p);
    const prev = S.projects[i - 1], next = S.projects[i + 1];
    return `
      <p class="crumb"><a href="#projects">projects/</a></p>
      <h1>${p.title}</h1>
      <p class="meta">${[p.dates, p.status, p.context].filter(Boolean).join(" / ")}</p>
      ${p.tags && p.tags.length ? `<ul class="tags">${list(p.tags, (t) => `<li>${t}</li>`)}</ul>` : ""}
      ${p.cover ? `<figure><img src="${p.cover}" alt="${p.coverAlt || ""}"></figure>` : ""}
      <p class="lede">${p.summary}</p>
      ${list(p.sections, (s) => `
        <h2>${s.heading}</h2>
        ${list(s.paragraphs, (x) => `<p>${x}</p>`)}
        ${s.bullets ? `<ul>${list(s.bullets, (b) => `<li>${b}</li>`)}</ul>` : ""}
        ${list(s.images, figure)}`)}
      ${p.log && p.log.length ? `<h2>build log</h2><dl class="log">${list(p.log, (l) => `<dt>${l.date}</dt><dd>${l.text}</dd>`)}</dl>` : ""}
      ${p.links && p.links.length ? `<h2>links</h2><ul>${list(p.links, (l) => `<li>${ext(l.url, l.label)}</li>`)}</ul>` : ""}
      <nav class="pager" aria-label="More projects">
        <span>${prev ? `<a href="#projects/${prev.slug}">← ${prev.title}</a>` : ""}</span>
        <span>${next ? `<a href="#projects/${next.slug}">${next.title} →</a>` : ""}</span>
      </nav>`;
  }

  function publications() {
    return `<h1>publications</h1>${pubList()}`;
  }

  function contact() {
    return `<h1>contact</h1>
      <p class="lede">${S.contactNote}</p>
      <p><a href="mailto:${S.email}">${S.email}</a></p>
      <p class="meta">${S.location}</p>
      ${linkRow()}`;
  }

  /* ---------- title block (footer) ---------- */
  function titleBlock(v, idx) {
    const cells = [["drawn by", S.name], ["title", v.file], ["rev", S.updated], ["sheet", `${idx + 1} of ${views.length}`]];
    return list(cells, ([k, val]) => `<div class="tb-cell"><span class="tb-label">${k}</span><span class="tb-value">${val}</span></div>`);
  }

  /* ---------- routing ---------- */
  function route(moveFocus) {
    const id = decodeURIComponent(location.hash.slice(1)) || "readme";
    let idx = views.findIndex((v) => v.id === id);
    if (idx < 0) idx = 0;
    const v = views[idx];
    page.innerHTML = v.render();
    pathEl.textContent = "~/" + v.file;
    document.title = v.id === "readme" ? S.name : `${v.title} | ${S.name}`;
    dir.querySelectorAll("a").forEach((a) =>
      a.dataset.id === v.id ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
    block.innerHTML = titleBlock(v, idx);
    closeDir();
    if (moveFocus) { window.scrollTo(0, 0); page.focus({ preventScroll: true }); }
  }

  /* ---------- directory toggle (mobile) ---------- */
  function closeDir() {
    dir.classList.remove("open");
    dirToggle.setAttribute("aria-expanded", "false");
    dirToggle.textContent = "show directory";
  }
  dirToggle.addEventListener("click", () => {
    const open = !dir.classList.contains("open");
    dir.classList.toggle("open", open);
    dirToggle.setAttribute("aria-expanded", String(open));
    dirToggle.textContent = open ? "hide directory" : "show directory";
  });

  /* ---------- theme ---------- */
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    const other = t === "dark" ? "light" : "dark";
    themeToggle.textContent = other;
    themeToggle.setAttribute("aria-label", `Switch to ${other} theme`);
  }
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  setTheme(saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  themeToggle.addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(t);
    try { localStorage.setItem("theme", t); } catch (e) {}
  });

  document.getElementById("skip").addEventListener("click", (e) => { e.preventDefault(); page.focus(); });

  buildDir();
  route(false);
  window.addEventListener("hashchange", () => route(true));
})();
