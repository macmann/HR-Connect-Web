"use client";

import { HeroBanner } from "@/components/layout/HeroBanner";
import { useLocalization } from "@/components/layout/LocalizationProvider";


export default function FeaturesPage() {
  const { t } = useLocalization();

  return (
    <div className="space-y-12">
      <HeroBanner
        title={t.features.heroTitle}
        subtitle={t.features.heroSubtitle}
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{t.features.sectionTag}</p>
        <h2 className="text-3xl font-semibold tracking-tight">{t.features.sectionTitle}</h2>
        <p className="max-w-3xl text-neutral-700">{t.features.sectionDescription}</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {t.features.featureGroups.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-2xl text-white">{feature.icon}</div>
            <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{feature.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {feature.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
