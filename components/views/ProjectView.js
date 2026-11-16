import Link from "next/link";
import { cv } from "@/data/cv";
import { t, ui, localePath, formatPeriod } from "@/lib/i18n";
import SiteShell from "@/components/SiteShell";
import Icon from "@/components/Icon";

const P = ui.project;

// One case-study page per project: problem → action → result.
export default function ProjectView({ project, lang }) {
  const i = cv.projects.findIndex((p) => p.slug === project.slug);
  const prev = cv.projects[(i - 1 + cv.projects.length) % cv.projects.length];
  const next = cv.projects[(i + 1) % cv.projects.length];
  const home = localePath("/", lang);

  const steps = [
    { key: "problem", label: P.problem, text: project.problem },
    { key: "action", label: P.action, text: project.action },
    { key: "result", label: P.result, text: project.result },
  ];

  const meta = [
    { label: P.org, value: t(project.org, lang) },
    { label: P.role, value: t(project.role, lang) },
    { label: P.team, value: t(project.team, lang) },
    { label: P.period, value: formatPeriod(project.start, project.end, lang) },
  ];

  return (
    <SiteShell lang={lang}>
      <article className="pb-16 pt-8 sm:pt-12">
        <Link href={`${home}#projects`} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
          <Icon name="arrow" flip className="h-4 w-4 rotate-180" />
          {t(P.back, lang)}
        </Link>

        {/* Header */}
        <header className="mt-8 grid gap-10 border-b border-line pb-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="rise latin text-sm font-medium text-accent">
              {String(i + 1).padStart(2, "0")} / {String(cv.projects.length).padStart(2, "0")}
              {project.tag && <span className="ms-3 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs">{t(project.tag, lang)}</span>}
            </p>
            <h1 className="rise latin font-display mt-3 text-[clamp(2.6rem,7vw,5rem)] leading-[1]" dir="ltr" style={{ "--delay": "60ms", textAlign: "start" }}>
              {project.name}
            </h1>
            <p className="rise mt-5 max-w-2xl text-xl text-muted" style={{ "--delay": "120ms" }}>
              {t(project.summary, lang)}
            </p>
          </div>
          <div className="rise lg:col-span-4 lg:self-end" style={{ "--delay": "180ms" }}>
            <div className="rounded-3xl bg-ink p-6 text-bg">
              <p className="latin font-display text-5xl leading-none sm:text-6xl" dir="ltr" style={{ textAlign: "start" }}>
                {project.metric.value}
              </p>
              <p className="mt-2 text-sm opacity-80">{t(project.metric.label, lang)}</p>
            </div>
          </div>
        </header>

        {/* Facts */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden border-b border-line md:grid-cols-4">
          {meta.map((m) => (
            <div key={t(m.label, "en")} className="py-6 pe-4">
              <dt className="text-xs uppercase tracking-wider text-muted">{t(m.label, lang)}</dt>
              <dd className="mt-1 font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>

        {/* Story */}
        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((s, n) => (
            <li
              key={s.key}
              data-reveal
              style={{ "--delay": `${n * 110}ms` }}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                s.key === "result" ? "border-accent bg-accent-soft" : "border-line bg-surface"
              }`}
            >
              <span className="latin font-display text-5xl text-accent/70">{`0${n + 1}`}</span>
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider">{t(s.label, lang)}</h2>
              <p className="mt-3 text-lg leading-relaxed">{t(s.text, lang)}</p>
              {n < 2 && (
                <Icon
                  name="arrow"
                  flip
                  className="absolute -end-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full border border-line bg-bg p-1.5 text-accent lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Tech, award, links */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">{t(ui.technologies, lang)}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((x) => (
                <li key={x} className="latin rounded-full border border-line bg-surface px-4 py-2 text-sm">
                  {x}
                </li>
              ))}
            </ul>
            {(project.repo || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink">
                    {t(P.demo, lang)} <Icon name="external" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-bg">
                    {t(P.repo, lang)}: <span className="latin">{project.repoLabel || project.repo}</span> <Icon name="external" />
                  </a>
                )}
              </div>
            )}
          </div>
          {project.award && (
            <aside className="lg:col-span-5" data-reveal>
              <div className="flex gap-4 rounded-3xl border border-line bg-surface p-6">
                <Icon name="award" className="h-7 w-7 text-warm" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{t(P.award, lang)}</p>
                  <p className="mt-1 font-medium">{t(project.award, lang)}</p>
                </div>
              </div>
            </aside>
          )}
        </div>

        {/* Previous / next */}
        <nav className="mt-20 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label={t(ui.nav.projects, lang)}>
          <Link href={localePath(`/projects/${prev.slug}/`, lang)} className="group rounded-3xl border border-line p-6 transition-colors hover:border-accent">
            <span className="flex items-center gap-2 text-sm text-muted">
              <Icon name="arrow" flip className="h-4 w-4 rotate-180" /> {t(P.prev, lang)}
            </span>
            <span className="latin font-display mt-2 block text-2xl" dir="auto">{prev.name}</span>
          </Link>
          <Link href={localePath(`/projects/${next.slug}/`, lang)} className="group rounded-3xl border border-line p-6 text-end transition-colors hover:border-accent">
            <span className="flex items-center justify-end gap-2 text-sm text-muted">
              {t(P.next, lang)} <Icon name="arrow" flip className="h-4 w-4" />
            </span>
            <span className="latin font-display mt-2 block text-2xl" dir="auto">{next.name}</span>
          </Link>
        </nav>
      </article>
    </SiteShell>
  );
}
