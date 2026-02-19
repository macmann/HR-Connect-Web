import { HeroBanner } from "@/components/layout/HeroBanner";

const steps = [
  {
    title: "1. Prepare your environment",
    details: [
      "Install Node.js 20+ and npm.",
      "Create environment variables for production values.",
      "Confirm your repository has the latest B Connect changes."
    ]
  },
  {
    title: "2. Install dependencies and validate locally",
    details: [
      "Run npm install to restore packages.",
      "Run npm run lint to validate code quality.",
      "Run npm run build to ensure the production bundle is generated successfully."
    ]
  },
  {
    title: "3. Deploy on Render",
    details: [
      "Create a new Web Service in Render and connect the repository.",
      "Use build command: npm install && npm run build.",
      "Use start command: npm run start.",
      "Set NODE_VERSION to 20 (or newer supported LTS)."
    ]
  },
  {
    title: "4. Verify production readiness",
    details: [
      "Check key routes: /, /features, and /deployment.",
      "Validate SSL, caching, and runtime logs in Render dashboard.",
      "Run a quick smoke test for navigation, forms, and content sections."
    ]
  }
];

export const metadata = {
  title: "Deployment Guide"
};

export default function DeploymentPage() {
  return (
    <div className="space-y-12">
      <HeroBanner
        title="Deployment guide"
        subtitle="Follow this guide to deploy B Connect reliably and validate your production environment."
        imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Production rollout</p>
        <h2 className="text-3xl font-semibold tracking-tight">Deploy B Connect in four clear phases</h2>
      </section>

      <section className="grid gap-4">
        {steps.map((step) => (
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
        <h3 className="text-xl font-semibold tracking-tight">Recommended commands</h3>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-black/30 p-4 text-sm text-neutral-100">
{`npm install
npm run lint
npm run build
npm run start`}
        </pre>
      </section>
    </div>
  );
}
