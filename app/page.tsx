"use client";

import Link from "next/link";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function HomePage() {
  const { t } = useLocalization();

  return (
    <div className="space-y-16">
      <HeroBanner
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
      />

      <section aria-label="Key platform highlights" className="grid gap-4 md:grid-cols-3">
        {t.home.highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl bg-neutral-900 px-8 py-10 text-neutral-100 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">{t.home.whyTag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t.home.whyTitle}</h2>
          <p className="mt-4 text-neutral-300">{t.home.whyDescription}</p>
        </div>
        <ul className="grid gap-3 text-sm sm:grid-cols-2">
          {t.home.platformFeatures.map((feature) => (
            <li key={feature} className="rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{t.home.impactTag}</p>
          <h2 className="text-3xl font-semibold tracking-tight">{t.home.impactTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {t.home.metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-3xl font-bold tracking-tight text-neutral-900">{metric.value}</p>
              <p className="mt-2 text-sm text-neutral-700">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{t.home.testimonialsTag}</p>
          <h2 className="text-3xl font-semibold tracking-tight">{t.home.testimonialsTitle}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {t.home.testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <blockquote className="text-neutral-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-neutral-900">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-gradient-to-r from-sky-50 to-indigo-50 px-8 py-10">
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">{t.home.ctaTitle}</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">{t.home.ctaDescription}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/features" className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700">
            {t.nav.features}
          </Link>
          <a href="mailto:sales@b-connect.site" className="rounded-full border border-neutral-400 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-white">
            {t.home.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
