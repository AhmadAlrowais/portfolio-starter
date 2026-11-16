import Link from "next/link";
import { cv } from "@/data/cv";
import { t, ui, formatPeriod } from "@/lib/i18n";
import { withBase } from "@/lib/withBase";
import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import CountUp from "@/components/CountUp";
import Certifications from "@/components/Certifications";
import ContactPanel from "@/components/ContactPanel";
import Icon from "@/components/Icon";
import MirrorStage from "@/components/MirrorStage";

const S = ui.sections;

// Every organization she has worked or studied at, for the logo strip.
function organizations() {
  const names = [
    ...cv.experience.map((e) => e.company).filter((c) => typeof c === "string"),
    ...cv.education.map((e) => e.school),
  ];
  return [...new Set(names.map((n) => n.split(",")[0]))];
}

function Chip({ children, latin = false }) {
  return (
    <li className={`rounded-full border border-line bg-surface px-3 py-1 text-sm ${latin ? "latin" : ""}`}>{children}</li>
  );
}

export default function HomeView({ lang }) {
  const other = lang === "ar" ? "en" : "ar";
  const [first, ...rest] = t(cv.name, lang).split(" ");
  const orgs = organizations();
  const cover = cv.media[0];

  return (
    <SiteShell lang={lang}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pb-16 pt-10 text-center sm:pt-16 lg:pb-24">
        <div
          className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          aria-hidden="true"
        />

        <p className="rise inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {t(cv.location, lang)}
          </span>
          <span className="text-line" aria-hidden="true">/</span>
          <span>{t(ui.phd, lang)}</span>
        </p>

        <h1
          className="rise font-display mx-auto mt-6 max-w-5xl text-balance text-[clamp(3.25rem,9.5vw,6.75rem)] leading-[0.95]"
          style={{ "--delay": "80ms" }}
        >
          {first} {rest[0]} <em className="text-accent">{rest.slice(1).join(" ")}</em>
        </h1>
        <p
          lang={other}
          dir={other === "ar" ? "rtl" : "ltr"}
          className={`rise font-display mx-auto mt-3 w-fit text-2xl text-muted sm:text-3xl ${other === "en" ? "latin" : ""}`}
          style={{ "--delay": "140ms" }}
        >
          {t(cv.name, other)}
        </p>

        <ul
          className="rise mt-8 flex flex-col items-center gap-x-4 gap-y-1 font-medium sm:flex-row sm:flex-wrap sm:justify-center sm:text-lg"
          style={{ "--delay": "200ms" }}
        >
          {cv.roles.map((r, i) => (
            <li key={t(r, "en")} className="flex items-center gap-4">
              {i > 0 && <span className="hidden text-accent sm:inline" aria-hidden="true">✦</span>}
              {t(r, lang)}
            </li>
          ))}
        </ul>

        <p className="rise mx-auto mt-4 max-w-2xl text-lg text-muted sm:text-xl" style={{ "--delay": "260ms" }}>
          {t(cv.tagline, lang)}
        </p>

        <div className="rise mt-9 flex flex-wrap items-center justify-center gap-3" style={{ "--delay": "320ms" }}>
          {cv.cvFile && (
            <a
              href={withBase(`/${cv.cvFile}`)}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              <Icon name="download" />
              {t(ui.downloadCv, lang)}
            </a>
          )}
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bg"
          >
            {t(ui.viewWork, lang)}
            <Icon name="arrow" flip />
          </Link>
          <Link href="#contact" className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-medium underline-offset-4 hover:underline">
            {t(ui.getInTouch, lang)}
          </Link>
        </div>

        {/* The same profile in two directions: what she is known for */}
        <figure className="rise mx-auto mt-14 max-w-5xl" style={{ "--delay": "400ms" }}>
          <MirrorStage lang={lang} />
          <figcaption className="mt-6">
            <p className="latin font-display text-2xl italic" dir="ltr">
              “{cover.title}”
            </p>
            <p className="mt-1 text-sm text-muted">
              {t(cover.kind, lang)} · <span className="latin">{cover.outlet}</span> · {t(cover.date, lang)}
            </p>
          </figcaption>
        </figure>
      </section>

      {/* ── Organizations strip ──────────────────────────── */}
      <div className="relative -mx-5 overflow-hidden border-y border-line py-5 sm:-mx-8" dir="ltr" aria-label={t(ui.workedWith, lang)}>
        <p className="sr-only">{t(ui.workedWith, lang)}</p>
        <div className="marquee flex w-max gap-12 whitespace-nowrap" dir="ltr" aria-hidden="true">
          {[...orgs, ...orgs].map((o, i) => (
            <span key={i} className="latin font-display text-2xl text-muted">
              {o} <span className="ms-12 text-accent">✦</span>
            </span>
          ))}
        </div>
        <ul className="sr-only">
          {orgs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>

      {/* ── Highlights ───────────────────────────────────── */}
      <section aria-labelledby="highlights-title" className="py-16 sm:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4" data-reveal>
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">{t(S.highlights.kicker, lang)}</p>
            <h2 id="highlights-title" className="font-display mt-2 text-4xl sm:text-5xl">
              {t(S.highlights.title, lang)}
            </h2>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <li key={i} className="bg-surface p-5 sm:p-7" data-reveal style={{ "--delay": `${(i % 4) * 70}ms` }}>
              <p className="font-display text-5xl text-ink sm:text-6xl">
                <CountUp value={h.value} suffix={h.suffix} />
              </p>
              <p className="mt-2 font-medium leading-snug">{t(h.label, lang)}</p>
              <p className="mt-1 text-sm text-muted">{t(h.note, lang)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <Section id="about" number="01" kicker={t(S.about.kicker, lang)} title={t(S.about.title, lang)}>
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="text-xl leading-relaxed sm:text-2xl sm:leading-relaxed lg:col-span-7" data-reveal>
            {t(cv.summary, lang)}
          </p>
          <dl className="space-y-6 lg:col-span-5" data-reveal style={{ "--delay": "120ms" }}>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{t(ui.industries, lang)}</dt>
              <dd>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cv.industries.map((x) => (
                    <Chip key={t(x, "en")}>{t(x, lang)}</Chip>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{t(ui.countries, lang)}</dt>
              <dd>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cv.countries.map((x) => (
                    <Chip key={t(x, "en")}>{t(x, lang)}</Chip>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{t(ui.studied, lang)}</dt>
              <dd className="mt-2 font-medium">{t(cv.education[0].degree, lang)}</dd>
              <dd className="latin text-sm text-muted">{cv.education[0].school}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* ── Experience ───────────────────────────────────── */}
      <Section id="experience" number="02" kicker={t(S.experience.kicker, lang)} title={t(S.experience.title, lang)}>
        <ol className="relative border-s border-line">
          {cv.experience.map((job, i) => (
            <li key={i} className="relative ps-6 pb-12 last:pb-0 sm:ps-10" data-reveal>
              <span
                className={`absolute -start-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
                  job.end === null ? "border-accent bg-accent" : job.isBreak ? "border-dashed border-muted bg-bg" : "border-ink bg-bg"
                }`}
                aria-hidden="true"
              />
              <div className="grid gap-2 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <p className="text-sm font-medium text-accent">{formatPeriod(job.start, job.end, lang)}</p>
                  <p className="mt-1 text-sm text-muted">{t(job.location, lang)}</p>
                </div>
                <div className={`lg:col-span-9 ${job.isBreak ? "rounded-2xl border border-dashed border-line p-5" : ""}`}>
                  <h3 className="text-xl font-semibold leading-snug">{t(job.role, lang)}</h3>
                  {job.company && <p className="latin mt-0.5 text-muted" dir="auto">{t(job.company, lang)}</p>}
                  <ul className="mt-3 space-y-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-ink/90">
                        <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{t(p, lang)}</span>
                      </li>
                    ))}
                  </ul>
                  {job.tech && (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={t(ui.technologies, lang)}>
                      {job.tech.map((x) => (
                        <li key={x} className="latin rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted">
                          {x}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Projects ─────────────────────────────────────── */}
      <Section id="projects" number="03" kicker={t(S.projects.kicker, lang)} title={t(S.projects.title, lang)}>
        <div className="grid gap-5 md:grid-cols-2">
          {cv.projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} lang={lang} index={i} />
          ))}
        </div>
      </Section>

      {/* ── Skills ───────────────────────────────────────── */}
      <Section id="skills" number="04" kicker={t(S.skills.kicker, lang)} title={t(S.skills.title, lang)}>
        <ul className="grid gap-4 md:grid-cols-2">
          {cv.skills.map((s, i) => (
            <li key={i} className="rounded-2xl border border-line bg-surface p-5" data-reveal style={{ "--delay": `${(i % 2) * 80}ms` }}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{t(s.group, lang)}</h3>
                <p className="shrink-0 text-sm text-muted">
                  {t(ui.levels[s.level], lang)} · <span className="latin">{s.years}</span> {t(ui.years, lang)}
                </p>
              </div>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2"
                role="img"
                aria-label={`${s.years} ${t(ui.years, lang)}`}
              >
                <div className="h-full rounded-full bg-accent" style={{ width: `${(s.years / 18) * 100}%` }} />
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li key={t(item, "en")} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs">
                    {t(item, lang)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Education + certifications ───────────────────── */}
      <Section id="education" number="05" kicker={t(S.education.kicker, lang)} title={t(S.education.title, lang)}>
        <ul className="grid gap-4 md:grid-cols-2">
          {cv.education.map((e, i) => (
            <li key={i} className="flex flex-col rounded-3xl border border-line bg-surface p-6" data-reveal style={{ "--delay": `${(i % 2) * 80}ms` }}>
              <p className="text-sm font-medium text-accent">{formatPeriod(e.start, e.end, lang)}</p>
              <h3 className="font-display mt-2 text-2xl leading-tight">{t(e.degree, lang)}</h3>
              <p className="latin mt-1 text-muted">{e.school}</p>
              <p className="text-sm text-muted">{t(e.mode, lang)}</p>
              <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
                {e.details.map((d, j) => (
                  <li key={j}>{t(d, lang)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-16" id="certifications">
          <div className="mb-6" data-reveal>
            <h3 className="font-display text-3xl sm:text-4xl">{t(S.certifications.title, lang)}</h3>
            <p className="mt-2 text-sm text-muted">{t(cv.certificationsNote, lang)}</p>
          </div>
          <Certifications lang={lang} />
        </div>
      </Section>

      {/* ── Recognition ──────────────────────────────────── */}
      <Section id="recognition" number="06" kicker={t(S.recognition.kicker, lang)} title={t(S.recognition.title, lang)}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Icon name="award" className="h-5 w-5 text-accent" /> {t(ui.awards, lang)}
            </h3>
            <ol className="divide-y divide-line border-y border-line">
              {cv.awards.map((a) => (
                <li key={a.title} className="grid grid-cols-[3.5rem_1fr] gap-3 py-4" data-reveal>
                  <span className="latin font-display text-2xl text-accent">{a.year}</span>
                  <div>
                    <p className="latin font-medium" dir="ltr" style={{ textAlign: "start" }}>{a.title}</p>
                    <p className="text-sm text-muted">
                      <span className="latin">{a.by}</span> · {t(a.for, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Icon name="patent" className="h-5 w-5 text-accent" /> {t(ui.patents, lang)}
            </h3>
            <ul className="space-y-4">
              {cv.patents.map((p) => (
                <li key={p.number} className="rounded-3xl border border-line bg-surface p-6" data-reveal>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${p.granted ? "bg-accent-soft text-accent" : "bg-warm-soft text-warm"}`}>
                    {p.granted ? t(ui.granted, lang) : t(ui.pending, lang)}
                  </span>
                  <p className="latin font-display mt-3 text-2xl leading-snug" dir="ltr" style={{ textAlign: "start" }}>{p.title}</p>
                  <p className="latin mt-3 text-sm text-muted">{p.number}</p>
                  <p className="text-sm text-muted">{t(p.status, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Writing & talks ──────────────────────────────── */}
      <Section id="speaking" number="07" kicker={t(S.speaking.kicker, lang)} title={t(S.speaking.title, lang)}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon name="book" className="h-5 w-5 text-accent" /> {t(ui.publications, lang)}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {t(cv.publicationsNote, lang)} {t(ui.fullList, lang)}:{" "}
              <a href={cv.publicationsLink.url} className="latin underline underline-offset-4 hover:text-accent">
                {cv.publicationsLink.label}
              </a>
            </p>
            <ol className="mt-5 space-y-3" dir="ltr">
              {cv.publications.map((p, i) => (
                <li key={i} className="latin rounded-2xl border border-line bg-surface p-4 text-left" data-reveal>
                  <p className="text-xs text-muted">
                    {p.authors} ({p.year})
                  </p>
                  <p className="mt-1 font-medium">{p.title}</p>
                  <p className="mt-1 text-sm italic text-muted">{p.venue}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon name="mic" className="h-5 w-5 text-accent" /> {t(ui.talks, lang)}
            </h3>
            <p className="mt-1 text-sm text-muted">{t(cv.talksNote, lang)}</p>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {cv.talks.map((talk, i) => (
                <li key={i} className="flex gap-4 py-4" data-reveal>
                  <span className="latin w-12 shrink-0 font-display text-xl text-accent">{talk.year}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{t(ui.talkTypes[talk.type], lang)}</p>
                    <p className="latin font-medium" dir="ltr" style={{ textAlign: "start" }}>“{talk.title}”</p>
                    <p className="text-sm text-muted">
                      <span className="latin">{talk.event}</span> · {t(talk.city, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-semibold">{t(ui.media, lang)}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {cv.media.map((m, i) => (
                <li key={i} className="rounded-2xl border border-line bg-surface p-4" data-reveal>
                  <p className="text-xs uppercase tracking-wider text-accent">{t(m.kind, lang)}</p>
                  <p className="latin mt-1 font-medium" dir="ltr" style={{ textAlign: "start" }}>
                    {m.title === "Yara Builds" ? m.title : `“${m.title}”`}
                  </p>
                  <p className="mt-1 text-sm text-muted">{t(m.outlet, lang)}</p>
                  <p className="text-sm text-muted">{t(m.date, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Leadership & community ───────────────────────── */}
      <Section
        id="leadership"
        number="08"
        kicker={t(S.leadership.kicker, lang)}
        title={t(S.leadership.title, lang)}
        intro={t(cv.leadershipNote, lang)}
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cv.leadership.map((l, i) => (
            <li key={i} className="flex flex-col rounded-3xl border border-line bg-surface p-6" data-reveal style={{ "--delay": `${(i % 3) * 70}ms` }}>
              <Icon name="users" className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{t(l.role, lang)}</h3>
              <p className="latin text-sm text-muted" dir="auto">{t(l.org, lang)}</p>
              <p className="mt-3 flex-1">{t(l.detail, lang)}</p>
              <p className="mt-4 text-sm font-medium text-accent">{formatPeriod(l.start, l.end, lang)}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Languages & interests ────────────────────────── */}
      <Section id="personal" number="09" kicker={t(S.personal.kicker, lang)} title={t(S.personal.title, lang)}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-reveal>
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Icon name="globe" className="h-5 w-5 text-accent" /> {t(ui.languages, lang)}
            </h3>
            <ul className="divide-y divide-line border-y border-line">
              {cv.languages.map((l) => (
                <li key={t(l.name, "en")} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium">{t(l.name, lang)}</p>
                    <p className="text-sm text-muted">{t(l.detail, lang)}</p>
                  </div>
                  <span className="flex gap-1" role="img" aria-label={`${l.level} / 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={`h-2 w-5 rounded-full ${n <= l.level ? "bg-accent" : "bg-surface-2"}`} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--delay": "100ms" }}>
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Icon name="sparkle" className="h-5 w-5 text-accent" /> {t(ui.interests, lang)}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {cv.interests.map((x) => (
                <li key={x.icon} className="rounded-2xl border border-line bg-surface p-5">
                  <Icon name={x.icon} className="h-6 w-6 text-warm" />
                  <p className="mt-3">{t(x.text, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────── */}
      <Section id="contact" number="10" kicker={t(S.contact.kicker, lang)} title={t(S.contact.title, lang)}>
        <ContactPanel lang={lang} />
        <div className="mt-10" data-reveal>
          <h3 className="mb-4 text-sm text-muted">{t(ui.contact.elsewhere, lang)}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cv.contact.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent"
                >
                  <span className="flex items-center justify-between font-medium">
                    <span className="latin">{l.label}</span>
                    <Icon name="external" className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </span>
                  <span className="latin mt-1 break-all text-xs text-muted" dir="ltr" style={{ textAlign: "start" }}>
                    {l.display}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </SiteShell>
  );
}
