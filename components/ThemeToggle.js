"use client";

import Icon from "@/components/Icon";

// Switches between light and dark, and remembers the visitor's choice.
// The icon is picked by CSS (dark: classes), so it never shows the wrong one.
export default function ThemeToggle({ label }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-ink"
    >
      <span className="dark:hidden">
        <Icon name="moon" />
      </span>
      <span className="hidden dark:inline">
        <Icon name="sun" />
      </span>
    </button>
  );
}
