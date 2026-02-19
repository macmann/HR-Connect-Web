import Link from "next/link";

const logoUrl = "https://i.ibb.co/qYk1RXqT/Gemini-Generated-Image-8rfn768rfn768rfn.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="HR Connect logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-base font-semibold tracking-tight text-neutral-900">HR Connect</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link className="text-neutral-700 hover:text-neutral-900" href="/">
            Home
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/insights">
            Insights
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/#deployment-guide">
            Deployment
          </Link>
        </nav>
      </div>
    </header>
  );
}
