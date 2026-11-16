import Link from "next/link";
import { t, ui, localePath, formatPeriod } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function ProjectCard({ project, lang, index = 0 }) {
  return (
    <Link
      href={localePath(`/projects/${project.slug}/`, lang)}
      data-reveal
      style={{ "--delay": `${(index % 2) * 90}ms` }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] sm:p-7"
    >
      <div className="flex items-center justify-between gap-3 text-xs text-muted">
        <span className="latin">{formatPeriod(project.start, project.end, lang)}</span>
        <span>{t(project.org, lang)}</span>
      </div>

      <p className="latin mt-6 font-display text-5xl leading-none text-accent sm:text-6xl" dir="ltr">
        {project.metric.value}
      </p>
      <p className="mt-2 text-sm text-muted">{t(project.metric.label, lang)}</p>

      <h3 className="latin mt-6 text-xl font-semibold" dir="auto">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-muted">{t(project.summary, lang)}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t(ui.technologies, lang)}>
        {project.tech.map((tech) => (
          <li key={tech} className="latin rounded-full bg-surface-2 px-2.5 py-1 text-xs">
            {tech}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
        {t(ui.project.readCase, lang)}
        <Icon name="arrow" flip className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
