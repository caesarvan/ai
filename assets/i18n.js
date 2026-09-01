const I18N = {
  zh: {
    "brand.name": "樊高一格",
    "nav.built": "作品",
    "nav.awards": "荣誉",
    "nav.path": "路径",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "hero.signal": "System-level Silicon Validation",
    "hero.name": "樊高一格",
    "hero.nameEn": "Gaoyige Fan",
    "hero.lede": "把昇腾超节点组网、多层预硅与验证平台，做成看得见的交付物。",
    "hero.cta.built": "看做过的事",
    "hero.cta.contact": "联系",
    "logos.label": "曾工作 / 求学于",
    "built.kicker": "01 / 作品",
    "built.title": "做过的系统与产品面",
    "awards.kicker": "02 / 荣誉",
    "awards.title": "被组织看见的交付",
    "path.kicker": "03 / 路径",
    "path.title": "从校园到昇腾验证现场",
    "contact.kicker": "04 / 联系",
    "contact.title": "继续聊硅验证与预硅方法",
    "contact.body": "邮件即可。适合聊超节点组网、预硅平台与验证工程化。",
    "footer.copy": "樊高一格 · Silicon Validation",
    "footer.top": "回到顶部",
  },
  en: {
    "brand.name": "Gaoyige Fan",
    "nav.built": "Work",
    "nav.awards": "Awards",
    "nav.path": "Path",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.signal": "System-level Silicon Validation",
    "hero.name": "Gaoyige Fan",
    "hero.nameEn": "樊高一格",
    "hero.lede":
      "Turning Ascend super-node networking, multi-level pre-silicon, and validation platforms into visible deliverables.",
    "hero.cta.built": "See the work",
    "hero.cta.contact": "Contact",
    "logos.label": "Worked with / studied at",
    "built.kicker": "01 / Work",
    "built.title": "Systems and product surfaces built",
    "awards.kicker": "02 / Awards",
    "awards.title": "Delivery the organization recognized",
    "path.kicker": "03 / Path",
    "path.title": "From campus to Ascend validation floor",
    "contact.kicker": "04 / Contact",
    "contact.title": "Talk silicon validation and pre-silicon methods",
    "contact.body": "Email is enough. Super-node networking, pre-silicon platforms, validation engineering.",
    "footer.copy": "Gaoyige Fan · Silicon Validation",
    "footer.top": "Back to top",
  },
};

const GALLERY = [
  {
    img: "assets/img/work_supernode.jpg",
    logo: "assets/logos/ascend.svg",
    tag: { zh: "产品 · 昇腾", en: "Product · Ascend" },
    title: {
      zh: "NPU 超节点组网验证面",
      en: "NPU super-node networking surface",
    },
    body: {
      zh: "面向 960/950 系列与互联网规模超节点：高速 IO/UB、拓扑分解、组网接口与压测收敛。",
      en: "For 960/950-class and internet-scale super-nodes: high-speed IO/UB, topology decomposition, networking interfaces, stress convergence.",
    },
  },
  {
    img: "assets/img/work_presi.jpg",
    logo: "assets/logos/huawei.svg",
    tag: { zh: "平台 · 预硅", en: "Platform · Pre-silicon" },
    title: {
      zh: "FPGA / EMU / ESL 三层预硅",
      en: "FPGA / EMU / ESL pre-silicon stack",
    },
    body: {
      zh: "VTOF · Palladium · FastModel/QEMU。把拓扑评估、系统 Bring-up 与问题定位放到同一验证阶梯上。",
      en: "VTOF · Palladium · FastModel/QEMU — topology evaluation, system bring-up, and localization on one validation ladder.",
    },
  },
  {
    img: "assets/img/work_platform.jpg",
    logo: "assets/logos/huawei.svg",
    tag: { zh: "产品 · 工具", en: "Product · Tooling" },
    title: {
      zh: "验证平台与精确 CI",
      en: "Validation platform & precise CI",
    },
    body: {
      zh: "CVA 自动化、PerfInsight、压测监控、URegister / UDB / UModel —— 回归反馈与可观测性做成产品。",
      en: "CVA automation, PerfInsight, stress monitoring, URegister / UDB / UModel — regression feedback as a product.",
    },
  },
  {
    img: "assets/img/work_debug.jpg",
    logo: "assets/logos/ascend.svg",
    tag: { zh: "产品 · Debug", en: "Product · Debug" },
    title: {
      zh: "三路径快速定位工具链",
      en: "Tri-path rapid debug toolchain",
    },
    body: {
      zh: "JTAG / eSPI / UART 与 DFX 可观测（RAS · CoreSight · PMU · Profiling）叠在同一 Debug 面上。",
      en: "JTAG / eSPI / UART with DFX observability (RAS · CoreSight · PMU · Profiling) on one debug surface.",
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
      zh: "液冷验证实验室 · 自研自动化框架 · 在线芯片工具服务平台。",
      en: "Liquid-cooling validation lab · in-house automation · online chip tool platform.",
    },
  },
  {
    img: "assets/img/award_plaque.jpg",
    year: "2023",
    title: {
      zh: "研发工具装备「召之即来」奖",
      en: "Call-for-Fire Award · R&D Tools",
    },
    body: {
      zh: "无线芯片需求—设计—验证端到端数字化。",
      en: "End-to-end digitization of wireless chip requirement–design–verification.",
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
      zh: "Scheduler QEMU 模型高质量交付，支撑 DFX Debug 与问题收敛。",
      en: "High-quality Scheduler QEMU model delivery supporting DFX debug and issue closure.",
    },
  },
];

const PATH = [
  {
    logo: "assets/logos/soochow.svg",
    when: "2017 – 2021",
    title: { zh: "苏州大学 · 信息工程", en: "Soochow University · Information Eng." },
    body: {
      zh: "电路、组成、网络与编程底座。",
      en: "Circuits, computer organization, networks, and programming base.",
    },
  },
  {
    logo: "assets/logos/nus.svg",
    when: "2021 – 2022",
    title: { zh: "NUS · 电气与计算机工程硕士", en: "NUS · M.Eng. ECE" },
    body: {
      zh: "半导体物理 / 工艺与系统方向。",
      en: "Semiconductor physics / fabrication and systems track.",
    },
  },
  {
    logo: "assets/logos/huawei.svg",
    when: "2022 – 2024",
    title: { zh: "无线 · 基带芯片验证", en: "Wireless · Baseband chip validation" },
    body: {
      zh: "Scheduler / DAG / QDMA 与原型验证现场。",
      en: "Scheduler / DAG / QDMA and prototyping floor.",
    },
  },
  {
    logo: "assets/logos/ascend.svg",
    when: "2024 – 现在",
    title: { zh: "昇腾 · 芯片验证经理 / PL", en: "Ascend · Chip Verification Manager / PL" },
    body: {
      zh: "NPU 组网、预硅方法与验证平台工程。",
      en: "NPU networking, pre-silicon methods, and validation platform engineering.",
    },
  },
];
