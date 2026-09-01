const I18N = {
  zh: {
    "nav.home": "首页",
    "nav.work": "工作",
    "nav.projects": "项目",
    "nav.awards": "荣誉",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "home.lede": "做芯片验证与验证工程：NPU 组网、流片前的多层验证环境，以及能跑起来的平台与工具。",
    "home.cta.work": "看工作面",
    "home.cta.projects": "GitHub 项目",
    "home.overview.title": "站点怎么读",
    "home.card.work.title": "组网 · 验证环境 · 平台",
    "home.card.work.body": "用图说明做过的系统面，不贴简历条目。",
    "home.card.projects.title": "公开仓库",
    "home.card.projects.body": "拓扑编辑器、工具脚本、研究原型等。",
    "home.card.awards.title": "交付被看见的结果",
    "home.card.awards.body": "实验室、自动化与质量相关认可。",
    "home.card.about.title": "路径很短",
    "home.card.about.body": "学校与工作阶段用一句话带过。",
    "work.kicker": "Work",
    "work.title": "工作面",
    "work.lede":
      "下面是几块实际做过的系统面。用「流片前验证」指：芯片还没流片时，在 FPGA 原型、硬件仿真器和系统模型上把功能与系统问题提前抓出来。",
    "work.note.title": "名词怎么读",
    "work.note.1": "流片前验证：芯片尚未流片、硅片还没回来之前，在模型与原型环境上做的验证。",
    "work.note.2": "FPGA 原型：设计烧到 FPGA 板上跑，偏真实时序与软件联调。",
    "work.note.3": "硬件仿真器（如 Palladium）：大规模 RTL 加速，适合复杂并发与长路径。",
    "work.note.4": "系统模型（FastModel / QEMU 等）：更早、更快地评估拓扑与软件路径。",
    "projects.kicker": "GitHub",
    "projects.title": "公开项目",
    "projects.lede": "选自 github.com/caesarvan 的自有仓库（不含 fork 镜像）。",
    "awards.kicker": "Awards",
    "awards.title": "荣誉",
    "awards.lede": "只写结果本身，不贴未经授权的机构商标图。",
    "about.kicker": "About",
    "about.title": "关于",
    "about.lede": "Caesar Fan。关注芯片验证、系统级场景，以及把验证做成可维护的工程系统。",
    "about.focus.title": "现在在做什么",
    "about.focus.body":
      "AI 加速芯片相关的组网与系统验证，搭建流片前的多层验证环境，并把自动化、可观测性和 Debug 工具做成日常能用的平台。",
    "about.path.title": "路径",
    "contact.kicker": "Contact",
    "contact.title": "联系",
    "contact.lede": "通过 GitHub 即可。本站不展示电话与真名。",
    "footer.copy": "Caesar Fan",
    "footer.top": "回到顶部",
  },
  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.projects": "Projects",
    "nav.awards": "Awards",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "home.lede":
      "Chip validation and validation engineering: NPU networking, multi-layer environments before tape-out, and platforms that actually run.",
    "home.cta.work": "Work surfaces",
    "home.cta.projects": "GitHub projects",
    "home.overview.title": "How to read this site",
    "home.card.work.title": "Networking · environments · platforms",
    "home.card.work.body": "Visual surfaces of systems built — not a resume dump.",
    "home.card.projects.title": "Public repos",
    "home.card.projects.body": "Topology editor, tooling scripts, research prototypes.",
    "home.card.awards.title": "Recognized delivery",
    "home.card.awards.body": "Lab, automation, and quality outcomes.",
    "home.card.about.title": "A short path",
    "home.card.about.body": "School and work stages in one line each.",
    "work.kicker": "Work",
    "work.title": "Work surfaces",
    "work.lede":
      "A few systems I actually shipped. “Validation before tape-out” means catching functional and system issues on FPGA prototypes, hardware emulators, and system models — before silicon returns.",
    "work.note.title": "Terms, plainly",
    "work.note.1": "Validation before tape-out: verification before wafers exist — not vague shorthand.",
    "work.note.2": "FPGA prototype: design on FPGA boards for near-real timing and software co-debug.",
    "work.note.3": "Hardware emulator (e.g. Palladium): accelerated large-scale RTL for concurrency and long paths.",
    "work.note.4": "System models (FastModel / QEMU, etc.): earlier, faster topology and software-path evaluation.",
    "projects.kicker": "GitHub",
    "projects.title": "Public projects",
    "projects.lede": "Selected own repos from github.com/caesarvan (no forks).",
    "awards.kicker": "Awards",
    "awards.title": "Awards",
    "awards.lede": "Outcomes only — no unauthorized brand marks.",
    "about.kicker": "About",
    "about.title": "About",
    "about.lede": "Caesar Fan. Chip validation, system scenarios, and validation as maintainable engineering systems.",
    "about.focus.title": "Focus now",
    "about.focus.body":
      "Networking and system validation for AI accelerators, multi-layer environments before tape-out, and platforms for automation, observability, and debug.",
    "about.path.title": "Path",
    "contact.kicker": "Contact",
    "contact.title": "Contact",
    "contact.lede": "GitHub is enough. No phone number and no legal name on this site.",
    "footer.copy": "Caesar Fan",
    "footer.top": "Back to top",
  },
};

const GALLERY = [
  {
    img: "assets/img/work_supernode.jpg",
    tag: { zh: "组网", en: "Networking" },
    title: {
      zh: "NPU 超节点组网验证",
      en: "NPU super-node networking validation",
    },
    body: {
      zh: "多芯片高速互连与超节点拓扑：接口约定、场景映射、压力与并发交叉下的收敛。",
      en: "Multi-chip high-speed interconnect and super-node topologies: interfaces, scenario mapping, stress and concurrency convergence.",
    },
  },
  {
    img: "assets/img/work_presi.jpg",
    tag: { zh: "流片前验证环境", en: "Pre-tape-out environments" },
    title: {
      zh: "FPGA · 硬件仿真器 · 系统模型",
      en: "FPGA · emulator · system models",
    },
    body: {
      zh: "三层环境分工：板上原型联调、大规模 RTL 加速、早期拓扑与软件路径评估。",
      en: "Three layers: board prototypes, large-scale RTL acceleration, early topology and software-path evaluation.",
    },
  },
  {
    img: "assets/img/work_platform.jpg",
    tag: { zh: "平台", en: "Platform" },
    title: {
      zh: "验证平台与精确回归",
      en: "Validation platform & precise regression",
    },
    body: {
      zh: "自动化执行、按变更选最小回归集、性能与负载可观测、寄存器与 Debug 数据贯通。",
      en: "Automated execution, change-driven minimal regressions, performance/load observability, register and debug data in one loop.",
    },
  },
  {
    img: "assets/img/work_debug.jpg",
    tag: { zh: "Debug", en: "Debug" },
    title: {
      zh: "多路径定位与可观测性",
      en: "Multi-path localization & observability",
    },
    body: {
      zh: "把寄存器访问、轨迹、性能计数和压测观察叠进同一套定位路径，而不是事后补工具。",
      en: "Register access, traces, performance counters, and stress observability on one localization path — not afterthought tools.",
    },
  },
];

const AWARD_CARDS = [
  {
    img: "assets/img/award_lab.jpg",
    year: "2025",
    title: {
      zh: "计算战役相关总裁奖",
      en: "Computing campaign president-level award",
    },
    body: {
      zh: "液冷验证实验室、自研自动化框架、在线芯片工具服务。",
      en: "Liquid-cooling validation lab, in-house automation, online chip tooling service.",
    },
  },
  {
    img: "assets/img/award_plaque.jpg",
    year: "2023",
    title: {
      zh: "研发工具装备奖",
      en: "R&D tools & equipment award",
    },
    body: {
      zh: "需求—设计—验证链路的数字化改进。",
      en: "Digitizing the requirement–design–validation chain.",
    },
  },
  {
    img: "assets/img/award_plaque.jpg",
    year: "2023",
    title: {
      zh: "质量相关表彰",
      en: "Quality recognition",
    },
    body: {
      zh: "调度模型高质量交付，支撑 Debug 与问题收敛。",
      en: "High-quality scheduler model delivery supporting debug and issue closure.",
    },
  },
];

const PATH = [
  {
    when: "2017 – 2021",
    title: { zh: "本科 · 信息工程", en: "B.Eng. · Information Engineering" },
    body: { zh: "电路、组成与编程底座。", en: "Circuits, computer organization, programming base." },
  },
  {
    when: "2021 – 2022",
    title: { zh: "硕士 · 电气与计算机工程", en: "M.Eng. · Electrical & Computer Engineering" },
    body: { zh: "半导体与系统方向课程。", en: "Semiconductor and systems coursework." },
  },
  {
    when: "2022 – 2024",
    title: { zh: "基带芯片验证", en: "Baseband chip validation" },
    body: { zh: "调度子系统与原型验证。", en: "Scheduler subsystem and prototyping validation." },
  },
  {
    when: "2024 – now",
    title: { zh: "AI 加速芯片验证与平台", en: "AI-accelerator validation & platforms" },
    body: { zh: "组网、流片前环境与验证工程化。", en: "Networking, pre-tape-out environments, validation engineering." },
  },
];

const PROJECTS = [
  {
    name: "ucluster",
    lang: "TypeScript",
    url: "https://github.com/caesarvan/ucluster",
    title: { zh: "网络拓扑图编辑器", en: "Network topology editor" },
    body: {
      zh: "React + ReactFlow：设备/端口、连线、自动布局、导入导出与主题。",
      en: "React + ReactFlow: devices/ports, links, auto-layout, import/export, themes.",
    },
  },
  {
    name: "NUS_Medical_Care",
    lang: "Python",
    url: "https://github.com/caesarvan/NUS_Medical_Care",
    title: { zh: "BLE 姿态采集与识别", en: "BLE posture sensing & recognition" },
    body: {
      zh: "nRF52810 躯干运动采集 → iOS / Firebase；含多种机器学习与 CoreML 路径。",
      en: "nRF52810 trunk-motion sensing → iOS / Firebase; multiple ML models and CoreML path.",
    },
  },
  {
    name: "hello_boss",
    lang: "Python",
    url: "https://github.com/caesarvan/hello_boss",
    title: { zh: "招聘筛选自动化脚本", en: "Recruiting filter automation" },
    body: {
      zh: "按院校/公司/职位等条件过滤，并对命中对象自动打招呼（自用脚本）。",
      en: "Filter by school/company/role and auto-greet matches (personal tooling).",
    },
  },
  {
    name: "AlphaZero-Gomoku_with_forbidden_rule",
    lang: "Python",
    url: "https://github.com/caesarvan/AlphaZero-Gomoku_with_forbidden_rule",
    title: { zh: "带禁手的 AlphaZero 五子棋", en: "AlphaZero Gomoku with forbidden moves" },
    body: {
      zh: "自博弈强化学习原型，规则侧加入禁手约束。",
      en: "Self-play RL prototype with forbidden-move constraints.",
    },
  },
  {
    name: "remote_disk_on_win",
    lang: "—",
    url: "https://github.com/caesarvan/remote_disk_on_win",
    title: { zh: "Windows 远程磁盘相关", en: "Windows remote-disk utilities" },
    body: {
      zh: "Windows 环境下的远程磁盘实验仓库。",
      en: "Experiment repo for remote disks on Windows.",
    },
  },
  {
    name: "ureminder",
    lang: "—",
    url: "https://github.com/caesarvan/ureminder",
    title: { zh: "ureminder", en: "ureminder" },
    body: {
      zh: "轻量提醒类小工具仓库。",
      en: "Lightweight reminder utility repo.",
    },
  },
  {
    name: "ai",
    lang: "JavaScript",
    url: "https://github.com/caesarvan/ai",
    title: { zh: "本站源码", en: "This site" },
    body: {
      zh: "当前个人站点的静态页面源码。",
      en: "Source for this static personal site.",
    },
  },
];
