const langToggleId = "lang-toggle";
const menuToggleId = "menu-toggle";
const mobileNavId = "mobile-nav";

const urlLang = new URLSearchParams(window.location.search).get("lang");
let lang = urlLang === "en" || urlLang === "zh"
  ? urlLang
  : localStorage.getItem("site-lang") === "en"
    ? "en"
    : "zh";
let dieAnim = 0;

function pageName() {
  return document.body.getAttribute("data-page") || "home";
}

function renderChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const page = pageName();
  const links = [
    ["index.html", "home", "nav.home"],
    ["work.html", "work", "nav.work"],
    ["projects.html", "projects", "nav.projects"],
    ["awards.html", "awards", "nav.awards"],
    ["about.html", "about", "nav.about"],
    ["contact.html", "contact", "nav.contact"],
  ];

  const localeSuffix = lang === "en" ? "?lang=en" : "";
  const navHtml = links
    .map(([href, id, key]) => {
      const active = id === page ? ' aria-current="page" class="active"' : "";
      return `<a href="${href}${localeSuffix}" data-i18n="${key}"${active}></a>`;
    })
    .join("");

  header.innerHTML = `
    <header class="site-header">
      <a class="brand" href="index.html${localeSuffix}">
        <span class="brand-die" aria-hidden="true"></span>
        <span class="brand-text">
          <span class="brand-name">Caesar Fan</span>
          <span class="brand-tag">CHIP · VERIFY</span>
        </span>
      </a>
      <nav class="nav" aria-label="Primary">${navHtml}</nav>
      <div class="header-actions">
        <button type="button" class="lang-toggle" id="${langToggleId}" aria-pressed="false" aria-label="Language">EN</button>
        <button type="button" class="menu-toggle" id="${menuToggleId}" aria-expanded="false" aria-controls="${mobileNavId}">
          <span data-i18n="nav.menu">Menu</span>
        </button>
      </div>
      <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
    </header>
    <div class="mobile-nav" id="${mobileNavId}" hidden>${navHtml}</div>
  `;

  footer.innerHTML = `
    <footer class="site-footer">
      <span data-i18n="footer.copy">Caesar Fan</span>
      <a href="#main" data-i18n="footer.top">Top</a>
    </footer>
  `;
}

function applyI18n() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && I18N[lang][key]) {
      node.textContent = I18N[lang][key];
    }
  });
  const langToggle = document.getElementById(langToggleId);
  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
    langToggle.setAttribute("aria-pressed", String(lang === "en"));
  }
  renderGallery();
  renderAwards();
  renderPath();
  renderProjects();
  document.querySelectorAll("a[href$='.html'], a[href*='.html?']").forEach((link) => {
    const url = new URL(link.href);
    if (url.origin !== window.location.origin) {
      return;
    }
    if (lang === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    link.href = `${url.pathname.split("/").pop() || "index.html"}${url.search}`;
  });
}

function renderGallery() {
  const root = document.getElementById("gallery");
  if (!root) {
    return;
  }
  root.replaceChildren(
    ...GALLERY.map((item) => {
      const article = document.createElement("article");
      const media = document.createElement("div");
      media.className = "media";
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.title[lang];
      img.loading = "lazy";
      const disclosure = document.createElement("span");
      disclosure.className = "media-disclosure";
      disclosure.textContent = I18N[lang]["media.illustration"];
      media.append(img, disclosure);
      const copy = document.createElement("div");
      copy.className = "copy";
      const tag = document.createElement("p");
      tag.className = "tag";
      tag.textContent = item.tag[lang];
      const h3 = document.createElement("h3");
      h3.textContent = item.title[lang];
      const p = document.createElement("p");
      p.textContent = item.body[lang];
      copy.append(tag, h3, p);
      article.append(media, copy);
      return article;
    }),
  );
}

function renderAwards() {
  const root = document.getElementById("award-gallery");
  if (!root) {
    return;
  }
  root.replaceChildren(
    ...AWARD_CARDS.map((item) => {
      const article = document.createElement("article");
      const bg = document.createElement("img");
      bg.className = "bg";
      bg.src = item.img;
      bg.alt = "";
      bg.loading = "lazy";
      const disclosure = document.createElement("span");
      disclosure.className = "media-disclosure";
      disclosure.textContent = I18N[lang]["media.illustration"];
      const shade = document.createElement("div");
      shade.className = "shade";
      const copy = document.createElement("div");
      copy.className = "copy";
      const year = document.createElement("div");
      year.className = "year";
      year.textContent = item.year;
      const h3 = document.createElement("h3");
      h3.textContent = item.title[lang];
      const p = document.createElement("p");
      p.textContent = item.body[lang];
      copy.append(year, h3, p);
      article.append(bg, shade, disclosure, copy);
      return article;
    }),
  );
}

function renderPath() {
  const root = document.getElementById("path-list");
  if (!root) {
    return;
  }
  root.replaceChildren(
    ...PATH.map((item) => {
      const li = document.createElement("li");
      const logoWrap = document.createElement("div");
      logoWrap.className = "institution-logo";
      const logo = document.createElement("img");
      logo.src = item.logo;
      logo.alt = item.logoAlt;
      logo.loading = "lazy";
      logoWrap.append(logo);
      const when = document.createElement("span");
      when.className = "when";
      when.textContent = item.when;
      const h3 = document.createElement("h3");
      h3.textContent = item.title[lang];
      const p = document.createElement("p");
      p.textContent = item.body[lang];
      li.append(logoWrap, when, h3, p);
      return li;
    }),
  );
}

function renderProjects() {
  const root = document.getElementById("project-list");
  if (!root) {
    return;
  }
  root.replaceChildren(
    ...PROJECTS.map((item) => {
      const a = document.createElement("a");
      a.className = "project-card";
      a.href = item.url;
      a.rel = "noopener noreferrer";
      a.target = "_blank";
      const meta = document.createElement("div");
      meta.className = "project-meta";
      meta.innerHTML = `<span>${item.name}</span><span>${item.lang}</span>`;
      const h3 = document.createElement("h3");
      h3.textContent = item.title[lang];
      const p = document.createElement("p");
      p.textContent = item.body[lang];
      a.append(meta, h3, p);
      return a;
    }),
  );
}

function sizeDieCanvas() {
  const dieCanvas = document.getElementById("die-canvas");
  if (!dieCanvas) {
    return;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const css = Math.min(window.innerWidth * 0.72, 720);
  dieCanvas.style.width = `${css}px`;
  dieCanvas.style.height = `${css}px`;
  dieCanvas.width = Math.floor(css * dpr);
  dieCanvas.height = Math.floor(css * dpr);
}

function drawDie(time) {
  const dieCanvas = document.getElementById("die-canvas");
  if (!dieCanvas) {
    return;
  }
  const ctx = dieCanvas.getContext("2d");
  if (!ctx) {
    return;
  }
  const { width, height } = dieCanvas;
  ctx.clearRect(0, 0, width, height);
  const cols = 14;
  const rows = 14;
  const pad = width * 0.08;
  const cellW = (width - pad * 2) / cols;
  const cellH = (height - pad * 2) / rows;
  const tSec = time * 0.001;

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const px = pad + x * cellW;
      const py = pad + y * cellH;
      const wave = Math.sin(x * 0.55 + y * 0.35 + tSec * 1.4);
      const edge = Math.hypot(x - cols / 2, y - rows / 2) / (cols / 2);
      if (edge > 1.05) {
        continue;
      }
      const alpha = 0.08 + Math.max(0, wave) * 0.22 * (1 - edge * 0.45);
      ctx.fillStyle = `rgba(30, 200, 184, ${alpha})`;
      ctx.fillRect(px + 2, py + 2, cellW - 4, cellH - 4);
      if ((x + y) % 5 === 0) {
        ctx.strokeStyle = `rgba(58, 160, 255, ${0.12 + Math.max(0, wave) * 0.2})`;
        ctx.strokeRect(px + 3, py + 3, cellW - 6, cellH - 6);
      }
    }
  }

  ctx.strokeStyle = "rgba(30, 200, 184, 0.35)";
  ctx.lineWidth = 2;
  const scanY = pad + ((tSec * 80) % (height - pad * 2));
  ctx.beginPath();
  ctx.moveTo(pad, scanY);
  ctx.lineTo(width - pad, scanY);
  ctx.stroke();
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  nodes.forEach((node) => io.observe(node));
}

function updateProgress() {
  const el = document.getElementById("scroll-progress");
  if (!el) {
    return;
  }
  const max = document.documentElement.scrollHeight - window.innerHeight;
  el.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}

function bindChrome() {
  const langToggle = document.getElementById(langToggleId);
  const menuToggle = document.getElementById(menuToggleId);
  const mobileNav = document.getElementById(mobileNavId);

  langToggle?.addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("site-lang", lang);
    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url);
    applyI18n();
  });

  menuToggle?.addEventListener("click", () => {
    const open = mobileNav.hasAttribute("hidden");
    if (open) {
      mobileNav.removeAttribute("hidden");
    } else {
      mobileNav.setAttribute("hidden", "");
    }
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderChrome();
applyI18n();
bindChrome();
setupReveal();
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", sizeDieCanvas);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
sizeDieCanvas();
function loopDie(time) {
  drawDie(time);
  if (!reduceMotion) {
    dieAnim = requestAnimationFrame(loopDie);
  }
}
if (document.getElementById("die-canvas")) {
  dieAnim = requestAnimationFrame(loopDie);
}
