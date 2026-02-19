"use client";

import { HeroBanner } from "@/components/layout/HeroBanner";
import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function DeploymentPage() {
  const { t } = useLocalization();

  return (
    <div className="space-y-12">
      <HeroBanner
        title={t.deployment.heroTitle}
        subtitle={t.deployment.heroSubtitle}
        imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{t.deployment.rolloutTag}</p>
        <h2 className="text-3xl font-semibold tracking-tight">{t.deployment.rolloutTitle}</h2>
      </section>

      <section className="grid gap-4">
        {t.deployment.steps.map((step) => (
          <article key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-neutral-900 p-6 text-neutral-100">
        <h3 className="text-xl font-semibold tracking-tight">{t.deployment.commandsTitle}</h3>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-black/30 p-4 text-sm text-neutral-100">{`npm install\nnpm run lint\nnpm run build\nnpm run start`}</pre>
      </section>
    </div>
  );
}
