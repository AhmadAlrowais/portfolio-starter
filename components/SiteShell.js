import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ui, t } from "@/lib/i18n";

// The frame around every page: skip link, navbar, content, footer.
// lang/dir are set here so the Arabic pages render right-to-left.
export default function SiteShell({ lang, children }) {
  return (
    <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} id="top" className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-accent px-4 py-2 text-accent-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {t(ui.skip, lang)}
      </a>
      <Navbar lang={lang} />
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
        {children}
      </main>
      <Footer lang={lang} />
      <Reveal />
    </div>
  );
}
