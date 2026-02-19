"use client";

import Link from "next/link";
import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function NotFound() {
  const { t } = useLocalization();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{t.common.notFoundTitle}</h1>
      <p className="text-neutral-700">{t.common.notFoundDescription}</p>
      <Link className="underline" href="/">
        {t.common.goHome}
      </Link>
    </div>
  );
}
