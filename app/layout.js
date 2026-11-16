import localFont from "next/font/local";
import { cv } from "@/data/cv";
import { t } from "@/lib/i18n";
import "./globals.css";

// Fonts are self-hosted from app/fonts (no request to Google at runtime).
// IBM Plex Sans + IBM Plex Sans Arabic were designed to work together.
const plex = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

const plexArabic = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2", weight: "500" },
    { path: "./fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
    { path: "./fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-plex-ar",
  display: "swap",
  preload: false,
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const amiri = localFont({
  src: [
    { path: "./fonts/amiri-arabic-400-normal.woff2", weight: "400" },
    { path: "./fonts/amiri-arabic-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

// Shown in the browser tab, on Google, and in link previews.
export const metadata = {
  title: `${t(cv.shortName, "en")} | Portfolio`,
  description: t(cv.summary, "en"),
  openGraph: {
    title: `${t(cv.shortName, "en")} | Portfolio`,
    description: t(cv.title, "en"),
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e0f" },
  ],
};

// Runs before the page paints, so there is no flash of the wrong theme
// or the wrong text direction.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var s=localStorage.getItem('theme');var dark=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)d.classList.add('dark');if(/\\/ar(\\/|$)/.test(location.pathname)){d.lang='ar';d.dir='rtl';}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plex.variable} ${plexArabic.variable} ${instrument.variable} ${amiri.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
