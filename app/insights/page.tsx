import Link from "next/link";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { getInsights } from "@/lib/mdx/getInsights";

export const metadata = {
  title: "Insights"
};

export default async function InsightsPage() {
  const posts = await getInsights();

  return (
    <div className="space-y-6">
      <HeroBanner
        title="HR Connect Insights"
        subtitle="Product notes, platform updates, and operational guidance for HR teams using HR Connect."
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
      />

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Latest posts</h2>
        <p className="text-neutral-700">MDX-driven posts from the local content folder.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/insights/${p.slug}`}
            className="rounded-2xl border border-neutral-200 p-5 hover:bg-neutral-50"
          >
            <div className="text-sm text-neutral-500">{new Date(p.date).toLocaleDateString()}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            {p.summary ? <div className="mt-2 text-sm text-neutral-700">{p.summary}</div> : null}
            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
