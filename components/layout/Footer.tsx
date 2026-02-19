export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} HR Connect • Ready for static deployment on Render
      </div>
    </footer>
  );
}
