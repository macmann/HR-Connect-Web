const contactChannels = [
  {
    title: "Sales inquiries",
    description: "Speak with our team about pricing, demos, and implementation timelines.",
    value: "sales@hrconnect.example"
  },
  {
    title: "Customer support",
    description: "Get help with technical issues, configuration questions, and account access.",
    value: "support@hrconnect.example"
  },
  {
    title: "Partnerships",
    description: "Collaborate on integrations, advisory services, and strategic alliances.",
    value: "partners@hrconnect.example"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "548 Market Street, Suite 1024, San Francisco, CA 94104",
    phone: "+1 (415) 555-0147"
  },
  {
    city: "Austin",
    address: "300 Colorado Street, Floor 25, Austin, TX 78701",
    phone: "+1 (512) 555-0182"
  }
];

export default function ContactUsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-neutral-900 px-8 py-12 text-neutral-100">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Contact us</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Let&apos;s connect with your HR team</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">
          Whether you are exploring HR Connect for the first time or scaling across regions, our specialists are here to help.
          Share your goals and we&apos;ll guide you through the right setup for your business.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {contactChannels.map((channel) => (
          <article key={channel.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">{channel.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{channel.description}</p>
            <a href={`mailto:${channel.value}`} className="mt-4 inline-block text-sm font-medium text-sky-700 hover:text-sky-800">
              {channel.value}
            </a>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-2">
        {offices.map((office) => (
          <article key={office.city} className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{office.city} Office</h2>
            <p className="text-sm text-neutral-700">{office.address}</p>
            <p className="text-sm font-medium text-neutral-800">{office.phone}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-gradient-to-r from-sky-50 to-indigo-50 px-8 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Book a guided HR Connect walkthrough</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          See how HR Connect can centralize employee records, streamline hiring, and improve HR visibility in one platform.
        </p>
        <a
          href="mailto:sales@hrconnect.example?subject=Request%20a%20HR%20Connect%20demo"
          className="mt-6 inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Request a demo
        </a>
      </section>
    </div>
  );
}
