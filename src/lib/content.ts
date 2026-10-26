/**
 * Single source of truth for all site content.
 *
 * Every fact in this file is taken from the CV
 * (`Personal/CV-Vindy-Bagus-Prasetyo-2026.docx`) or from the verified notes in
 * the build brief. Do not add unverified claims.
 */

export const site = {
  name: "Vindy Bagus Prasetyo",
  role: "Mobile Developer",
  roleDetail: "Flutter / Kotlin Multiplatform",
  location: "Mojokerto, East Java, Indonesia",
  email: "vindyprasetyo.dev@gmail.com",
  phone: "+6285737777778",
  phoneDisplay: "+62 857-3777-7778",
  whatsapp: "https://wa.me/6285737777778",
  linkedin: "https://www.linkedin.com/in/bgs-prasetyo",
  linkedinDisplay: "linkedin.com/in/bgs-prasetyo",
  github: "https://github.com/pras-mobile-dev",
  githubDisplay: "github.com/pras-mobile-dev",
  url: "https://vindy-portfolio.vercel.app",
  availability: "Open to opportunities",
} as const;

/** The three headline numbers used in the hero. */
export const heroStats = [
  { value: "4", suffix: "yrs", label: "Hands-on experience", detail: "3.5 years full-time" },
  { value: "700K+", label: "Total downloads", detail: "across 3 logistics apps" },
  { value: "5", suffix: "apps", label: "Live on stores", detail: "Google Play & App Store" },
] as const;

export const summary = {
  lead: "I build cross-platform mobile apps for Android and iOS, mostly with Flutter and Kotlin Multiplatform.",
  body: [
    "Four years of hands-on experience, three and a half of them full-time, shipping to production rather than to a demo folder. My work has reached 700K+ combined downloads on Google Play, including a logistics suite that serves 500K+ users.",
    "Most of that work sits in four verticals: logistics, F&B point-of-sale, property-tech, and messaging. I have taken features from a written spec through implementation, review, and QA, and I have led the end-to-end delivery of a two-app product from design system to release.",
  ],
} as const;

export const skillGroups = [
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Kotlin Multiplatform", "Compose Multiplatform", "Decompose", "Koin", "Ktor"],
  },
  {
    title: "State & Architecture",
    items: ["BLoC", "Riverpod", "Provider", "GetX", "Clean Architecture", "MVVM"],
  },
  {
    title: "Backend & Tools",
    items: ["Go", "Firebase", "REST API", "Postgres", "Redis", "Docker", "Stream Chat", "Agora RTC/RTM", "Git"],
  },
  {
    title: "Design & Collaboration",
    items: ["Figma", "Agile/Scrum", "Jira"],
  },
] as const;

export type EngagementType = "Full-time" | "Part-time" | "Project-based" | "Internship";

export type Experience = {
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  type: EngagementType;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Mobile Developer — Contract",
    company: "BisChat (AIRSID LTD)",
    period: "Aug 2026 – Sep 2026",
    type: "Full-time",
    location: "Remote",
    bullets: [
      "Built a PIN-based messaging platform: a Go modular-monolith backend plus a Kotlin Multiplatform mobile app for Android and iOS.",
      "Delivered 234 commits across 2 repositories in a two-month engagement.",
      "Mobile (KMP): Compose Multiplatform UI, Decompose navigation, Koin DI, Ktor client — auth, chat (Stream Chat), calls/radio/Talky (Agora RTC/RTM), broadcast, and profile.",
      "Backend (Go): modular monolith covering user, pin, chat, agora, broadcast, asset/BisCoin, auction, and notification; Postgres, Redis, Cloudinary, Firebase Auth/FCM.",
      "Integrated RevenueCat in-app purchases for BisCoin top-ups and PIN checkout, plus Firebase push with deep-link payloads.",
      "LIVE on Google Play Store (bischat.app) and Apple App Store (com.bischat.BisChat).",
    ],
  },
  {
    role: "Flutter Mobile Developer",
    company: "Kosify.id",
    companyNote: "Freelance / Part-time",
    period: "Aug 2025 – May 2026",
    type: "Part-time",
    location: "Remote",
    bullets: [
      "Built the Owner App and Tenant App in Flutter with Riverpod and Clean Architecture, both derived from a shared design system.",
      "Tenant App: map-based room discovery (FlutterMap), Google Sign-In, FCM push notifications, real-time chat (Hive + socket), and the checkout flow.",
      "Owner App: tenant management, auto-billing and reminders, financial reporting dashboard, and real-time finance tracking.",
      "LIVE on Google Play Store (id.kosify.owner, id.kosify.tenant) — PT KOSIFY GRUP INDONESIA.",
    ],
  },
  {
    role: "Flutter Mobile Developer",
    company: "CV Fun Teknologi",
    companyNote: "Dandang Gula",
    period: "Mar 2025 – Oct 2025",
    type: "Project-based",
    location: "Remote",
    bullets: [
      "Multi-branch restaurant point-of-sale with 7 role types spanning HQ, Branch Manager, Admin, Cashier, and Warehouse.",
      "Order management with multi-payment support, per-item split bill, and Bluetooth thermal printer integration.",
      "Inventory and stock management with low-stock alerts across branches.",
      "Multi-role analytics dashboard with real-time sales reporting.",
      "Source: github.com/pras-mobile-dev/dandang_gula (not on Play Store).",
    ],
  },
  {
    role: "Flutter Mobile Developer",
    company: "PT. AZ Logistik Dot Com",
    companyNote: "MuatMuat",
    period: "Nov 2022 – Feb 2026",
    type: "Full-time",
    location: "Surabaya, Indonesia",
    bullets: [
      "Large-scale logistics suite with 700K+ combined downloads across 3 apps on Google Play Store.",
      "Shipped 10+ production features per Brand Analyst specifications, plus refactoring and QA/QC bug fixes.",
      "MuatMuat (500K+ downloads): shipper platform to find trucks, warehouses, and business partners.",
      "MuatMuat Seller (100K+) and MuatMuat Transporter (100K+, 4.5 rating): marketplace and fleet management.",
      "Built MuatMuat AI, an internal AI/LLM tool for development acceleration.",
      "Worked in a cross-functional Agile team using Jira; authored technical documentation for all modules.",
    ],
  },
  {
    role: "Internship Mobile Developer — Flutter",
    company: "PT. Widya Indonesia Nusantara",
    companyNote: "STT Mobile",
    period: "Aug 2022 – Oct 2022",
    type: "Internship",
    location: "Remote",
    bullets: [
      "Module maintenance and new feature development for the Speech-to-Text flagship product (Widya Wicara).",
      "QC bug fixes and module documentation.",
    ],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  /** Shown as the card subtitle and modal eyebrow. */
  category: string;
  /** One line of concrete impact — the modal's opening statement. */
  impact: string;
  problem: string;
  solution: string;
  role: string;
  duration: string;
  stack: string[];
  links: ProjectLink[];
  gallery: string[];
  /** Optional single hero image used for the card thumbnail. */
  thumbnail?: string;
  thumbnailAlt: string;
  /** True when the app is no longer published and needs a visible caveat. */
  delisted?: string;
  /** Screenshots are wide desktop layouts rather than phone frames. */
  wide?: boolean;
  /** Thumbnail is a wide promotional graphic rather than an in-app screenshot. */
  banner?: boolean;
  /** Availability note shown with the links, when no public URL exists. */
  ios?: string;
};

export const projects: Project[] = [
  {
    slug: "muatmuat",
    name: "MuatMuat",
    category: "Logistics · Shipper platform",
    impact: "500K+ downloads on Google Play, the flagship of a 700K+ logistics suite.",
    problem:
      "Shippers moving freight across Indonesia had no single place to find a truck, a warehouse, and a business partner without a chain of phone calls.",
    solution:
      "A shipper-facing app that puts truck discovery, warehouse search, and partner management in one flow, built to stay responsive on the mid-range Android devices most users carry.",
    role: "Flutter Mobile Developer",
    duration: "Nov 2022 – Feb 2026",
    stack: ["Flutter", "Dart", "REST API", "Firebase", "Jira"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.azlogistik.muatmuat" },
    ],
    gallery: [
      "/images/muatmuat/screen-01.png",
      "/images/muatmuat/screen-02.png",
      "/images/muatmuat/screen-03.png",
      "/images/muatmuat/screen-04.png",
      "/images/muatmuat/screen-05.png",
      "/images/muatmuat/screen-06.png",
    ],
    thumbnail: "/images/muatmuat/screen-02.png",
    thumbnailAlt: "MuatMuat app screen showing the shipper home dashboard",
  },
  {
    slug: "muatmuat-transporter",
    name: "MuatMuat Transporter",
    category: "Logistics · Fleet management",
    impact: "100K+ downloads with a 4.5 rating on Google Play.",
    problem:
      "Truck owners needed a steady stream of loads and a way to track shipments without managing the whole relationship over chat.",
    solution:
      "A transporter app covering truck offers, shipment handling, and GPS tracking, so fleet operators can accept work and follow it through to delivery.",
    role: "Flutter Mobile Developer",
    duration: "Nov 2022 – Feb 2026",
    stack: ["Flutter", "Dart", "Google Maps", "REST API", "Firebase"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.azlogistik.muatmuattransporter",
      },
    ],
    gallery: [
      "/images/muatmuat-transporter/screen-01.png",
      "/images/muatmuat-transporter/screen-02.png",
      "/images/muatmuat-transporter/screen-03.png",
      "/images/muatmuat-transporter/screen-04.png",
      "/images/muatmuat-transporter/screen-05.png",
      "/images/muatmuat-transporter/screen-06.png",
    ],
    thumbnail: "/images/muatmuat-transporter/screen-02.png",
    thumbnailAlt: "MuatMuat Transporter app screen showing available shipment offers",
  },
  {
    slug: "muatmuat-seller",
    name: "MuatMuat Seller",
    category: "Logistics · Marketplace",
    impact: "100K+ downloads on Google Play.",
    problem:
      "Small sellers in the logistics supply chain had no digital storefront and depended on manual listings to reach buyers.",
    solution:
      "A seller app with registration, a product showcase, and paid ads, letting sellers list inventory and promote it inside the MuatMuat ecosystem.",
    role: "Flutter Mobile Developer",
    duration: "Nov 2022 – Feb 2026",
    stack: ["Flutter", "Dart", "REST API", "Firebase"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.azlogistik.muatmuatseller",
      },
    ],
    gallery: [
      "/images/muatmuat-seller/screen-01.png",
      "/images/muatmuat-seller/screen-02.png",
      "/images/muatmuat-seller/screen-03.png",
      "/images/muatmuat-seller/screen-04.png",
      "/images/muatmuat-seller/screen-05.png",
    ],
    thumbnail: "/images/muatmuat-seller/screen-02.png",
    thumbnailAlt: "MuatMuat Seller app screen showing the product showcase",
  },
  {
    slug: "kosify-tenant",
    name: "Kosify.id Tenant",
    category: "Property-tech · Tenant app",
    impact: "Live on Google Play, one half of a two-app product delivered end to end.",
    problem:
      "Finding a rental room meant filtering listings by hand and arranging viewings over chat, with no reliable way to compare price, location, and facilities.",
    solution:
      "A tenant app that puts rooms on a map, filters by price, location, facilities, and room type, and carries the booking through to checkout — including Google Sign-In, FCM push, and real-time chat over Hive and sockets.",
    role: "Flutter Mobile Developer",
    duration: "Aug 2025 – May 2026",
    stack: ["Flutter", "Riverpod", "Clean Architecture", "FlutterMap", "Firebase", "Hive"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=id.kosify.tenant" },
    ],
    gallery: [
      "/images/kosify-tenant/screen-01.png",
      "/images/kosify-tenant/screen-02.png",
      "/images/kosify-tenant/screen-03.png",
      "/images/kosify-tenant/screen-04.png",
      "/images/kosify-tenant/screen-05.png",
      "/images/kosify-tenant/screen-06.png",
    ],
    thumbnail: "/images/kosify-tenant/header.png",
    thumbnailAlt: "Kosify.id Tenant screens showing room search, filters, and the survey request flow",
    banner: true,
  },
  {
    slug: "kosify-owner",
    name: "Kosify.id Owner",
    category: "Property-tech · Owner app",
    impact: "Live on Google Play; led end-to-end delivery from design system to release.",
    problem:
      "Room owners tracked tenants, rent, and expenses in notebooks and spreadsheets, which made late payments and missed reminders routine.",
    solution:
      "An owner app for tenant management, auto-billing with reminders, a financial reporting dashboard, and real-time finance tracking — sharing one design system with the Tenant app so both stayed consistent.",
    role: "Flutter Mobile Developer",
    duration: "Aug 2025 – May 2026",
    stack: ["Flutter", "Riverpod", "Clean Architecture", "Firebase", "REST API"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=id.kosify.owner" },
    ],
    gallery: [
      "/images/kosify-owner/screen-01.png",
      "/images/kosify-owner/screen-02.png",
      "/images/kosify-owner/screen-03.png",
      "/images/kosify-owner/screen-04.png",
    ],
    thumbnail: "/images/kosify-owner/header.png",
    thumbnailAlt: "Kosify.id Owner screens showing tenant management and financial reporting",
    banner: true,
  },
  {
    slug: "dandang-gula",
    name: "Dandang Gula POS",
    category: "F&B · Point of sale",
    impact: "Runs multi-branch restaurant operations across 7 role types.",
    problem:
      "A multi-branch restaurant was handling orders, split payments, stock, and daily reporting across disconnected tools, so branch and HQ numbers rarely agreed.",
    solution:
      "A point-of-sale app covering the full order-to-analytics flow: multi-payment and per-item split bill, Bluetooth thermal printing, inventory with low-stock alerts, and a multi-role dashboard with real-time sales reporting. Built over 2-week Agile sprints.",
    role: "Flutter Mobile Developer",
    duration: "Mar 2025 – Oct 2025",
    stack: ["Flutter", "Dart", "Bluetooth thermal printer", "REST API", "Agile/Scrum"],
    links: [{ label: "Source on GitHub", href: "https://github.com/pras-mobile-dev/dandang_gula" }],
    gallery: [
      "/images/dandang-gula/screen-01-dashboard.png",
      "/images/dandang-gula/screen-02-split-bill.png",
      "/images/dandang-gula/screen-03-printer.png",
      "/images/dandang-gula/screen-04-custom-menu.png",
      "/images/dandang-gula/screen-05-laporan.png",
      "/images/dandang-gula/screen-06-login.png",
      "/images/dandang-gula/screen-07-stok.png",
    ],
    thumbnail: "/images/dandang-gula/screen-01-dashboard.png",
    thumbnailAlt: "Dandang Gula POS dashboard showing the menu grid and shift summary",
    wide: true,
  },
  {
    slug: "bischat",
    name: "BisChat",
    category: "Messaging · Kotlin Multiplatform",
    impact: "234 commits across 2 repositories in a 2-month contract; live on both stores.",
    problem:
      "A PIN-based messaging product needed Android and iOS clients plus a backend, delivered inside a two-month contract window.",
    solution:
      "A Kotlin Multiplatform app sharing Compose Multiplatform UI with Decompose navigation, Koin DI, and a Ktor client, covering auth, chat over Stream Chat, calls/radio/Talky over Agora RTC/RTM, broadcast, and profile — backed by a Go modular monolith with RevenueCat in-app purchases and Firebase push with deep links.",
    role: "Mobile Developer — Contract",
    duration: "Aug 2026 – Sep 2026",
    stack: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Decompose",
      "Koin",
      "Ktor",
      "Go",
      "Postgres",
      "Redis",
      "Stream Chat",
      "Agora RTC/RTM",
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=bischat.app" },
    ],
    gallery: [
      "/images/bischat/screen-01.png",
      "/images/bischat/screen-02.png",
      "/images/bischat/screen-03.png",
      "/images/bischat/screen-04.png",
      "/images/bischat/screen-05.png",
      "/images/bischat/screen-06.png",
    ],
    thumbnail: "/images/bischat/header.jpg",
    thumbnailAlt: "BisChat promotional graphic showing the messaging app interface",
    banner: true,
    /** No public App Store link was provided, so none is invented here. */
    ios: "Also live on the Apple App Store (com.bischat.BisChat).",
  },
  {
    slug: "esensi",
    name: "ESENSI Attendance",
    category: "Final project · Attendance",
    impact: "Face-detection attendance app built as a final project; no longer published.",
    problem:
      "Manual attendance records were easy to falsify, and a supervisor had no quick way to confirm who was actually on site.",
    solution:
      "An attendance app using face detection together with location checks, so a check-in ties a verified face to a mapped position.",
    role: "Mobile Developer",
    duration: "Final project",
    stack: ["Flutter", "Machine Learning", "Face detection", "Maps"],
    links: [],
    gallery: ["/images/esensi/splash.png", "/images/esensi/map.jpg"],
    thumbnail: "/images/esensi/splash.png",
    thumbnailAlt: "ESENSI Attendance app splash screen",
    delisted: "No longer published on Google Play.",
  },
];

/** Projects described in text only — no screenshots available. */
export const textOnlyProjects = [
  {
    name: "BisChat Backend",
    category: "Go · Backend",
    description:
      "A Go modular monolith handling PIN messaging, Agora sessions, the BisCoin wallet, auctions, and FCM push, on Postgres, Redis, and Docker with Swagger-documented APIs. Written largely by directing AI tooling, which kept the two-month timeline realistic.",
    stack: ["Go", "Postgres", "Redis", "Docker", "Swagger"],
  },
  {
    name: "MuatMuat AI",
    category: "Internal tool",
    description:
      "An internal AI/LLM tool built to speed up day-to-day development across the logistics suite. Internal only, so there is nothing public to link to.",
    stack: ["Flutter", "AI/LLM"],
  },
] as const;

export const professionalDevelopment = {
  period: "Jun 2026 – Present",
  label: "Self-directed",
  points: [
    "Studied Kotlin Multiplatform and Go backend development, then applied both directly in building the BisChat messaging platform.",
    "Continuously exploring new stacks for cross-platform mobile development.",
  ],
} as const;

export const education = [
  {
    degree: "Associate Degree in Information Technology",
    school: "Politeknik Negeri Madiun",
    period: "Jan 2017 – Dec 2019",
    location: "Madiun, Indonesia",
    note: "Teknik Komputer Jaringan · GPA 3.64",
  },
  {
    degree: "Teknik Komputer Jaringan",
    school: "SMK TI Bali Global",
    period: "Jan 2014 – Jan 2017",
    location: "Denpasar, Indonesia",
  },
] as const;

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Advanced" },
] as const;

export const achievements = [
  "700K+ combined downloads on Google Play: muatmuat (500K+), muatmuat Seller (100K+), muatmuat Transporter (100K+).",
  "5 apps live on Google Play Store and Apple App Store across logistics, property-tech, and messaging.",
  "Led end-to-end delivery of the Kosify.id Owner and Tenant apps, from design system to production.",
] as const;

export const certifications = [
  {
    name: "English Proficiency Test",
    detail: "Score 527 (TOEIC equivalent)",
  },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
