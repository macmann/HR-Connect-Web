"use client";

import { useLocalization } from "@/components/layout/LocalizationProvider";

export default function ContactUsPage() {
  const { t } = useLocalization();

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-neutral-900 px-8 py-12 text-neutral-100">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">{t.contact.tag}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{t.contact.title}</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">{t.contact.description}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {t.contact.channels.map((channel) => (
          <article key={channel.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">{channel.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{channel.description}</p>
            <a href={`mailto:${channel.value}`} className="mt-4 inline-block text-sm font-medium text-sky-700 hover:text-sky-800">
              {channel.value}
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-gradient-to-r from-sky-50 to-indigo-50 px-8 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{t.contact.ctaTitle}</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">{t.contact.ctaDescription}</p>
        <a
          href="mailto:sales@b-connect.site?subject=Request%20a%20B%20Connect%20demo"
          className="mt-6 inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          {t.contact.ctaButton}
        </a>
      </section>
    </div>
  );
}
