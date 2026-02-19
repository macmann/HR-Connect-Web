import { HeroBanner } from "@/components/layout/HeroBanner";

const tocItems = [
  { id: "architecture-overview", label: "Architecture Overview" },
  { id: "core-capabilities", label: "Core Capabilities" },
  { id: "project-structure", label: "Project Structure" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "local-development-setup", label: "Local Development Setup" },
  { id: "environment-variables", label: "Environment Variables" },
  { id: "authentication-and-authorization", label: "Authentication and Authorization" },
  { id: "api-surface-high-level", label: "API Surface (High-Level)" },
  { id: "scheduled-jobs-and-background-processing", label: "Scheduled Jobs and Background Processing" },
  { id: "data-and-migration-scripts", label: "Data and Migration Scripts" },
  { id: "testing", label: "Testing" },
  { id: "operational-notes", label: "Operational Notes" },
  { id: "deployment-guide", label: "Deployment Guide" },
  { id: "license", label: "License" }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroBanner
        title="All-in-one HR operations platform"
        subtitle="HR Connect is built with Node.js, Express, MongoDB, and a static front-end served by the same backend. It supports end-to-end workflows across employee operations, recruitment, learning, payroll, and admin tooling."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
      />

      <section aria-label="Table of Contents" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold tracking-tight">Table of Contents</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a className="text-sm text-neutral-700 underline-offset-2 hover:underline" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="architecture-overview" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Architecture Overview</h2>
        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Single backend server (`server.js`) exposes REST endpoints and serves static UI assets from `public/`.</li>
          <li>MongoDB is the primary datastore via the official `mongodb` driver.</li>
          <li>Role-based access controls protect routes through `authRequired`, `managerOnly`, and `superadminOnly`.</li>
          <li>Modular routes are mounted for HR, public careers, learning hub, and admin roles.</li>
          <li>Cron jobs initialize at startup for leave and role-assignment reconciliation.</li>
        </ul>
      </section>

      <section id="core-capabilities" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Capabilities</h2>
        <div className="space-y-4">
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">1) Employee + Identity Flows</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Local login via `/login` and optional Microsoft SSO.</li>
              <li>Cookie + JWT-backed user context.</li>
              <li>Profile endpoints including `/api/my-profile`, `/api/my-payslip`, and `/api/me`.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">2) Leave Management</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Leave submission, entitlement calculations, reporting, export, and calendar endpoints.</li>
              <li>Monthly accrual and leave-cycle reset cron jobs.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">3) Recruitment + Careers</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Public careers pages, application submission, candidate lifecycle endpoints, and CV streaming.</li>
              <li>Position analytics and AI interview/recruitment OpenAPI resources.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">4) Learning Hub</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Protected learning routes mounted at `/api/learning-hub`.</li>
              <li>Role assignment reconciliation with scheduled sync support.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">5) Administration and Settings</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Admin role management, widget settings, token generation, email and AI settings APIs.</li>
              <li>Post-login sync settings and integration hooks.</li>
            </ul>
          </article>
          <article className="rounded-xl border border-neutral-200 p-5">
            <h3 className="font-semibold">6) Pairing/Agent Integrations</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-700">
              <li>Signed pairing init, poll, and claim routes.</li>
              <li>Replay/signature tolerance windows and rate limit controls via environment variables.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="project-structure" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Project Structure</h2>
        <pre className="overflow-x-auto rounded-xl bg-neutral-900 p-4 text-sm text-neutral-100">
{`HR-Connect/
├── api/
├── cron/
├── public/
├── scripts/
├── services/
├── utils/
├── db.js
├── server.js
├── pairingStore.js
├── aiSettings.js
└── README.md`}
        </pre>
      </section>

      <section id="tech-stack" className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
        <p className="text-neutral-700">
          Runtime: Node.js • Server: Express 5 • Database: MongoDB • Auth: JWT + cookies • Scheduling: node-cron • UI:
          Tailwind CSS + PostCSS + Autoprefixer.
        </p>
      </section>

      <section id="local-development-setup" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Local Development Setup</h2>
        <pre className="rounded-xl bg-neutral-900 p-4 text-sm text-neutral-100">{`npm install
cp .env.example .env
npm run dev`}</pre>
        <p className="text-neutral-700">Default URL: `http://localhost:3000` • Careers: `http://localhost:3000/careers`.</p>
      </section>

      <section id="environment-variables" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Environment Variables</h2>
        <p className="text-neutral-700">
          Configure server/CORS, admin bootstrap, database, SMTP, Microsoft SSO, pairing security, and widget token
          settings through `.env`.
        </p>
      </section>

      <section id="authentication-and-authorization" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Authentication and Authorization</h2>
        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Main login endpoint: `POST /login`.</li>
          <li>Optional Microsoft login flow starts at `GET /auth/microsoft`.</li>
          <li>Route guards: `authRequired`, `managerOnly`, `superadminOnly`.</li>
        </ul>
      </section>

      <section id="api-surface-high-level" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">API Surface (High-Level)</h2>
        <p className="text-neutral-700">
          Includes employee/profile, performance, leave, recruitment, public careers + AI interview, learning hub,
          admin roles, settings, and pairing endpoint groups.
        </p>
      </section>

      <section id="scheduled-jobs-and-background-processing" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Scheduled Jobs and Background Processing</h2>
        <p className="text-neutral-700">
          Startup initializes `monthlyLeaveCron`, `resetLeaveCycle`, and `learningRoleAssignmentSync` with production
          guards to avoid duplicate in-memory schedulers.
        </p>
      </section>

      <section id="data-and-migration-scripts" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Data and Migration Scripts</h2>
        <pre className="rounded-xl bg-neutral-900 p-4 text-sm text-neutral-100">{`node scripts/migrateLeaveSystem.js`}</pre>
      </section>

      <section id="testing" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Testing</h2>
        <pre className="rounded-xl bg-neutral-900 p-4 text-sm text-neutral-100">{`npm test`}</pre>
      </section>

      <section id="operational-notes" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Operational Notes</h2>
        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Use strong random secrets in non-dev environments.</li>
          <li>Avoid exposing production bearer tokens in frontend code.</li>
          <li>Validate CORS and cookie policy together behind proxies/custom domains.</li>
          <li>Ensure persistent storage for `/uploads` in production.</li>
        </ul>
      </section>

      <section id="deployment-guide" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Deployment Guide</h2>
        <p className="text-neutral-700">See `DEPLOYMENT.md` for VM provisioning, TLS, rollouts, backups, and troubleshooting.</p>
      </section>

      <section id="license" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">License</h2>
        <p className="text-neutral-700">This project includes a LICENSE file at the repository root.</p>
      </section>
    </div>
  );
}
