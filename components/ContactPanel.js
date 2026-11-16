"use client";

import { useState } from "react";
import { cv } from "@/data/cv";
import { t, ui } from "@/lib/i18n";
import Icon from "@/components/Icon";

function CopyButton({ text, lang }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-ink hover:text-ink"
    >
      <Icon name={done ? "check" : "copy"} className="h-3.5 w-3.5" />
      <span aria-live="polite">{done ? t(ui.contact.copied, lang) : t(ui.contact.copy, lang)}</span>
    </button>
  );
}

// Email/phone with copy buttons, plus a form that opens the visitor's
// email app (GitHub Pages has no server, so a mailto: link is used).
export default function ContactPanel({ lang }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { email, phone } = cv.contact;

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(t(ui.contact.required, lang));
      return;
    }
    setError("");
    const subject = encodeURIComponent(`${t(ui.contact.subject, lang)} — ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="flex items-center gap-2 text-sm text-muted">
            <Icon name="mail" /> {t(ui.contact.email, lang)}
          </p>
          <a href={`mailto:${email}`} className="latin mt-1 block break-all text-lg font-medium hover:text-accent">
            {email}
          </a>
          <div className="mt-3">
            <CopyButton text={email} lang={lang} />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="flex items-center gap-2 text-sm text-muted">
            <Icon name="phone" /> {t(ui.contact.phone, lang)}
          </p>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="latin mt-1 block text-lg font-medium hover:text-accent" dir="ltr">
            {phone}
          </a>
          <div className="mt-3">
            <CopyButton text={phone} lang={lang} />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="flex items-center gap-2 text-sm text-muted">
            <Icon name="pin" /> {t(ui.basedIn, lang)}
          </p>
          <p className="mt-1 text-lg font-medium">{t(cv.location, lang)}</p>
        </div>
      </div>

      <form onSubmit={submit} noValidate className="rounded-2xl border border-line bg-surface p-5 sm:p-7 lg:col-span-3">
        <h3 className="font-display text-2xl">{t(ui.contact.formTitle, lang)}</h3>
        <label className="mt-5 block text-sm font-medium">
          {t(ui.contact.name, lang)}
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          {t(ui.contact.message, lang)}
          <textarea
            className={`${field} min-h-36 resize-y`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        {error && (
          <p role="alert" className="mt-3 text-sm text-warm">
            {error}
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            <Icon name="mail" />
            {t(ui.contact.send, lang)}
          </button>
          <p className="text-xs text-muted">{t(ui.contact.formHint, lang)}</p>
        </div>
      </form>
    </div>
  );
}
