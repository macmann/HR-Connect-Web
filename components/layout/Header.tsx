"use client";

import Link from "next/link";
import { Locale } from "@/lib/i18n/translations";
import { useLocalization } from "@/components/layout/LocalizationProvider";

const logoUrl = "https://i.ibb.co/gLJMYFwW/Gemini-Generated-Image-faynn3faynn3fayn.png";

export function Header() {
  const { locale, setLocale, t } = useLocalization();

  const languageOptions: Array<{ code: Locale; label: string; flag: string }> = [
    { code: "en", label: t.nav.english, flag: "🇺🇸" },
    { code: "my", label: t.nav.myanmar, flag: "🇲🇲" },
    { code: "th", label: t.nav.thai, flag: "🇹🇭" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-start justify-between px-4 py-3">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center">
            <img src={logoUrl} alt={`${t.siteName} logo`} className="h-24 w-auto aspect-video object-cover" />
          </Link>
          <p className="-mt-2 text-xs font-medium text-neutral-600">{t.siteTagline}</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-2 text-neutral-600" role="group" aria-label="Language switch">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                aria-label={option.label}
                onClick={() => setLocale(option.code)}
                className={`rounded-md border px-2 py-1 text-lg leading-none transition ${
                  locale === option.code
                    ? "border-blue-500 bg-blue-50"
                    : "border-neutral-300 bg-white hover:bg-neutral-50"
                }`}
              >
                <span aria-hidden="true">{option.flag}</span>
              </button>
            ))}
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
