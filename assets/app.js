const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const scrollProgress = document.getElementById("scroll-progress");
const dieCanvas = document.getElementById("die-canvas");
const waferCanvas = document.getElementById("wafer");
const inspectMeta = document.getElementById("inspect-meta");
const inspectTitle = document.getElementById("inspect-title");
const inspectBody = document.getElementById("inspect-body");
const inspectChecks = document.getElementById("inspect-checks");

let lang = "zh";
let selectedId = "noc";
let hoverId = null;
let dieAnim = 0;

function t(key) {
  return I18N[lang][key] ?? key;
}

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
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderAwards();
  renderInspect();
  drawWafer();
}

function renderExperience() {
  const root = document.getElementById("timeline");
  root.replaceChildren(
    ...EXPERIENCE.map((job) => {
      const li = document.createElement("li");
      const head = document.createElement("div");
      head.className = "timeline-head";
      const meta = document.createElement("span");
      meta.className = "timeline-meta";
      meta.textContent = `${job.period[lang]} · ${job.org[lang]}`;
      head.append(meta);
      const h3 = document.createElement("h3");
      h3.textContent = job.role[lang];
      const ul = document.createElement("ul");
      job.points[lang].forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        ul.append(item);
      });
      li.append(head, h3, ul);
      return li;
    }),
  );
}

function renderProjects() {
  const root = document.getElementById("project-grid");
  root.replaceChildren(
    ...PROJECTS.map((project) => {
      const article = document.createElement("article");
      const year = document.createElement("p");
      year.className = "project-year";
      year.textContent = project.year;
      const h3 = document.createElement("h3");
      h3.textContent = project.title[lang];
      const p = document.createElement("p");
      p.textContent = project.body[lang];
      article.append(year, h3, p);
      return article;
    }),
  );
}

function renderSkills() {
  const root = document.getElementById("skill-bands");
  root.replaceChildren(
    ...SKILLS.map((skill) => {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = skill.title[lang];
      const p = document.createElement("p");
      p.textContent = skill.items;
      article.append(h3, p);
      return article;
    }),
  );
}

function renderEducation() {
  const root = document.getElementById("edu");
  root.replaceChildren(
    ...EDUCATION.map((item) => {
      const article = document.createElement("article");
      const period = document.createElement("p");
      period.className = "edu-period";
      period.textContent = item.period;
      const h3 = document.createElement("h3");
      h3.textContent = item.school[lang];
      const note = document.createElement("p");
      note.textContent = item.note[lang];
      article.append(period, h3, note);
      return article;
    }),
  );
}

function renderAwards() {
  const root = document.getElementById("award-list");
  root.replaceChildren(
    ...AWARDS.map((award) => {
      const li = document.createElement("li");
      li.textContent = award[lang];
      return li;
    }),
  );
}

function stackCopy(item) {
  return item[lang];
}

function renderInspect() {
  const item = STACK.find((entry) => entry.id === selectedId) ?? STACK[0];
  const copy = stackCopy(item);
  inspectMeta.textContent = copy.meta;
  inspectTitle.textContent = copy.title;
  inspectBody.textContent = copy.body;
  inspectChecks.replaceChildren(
    ...copy.checks.map((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      return li;
    }),
  );
}

function selectStack(id) {
  selectedId = id;
  renderInspect();
  drawWafer();
}

function drawWafer() {
  const ctx = waferCanvas.getContext("2d");
  if (!ctx) {
    return;
  }
  const { width, height } = waferCanvas;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.46;
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  ctx.arc(cx, cy, radius + 18, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(30, 200, 184, 0.18)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, radius + 8, 0, Math.PI * 2);
  ctx.fillStyle = "#0a1018";
  ctx.fill();
  ctx.strokeStyle = "rgba(138, 151, 171, 0.35)";
  ctx.lineWidth = 1;
  ctx.stroke();

  const n = STACK.length;
  STACK.forEach((item, index) => {
    const start = -Math.PI / 2 + (index / n) * Math.PI * 2;
    const end = -Math.PI / 2 + ((index + 1) / n) * Math.PI * 2;
    const active = item.id === selectedId;
    const hovered = item.id === hoverId;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.globalAlpha = active ? 0.92 : hovered ? 0.72 : 0.42;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = active ? "#e7eef8" : "rgba(6, 9, 15, 0.75)";
    ctx.lineWidth = active ? 2 : 1;
    ctx.stroke();

    const mid = (start + end) / 2;
    const tx = cx + Math.cos(mid) * radius * 0.62;
    const ty = cy + Math.sin(mid) * radius * 0.62;
    ctx.fillStyle = "#061018";
    ctx.font = "600 13px ui-monospace, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(item.label, tx, ty);
  });

  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.22, 0, Math.PI * 2);
  ctx.fillStyle = "#06090f";
  ctx.fill();
  ctx.strokeStyle = varCyanStroke();
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = "#1ec8b8";
  ctx.font = "600 11px ui-monospace, monospace";
  ctx.fillText("Si", cx, cy);
}

function varCyanStroke() {
  return "rgba(30, 200, 184, 0.7)";
}

function waferHit(px, py) {
  const { width, height } = waferCanvas;
  const cx = width / 2;
  const cy = height / 2;
  const dx = px - cx;
  const dy = py - cy;
  const dist = Math.hypot(dx, dy);
  const radius = Math.min(width, height) * 0.46;
  if (dist < radius * 0.22 || dist > radius) {
    return null;
  }
  let angle = Math.atan2(dy, dx) + Math.PI / 2;
  if (angle < 0) {
    angle += Math.PI * 2;
  }
  const index = Math.floor((angle / (Math.PI * 2)) * STACK.length) % STACK.length;
  return STACK[index];
}

function waferPoint(event) {
  const bounds = waferCanvas.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * waferCanvas.width,
    y: ((event.clientY - bounds.top) / bounds.height) * waferCanvas.height,
  };
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

function animateCounters() {
  const nodes = document.querySelectorAll("[data-count]");
  nodes.forEach((node) => {
    const target = Number(node.getAttribute("data-count"));
    const suffix = node.getAttribute("data-suffix") ?? "";
    const start = performance.now();
    const duration = 1100;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - p) ** 3;
      node.textContent = `${Math.round(target * eased)}${suffix}`;
      if (p < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  });
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

waferCanvas.addEventListener("mousemove", (event) => {
  const point = waferPoint(event);
  const hit = waferHit(point.x, point.y);
  hoverId = hit ? hit.id : null;
  waferCanvas.style.cursor = hit ? "pointer" : "default";
  drawWafer();
});

waferCanvas.addEventListener("mouseleave", () => {
  hoverId = null;
  drawWafer();
});

waferCanvas.addEventListener("click", (event) => {
  const point = waferPoint(event);
  const hit = waferHit(point.x, point.y);
  if (hit) {
    selectStack(hit.id);
  }
});

waferCanvas.tabIndex = 0;
waferCanvas.addEventListener("keydown", (event) => {
  const index = STACK.findIndex((item) => item.id === selectedId);
  if (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectStack(STACK[(index + 1) % STACK.length].id);
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    selectStack(STACK[(index - 1 + STACK.length) % STACK.length].id);
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", () => {
  sizeDieCanvas();
});

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
animateCounters();
updateProgress();
