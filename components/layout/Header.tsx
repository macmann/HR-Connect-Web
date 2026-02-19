import Link from "next/link";

const logoUrl = "https://i.ibb.co/qYk1RXqT/Gemini-Generated-Image-8rfn768rfn768rfn.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <img src={logoUrl} alt="HR Connect logo" className="h-24 w-auto aspect-video object-cover" />
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link className="text-neutral-700 hover:text-neutral-900" href="/">
            Home
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/features">
            Features
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/deployment">
            Deployment
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/contact-us">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
