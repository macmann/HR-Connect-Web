"use client";

import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const { t } = useLocalization();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{t.common.errorTitle}</h1>
      <p className="text-neutral-700">{error.message}</p>
      <button className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800" onClick={() => reset()}>
        {t.common.tryAgain}
      </button>
    </div>
  );
}
