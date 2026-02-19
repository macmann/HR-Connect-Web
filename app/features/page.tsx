import { HeroBanner } from "@/components/layout/HeroBanner";

const featureGroups = [
  {
    icon: "👥",
    title: "People Operations Hub",
    description: "Manage employee records, onboarding checklists, leave balances, and policy acknowledgements from one dashboard.",
    items: ["Digital employee profiles", "Self-service leave requests", "Automated policy workflows"]
  },
  {
    icon: "🎯",
    title: "Recruitment & Hiring",
    description: "Run end-to-end hiring pipelines with clear stage tracking, team collaboration, and faster candidate decisions.",
    items: ["Career page publishing", "Interview scheduling", "Pipeline and source analytics"]
  },
  {
    icon: "📈",
    title: "Performance & Growth",
    description: "Set goals, run reviews, and monitor growth plans so managers can develop high-performing teams consistently.",
    items: ["Quarterly goal tracking", "Review cycles", "Learning plan alignment"]
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    description: "Protect sensitive workforce data with role-based access, audit trails, and enterprise-ready governance controls.",
    items: ["Role-based permissions", "Activity audit logs", "Policy-compliant data handling"]
  },
  {
    icon: "⚡",
    title: "Automation & Integrations",
    description: "Connect B Connect with payroll, identity, and collaboration tools to eliminate repetitive manual steps.",
    items: ["Webhook + API support", "Payroll sync connectors", "Automated approval reminders"]
  },
  {
    icon: "📊",
    title: "HR Analytics",
    description: "Track hiring velocity, workforce trends, and engagement indicators with decision-ready reporting.",
    items: ["Live operational dashboards", "Custom filters and exports", "Executive summary reporting"]
  }
];

export const metadata = {
  title: "Features"
};

export default function FeaturesPage() {
  return (
    <div className="space-y-12">
      <HeroBanner
        title="Everything you need to run modern HR"
        subtitle="Explore the complete B Connect feature set built for employee operations, hiring, growth, and compliance."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Platform features</p>
        <h2 className="text-3xl font-semibold tracking-tight">Built for HR teams that need speed and clarity</h2>
        <p className="max-w-3xl text-neutral-700">
          B Connect combines day-to-day HR workflows with strategic capabilities so teams can support employees at every stage of the lifecycle.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {featureGroups.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-2xl text-white">
              {feature.icon}
            </div>
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
