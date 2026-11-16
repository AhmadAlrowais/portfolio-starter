// ─────────────────────────────────────────────────────────────
//  THE WHOLE CV LIVES HERE.
//  Every page reads from this file, so no CV text is hard-coded
//  inside a component.
//
//  Bilingual text is written as { en: "...", ar: "..." }.
//  Plain strings (names, links, tech, IDs) are the same in both
//  languages. The helper t() in lib/i18n.js picks the right one.
//
//  Dates are written as "YYYY-MM" and formatted per language by
//  lib/i18n.js, e.g. "2023-09" -> "Sep 2023" / "سبتمبر 2023".
//  end: null means "Present".
// ─────────────────────────────────────────────────────────────

const RIYADH = { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" };
const LONDON = { en: "London, United Kingdom", ar: "لندن، المملكة المتحدة" };
const NORTHBRIDGE = { en: "Northbridge, United Kingdom", ar: "نورثبريدج، المملكة المتحدة" };

export const cv = {
  name: { en: "Yara Saud Al-Mansouri", ar: "يارا سعود المنصوري" },
  shortName: { en: "Yara Al-Mansouri", ar: "يارا المنصوري" },
  credential: { en: "PhD", ar: "دكتوراه" },
  initials: "YM",
  title: {
    en: "Principal Product Engineer | Design Technology Lead | HCI Researcher",
    ar: "مهندسة منتجات رئيسية | قائدة تقنيات التصميم | باحثة في التفاعل بين الإنسان والحاسوب",
  },
  roles: [
    { en: "Principal Product Engineer", ar: "مهندسة منتجات رئيسية" },
    { en: "Design Technology Lead", ar: "قائدة تقنيات التصميم" },
    { en: "HCI Researcher", ar: "باحثة في التفاعل بين الإنسان والحاسوب" },
  ],
  location: RIYADH,
  // One line from the summary, used in the hero.
  tagline: {
    en: "Leads teams from first research to launch while still designing and writing code every week.",
    ar: "تقود الفرق من أول بحث حتى الإطلاق، وما زالت تصمم وتكتب الكود كل أسبوع.",
  },
  summary: {
    en: "Product engineer and designer with 16 years of professional experience building digital products in Saudi Arabia and the United Kingdom, across health tech, fintech, education and mobility. Leads teams from first research to launch while still designing and writing code every week. Has led a team of up to 64 people, shipped more than 40 products used by over 9 million people, co-founded two startups (one acquired) and earned a PhD in Human-Computer Interaction focused on Arabic interfaces.",
    ar: "مهندسة ومصممة منتجات بخبرة مهنية تمتد 16 عامًا في بناء المنتجات الرقمية في السعودية والمملكة المتحدة، في مجالات التقنية الصحية والتقنية المالية والتعليم والتنقل. تقود الفرق من أول بحث حتى الإطلاق، وما زالت تصمم وتكتب الكود كل أسبوع. قادت فريقًا وصل إلى 64 شخصًا، وأطلقت أكثر من 40 منتجًا يستخدمها أكثر من 9 ملايين شخص، وشاركت في تأسيس شركتين ناشئتين (استُحوذ على إحداهما)، وحصلت على الدكتوراه في التفاعل بين الإنسان والحاسوب مع تركيز على الواجهات العربية.",
  },

  // Taken from the summary: the industries and countries she has worked in.
  industries: [
    { en: "Health tech", ar: "التقنية الصحية" },
    { en: "Fintech", ar: "التقنية المالية" },
    { en: "Education", ar: "التعليم" },
    { en: "Mobility", ar: "التنقل" },
  ],
  countries: [
    { en: "Saudi Arabia", ar: "السعودية" },
    { en: "United Kingdom", ar: "المملكة المتحدة" },
  ],

  contact: {
    email: "yara.almansouri@mail.example",
    phone: "+966 55 000 0000",
    links: [
      { label: "Portfolio", url: "https://yara.example", display: "yara.example" },
      { label: "LinkedIn", url: "https://linkedin.example/in/yaramansouri", display: "linkedin.example/in/yaramansouri" },
      { label: "GitHub", url: "https://github.example/yara-mansouri", display: "github.example/yara-mansouri" },
      { label: "Dribbble", url: "https://dribbble.example/yaram", display: "dribbble.example/yaram" },
      { label: "Behance", url: "https://behance.example/yaram", display: "behance.example/yaram" },
      { label: "Medium", url: "https://medium.example/@yaram", display: "medium.example/@yaram" },
      { label: "Google Scholar", url: "https://scholar.example/yaram", display: "scholar.example/yaram" },
      { label: "YouTube", url: "https://youtube.example/@YaraBuilds", display: "youtube.example/@YaraBuilds" },
    ],
  },

  // The CV PDF in /public. Leave "" to hide the "Download CV" button.
  cvFile: "Yara_Al-Mansouri_CV.pdf",

  // ── Career highlights ──────────────────────────────────────
  highlights: [
    { value: 16, label: { en: "years of professional experience", ar: "عامًا من الخبرة المهنية" }, note: { en: "since Jul 2010", ar: "منذ يوليو 2010" } },
    { value: 40, suffix: "+", label: { en: "products shipped", ar: "منتجًا أُطلق" }, note: { en: "reaching 9 million+ people", ar: "وصلت إلى أكثر من 9 ملايين شخص" } },
    { value: 64, label: { en: "people led", ar: "شخصًا تحت قيادتها" }, note: { en: "across 7 squads", ar: "في 7 فرق" } },
    { value: 2, label: { en: "startups co-founded", ar: "شركتان ناشئتان شاركت في تأسيسهما" }, note: { en: "1 acquired, 1 closed", ar: "استُحوذ على واحدة وأُغلقت الأخرى" } },
    { value: 2, label: { en: "patents", ar: "براءتا اختراع" }, note: { en: "1 granted, 1 pending", ar: "واحدة ممنوحة وأخرى قيد الدراسة" } },
    { value: 9, label: { en: "publications", ar: "منشورات علمية" }, note: { en: "and 31 talks and keynotes", ar: "و31 محاضرة وكلمة رئيسية" } },
    { value: 1400, suffix: "+", label: { en: "university students taught", ar: "طالب جامعي درّستهم" }, note: { en: "over 10 semesters", ar: "على مدى 10 فصول دراسية" } },
    { value: 19, label: { en: "certifications earned", ar: "شهادة احترافية" }, note: { en: "1 in progress", ar: "وواحدة قيد الإنجاز" } },
  ],

  // ── Core skills ────────────────────────────────────────────
  skills: [
    { group: { en: "Product Design", ar: "تصميم المنتجات" }, level: "expert", years: 18, items: ["Figma", { en: "design systems", ar: "أنظمة التصميم" }, { en: "prototyping", ar: "النماذج الأولية" }, { en: "motion design", ar: "تصميم الحركة" }, { en: "information architecture", ar: "هندسة المعلومات" }] },
    { group: { en: "Front-End Engineering", ar: "هندسة الواجهات الأمامية" }, level: "expert", years: 16, items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "Web Components"] },
    { group: { en: "User Research", ar: "أبحاث المستخدمين" }, level: "expert", years: 14, items: [{ en: "interviews", ar: "المقابلات" }, { en: "usability testing", ar: "اختبارات قابلية الاستخدام" }, { en: "diary studies", ar: "دراسات اليوميات" }, { en: "A/B testing", ar: "اختبارات A/B" }, { en: "eye-tracking", ar: "تتبع حركة العين" }] },
    { group: { en: "Accessibility", ar: "إمكانية الوصول" }, level: "expert", years: 11, items: ["WCAG 2.2 AA", "ARIA", { en: "screen-reader testing", ar: "الاختبار بقارئات الشاشة" }, { en: "Arabic right-to-left accessibility", ar: "إمكانية الوصول للواجهات العربية من اليمين لليسار" }] },
    { group: { en: "Back-End and APIs", ar: "الأنظمة الخلفية وواجهات البرمجة" }, level: "advanced", years: 10, items: ["Node.js", "NestJS", "GraphQL", "REST", "PostgreSQL", "Redis"] },
    { group: { en: "Leadership", ar: "القيادة" }, level: "expert", years: 9, items: [{ en: "hiring", ar: "التوظيف" }, { en: "organization design", ar: "تصميم الهيكل التنظيمي" }, "OKRs", { en: "budgeting", ar: "إعداد الميزانيات" }, { en: "stakeholder management", ar: "إدارة أصحاب المصلحة" }, { en: "mentoring", ar: "الإرشاد" }] },
    { group: { en: "Mobile", ar: "تطبيقات الجوال" }, level: "advanced", years: 8, items: ["React Native", "Flutter", { en: "Swift (basic)", ar: "Swift (أساسي)" }] },
    { group: { en: "Cloud and DevOps", ar: "الحوسبة السحابية وDevOps" }, level: "advanced", years: 7, items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    { group: { en: "Security and Compliance", ar: "الأمن والامتثال" }, level: "intermediate", years: 6, items: [{ en: "secure development lifecycle", ar: "دورة التطوير الآمن" }, "PCI DSS", { en: "health-data privacy", ar: "خصوصية البيانات الصحية" }, { en: "threat modelling", ar: "نمذجة التهديدات" }] },
    { group: { en: "Data and AI", ar: "البيانات والذكاء الاصطناعي" }, level: "intermediate", years: 5, items: ["Python", "SQL", { en: "data visualization", ar: "تصوير البيانات" }, { en: "recommendation systems", ar: "أنظمة التوصية" }, { en: "AI product features", ar: "مزايا الذكاء الاصطناعي في المنتجات" }] },
  ],

  // ── Professional experience (in CV order) ──────────────────
  experience: [
    {
      role: { en: "Principal Product Engineer & Design Technology Lead", ar: "مهندسة منتجات رئيسية وقائدة تقنيات التصميم" },
      company: "Faseela Ventures",
      location: RIYADH,
      start: "2023-09",
      end: null,
      points: [
        { en: "Set the front-end and design-system direction for 9 product teams across payments, savings and rewards in a fintech super-app with 4.2 million users.", ar: "حددت توجه الواجهات الأمامية ونظام التصميم لـ 9 فرق منتجات في المدفوعات والادخار والمكافآت، ضمن تطبيق مالي شامل يستخدمه 4.2 مليون مستخدم." },
        { en: "Built Mizan, the company’s bilingual design system: 180 components adopted by all 9 teams, cutting UI build time by 38%.", ar: "بنت «ميزان»، نظام التصميم ثنائي اللغة للشركة: 180 مكوّنًا اعتمدتها الفرق التسعة كلها، وخفّضت وقت بناء الواجهات بنسبة 38%." },
        { en: "Led the rebuild of the web app in Next.js and TypeScript, reducing Largest Contentful Paint from 4.8 s to 1.6 s.", ar: "قادت إعادة بناء تطبيق الويب بـ Next.js وTypeScript، فانخفض مؤشر Largest Contentful Paint من 4.8 ثانية إلى 1.6 ثانية." },
        { en: "Introduced accessibility reviews for every release, raising screens that meet WCAG 2.2 AA from 41% to 96%.", ar: "أدخلت مراجعات إمكانية الوصول في كل إصدار، فارتفعت نسبة الشاشات المطابقة لمعيار WCAG 2.2 AA من 41% إلى 96%." },
        { en: "Designed the Savings Goals feature from research in 5 cities; 610,000 users opened a goal in its first 6 months.", ar: "صممت ميزة «أهداف الادخار» انطلاقًا من أبحاث في 5 مدن؛ وفتح 610,000 مستخدم هدفًا خلال أول 6 أشهر." },
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "GraphQL", "AWS"],
    },
    {
      role: { en: "Director of Product Engineering", ar: "مديرة هندسة المنتجات" },
      company: "Zayna Health Tech",
      location: RIYADH,
      start: "2021-03",
      end: "2023-08",
      points: [
        { en: "Led 64 people across 7 squads (engineering, design, quality and data) with an annual budget of SAR 21 million.", ar: "قادت 64 شخصًا في 7 فرق (الهندسة والتصميم والجودة والبيانات) بميزانية سنوية قدرها 21 مليون ريال." },
        { en: "Launched the telemedicine platform at national scale, delivering 3.1 million consultations in 2022.", ar: "أطلقت منصة الطب الاتصالي على نطاق وطني، وقدّمت 3.1 مليون استشارة في 2022." },
        { en: "Cut the app crash rate from 2.4% to 0.3% and raised the app-store rating from 3.6 to 4.7.", ar: "خفّضت معدل تعطل التطبيق من 2.4% إلى 0.3%، ورفعت تقييمه في متجر التطبيقات من 3.6 إلى 4.7." },
        { en: "Took the platform through two health-data security audits with zero major findings.", ar: "اجتازت بالمنصة تدقيقَين أمنيَّين للبيانات الصحية دون أي ملاحظات جوهرية." },
      ],
      tech: ["React", "React Native", "Node.js", "PostgreSQL", "Google Cloud", "Kubernetes"],
    },
    {
      role: { en: "Engineering Manager, Patient Apps", ar: "مديرة هندسة، تطبيقات المرضى" },
      company: "Zayna Health Tech",
      location: RIYADH,
      start: "2019-01",
      end: "2021-02",
      points: [
        { en: "Grew the patient apps team from 6 to 22 people; hired and mentored 4 team leads.", ar: "نمّت فريق تطبيقات المرضى من 6 إلى 22 شخصًا، ووظّفت 4 قادة فرق وأرشدتهم." },
        { en: "Shipped appointment booking used by 1.8 million patients across 140 clinics.", ar: "أطلقت خدمة حجز المواعيد التي استخدمها 1.8 مليون مريض في 140 عيادة." },
        { en: "Shortened the release cycle from 6 weeks to 1 week with CI/CD and feature flags.", ar: "قلّصت دورة الإصدار من 6 أسابيع إلى أسبوع واحد باستخدام CI/CD ومفاتيح الميزات." },
      ],
    },
    {
      role: { en: "Senior Front-End Engineer", ar: "مهندسة واجهات أمامية أولى" },
      company: "Zayna Health Tech",
      location: RIYADH,
      start: "2017-07",
      end: "2018-12",
      points: [
        { en: "Rebuilt the clinic dashboard in React, cutting doctors’ average task time by 27%.", ar: "أعادت بناء لوحة تحكم العيادات بـ React، فانخفض متوسط وقت إنجاز المهام لدى الأطباء بنسبة 27%." },
        { en: "Created the first shared component library, which later grew into the Zayna design system.", ar: "أنشأت أول مكتبة مكوّنات مشتركة، وتطورت لاحقًا إلى نظام تصميم Zayna." },
      ],
    },
    {
      role: { en: "Co-founder (part-time)", ar: "شريكة مؤسسة (دوام جزئي)" },
      company: "Qalam Learn",
      location: RIYADH,
      start: "2019-02",
      end: "2022-11",
      points: [
        { en: "Co-founded an Arabic-first coding education platform that reached 230,000 learners in 14 countries.", ar: "شاركت في تأسيس منصة لتعليم البرمجة بالعربية أولًا، وصلت إلى 230,000 متعلم في 14 دولة." },
        { en: "Designed and built its interactive code editor, which explains errors in plain Arabic.", ar: "صممت وبنت محرر الكود التفاعلي للمنصة، الذي يشرح الأخطاء بلغة عربية بسيطة." },
        { en: "Grew the team to 9 people and led product until the company was acquired by Mirqab Group in Nov 2022.", ar: "نمّت الفريق إلى 9 أشخاص وقادت المنتج حتى استحوذت مجموعة Mirqab على الشركة في نوفمبر 2022." },
      ],
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
    },
    {
      role: { en: "Career Break", ar: "استراحة مهنية" },
      company: null,
      location: RIYADH,
      start: "2017-01",
      end: "2017-06",
      isBreak: true,
      points: [
        { en: "Family relocation and volunteering.", ar: "انتقال عائلي وعمل تطوعي." },
        { en: "Taught a 12-week web development course to 45 adult learners with the Code for Community initiative.", ar: "درّست دورة تطوير ويب مدتها 12 أسبوعًا لـ 45 متعلمًا بالغًا ضمن مبادرة Code for Community." },
      ],
    },
    {
      role: { en: "Co-founder & Chief Technology Officer", ar: "شريكة مؤسسة ورئيسة التقنية" },
      company: "Rafeeq Rides",
      location: RIYADH,
      start: "2015-04",
      end: "2016-12",
      points: [
        { en: "Built a ride-sharing app for university students: 26,000 sign-ups and 140,000 rides in 20 months.", ar: "بنت تطبيق مشاركة رحلات لطلاب الجامعات: 26,000 تسجيل و140,000 رحلة خلال 20 شهرًا." },
        { en: "Raised SAR 3.5 million in seed funding and led a team of 11.", ar: "جمعت 3.5 مليون ريال في جولة التمويل التأسيسي وقادت فريقًا من 11 شخصًا." },
        { en: "Closed the company in Dec 2016 after a market change and wrote a public post-mortem read by 80,000 people.", ar: "أغلقت الشركة في ديسمبر 2016 بعد تغيّر في السوق، وكتبت مراجعة علنية لأسباب الإغلاق قرأها 80,000 شخص." },
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
    },
    {
      role: { en: "Senior UX Engineer", ar: "مهندسة تجربة مستخدم أولى" },
      company: "Brightwell Studio",
      location: LONDON,
      start: "2014-06",
      end: "2015-03",
      points: [
        { en: "Led the studio’s first Arabic, right-to-left project, for a Gulf travel client.", ar: "قادت أول مشروع عربي من اليمين لليسار في الاستوديو، لعميل خليجي في قطاع السفر." },
        { en: "Mentored 3 junior designers and ran the studio’s monthly front-end guild.", ar: "أرشدت 3 مصممين مبتدئين، وأدارت لقاء الواجهات الأمامية الشهري في الاستوديو." },
      ],
    },
    {
      role: { en: "UX Engineer", ar: "مهندسة تجربة مستخدم" },
      company: "Brightwell Studio",
      location: LONDON,
      start: "2012-10",
      end: "2014-05",
      points: [
        { en: "Designed and built responsive websites for 14 clients in retail, banking and the public sector.", ar: "صممت وبنت مواقع متجاوبة لـ 14 عميلًا في قطاعات التجزئة والمصارف والقطاع العام." },
        { en: "Delivered 2 projects that won industry awards (see Awards).", ar: "سلّمت مشروعَين فازا بجوائز في المجال (انظر الجوائز)." },
      ],
    },
    {
      role: { en: "Research Assistant (part-time)", ar: "مساعدة باحث (دوام جزئي)" },
      company: "University of Northbridge, Interaction Lab",
      location: NORTHBRIDGE,
      start: "2012-01",
      end: "2012-09",
      points: [
        { en: "Ran 30 usability sessions for a study on bilingual navigation menus and co-authored a technical report.", ar: "أدارت 30 جلسة اختبار قابلية استخدام لدراسة عن قوائم التنقل ثنائية اللغة، وشاركت في تأليف تقرير تقني." },
      ],
    },
    {
      role: { en: "Junior Web Developer", ar: "مطوّرة ويب مبتدئة" },
      company: "Mirqab Digital Agency",
      location: RIYADH,
      start: "2010-07",
      end: "2011-08",
      points: [
        { en: "Built more than 20 websites in HTML, CSS, jQuery and PHP for local businesses and event organizers.", ar: "بنت أكثر من 20 موقعًا بـ HTML وCSS وjQuery وPHP لشركات محلية ومنظمي فعاليات." },
      ],
    },
    {
      role: { en: "Freelance Graphic and Web Designer (part-time)", ar: "مصممة جرافيك وويب مستقلة (دوام جزئي)" },
      company: { en: "Self-employed", ar: "عمل حر" },
      location: RIYADH,
      start: "2008-09",
      end: "2010-06",
      points: [
        { en: "Designed logos, printed material and websites for 35 clients while at university.", ar: "صممت شعارات ومطبوعات ومواقع لـ 35 عميلًا خلال دراستها الجامعية." },
      ],
    },
  ],

  // ── Selected projects ──────────────────────────────────────
  // Each project gets its own page at /projects/<slug>.
  projects: [
    {
      slug: "mizan-design-system",
      name: "Mizan Design System",
      org: "Faseela Ventures",
      start: "2023-10",
      end: "2025-06",
      role: { en: "Lead designer and engineer", ar: "المصممة والمهندسة الرئيسية" },
      team: { en: "Team of 6", ar: "فريق من 6" },
      metric: { value: "180", label: { en: "components, 38% faster UI builds", ar: "مكوّنًا، وبناء واجهات أسرع بنسبة 38%" } },
      summary: { en: "A bilingual design system that gave 9 product teams one shared set of components.", ar: "نظام تصميم ثنائي اللغة منح 9 فرق منتجات مجموعة مكوّنات مشتركة واحدة." },
      problem: { en: "9 product teams built the same interface parts in different ways, with 4 button styles and 11 shades of green.", ar: "كانت 9 فرق منتجات تبني عناصر الواجهة نفسها بطرق مختلفة، فظهرت 4 أنماط للأزرار و11 درجة من اللون الأخضر." },
      action: { en: "Audited 1,300 screens, defined design tokens, and built and documented the components in Figma and code.", ar: "دققت 1,300 شاشة، وحددت رموز التصميم (design tokens)، وبنت المكوّنات ووثقتها في Figma وفي الكود." },
      result: { en: "180 components, 38% faster UI build time, and 96% of screens meeting WCAG 2.2 AA.", ar: "180 مكوّنًا، وبناء واجهات أسرع بنسبة 38%، و96% من الشاشات مطابقة لمعيار WCAG 2.2 AA." },
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma tokens"],
      award: { en: "Design Technology Leader of the Year, Gulf Design Week Awards 2025", ar: "جائزة قائد تقنيات التصميم للعام، Gulf Design Week Awards 2025" },
      demo: "",
      repo: "",
    },
    {
      slug: "telemedicine-platform",
      name: "National Telemedicine Platform",
      org: "Zayna Health Tech",
      start: "2021-05",
      end: "2022-12",
      role: { en: "Product engineering lead", ar: "قائدة هندسة المنتج" },
      team: { en: "Team of 31", ar: "فريق من 31" },
      metric: { value: "22 → 6", label: { en: "minutes average wait for a consultation", ar: "دقيقة متوسط الانتظار للاستشارة" } },
      summary: { en: "Redesigned how patients wait for, join and stay on video consultations at national scale.", ar: "إعادة تصميم طريقة انتظار المرضى للاستشارات المرئية والانضمام إليها والبقاء فيها، على نطاق وطني." },
      problem: { en: "Patients waited an average of 22 minutes for a video consultation, and 1 in 5 calls dropped.", ar: "كان المرضى ينتظرون 22 دقيقة في المتوسط للاستشارة المرئية، وكانت مكالمة من كل 5 تنقطع." },
      action: { en: "Led the redesign of the patient queue, the doctor console and the video layer.", ar: "قادت إعادة تصميم طابور المرضى ولوحة الطبيب وطبقة الفيديو." },
      result: { en: "3.1 million consultations in 2022; average wait fell from 22 to 6 minutes and dropped calls from 20% to 3%.", ar: "3.1 مليون استشارة في 2022؛ وانخفض متوسط الانتظار من 22 إلى 6 دقائق، والمكالمات المنقطعة من 20% إلى 3%." },
      tech: ["React", "React Native", "WebRTC", "Node.js", "Google Cloud"],
      award: { en: "Digital Health Innovation Award, Middle East Health Informatics Board 2021", ar: "جائزة الابتكار في الصحة الرقمية، Middle East Health Informatics Board 2021" },
      demo: "",
      repo: "",
    },
    {
      slug: "savings-goals",
      name: "Savings Goals",
      org: "Faseela Ventures",
      start: "2024-01",
      end: "2024-08",
      role: { en: "Research and design lead", ar: "قائدة البحث والتصميم" },
      team: { en: "Team of 8", ar: "فريق من 8" },
      metric: { value: "610,000", label: { en: "goals opened in 6 months", ar: "هدف ادخار خلال 6 أشهر" } },
      summary: { en: "A goal-setting flow that got users of a fintech app saving for the first time.", ar: "تجربة لتحديد الأهداف جعلت مستخدمي تطبيق مالي يدّخرون لأول مرة." },
      problem: { en: "70% of users had never saved money inside the app.", ar: "70% من المستخدمين لم يدّخروا أي مبلغ داخل التطبيق من قبل." },
      action: { en: "Ran 48 interviews in 5 cities, tested 3 prototypes and designed the final goal-setting flow.", ar: "أجرت 48 مقابلة في 5 مدن، واختبرت 3 نماذج أولية، وصممت التجربة النهائية لتحديد الأهداف." },
      result: { en: "610,000 goals opened in 6 months, with an average of SAR 2,300 saved per goal; won Best Fintech Experience 2024.", ar: "فُتح 610,000 هدف خلال 6 أشهر، بمتوسط ادخار 2,300 ريال لكل هدف؛ وفازت بجائزة أفضل تجربة تقنية مالية 2024." },
      tech: ["React Native", "GraphQL", "Figma"],
      award: { en: "Best Fintech Experience, Arab Fintech Excellence Awards 2024", ar: "أفضل تجربة تقنية مالية، Arab Fintech Excellence Awards 2024" },
      demo: "",
      repo: "",
    },
    {
      slug: "qalam-code-editor",
      name: "Qalam Learn Code Editor",
      org: "Qalam Learn",
      start: "2019-02",
      end: "2021-04",
      role: { en: "Co-founder, design and front-end", ar: "شريكة مؤسسة، التصميم والواجهات الأمامية" },
      team: { en: "Team of 4", ar: "فريق من 4" },
      metric: { value: "18% → 46%", label: { en: "course completion", ar: "نسبة إكمال الدورات" } },
      summary: { en: "A browser code editor that explains errors in plain Arabic.", ar: "محرر كود في المتصفح يشرح الأخطاء بلغة عربية بسيطة." },
      problem: { en: "Learners quit when English error messages stopped their code.", ar: "كان المتعلمون ينسحبون عندما توقف رسائلُ الخطأ الإنجليزية الكودَ الذي يكتبونه." },
      action: { en: "Built a browser code editor that explains errors in plain Arabic and suggests the next step.", ar: "بنت محرر كود في المتصفح يشرح الأخطاء بلغة عربية بسيطة ويقترح الخطوة التالية." },
      result: { en: "Course completion rose from 18% to 46%.", ar: "ارتفعت نسبة إكمال الدورات من 18% إلى 46%." },
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
      demo: "",
      repo: "",
    },
    {
      slug: "khatt-typography-engine",
      name: "Khatt Adaptive Typography Engine",
      org: { en: "PhD research, Eastmoor Institute of Technology", ar: "بحث الدكتوراه، Eastmoor Institute of Technology" },
      start: "2019-09",
      end: "2022-07",
      role: { en: "Researcher and sole developer", ar: "الباحثة والمطوّرة الوحيدة" },
      team: { en: "Solo", ar: "عمل فردي" },
      metric: { value: "+19%", label: { en: "reading speed, 31% fewer errors", ar: "في سرعة القراءة، وأخطاء أقل بنسبة 31%" } },
      summary: { en: "An engine that adapts Arabic text to the reader and the screen. Now a granted patent.", ar: "محرك يكيّف النص العربي بحسب القارئ والشاشة، وأصبح براءة اختراع ممنوحة." },
      problem: { en: "Arabic text on screens is often too small, too dense and hard to scan.", ar: "النص العربي على الشاشات غالبًا صغير جدًا ومكتظ وصعب التصفح." },
      action: { en: "Built an engine that adjusts Arabic font size, spacing and line length to the reader and the screen, then tested it with 312 participants.", ar: "بنت محركًا يضبط حجم الخط العربي والمسافات وطول السطر بحسب القارئ والشاشة، ثم اختبرته مع 312 مشاركًا." },
      result: { en: "Reading speed rose by 19% and errors fell by 31%; the method was granted a patent in Jun 2024.", ar: "ارتفعت سرعة القراءة بنسبة 19% وانخفضت الأخطاء بنسبة 31%؛ ومُنحت الطريقة براءة اختراع في يونيو 2024." },
      tech: ["TypeScript", "Canvas API", "Python"],
      demo: "",
      repo: "",
    },
    {
      slug: "hirfa-ui",
      name: "Hirfa UI",
      tag: { en: "Open source", ar: "مفتوح المصدر" },
      org: { en: "Open source", ar: "مفتوح المصدر" },
      start: "2020-03",
      end: null,
      role: { en: "Founder and lead maintainer", ar: "المؤسسة والمشرفة الرئيسية" },
      team: { en: "210 contributors", ar: "210 مساهمين" },
      metric: { value: "9,800", label: { en: "GitHub stars, 1.2M npm downloads a year", ar: "نجمة على GitHub، و1.2 مليون تنزيل سنويًا من npm" } },
      summary: { en: "An open-source React component library built for right-to-left from day one.", ar: "مكتبة مكوّنات React مفتوحة المصدر صُممت لدعم الاتجاه من اليمين لليسار منذ البداية." },
      problem: { en: "Popular component libraries handled right-to-left layouts poorly.", ar: "كانت مكتبات المكوّنات الشائعة تتعامل بشكل ضعيف مع التخطيطات من اليمين لليسار." },
      action: { en: "Designed and built 95 components with mirrored layouts, Arabic typography presets and full keyboard support.", ar: "صممت وبنت 95 مكوّنًا بتخطيطات معكوسة، وإعدادات جاهزة للطباعة العربية، ودعم كامل للوحة المفاتيح." },
      result: { en: "9,800 GitHub stars and 1.2 million npm downloads a year; won the Open Source Impact Award 2022.", ar: "9,800 نجمة على GitHub و1.2 مليون تنزيل سنويًا من npm؛ وفازت بجائزة الأثر في المصادر المفتوحة 2022." },
      tech: ["React", "TypeScript", "CSS logical properties", "Storybook"],
      award: { en: "Open Source Impact Award, Arab Open Source Foundation 2022", ar: "جائزة الأثر في المصادر المفتوحة، Arab Open Source Foundation 2022" },
      demo: "",
      repo: "https://github.example/yara-mansouri",
      repoLabel: "github.example/yara-mansouri",
    },
    {
      slug: "dalil-accessibility-toolkit",
      name: "Dalil Accessibility Toolkit",
      org: { en: "Side project", ar: "مشروع جانبي" },
      start: "2022-01",
      end: "2022-09",
      role: { en: "Designer and developer", ar: "المصممة والمطوّرة" },
      team: { en: "Solo", ar: "عمل فردي" },
      metric: { value: "42", label: { en: "Arabic-specific accessibility checks", ar: "فحصًا لإمكانية الوصول خاصًا بالعربية" } },
      summary: { en: "A browser extension that finds the accessibility issues other checkers miss on Arabic pages.", ar: "إضافة للمتصفح تكشف مشكلات إمكانية الوصول التي تفوت أدوات الفحص الأخرى في الصفحات العربية." },
      problem: { en: "Accessibility checkers missed issues specific to Arabic and right-to-left pages.", ar: "كانت أدوات فحص إمكانية الوصول تغفل المشكلات الخاصة بالصفحات العربية والصفحات من اليمين لليسار." },
      action: { en: "Built a browser extension that flags 42 Arabic-specific accessibility issues and explains how to fix each one.", ar: "بنت إضافة للمتصفح ترصد 42 مشكلة في إمكانية الوصول خاصة بالعربية، وتشرح طريقة إصلاح كل منها." },
      result: { en: "Used by 3,400 developers in 22 countries.", ar: "يستخدمها 3,400 مطوّر في 22 دولة." },
      tech: ["JavaScript", "Chrome Extensions API", "axe-core"],
      demo: "",
      repo: "",
    },
    {
      slug: "rafeeq-rides",
      name: "Rafeeq Rides Matching App",
      org: "Rafeeq Rides",
      start: "2015-04",
      end: "2016-12",
      role: { en: "Co-founder and CTO", ar: "شريكة مؤسسة ورئيسة التقنية" },
      team: { en: "Team of 11", ar: "فريق من 11" },
      metric: { value: "140,000", label: { en: "rides for university students", ar: "رحلة لطلاب الجامعات" } },
      summary: { en: "A ride-matching app that paired students by campus, timetable and route.", ar: "تطبيق يطابق بين الطلاب في الرحلات بحسب الحرم الجامعي والجدول الدراسي والمسار." },
      problem: { en: "University students had few safe and affordable ways to commute.", ar: "كانت خيارات التنقل الآمنة وذات التكلفة المناسبة قليلة أمام طلاب الجامعات." },
      action: { en: "Designed the matching system that paired riders by campus, timetable and route.", ar: "صممت نظام المطابقة الذي يجمع الركاب بحسب الحرم الجامعي والجدول الدراسي والمسار." },
      result: { en: "26,000 sign-ups and 140,000 rides before the company closed in Dec 2016.", ar: "26,000 تسجيل و140,000 رحلة قبل إغلاق الشركة في ديسمبر 2016." },
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
      demo: "",
      repo: "",
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: { en: "PhD in Human-Computer Interaction", ar: "دكتوراه في التفاعل بين الإنسان والحاسوب" },
      school: "Eastmoor Institute of Technology",
      mode: { en: "Part-time, remote", ar: "دوام جزئي، عن بُعد" },
      start: "2018-09",
      end: "2022-07",
      details: [
        { en: "Thesis: “Adaptive Typography for Arabic Interfaces: Readability, Density and Trust”", ar: "الأطروحة: “Adaptive Typography for Arabic Interfaces: Readability, Density and Trust”" },
        { en: "Best Doctoral Thesis in HCI, 2022", ar: "أفضل أطروحة دكتوراه في التفاعل بين الإنسان والحاسوب، 2022" },
      ],
    },
    {
      degree: { en: "Executive Certificate in Technology Leadership", ar: "شهادة تنفيذية في القيادة التقنية" },
      school: "Eastmoor Business School",
      mode: { en: "Online", ar: "عن بُعد" },
      start: "2021-01",
      end: "2021-06",
      details: [
        { en: "6-month program completed while working full-time", ar: "برنامج مدته 6 أشهر أكملته أثناء العمل بدوام كامل" },
      ],
    },
    {
      degree: { en: "MSc in Interaction Design, with Distinction", ar: "ماجستير في تصميم التفاعل، بامتياز" },
      school: "University of Northbridge",
      mode: NORTHBRIDGE,
      start: "2011-09",
      end: "2012-09",
      details: [
        { en: "Dissertation: “Bilingual Navigation Menus on Small Screens”", ar: "رسالة الماجستير: “Bilingual Navigation Menus on Small Screens”" },
        { en: "Full scholarship", ar: "منحة دراسية كاملة" },
      ],
    },
    {
      degree: { en: "BSc in Computer Science, First Class Honours", ar: "بكالوريوس علوم الحاسب، مرتبة الشرف الأولى" },
      school: "Najd Valley University",
      mode: RIYADH,
      start: "2006-09",
      end: "2010-06",
      details: [
        { en: "GPA: 4.81 / 5.00", ar: "المعدل: 4.81 من 5.00" },
        { en: "Exchange semester: Lindenhall University, Germany, Feb 2009 – Jul 2009", ar: "فصل تبادل طلابي: Lindenhall University، ألمانيا، فبراير 2009 – يوليو 2009" },
        { en: "Best Graduation Project, 2010", ar: "أفضل مشروع تخرج، 2010" },
      ],
    },
  ],

  // ── Certifications ─────────────────────────────────────────
  // status: "progress" | "active" | "lifetime" | "expired"
  certificationsNote: {
    en: "19 earned, 1 in progress. All issuers and credential IDs are fictional.",
    ar: "19 شهادة مكتسبة وواحدة قيد الإنجاز. جميع الجهات المانحة وأرقام الشهادات خيالية.",
  },
  certifications: [
    { name: "Certified Security Architecture Professional (CSAP)", issuer: "Global Cyber Assurance Council", status: "progress", note: { en: "Exam booked for Dec 2026", ar: "الاختبار محجوز في ديسمبر 2026" } },
    { name: "Certified Cloud Solutions Architect – Professional", issuer: "Cloud Architecture Guild", year: 2025, status: "active", id: "CAG-CSA-25-0912" },
    { name: "Certified Design Leader", issuer: "Arabian Design Council", year: 2025, status: "active", id: "ADC-CDL-25-0044" },
    { name: "Multi-Cloud Platform Architect", issuer: "Halcyon Cloud Institute", year: 2024, status: "active", id: "HLC-MPA-24-3307" },
    { name: "Certified Container Application Developer", issuer: "Open Container Academy", year: 2024, status: "active", id: "OCA-CAD-24-1185" },
    { name: "Open Banking Product Specialist", issuer: "Gulf FinTech Academy", year: 2024, status: "active", id: "GFA-OBP-24-0219" },
    { name: "Certified Project Leadership Professional", issuer: "International Project Leadership Society", year: 2023, status: "active", id: "IPLS-CPL-23-5560" },
    { name: "Certified Accessibility Specialist", issuer: "Inclusive Interfaces Council", year: 2023, status: "active", id: "IIC-CAS-23-0471" },
    { name: "Applied Data Visualization Certificate", issuer: "Riyadh Data Institute", year: 2023, status: "lifetime", id: "RDI-ADV-23-0118" },
    { name: "UX Research and Interaction Design Certificate", issuer: "Meridian UX Institute", year: 2022, status: "lifetime", id: "MUI-UXR-22-8842" },
    { name: "Enterprise Architecture Practitioner", issuer: "Global Enterprise Architecture Forum", year: 2022, status: "active", id: "GEAF-EAP-22-0193" },
    { name: "Certified Agile Product Owner", issuer: "Agile Practice Council", year: 2022, status: "expired", expired: 2024, id: "APC-APO-22-6620" },
    { name: "Professional Scrum Facilitator, Level 1", issuer: "Agile Delivery Institute", year: 2021, status: "lifetime", id: "ADI-PSF-21-4410" },
    { name: "Cloud Application Developer – Associate", issuer: "Skyline Developer Program", year: 2021, status: "expired", expired: 2023, id: "SDP-CAD-21-2075" },
    { name: "IT Service Management Foundation", issuer: "Service Excellence Board", year: 2020, status: "lifetime", id: "SEB-ITSM-20-9931" },
    { name: "Health Data Privacy Practitioner", issuer: "Middle East Health Informatics Board", year: 2020, status: "active", id: "MEHIB-HDP-20-0306" },
    { name: "Lean Six Sigma Green Belt", issuer: "Institute for Process Excellence", year: 2019, status: "lifetime", id: "IPE-LSS-19-1402" },
    { name: "Security Fundamentals Professional", issuer: "Cyber Readiness Academy", year: 2019, status: "expired", expired: 2022, id: "CRA-SFP-19-7718" },
    { name: "Usability Analysis Professional", issuer: "Usability Practice Institute", year: 2016, status: "lifetime", id: "UPI-UAP-16-0268" },
    { name: "Advanced Motion Design for Interfaces", issuer: "London School of Interface Craft", year: 2014, status: "lifetime", id: "LSIC-MD-14-0052" },
  ],

  // ── Awards ─────────────────────────────────────────────────
  awards: [
    { title: "Design Technology Leader of the Year", by: "Gulf Design Week Awards", year: 2025, for: { en: "For the Mizan Design System", ar: "عن نظام التصميم Mizan" } },
    { title: "Best Fintech Experience", by: "Arab Fintech Excellence Awards", year: 2024, for: { en: "For Savings Goals", ar: "عن ميزة أهداف الادخار" } },
    { title: "Top 40 Under 40 in Saudi Tech", by: "Riyadh Tech Review", year: 2023, for: { en: "For career achievement", ar: "عن إنجازاتها المهنية" } },
    { title: "Best Doctoral Thesis in HCI", by: "Eastmoor Institute of Technology", year: 2022, for: { en: "For the PhD thesis", ar: "عن أطروحة الدكتوراه" } },
    { title: "Open Source Impact Award", by: "Arab Open Source Foundation", year: 2022, for: { en: "For Hirfa UI", ar: "عن مكتبة Hirfa UI" } },
    { title: "Digital Health Innovation Award", by: "Middle East Health Informatics Board", year: 2021, for: { en: "For the telemedicine platform", ar: "عن منصة الطب الاتصالي" } },
    { title: "Women in Tech Leadership Award", by: "Saudi Women in Design Network", year: 2020, for: { en: "For leadership at Zayna Health Tech", ar: "عن قيادتها في Zayna Health Tech" } },
    { title: "Silver, Responsive Design category", by: "London Web Craft Awards", year: 2014, for: { en: "For a retail client website at Brightwell Studio", ar: "عن موقع لعميل في قطاع التجزئة في Brightwell Studio" } },
    { title: "Rising Star in UX", by: "UK Interaction Design Guild", year: 2013, for: { en: "For a public-sector client website at Brightwell Studio", ar: "عن موقع لعميل من القطاع العام في Brightwell Studio" } },
    { title: "Best Graduation Project", by: "Najd Valley University", year: 2010, for: { en: "For an Arabic speech-to-text note-taking app", ar: "عن تطبيق لتدوين الملاحظات بتحويل الكلام العربي إلى نص" } },
  ],

  // ── Patents ────────────────────────────────────────────────
  patents: [
    { title: "Method for adaptive Arabic text rendering based on reading context", number: "Patent No. SA 11223 (fictional)", status: { en: "Granted Jun 2024", ar: "ممنوحة في يونيو 2024" }, granted: true },
    { title: "System for bilingual component theming in design systems", number: "Application No. SA 2025-0417 (fictional)", status: { en: "Filed Mar 2025, pending", ar: "قُدّمت في مارس 2025، قيد الدراسة" }, granted: false },
  ],

  // ── Publications (selected 6 of 9) ─────────────────────────
  publicationsNote: { en: "Selected 6 of 9.", ar: "مختارة: 6 من أصل 9." },
  publicationsLink: { label: "scholar.example/yaram", url: "https://scholar.example/yaram" },
  publications: [
    { authors: "Al-Mansouri, Y., & Marsh, H.", year: 2022, title: "Adaptive typography for Arabic interfaces: A study with 312 readers", venue: "Journal of Human-Centred Computing, 14(3), 211–238." },
    { authors: "Al-Mansouri, Y.", year: 2021, title: "Trust signals in Arabic health apps", venue: "Proceedings of the International Conference on Arabic Interfaces (ICAI 2021), 45–56." },
    { authors: "Al-Mansouri, Y., Rahman, S., & Okafor, T.", year: 2020, title: "Right-to-left design systems at scale", venue: "Proceedings of DesignOps Summit Asia 2020, 12–19." },
    { authors: "Al-Mansouri, Y., & Marsh, H.", year: 2020, title: "Measuring reading comfort on small screens", venue: "ICAI 2020 Workshop on Arabic Typography, 8–13." },
    { authors: "Al-Mansouri, Y.", year: 2019, title: "Teaching front-end development in Arabic: Lessons from 50,000 learners", venue: "Gulf Journal of Computing Education, 7(1), 33–49." },
    { authors: "Hart, L., & Al-Mansouri, Y.", year: 2012, title: "Bilingual navigation menus on small screens", venue: "Northbridge Interaction Lab Technical Report NIL-TR-2012-07." },
  ],

  // ── Speaking (selected 8 of 31) and media ──────────────────
  talksNote: { en: "Selected 8 of 31 talks.", ar: "مختارة: 8 من أصل 31 محاضرة." },
  talks: [
    { type: "keynote", title: "Design systems that speak two languages", event: "Najd Developer Days 2025", city: { en: "Riyadh", ar: "الرياض" }, year: 2025 },
    { type: "talk", title: "Accessibility is a product decision", event: "Gulf Design Week 2025", city: { en: "Dubai", ar: "دبي" }, year: 2025 },
    { type: "panel", title: "Building trust in fintech UX", event: "Gulf Fintech Builders Forum 2024", city: { en: "Riyadh", ar: "الرياض" }, year: 2024 },
    { type: "talk", title: "Scaling a team from 6 to 64", event: "Engineering Leadership Week 2023", city: { en: "Cairo", ar: "القاهرة" }, year: 2023 },
    { type: "talk", title: "What my PhD taught me about Arabic type", event: "Typography Majlis 2022", city: { en: "Jeddah", ar: "جدة" }, year: 2022 },
    { type: "keynote", title: "Telemedicine at national scale", event: "Digital Health Middle East Summit 2021", city: { en: "Online", ar: "عن بُعد" }, year: 2021 },
    { type: "talk", title: "Why our startup failed", event: "Founders Night Riyadh 2016", city: { en: "Riyadh", ar: "الرياض" }, year: 2016 },
    { type: "talk", title: "Responsive design for right-to-left", event: "Frontend Horizons London 2014", city: { en: "London", ar: "لندن" }, year: 2014 },
  ],
  media: [
    { kind: { en: "Cover story", ar: "قصة الغلاف" }, title: "The engineer who designs in two directions", outlet: "Riyadh Tech Review", date: { en: "Mar 2023", ar: "مارس 2023" } },
    { kind: { en: "Podcast guest", ar: "ضيفة بودكاست" }, title: "From startup failure to Principal Engineer", outlet: "Build in Arabic, Episode 42", date: { en: "Jun 2024", ar: "يونيو 2024" } },
    { kind: { en: "YouTube channel", ar: "قناة يوتيوب" }, title: "Yara Builds", outlet: { en: "86 tutorials on design systems and right-to-left front-end · 48,000 subscribers", ar: "86 درسًا عن أنظمة التصميم والواجهات الأمامية من اليمين لليسار · 48,000 مشترك" }, date: { en: "2020 – Present", ar: "2020 – حتى الآن" } },
    { kind: { en: "Article", ar: "مقال" }, title: "Accessibility debt in fintech", outlet: { en: "Medium · Read 120,000 times", ar: "Medium · قُرئ 120,000 مرة" }, date: { en: "Nov 2023", ar: "نوفمبر 2023" } },
  ],

  // ── Leadership, teaching and volunteering ──────────────────
  leadershipNote: { en: "Held alongside the full-time roles above.", ar: "بالتوازي مع الوظائف بدوام كامل المذكورة أعلاه." },
  leadership: [
    { role: { en: "Adjunct Lecturer (part-time)", ar: "محاضرة متعاونة (دوام جزئي)" }, org: "College of Computing, Najd Valley University", start: "2019-09", end: "2024-06", detail: { en: "Taught Human-Computer Interaction, Front-End Development and Design Systems to 1,400+ students over 10 semesters", ar: "درّست التفاعل بين الإنسان والحاسوب وتطوير الواجهات الأمامية وأنظمة التصميم لأكثر من 1,400 طالب على مدى 10 فصول دراسية" } },
    { role: { en: "Advisory Board Member", ar: "عضوة المجلس الاستشاري" }, org: "Saudi Women in Design Network", start: "2022-03", end: null, detail: { en: "Runs the annual mentorship program for 60 early-career designers", ar: "تدير برنامج الإرشاد السنوي لـ 60 مصممة ومصممًا في بداية مسيرتهم" } },
    { role: { en: "Technical Advisor", ar: "مستشارة تقنية" }, org: { en: "2 early-stage health-tech startups", ar: "شركتان ناشئتان في التقنية الصحية" }, start: "2024-02", end: null, detail: { en: "Advises on product strategy, hiring and architecture", ar: "تقدم المشورة في استراتيجية المنتج والتوظيف والبنية التقنية" } },
    { role: { en: "Mentor", ar: "مرشدة" }, org: "Najd Valley Startup Accelerator", start: "2020-01", end: null, detail: { en: "Mentored 25 startups across 6 cohorts", ar: "أرشدت 25 شركة ناشئة في 6 دفعات" } },
    { role: { en: "Hackathon Judge", ar: "محكّمة هاكاثونات" }, org: { en: "Various organizers", ar: "جهات منظمة متعددة" }, start: "2018-01", end: null, detail: { en: "Judged 12 hackathons in Riyadh, Jeddah and Dubai", ar: "حكّمت 12 هاكاثونًا في الرياض وجدة ودبي" } },
    { role: { en: "Volunteer Instructor", ar: "مدربة متطوعة" }, org: "Code for Community, Riyadh", start: "2017-01", end: "2017-06", detail: { en: "Taught a 12-week web development course to 45 adult learners", ar: "درّست دورة تطوير ويب مدتها 12 أسبوعًا لـ 45 متعلمًا بالغًا" } },
  ],

  // ── Languages ──────────────────────────────────────────────
  // level: 0–5, used to draw the proficiency bar (C2 = 5, A1 = 1).
  languages: [
    { name: { en: "Arabic", ar: "العربية" }, level: 5, detail: { en: "Native", ar: "اللغة الأم" } },
    { name: { en: "English", ar: "الإنجليزية" }, level: 5, detail: { en: "Fluent (C2), IELTS 8.5", ar: "طلاقة (C2)، IELTS 8.5" } },
    { name: { en: "French", ar: "الفرنسية" }, level: 4, detail: { en: "Upper intermediate (B2), DELF B2", ar: "فوق المتوسط (B2)، DELF B2" } },
    { name: { en: "German", ar: "الألمانية" }, level: 2, detail: { en: "Elementary (A2), from the exchange semester", ar: "مبتدئ متقدم (A2)، من فصل التبادل الطلابي" } },
    { name: { en: "Turkish", ar: "التركية" }, level: 1, detail: { en: "Beginner (A1), currently learning", ar: "مبتدئ (A1)، تتعلمها حاليًا" } },
  ],

  // ── Interests ──────────────────────────────────────────────
  interests: [
    { icon: "pen", text: { en: "Arabic calligraphy, with work shown in 2 group exhibitions", ar: "الخط العربي، وعُرضت أعمالها في معرضَين جماعيَّين" } },
    { icon: "run", text: { en: "Long-distance running: 3 half marathons", ar: "الجري لمسافات طويلة: 3 أنصاف ماراثون" } },
    { icon: "camera", text: { en: "Restoring old film cameras", ar: "ترميم الكاميرات الفيلمية القديمة" } },
    { icon: "chess", text: { en: "Chess, with an online rating of 1,850", ar: "الشطرنج، بتصنيف 1,850 على الإنترنت" } },
  ],
};
