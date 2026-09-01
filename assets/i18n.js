const I18N = {
  zh: {
    "nav.home": "首页",
    "nav.work": "工作",
    "nav.projects": "项目",
    "nav.awards": "荣誉",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "home.lede": "专注于 AI 芯片系统级验证、NPU 多芯片互连验证，以及流片前验证平台和调试工具建设。",
    "home.cta.work": "查看专业经历",
    "home.cta.projects": "GitHub 项目",
    "home.overview.title": "专业领域",
    "home.card.work.title": "芯片与系统验证",
    "home.card.work.body": "NPU 多芯片互连、系统级压力测试与流片前验证。",
    "home.card.projects.title": "公开仓库",
    "home.card.projects.body": "网络拓扑工具、自动化脚本与研究项目。",
    "home.card.awards.title": "荣誉与认可",
    "home.card.awards.body": "验证平台、研发工具与交付质量方面的奖项。",
    "home.card.about.title": "专业背景",
    "home.card.about.body": "教育背景、职业经历与当前关注方向。",
    "work.kicker": "Experience",
    "work.title": "专业经历",
    "work.lede":
      "围绕 AI 芯片和基带 SoC，开展多芯片互连、流片前验证、系统级压力测试、调试与验证平台建设。",
    "work.note.title": "技术说明",
    "work.note.1": "流片前验证：芯片流片前，基于 RTL 仿真、硬件仿真、FPGA 原型或虚拟平台开展的功能与系统验证。",
    "work.note.2": "FPGA 原型验证：将芯片设计映射到 FPGA 平台，用于系统功能验证和软硬件协同调试。",
    "work.note.3": "硬件仿真加速：利用 Palladium 等硬件仿真平台运行大规模 RTL，覆盖复杂并发和长时间场景。",
    "work.note.4": "系统级模型与虚拟平台：利用 FastModel、QEMU 等环境提前开展软件开发、拓扑评估和系统验证。",
    "media.illustration": "概念示意图",
    "projects.kicker": "GitHub",
    "projects.title": "公开项目",
    "projects.lede": "选自 github.com/caesarvan 的自有仓库（不含 fork 镜像）。",
    "awards.kicker": "Awards",
    "awards.title": "荣誉",
    "awards.lede": "来自验证平台、研发工具和交付质量方面的认可。",
    "about.kicker": "About",
    "about.title": "关于",
    "about.lede": "Caesar Fan，芯片验证与验证平台工程师。",
    "about.focus.title": "专业方向",
    "about.focus.body":
      "当前关注 AI 芯片多芯片互连与系统级验证，同时从事流片前验证平台、自动化回归、性能可观测性和调试工具建设。",
    "about.path.title": "教育与职业经历",
    "contact.kicker": "Contact",
    "contact.title": "联系",
    "contact.lede": "欢迎通过 GitHub 联系。",
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
      "Focused on system-level validation for AI accelerators, NPU multi-chip interconnects, pre-silicon validation platforms, and debug tooling.",
    "home.cta.work": "View experience",
    "home.cta.projects": "GitHub projects",
    "home.overview.title": "Areas of expertise",
    "home.card.work.title": "Chip and system validation",
    "home.card.work.body": "NPU multi-chip interconnects, system stress testing, and pre-silicon validation.",
    "home.card.projects.title": "Public repos",
    "home.card.projects.body": "Topology editor, tooling scripts, research prototypes.",
    "home.card.awards.title": "Awards and recognition",
    "home.card.awards.body": "Recognition for validation platforms, engineering tools, and delivery quality.",
    "home.card.about.title": "Background",
    "home.card.about.body": "Education, professional experience, and current focus.",
    "work.kicker": "Experience",
    "work.title": "Professional experience",
    "work.lede":
      "Experience spanning AI accelerators and baseband SoCs, including multi-chip interconnects, pre-silicon validation, system stress testing, debug, and validation platforms.",
    "work.note.title": "Technical context",
    "work.note.1": "Pre-silicon verification and validation: functional and system-level validation before tape-out using RTL simulation, emulation, FPGA prototypes, and virtual platforms.",
    "work.note.2": "FPGA prototyping: mapping a chip design onto FPGA hardware for system validation and hardware/software co-debug.",
    "work.note.3": "Hardware emulation: running large RTL designs on platforms such as Palladium to cover complex concurrency and long-duration scenarios.",
    "work.note.4": "System models and virtual platforms: using FastModel, QEMU, and related environments for early software development, topology evaluation, and system validation.",
    "media.illustration": "Concept illustration",
    "projects.kicker": "GitHub",
    "projects.title": "Public projects",
    "projects.lede": "Selected own repos from github.com/caesarvan (no forks).",
    "awards.kicker": "Awards",
    "awards.title": "Awards",
    "awards.lede": "Recognition for validation platforms, engineering tools, and delivery quality.",
    "about.kicker": "About",
    "about.title": "About",
    "about.lede": "Caesar Fan, chip validation and validation platform engineer.",
    "about.focus.title": "Professional focus",
    "about.focus.body":
      "Currently focused on multi-chip interconnect and system-level validation for AI accelerators, alongside pre-silicon validation platforms, regression automation, performance observability, and debug tools.",
    "about.path.title": "Education and experience",
    "contact.kicker": "Contact",
    "contact.title": "Contact",
    "contact.lede": "Feel free to connect on GitHub.",
    "footer.copy": "Caesar Fan",
    "footer.top": "Back to top",
  },
};

const GALLERY = [
  {
    img: "assets/img/work_supernode.jpg",
    tag: { zh: "组网", en: "Networking" },
    title: { zh: "NPU 多芯片互连验证", en: "NPU multi-chip interconnect validation" },
    body: {
      zh: "负责高速互连接口与系统拓扑验证，覆盖场景设计、并发压力、异常处理和系统级问题定位。",
      en: "Validated high-speed interconnect interfaces and system topologies, covering scenario design, concurrent stress, error handling, and system-level debug.",
    },
  },
  {
    img: "assets/img/work_presi.jpg",
    tag: { zh: "流片前验证", en: "Pre-silicon validation" },
    title: {
      zh: "多层流片前验证平台",
      en: "Multi-layer pre-silicon platforms",
    },
    body: {
      zh: "建设并使用 FPGA 原型、硬件仿真和虚拟平台，支持系统功能验证、软件提前开发和复杂问题定位。",
      en: "Built and used FPGA prototypes, hardware emulation, and virtual platforms for system validation, early software development, and complex issue diagnosis.",
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
      zh: "建设自动化测试、变更驱动的回归选择、性能分析和负载监控能力，缩短验证反馈周期。",
      en: "Developed test automation, change-driven regression selection, performance analysis, and workload monitoring to shorten validation feedback cycles.",
    },
  },
  {
    img: "assets/img/work_debug.jpg",
    tag: { zh: "Debug", en: "Debug" },
    title: {
      zh: "调试工具与性能可观测性",
      en: "Debug tooling and performance observability",
    },
    body: {
      zh: "整合寄存器访问、Trace、性能计数器和压力测试监控，提高软硬件协同调试效率。",
      en: "Integrated register access, traces, performance counters, and stress-test monitoring to improve hardware/software co-debug efficiency.",
    },
  },
];

const AWARD_CARDS = [
  {
    img: "assets/img/award_lab.jpg",
    year: "2025",
    title: {
      zh: "计算战役总裁奖",
      en: "Computing Campaign President Award",
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
      zh: "研发工具装备「召之即来」奖",
      en: "Call-for-Fire Award for R&D Tools and Equipment",
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
      zh: "质量之星",
      en: "Quality Star",
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
    logo: "assets/brand/soochow.jpg",
    logoAlt: "苏州大学 / Soochow University",
    body: { zh: "信息工程本科。", en: "Bachelor's degree in Information Engineering." },
  },
  {
    when: "2021 – 2022",
    title: { zh: "硕士 · 电气与计算机工程", en: "M.Eng. · Electrical & Computer Engineering" },
    logo: "assets/brand/nus.svg",
    logoAlt: "National University of Singapore",
    body: { zh: "电气与计算机工程硕士。", en: "Master's degree in Electrical and Computer Engineering." },
  },
  {
    when: "2022 – 2024",
    logo: "assets/brand/huawei.svg",
    logoAlt: "Huawei",
    title: { zh: "基带芯片验证", en: "Baseband chip validation" },
    body: { zh: "调度子系统验证与 FPGA 原型验证。", en: "Scheduler subsystem verification and FPGA prototyping." },
  },
  {
    when: "2024 – now",
    logo: "assets/brand/huawei.svg",
    logoAlt: "Huawei",
    title: { zh: "AI 芯片验证与验证平台", en: "AI accelerator validation and platforms" },
    body: { zh: "多芯片互连、流片前验证与验证平台建设。", en: "Multi-chip interconnect, pre-silicon validation, and validation platform engineering." },
  },
];

const PROJECTS = [
  {
    name: "ucluster",
    lang: "TypeScript",
    url: "https://github.com/caesarvan/ucluster",
    title: { zh: "网络拓扑图编辑器", en: "Network topology editor" },
    body: {
      zh: "基于 React 和 React Flow，支持设备与端口管理、拓扑连线、自动布局及 JSON 导入导出。",
      en: "React + ReactFlow: devices/ports, links, auto-layout, import/export, themes.",
    },
  },
  {
    name: "NUS_Medical_Care",
    lang: "Python",
    url: "https://github.com/caesarvan/NUS_Medical_Care",
    title: { zh: "BLE 姿态采集与识别", en: "BLE posture sensing & recognition" },
    body: {
      zh: "基于 nRF52810 和 BLE 采集躯干运动数据，通过 iOS 与 Firebase 展示，并尝试多种姿态识别模型。",
      en: "nRF52810 trunk-motion sensing → iOS / Firebase; multiple ML models and CoreML path.",
    },
  },
  {
    name: "hello_boss",
    lang: "Python",
    url: "https://github.com/caesarvan/hello_boss",
    title: { zh: "招聘候选人筛选辅助脚本", en: "Recruiting candidate filtering helper" },
    body: {
      zh: "支持按院校、公司和职位等条件筛选候选人，并执行批量操作。",
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
