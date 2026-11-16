"use client";

import { useState } from "react";
import { cv } from "@/data/cv";
import { t, ui } from "@/lib/i18n";

const FILTERS = ["all", "active", "lifetime", "expired", "progress"];

const pill = {
  active: "bg-accent-soft text-accent",
  lifetime: "bg-surface-2 text-ink",
  expired: "bg-surface-2 text-muted line-through decoration-1",
  progress: "bg-warm-soft text-warm",
};

// Filterable list of all certifications from cv.js
export default function Certifications({ lang }) {
  const [filter, setFilter] = useState("all");
  const list = cv.certifications.filter((c) => filter === "all" || c.status === filter);
  const count = (f) => (f === "all" ? cv.certifications.length : cv.certifications.filter((c) => c.status === f).length);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={t(ui.sections.certifications.kicker, lang)}>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              filter === f ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t(ui.certFilters[f], lang)} <span className="latin opacity-60">{count(f)}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {t(ui.showing, lang)} {list.length}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {list.map((c) => (
          <li key={c.name} className="rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-muted">
            <div className="flex items-start justify-between gap-3">
              <h4 className="latin font-medium leading-snug" dir="ltr">{c.name}</h4>
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${pill[c.status]}`}>
                {t(ui.certFilters[c.status], lang)}
              </span>
            </div>
            <p className="latin mt-1 text-sm text-muted" dir="ltr">
              {c.issuer}
              {c.year ? ` · ${c.year}` : ""}
            </p>
            <p className="mt-2 text-xs text-muted">
              {c.status === "progress" && t(c.note, lang)}
              {c.status === "expired" && (
                <>
                  {t(ui.expiredIn, lang)} <span className="latin">{c.expired}</span> ·{" "}
                </>
              )}
              {c.id && (
                <>
                  {t(ui.credentialId, lang)}: <span className="latin font-mono">{c.id}</span>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
