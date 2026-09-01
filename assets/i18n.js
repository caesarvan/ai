const I18N = {
  zh: {
    "nav.home": "首页",
    "nav.work": "工作",
    "nav.projects": "项目",
    "nav.awards": "荣誉",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "home.lede": "专注于 AI 芯片系统级验证、NPU 多芯片互连，以及流片前验证平台和调试工具建设。",
    "home.cta.work": "查看专业经历",
    "home.cta.projects": "GitHub 项目",
    "home.overview.title": "专业领域",
    "home.card.work.title": "芯片与系统验证",
    "home.card.work.body": "NPU 多芯片互连、系统级压力测试与流片前验证。",
    "home.card.projects.title": "公开仓库",
    "home.card.projects.body": "网络拓扑工具、自动化脚本和研究原型。",
    "home.card.awards.title": "荣誉与认可",
    "home.card.awards.body": "验证平台、研发工具与交付质量方面的奖项。",
    "home.card.about.title": "专业背景",
    "home.card.about.body": "教育背景、职业经历与当前关注方向。",
    "work.kicker": "Experience",
    "work.title": "专业经历",
    "work.lede":
      "围绕 AI 芯片和基带 SoC，开展多芯片互连验证、流片前验证、系统级压力测试、调试和验证平台建设。",
    "work.note.title": "技术说明",
    "work.note.1": "流片前验证：在设计流片前，使用 RTL 仿真、硬件仿真、FPGA 原型和虚拟平台开展功能与系统级验证。",
    "work.note.2": "FPGA 原型验证：将芯片设计映射到 FPGA 平台，用于系统功能验证和软硬件协同调试。",
    "work.note.3": "硬件仿真：在 Palladium 等专用平台上运行大规模 RTL，支持复杂并发场景和长时间工作负载。",
    "work.note.4": "虚拟平台：使用 Arm Fast Models、QEMU 等环境，提前开展软件开发、接口验证和系统功能验证。",
    "media.illustration": "概念示意图",
    "projects.kicker": "GitHub",
    "projects.title": "公开项目",
    "projects.lede": "选自 github.com/caesarvan，由本人创建的公开仓库，不含 fork 项目。",
    "awards.kicker": "Awards",
    "awards.title": "荣誉",
    "awards.lede": "来自验证平台、研发工具和交付质量方面的认可。",
    "awards.translationNote": "英文奖项名称为中文原名的说明性翻译。",
    "about.kicker": "About",
    "about.title": "关于",
    "about.lede": "Caesar Fan，从事芯片设计验证与验证平台工程。",
    "about.focus.title": "专业方向",
    "about.focus.body":
      "当前关注 AI 芯片多芯片互连与系统级验证，同时从事流片前验证平台、自动化回归、性能监控与分析以及调试工具建设。",
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
      "Focused on system-level verification for AI accelerators, NPU multi-chip interconnects, pre-silicon verification platforms, and debug tooling.",
    "home.cta.work": "View experience",
    "home.cta.projects": "GitHub projects",
    "home.overview.title": "Areas of expertise",
    "home.card.work.title": "Chip and system verification",
    "home.card.work.body": "NPU multi-chip interconnects, system stress testing, and pre-silicon verification.",
    "home.card.projects.title": "Public repos",
    "home.card.projects.body": "Topology editor, tooling scripts, research prototypes.",
    "home.card.awards.title": "Awards and recognition",
    "home.card.awards.body": "Recognition for verification platforms, engineering tools, and delivery quality.",
    "home.card.about.title": "Background",
    "home.card.about.body": "Education, professional experience, and current focus.",
    "work.kicker": "Experience",
    "work.title": "Professional experience",
    "work.lede":
      "Experience spanning AI accelerators and baseband SoCs, including multi-chip interconnect verification, pre-silicon verification, system stress testing, debugging, and verification platforms.",
    "work.note.title": "Technical context",
    "work.note.1": "Pre-silicon verification: functional and system-level verification before tape-out using RTL simulation, hardware emulation, FPGA prototypes, and virtual platforms.",
    "work.note.2": "FPGA prototyping: mapping a chip design onto FPGA hardware for system-level verification and hardware/software co-debugging.",
    "work.note.3": "Hardware emulation: running large RTL designs on platforms such as Palladium to exercise complex concurrent workloads and long-duration scenarios.",
    "work.note.4": "Virtual platforms: using Arm Fast Models, QEMU, and related environments for early software development, interface verification, and system-level verification.",
    "media.illustration": "Concept illustration",
    "projects.kicker": "GitHub",
    "projects.title": "Public projects",
    "projects.lede": "Selected repositories created by the author, excluding forks.",
    "awards.kicker": "Awards",
    "awards.title": "Awards",
    "awards.lede": "Recognition for verification platforms, engineering tools, and delivery quality.",
    "awards.translationNote": "English award titles are descriptive translations of the original Chinese names.",
    "about.kicker": "About",
    "about.title": "About",
    "about.lede": "Caesar Fan, working in chip verification and verification platform engineering.",
    "about.focus.title": "Professional focus",
    "about.focus.body":
      "Currently focused on multi-chip interconnect and system-level verification for AI accelerators, alongside pre-silicon verification platforms, regression automation, performance monitoring and analysis, and debug tools.",
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
    tag: { zh: "多芯片互连", en: "Multi-chip interconnects" },
    title: { zh: "NPU 多芯片互连验证", en: "NPU multi-chip interconnect verification" },
    body: {
      zh: "负责高速互连接口与系统拓扑验证，包括场景设计、并发压力测试、异常处理和系统级问题定位。",
      en: "Verified high-speed interconnect interfaces and system topologies, including scenario development, concurrent stress testing, error handling, and system-level debugging.",
    },
  },
  {
    img: "assets/img/work_presi.jpg",
    tag: { zh: "流片前验证", en: "Pre-silicon verification" },
    title: {
      zh: "多层流片前验证平台",
      en: "Multi-layer pre-silicon verification platforms",
    },
    body: {
      zh: "建设并使用 FPGA 原型、硬件仿真和虚拟平台，支持系统功能验证、软件提前开发和复杂问题定位。",
      en: "Built and used FPGA prototypes, hardware emulation, and virtual platforms for system-level verification, early software development, and complex issue diagnosis.",
    },
  },
  {
    img: "assets/img/work_platform.jpg",
    tag: { zh: "平台", en: "Platform" },
    title: {
      zh: "验证平台与定向回归",
      en: "Verification platforms and targeted regression",
    },
    body: {
      zh: "建设自动化测试、基于代码变更的用例选择、性能分析和负载监控，用于加快验证反馈。",
      en: "Developed test automation, change-based test selection, performance analysis, and workload monitoring to accelerate verification feedback.",
    },
  },
  {
    img: "assets/img/work_debug.jpg",
    tag: { zh: "调试", en: "Debug" },
    title: {
      zh: "调试工具与性能监控",
      en: "Debug tooling and performance monitoring",
    },
    body: {
      zh: "整合寄存器访问、Trace、性能计数器和压力测试监控，支持软硬件协同调试。",
      en: "Integrated register access, traces, performance counters, and stress-test monitoring to support hardware/software co-debugging.",
    },
  },
];

const AWARD_CARDS = [
  {
    img: "assets/img/award_lab.jpg",
    year: "2025",
    title: {
      zh: "计算战役总裁奖",
      en: "President’s Award — Computing Program",
    },
    body: {
      zh: "获奖工作涉及液冷验证实验室、自研自动化框架和在线芯片工具服务。",
      en: "Recognition associated with work on a liquid-cooling validation lab, an in-house automation framework, and web-based chip engineering tools.",
    },
  },
  {
    img: "assets/img/award_plaque.jpg",
    year: "2023",
    title: {
      zh: "研发工具装备「召之即来」奖",
      en: "R&D Tools Rapid Response Award",
    },
    body: {
      zh: "获奖工作涉及需求、设计与验证流程的端到端数字化改进。",
      en: "Recognition associated with end-to-end digitization of the requirements, design, and verification workflow.",
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
      zh: "获奖工作涉及调度模型交付、调试支持和问题收敛。",
      en: "Recognition associated with scheduler-model delivery, debugging support, and issue resolution.",
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
    title: { zh: "基带芯片设计验证", en: "Baseband chip verification" },
    body: { zh: "调度子系统验证与 FPGA 原型验证。", en: "Scheduler subsystem verification and FPGA prototyping." },
  },
  {
    when: "2024 – now",
    logo: "assets/brand/huawei.svg",
    logoAlt: "Huawei",
    title: { zh: "AI 芯片设计验证与验证平台", en: "AI accelerator verification and platforms" },
    body: { zh: "多芯片互连、流片前验证与验证平台建设。", en: "Multi-chip interconnect verification, pre-silicon verification, and verification platform engineering." },
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
      en: "A React and React Flow editor supporting devices, ports, links, automatic layout, JSON import/export, and themes.",
    },
  },
  {
    name: "NUS_Medical_Care",
    lang: "Python",
    url: "https://github.com/caesarvan/NUS_Medical_Care",
    title: { zh: "BLE 姿态采集与识别", en: "BLE posture sensing & recognition" },
    body: {
      zh: "基于 nRF52810 和 BLE 采集躯干运动数据，通过 iOS 与 Firebase 展示，并尝试多种姿态识别模型。",
      en: "A trunk-motion sensing prototype using the nRF52810 and BLE, with iOS/Firebase visualization and experimental posture-classification models.",
    },
  },
  {
    name: "hello_boss",
    lang: "Python",
    url: "https://github.com/caesarvan/hello_boss",
    title: { zh: "招聘候选人筛选辅助脚本", en: "Recruiting candidate filtering helper" },
    body: {
      zh: "支持按院校、公司和职位等条件筛选候选人，并执行批量操作。",
      en: "A personal utility for filtering candidate records by school, employer, and role.",
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
