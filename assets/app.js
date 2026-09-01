const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const scrollProgress = document.getElementById("scroll-progress");
const dieCanvas = document.getElementById("die-canvas");

let lang = "zh";
let dieAnim = 0;

function applyI18n() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && I18N[lang][key]) {
      node.textContent = I18N[lang][key];
    }
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中文";
  langToggle.setAttribute("aria-pressed", String(lang === "en"));
  renderGallery();
  renderAwards();
  renderPath();
}

function renderGallery() {
  const root = document.getElementById("gallery");
  root.replaceChildren(
    ...GALLERY.map((item) => {
      const article = document.createElement("article");
      const media = document.createElement("div");
      media.className = "media";
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.title[lang];
      img.loading = "lazy";
      const chip = document.createElement("img");
      chip.className = "chip";
      chip.src = item.logo;
      chip.alt = "";
      media.append(img, chip);
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
  root.replaceChildren(
    ...AWARD_CARDS.map((item) => {
      const article = document.createElement("article");
      const bg = document.createElement("img");
      bg.className = "bg";
      bg.src = item.img;
      bg.alt = "";
      bg.loading = "lazy";
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
      article.append(bg, shade, copy);
      return article;
    }),
  );
}

function renderPath() {
  const root = document.getElementById("path-track");
  root.replaceChildren(
    ...PATH.map((item) => {
      const article = document.createElement("article");
      const logo = document.createElement("img");
      logo.src = item.logo;
      logo.alt = "";
      const when = document.createElement("p");
      when.className = "when";
      when.textContent = item.when;
      const h3 = document.createElement("h3");
      h3.textContent = item.title[lang];
      const p = document.createElement("p");
      p.textContent = item.body[lang];
      article.append(logo, when, h3, p);
      return article;
    }),
  );
}

function sizeDieCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const css = Math.min(window.innerWidth * 0.72, 720);
  dieCanvas.style.width = `${css}px`;
  dieCanvas.style.height = `${css}px`;
  dieCanvas.width = Math.floor(css * dpr);
  dieCanvas.height = Math.floor(css * dpr);
}

function drawDie(time) {
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
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollProgress.style.width = `${ratio}%`;
}

langToggle.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  applyI18n();
});

menuToggle.addEventListener("click", () => {
  const open = mobileNav.hasAttribute("hidden");
  if (open) {
    mobileNav.removeAttribute("hidden");
  } else {
    mobileNav.setAttribute("hidden", "");
  }
  menuToggle.setAttribute("aria-expanded", String(open));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

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
dieAnim = requestAnimationFrame(loopDie);

applyI18n();
setupReveal();
updateProgress();
