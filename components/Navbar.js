"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cv } from "@/data/cv";
import { t, ui, localePath } from "@/lib/i18n";
import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import { withBase } from "@/lib/withBase";

const sections = ["about", "experience", "projects", "skills", "education", "recognition", "speaking", "contact"];

// Same page in the other language: /projects/x <-> /ar/projects/x
function otherLanguagePath(pathname, lang) {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (lang === "ar") return clean.replace(/^\/ar/, "") || "/";
  return clean === "/" ? "/ar/" : `/ar${clean}/`;
}

export default function Navbar({ lang }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const home = localePath("/", lang);
  const isHome = pathname.replace(/\/$/, "") === home.replace(/\/$/, "") || (lang === "en" && pathname === "/");

  // Reading progress bar + navbar shadow
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    if (!isHome) return;
    const els = sections.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  // Close the mobile menu with Escape, and lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (id) => `${home}#${id}`;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent rtl:origin-right"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Main"}>
        <Link href={home} className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="latin grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-[15px] tracking-wide text-bg transition-transform group-hover:rotate-[-8deg]">
            {cv.initials}
          </span>
          <span className="text-sm font-semibold">{t(cv.shortName, lang)}</span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm xl:flex">
          {sections.map((id) => (
            <li key={id}>
              <Link
                href={href(id)}
                className={`rounded-full px-3 py-1.5 transition-colors hover:bg-surface-2 ${
                  active === id ? "bg-surface-2 text-ink" : "text-muted"
                }`}
                aria-current={active === id ? "true" : undefined}
              >
                {t(ui.nav[id], lang)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={withBase(otherLanguagePath(pathname, lang))}
            lang={lang === "ar" ? "en" : "ar"}
            className="rounded-full border border-line px-3 py-1.5 text-sm font-medium transition-colors hover:border-ink"
            aria-label={t(ui.switchLangLabel, lang)}
            title={t(ui.switchLangLabel, lang)}
          >
            {t(ui.switchLang, lang)}
          </a>
          <ThemeToggle label={t(ui.themeLabel, lang)} />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(ui.close, lang) : t(ui.menu, lang)}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-61px)] overflow-y-auto border-t border-line bg-bg`}
      >
        <ul className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          {sections.map((id, i) => (
            <li key={id} className="rise" style={{ "--delay": `${i * 35}ms` }}>
              <Link
                href={href(id)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 font-display text-3xl"
              >
                {t(ui.nav[id], lang)}
                <Icon name="arrow" flip className="h-5 w-5 text-muted" />
              </Link>
            </li>
          ))}
        </ul>
        {cv.cvFile && (
          <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
            <a
              href={withBase(`/${cv.cvFile}`)}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink"
            >
              <Icon name="download" />
              {t(ui.downloadCv, lang)}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
