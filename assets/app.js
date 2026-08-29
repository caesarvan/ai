const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const canvas = document.getElementById("floorplan");
const inspectMeta = document.getElementById("inspect-meta");
const inspectTitle = document.getElementById("inspect-title");
const inspectBody = document.getElementById("inspect-body");
const inspectChecks = document.getElementById("inspect-checks");

let lang = "zh";
let selectedId = "sm";
let hoverId = null;

function applyI18n() {
  const table = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && table[key]) {
      node.textContent = table[key];
    }
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中文";
  langToggle.setAttribute("aria-pressed", String(lang === "en"));
  renderInspect();
  drawFloorplan();
}

function domainCopy(domain) {
  return domain[lang];
}

function renderInspect() {
  const domain = DOMAINS.find((item) => item.id === selectedId) ?? DOMAINS[0];
  const copy = domainCopy(domain);
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

function layoutRect(domain) {
  const pad = 10;
  const width = canvas.width - pad * 2;
  const height = canvas.height - pad * 2;
  return {
    x: pad + domain.x * width,
    y: pad + domain.y * height,
    w: domain.w * width,
    h: domain.h * height,
  };
}

function hitTest(px, py) {
  for (let i = DOMAINS.length - 1; i >= 0; i -= 1) {
    const rect = layoutRect(DOMAINS[i]);
    if (px >= rect.x && px <= rect.x + rect.w && py >= rect.y && py <= rect.y + rect.h) {
      return DOMAINS[i];
    }
  }
  return null;
}

function drawFloorplan() {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#161810";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(196, 120, 58, 0.25)";
  ctx.lineWidth = 1;
  for (let x = 18; x < canvas.width; x += 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  DOMAINS.forEach((domain) => {
    const rect = layoutRect(domain);
    const active = domain.id === selectedId;
    const hovered = domain.id === hoverId;
    ctx.fillStyle = domain.color;
    ctx.globalAlpha = active ? 0.92 : hovered ? 0.78 : 0.55;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = active ? "#f2e6d4" : "rgba(12, 13, 10, 0.65)";
    ctx.lineWidth = active ? 2 : 1;
    ctx.strokeRect(rect.x + 0.5, rect.y + 0.5, rect.w - 1, rect.h - 1);

    ctx.fillStyle = "#10120c";
    ctx.font = "500 12px ui-monospace, monospace";
    ctx.fillText(domain.id.toUpperCase(), rect.x + 10, rect.y + 22);
  });
}

function canvasPoint(event) {
  const bounds = canvas.getBoundingClientRect();
  const scaleX = canvas.width / bounds.width;
  const scaleY = canvas.height / bounds.height;
  return {
    x: (event.clientX - bounds.left) * scaleX,
    y: (event.clientY - bounds.top) * scaleY,
  };
}

function selectDomain(id) {
  selectedId = id;
  renderInspect();
  drawFloorplan();
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

canvas.addEventListener("mousemove", (event) => {
  const point = canvasPoint(event);
  const hit = hitTest(point.x, point.y);
  hoverId = hit ? hit.id : null;
  canvas.style.cursor = hit ? "pointer" : "default";
  drawFloorplan();
});

canvas.addEventListener("mouseleave", () => {
  hoverId = null;
  drawFloorplan();
});

canvas.addEventListener("click", (event) => {
  const point = canvasPoint(event);
  const hit = hitTest(point.x, point.y);
  if (hit) {
    selectDomain(hit.id);
  }
});

canvas.tabIndex = 0;
canvas.addEventListener("keydown", (event) => {
  const index = DOMAINS.findIndex((item) => item.id === selectedId);
  if (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectDomain(DOMAINS[(index + 1) % DOMAINS.length].id);
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    selectDomain(DOMAINS[(index - 1 + DOMAINS.length) % DOMAINS.length].id);
  }
});

applyI18n();
