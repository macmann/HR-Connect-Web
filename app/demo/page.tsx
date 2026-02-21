export default function DemoPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-700 px-8 py-12 text-white">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-100">Demo Access</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Experience B Connect in a Live Demo Environment</h1>
        <p className="mt-4 max-w-3xl text-sky-100">
          We provide demo software so you can explore key B Connect workflows, test navigation,
          and get familiar with the platform before full onboarding.
        </p>
        <a
          href="https://demo.b-connect.site/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
        >
          Try our Demo
        </a>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Demo Login Credentials</h2>
        <p className="mt-3 text-neutral-700">Use the credentials below to access the demo account.</p>
        <div className="mt-5 grid gap-3 text-sm text-neutral-800 md:grid-cols-2">
          <p className="rounded-xl bg-neutral-100 px-4 py-3">
            <span className="font-semibold">Email:</span> admin@b-connect.site
          </p>
          <p className="rounded-xl bg-neutral-100 px-4 py-3">
            <span className="font-semibold">Password:</span> admin
          </p>
        </div>
      </section>
    </div>
  );
}
