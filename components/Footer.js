import Link from "next/link";
import { cv } from "@/data/cv";
import { t, ui, localePath } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function Footer({ lang }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-2xl">{t(cv.name, lang)}</p>
          <p className="mt-1 text-sm text-muted">
            © <span className="latin">{new Date().getFullYear()}</span> · {t(ui.footerNote, lang)}
          </p>
        </div>
        <Link
          href={`${localePath("/", lang)}#top`}
          className="inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink sm:self-auto"
        >
          <Icon name="arrow" className="h-4 w-4 -rotate-90" />
          {t(ui.backToTop, lang)}
        </Link>
      </div>
    </footer>
  );
}
