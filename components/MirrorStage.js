"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { t, ui, formatPeriod } from "@/lib/i18n";
import Icon from "@/components/Icon";

const M = ui.mirror;

// One language version of the mini profile. Both versions are stacked in the
// same grid cell, so the stage is always as tall as the taller of the two.
function Panel({ l, hidden, style, className = "" }) {
  const job = cv.experience[0];
  const project = cv.projects[0];
  const rtl = l === "ar";

  return (
    <div
      lang={l}
      dir={rtl ? "rtl" : "ltr"}
      aria-hidden={hidden}
      style={{ gridArea: "1 / 1", ...style }}
      className={`grid gap-6 bg-bg p-5 text-start sm:p-7 md:grid-cols-3 md:gap-8 ${className}`}
    >
      {/* Who */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="latin grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink font-display text-lg text-bg">
            {cv.initials}
          </span>
          <div>
            <p className="font-semibold leading-tight">{t(cv.shortName, l)}</p>
            <p className="text-sm text-muted">{t(cv.credential, l)}</p>
          </div>
        </div>
        <p className="font-display text-2xl leading-tight">{t(cv.roles[0], l)}</p>
        <ul className="flex flex-wrap gap-1.5">
          {cv.industries.map((x) => (
            <li key={t(x, "en")} className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs">
              {t(x, l)}
            </li>
          ))}
        </ul>
        <ul className="mt-auto space-y-1.5 text-sm text-muted">
          <li className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-accent" />
            {t(cv.location, l)}
          </li>
          <li className="flex items-center gap-2">
            <Icon name="sparkle" className="h-4 w-4 text-accent" />
            <span>
              <span className="latin">{t(job.company, l)}</span> · {formatPeriod(job.start, job.end, l)}
            </span>
          </li>
        </ul>
      </div>

      {/* Skills: the bars grow from the reading side, so they mirror too */}
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{t(M.skills, l)}</p>
        <ul className="mt-3 space-y-3">
          {cv.skills.slice(0, 4).map((s) => (
            <li key={t(s.group, "en")}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium">{t(s.group, l)}</span>
                <span className="shrink-0 text-muted">
                  <span className="latin">{s.years}</span> {t(ui.years, l)}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-accent" style={{ width: `${(s.years / 18) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured project */}
      <div className="flex flex-col rounded-2xl bg-accent-soft p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">{t(M.featured, l)}</p>
        <p className="latin mt-1 font-semibold">{project.name}</p>
        <p className="latin font-display mt-4 text-6xl leading-none text-accent">
          <bdi dir="ltr" className="latin font-display">{project.metric.value}</bdi>
        </p>
        <p className="mt-2 text-sm">{t(project.metric.label, l)}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-xs text-muted">
          <span className="latin">{t(project.org, l)}</span>
          <Icon name="arrow" className={`h-4 w-4 text-accent ${rtl ? "-scale-x-100" : ""}`} />
        </div>
      </div>
    </div>
  );
}

// The hero centrepiece: one profile card that wipes between its English
// (left-to-right) and Arabic (right-to-left) versions. It plays twice on
// its own, then waits for the visitor.
export default function MirrorStage({ lang }) {
  const pageIsArabic = lang === "ar";
  const [showAr, setShowAr] = useState(pageIsArabic);
  const [wipes, setWipes] = useState(0); // how many times it has flipped
  const current = useRef(pageIsArabic);
  const stopped = useRef(false);

  const flip = useCallback((toArabic) => {
    if (current.current === toArabic) return;
    current.current = toArabic;
    setShowAr(toArabic);
    setWipes((n) => n + 1);
  }, []);

  // Plays twice on its own, unless the visitor prefers reduced motion
  // or has already touched it.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const steps = [
      [2400, !pageIsArabic],
      [6200, pageIsArabic],
      [10600, !pageIsArabic],
      [14400, pageIsArabic],
    ];
    const timers = steps.map(([ms, toArabic]) =>
      setTimeout(() => {
        if (!stopped.current) flip(toArabic);
      }, ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [pageIsArabic, flip]);

  const choose = (toArabic) => {
    stopped.current = true;
    flip(toArabic);
  };

  const tab = (active) =>
    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active ? "bg-ink text-bg" : "text-muted hover:text-ink"
    }`;

  return (
    <div
      className="rounded-[2rem] border border-line bg-surface p-3 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)] sm:p-4"
      onPointerDown={() => (stopped.current = true)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-3 sm:px-2">
        <div role="group" aria-label={t(M.group, lang)} dir="ltr" className="inline-flex rounded-full border border-line bg-bg p-1">
          <button type="button" aria-pressed={!showAr} onClick={() => choose(false)} className={tab(!showAr)}>
            <span className="latin">English</span>
            <span className="latin text-[0.65rem] opacity-70">LTR</span>
          </button>
          <button type="button" aria-pressed={showAr} onClick={() => choose(true)} className={tab(showAr)}>
            <span lang="ar">العربية</span>
            <span className="latin text-[0.65rem] opacity-70">RTL</span>
          </button>
        </div>
        <p className="text-sm text-muted">{t(M.hint, lang)}</p>
      </div>

      <div className="relative grid overflow-hidden rounded-3xl border border-line" dir="ltr">
        <Panel l="en" hidden={showAr} />
        <Panel
          l="ar"
          hidden={!showAr}
          className="mirror-wipe"
          style={{ clipPath: showAr ? "inset(0 0 0 0)" : "inset(0 0 0 100%)" }}
        />
        {wipes > 0 && (
          <span
            key={wipes}
            aria-hidden="true"
            className={`mirror-edge ${showAr ? "mirror-edge-to-left" : "mirror-edge-to-right"}`}
          />
        )}
      </div>
    </div>
  );
}
