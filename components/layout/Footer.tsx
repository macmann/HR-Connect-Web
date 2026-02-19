"use client";

import { useLocalization } from "@/components/layout/LocalizationProvider";

export function Footer() {
  const { t } = useLocalization();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-neutral-600">© {new Date().getFullYear()} {t.siteName}</div>
    </footer>
  );
}
