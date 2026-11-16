// Small helpers for the English / Arabic versions of the site.

export const LANGS = ["en", "ar"];

// Pick the right language from a { en, ar } value.
// Plain strings and numbers are returned as they are.
export function t(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value) && "en" in value) {
    return value[lang] ?? value.en;
  }
  return value;
}

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
};

// "2023-09" -> "Sep 2023" / "سبتمبر 2023"
export function formatMonth(ym, lang) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[lang][m - 1]} ${y}`;
}

// start/end -> "Sep 2023 – Present"
export function formatPeriod(start, end, lang) {
  const to = end ? formatMonth(end, lang) : ui.present[lang];
  return `${formatMonth(start, lang)} – ${to}`;
}

// Prefix a path with /ar for the Arabic version.
export function localePath(path, lang) {
  if (lang === "ar") return path === "/" ? "/ar/" : `/ar${path}`;
  return path;
}

// Interface text (buttons, headings). CV content lives in data/cv.js.
export const ui = {
  present: { en: "Present", ar: "حتى الآن" },
  skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  menu: { en: "Menu", ar: "القائمة" },
  close: { en: "Close menu", ar: "إغلاق القائمة" },
  switchLang: { en: "عربي", ar: "English" },
  switchLangLabel: { en: "اقرأ الموقع بالعربية", ar: "Read this site in English" },
  themeLabel: { en: "Toggle dark mode", ar: "تبديل الوضع الداكن" },
  downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  getInTouch: { en: "Get in touch", ar: "تواصل معها" },
  viewWork: { en: "See her work", ar: "استعرض أعمالها" },
  basedIn: { en: "Based in", ar: "مقيمة في" },
  workedWith: { en: "Where she has built", ar: "جهات عملت فيها" },
  coverQuote: { en: "Cover story", ar: "قصة غلاف" },
  phd: { en: "PhD, Human-Computer Interaction", ar: "دكتوراه في التفاعل بين الإنسان والحاسوب" },
  industries: { en: "Industries", ar: "القطاعات" },
  countries: { en: "Countries", ar: "الدول" },
  studied: { en: "Highest degree", ar: "أعلى مؤهل" },
  nav: {
    about: { en: "About", ar: "نبذة" },
    experience: { en: "Experience", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    skills: { en: "Skills", ar: "المهارات" },
    education: { en: "Education", ar: "التعليم" },
    recognition: { en: "Recognition", ar: "التكريم" },
    speaking: { en: "Writing & Talks", ar: "النشر والمحاضرات" },
    contact: { en: "Contact", ar: "التواصل" },
  },
  sections: {
    highlights: { kicker: { en: "At a glance", ar: "لمحة سريعة" }, title: { en: "Sixteen years, in numbers", ar: "ستة عشر عامًا بالأرقام" } },
    about: { kicker: { en: "About", ar: "نبذة" }, title: { en: "Designs it, builds it, studies it", ar: "تصمّم وتبني وتبحث" } },
    experience: { kicker: { en: "Experience", ar: "الخبرات" }, title: { en: "From freelance websites to a fintech super-app", ar: "من مواقع العمل الحر إلى تطبيق مالي شامل" } },
    projects: { kicker: { en: "Selected projects", ar: "مشاريع مختارة" }, title: { en: "Problems worth solving", ar: "مشكلات تستحق الحل" } },
    skills: { kicker: { en: "Core skills", ar: "المهارات الأساسية" }, title: { en: "A full-stack product toolkit", ar: "أدوات متكاملة لبناء المنتجات" } },
    education: { kicker: { en: "Education", ar: "التعليم" }, title: { en: "Research that ships", ar: "بحث يتحول إلى منتج" } },
    certifications: { kicker: { en: "Certifications", ar: "الشهادات الاحترافية" }, title: { en: "Keeping the craft current", ar: "مواكبة مستمرة للمهنة" } },
    recognition: { kicker: { en: "Recognition", ar: "التكريم" }, title: { en: "Awards and patents", ar: "الجوائز وبراءات الاختراع" } },
    speaking: { kicker: { en: "Writing & talks", ar: "النشر والمحاضرات" }, title: { en: "Sharing what she learns", ar: "تشارك ما تتعلمه" } },
    leadership: { kicker: { en: "Leadership & community", ar: "القيادة والمجتمع" }, title: { en: "Teaching, mentoring, volunteering", ar: "التدريس والإرشاد والتطوع" } },
    personal: { kicker: { en: "Beyond work", ar: "خارج العمل" }, title: { en: "Languages and interests", ar: "اللغات والاهتمامات" } },
    contact: { kicker: { en: "Contact", ar: "التواصل" }, title: { en: "Let’s build something in two directions", ar: "لنبنِ شيئًا في الاتجاهين" } },
  },
  technologies: { en: "Technologies", ar: "التقنيات" },
  yearsShort: { en: "yrs", ar: "سنة" },
  years: { en: "years", ar: "سنة" },
  levels: {
    expert: { en: "Expert", ar: "خبيرة" },
    advanced: { en: "Advanced", ar: "متقدمة" },
    intermediate: { en: "Intermediate", ar: "متوسطة" },
  },
  certFilters: {
    all: { en: "All", ar: "الكل" },
    active: { en: "Active", ar: "سارية" },
    lifetime: { en: "Lifetime", ar: "مدى الحياة" },
    expired: { en: "Expired", ar: "منتهية" },
    progress: { en: "In progress", ar: "قيد الإنجاز" },
  },
  expiredIn: { en: "Expired", ar: "انتهت في" },
  credentialId: { en: "Credential ID", ar: "رقم الشهادة" },
  showing: { en: "Showing", ar: "المعروض" },
  awards: { en: "Awards", ar: "الجوائز" },
  patents: { en: "Patents", ar: "براءات الاختراع" },
  granted: { en: "Granted", ar: "ممنوحة" },
  pending: { en: "Pending", ar: "قيد الدراسة" },
  publications: { en: "Publications", ar: "المنشورات العلمية" },
  fullList: { en: "Full list", ar: "القائمة الكاملة" },
  talks: { en: "Speaking", ar: "المحاضرات" },
  media: { en: "Media", ar: "في الإعلام" },
  talkTypes: {
    keynote: { en: "Keynote", ar: "كلمة رئيسية" },
    talk: { en: "Talk", ar: "محاضرة" },
    panel: { en: "Panel", ar: "جلسة حوارية" },
  },
  languages: { en: "Languages", ar: "اللغات" },
  interests: { en: "Interests", ar: "الاهتمامات" },
  project: {
    back: { en: "All projects", ar: "كل المشاريع" },
    problem: { en: "The problem", ar: "المشكلة" },
    action: { en: "What she did", ar: "ما قامت به" },
    result: { en: "The result", ar: "النتيجة" },
    role: { en: "Role", ar: "الدور" },
    team: { en: "Team", ar: "الفريق" },
    period: { en: "Period", ar: "الفترة" },
    org: { en: "Organization", ar: "الجهة" },
    award: { en: "Recognition", ar: "التكريم" },
    repo: { en: "Source code", ar: "الكود المصدري" },
    demo: { en: "Live demo", ar: "تجربة مباشرة" },
    readCase: { en: "Read the case study", ar: "اقرأ دراسة الحالة" },
    prev: { en: "Previous project", ar: "المشروع السابق" },
    next: { en: "Next project", ar: "المشروع التالي" },
  },
  contact: {
    email: { en: "Email", ar: "البريد الإلكتروني" },
    phone: { en: "Phone", ar: "الهاتف" },
    copy: { en: "Copy", ar: "نسخ" },
    copied: { en: "Copied", ar: "تم النسخ" },
    elsewhere: { en: "Find her online", ar: "حساباتها على الإنترنت" },
    formTitle: { en: "Send a message", ar: "أرسل رسالة" },
    name: { en: "Your name", ar: "اسمك" },
    message: { en: "Message", ar: "الرسالة" },
    send: { en: "Open in email app", ar: "افتح في تطبيق البريد" },
    formHint: { en: "This opens your email app with the message ready to send.", ar: "سيفتح هذا تطبيق البريد لديك والرسالة جاهزة للإرسال." },
    subject: { en: "Hello from your portfolio", ar: "مرحبًا من موقعك الشخصي" },
    required: { en: "Please fill in both fields.", ar: "يرجى تعبئة الحقلين." },
  },
  backToTop: { en: "Back to top", ar: "العودة للأعلى" },
  footerNote: { en: "Portfolio Summit 2026 · Built with Next.js and Tailwind CSS from a fictional CV.", ar: "Portfolio Summit 2026 · بُني باستخدام Next.js وTailwind CSS من سيرة ذاتية خيالية." },
  notFound: { en: "Page not found", ar: "الصفحة غير موجودة" },
  goHome: { en: "Go home", ar: "العودة للرئيسية" },
};
