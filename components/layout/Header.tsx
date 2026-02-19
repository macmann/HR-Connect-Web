"use client";

import Link from "next/link";
import { Locale } from "@/lib/i18n/translations";
import { useLocalization } from "@/components/layout/LocalizationProvider";

const logoUrl = "https://i.ibb.co/gLJMYFwW/Gemini-Generated-Image-faynn3faynn3fayn.png";

export function Header() {
  const { locale, setLocale, t } = useLocalization();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-start justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <img src={logoUrl} alt={`${t.siteName} logo`} className="h-24 w-auto aspect-video object-cover" />
        </Link>

        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <label htmlFor="language-switch">{t.nav.languageLabel}</label>
            <select
              id="language-switch"
              className="rounded-md border border-neutral-300 px-2 py-1 text-xs"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
            >
              <option value="en">{t.nav.english}</option>
              <option value="my">{t.nav.myanmar}</option>
              <option value="th">{t.nav.thai}</option>
            </select>
          </div>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link className="text-neutral-700 hover:text-neutral-900" href="/">
              {t.nav.home}
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-900" href="/features">
              {t.nav.features}
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-900" href="/deployment">
              {t.nav.deployment}
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-900" href="/contact-us">
              {t.nav.contactUs}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
