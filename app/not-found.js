import Link from "next/link";
import { ui } from "@/lib/i18n";

// Shown for any page that does not exist (in both languages).
export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-display text-8xl text-accent">404</p>
        <h1 className="font-display mt-4 text-3xl">{ui.notFound.en}</h1>
        <p lang="ar" dir="rtl" className="font-display mt-1 text-2xl text-muted">{ui.notFound.ar}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink">{ui.goHome.en}</Link>
          <Link href="/ar/" lang="ar" className="rounded-full border border-line px-5 py-3 text-sm font-medium">{ui.goHome.ar}</Link>
        </div>
      </div>
    </div>
  );
}
