// A reusable wrapper for each part of the home page.
// The id lets the navbar jump to it: <a href="#projects">.
export default function Section({ id, kicker, title, number, intro, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="mb-10 max-w-3xl sm:mb-14" data-reveal>
        <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-accent">
          {number && <span className="latin text-muted">{number}</span>}
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          {kicker}
        </p>
        <h2 id={`${id}-title`} className="font-display mt-3 text-4xl leading-[1.05] sm:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
