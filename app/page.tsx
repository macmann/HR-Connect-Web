import Link from "next/link";
import { HeroBanner } from "@/components/layout/HeroBanner";

const highlights = [
  {
    title: "Unified employee operations",
    description:
      "Manage onboarding, leave, payroll visibility, and profile workflows in one secure workspace for every employee."
  },
  {
    title: "Faster hiring, better candidates",
    description:
      "Launch branded career pages, streamline candidate pipelines, and accelerate shortlisting with AI-assisted workflows."
  },
  {
    title: "Built-in learning and performance",
    description:
      "Upskill teams with role-based learning paths and track progress with clear visibility for managers and HR leaders."
  }
];

const platformFeatures = [
  "Employee self-service portal",
  "Leave planning and automated accruals",
  "Recruitment and careers management",
  "Learning hub with role sync",
  "Admin controls and policy settings",
  "Secure integrations and automation APIs"
];

const metrics = [
  { value: "40%", label: "faster HR request turnaround" },
  { value: "55%", label: "reduction in manual hiring steps" },
  { value: "99.9%", label: "platform uptime for critical workflows" }
];

const testimonials = [
  {
    quote:
      "B Connect replaced scattered tools with one platform. Our HR team now spends less time on admin and more time supporting people.",
    name: "Head of People, Mid-Market Fintech"
  },
  {
    quote:
      "From leave approvals to recruiting analytics, leadership finally has a single source of truth for workforce decisions.",
    name: "HR Operations Manager, Regional Enterprise"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroBanner
        title="The modern HR platform for growing teams"
        subtitle="B Connect helps organizations centralize employee operations, hiring, and learning in one high-impact, easy-to-adopt platform."
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
      />

      <section aria-label="Key platform highlights" className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl bg-neutral-900 px-8 py-10 text-neutral-100 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Why teams choose B Connect</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Everything HR needs to deliver a better employee experience</h2>
          <p className="mt-4 text-neutral-300">
            Replace fragmented HR tooling with a connected platform that supports the entire employee lifecycle, from candidate application to long-term growth.
          </p>
        </div>
        <ul className="grid gap-3 text-sm sm:grid-cols-2">
          {platformFeatures.map((feature) => (
            <li key={feature} className="rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Business impact</p>
          <h2 className="text-3xl font-semibold tracking-tight">Designed to drive measurable HR outcomes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-3xl font-bold tracking-tight text-neutral-900">{metric.value}</p>
              <p className="mt-2 text-sm text-neutral-700">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Customer stories</p>
          <h2 className="text-3xl font-semibold tracking-tight">Trusted by people teams scaling with confidence</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <blockquote className="text-neutral-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-neutral-900">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-gradient-to-r from-sky-50 to-indigo-50 px-8 py-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-600">Get started</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Build a high-performing workforce with B Connect</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Centralize HR operations, improve hiring velocity, and empower employees with intuitive self-service. Explore product capabilities and launch confidently with our deployment guide.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/features"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Explore features
          </Link>
          <a
            href="mailto:sales@b-connect.site"
            className="rounded-full border border-neutral-400 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-white"
          >
            Contact sales
          </a>
        </div>
      </section>
    </div>
  );
}
