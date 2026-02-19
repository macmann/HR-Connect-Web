"use client";

import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function Loading() {
  const { t } = useLocalization();

  return <div className="text-neutral-700">{t.common.loading}</div>;
}
