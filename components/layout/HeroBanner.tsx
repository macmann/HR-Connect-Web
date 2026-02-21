type HeroBannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  overlayClassName?: string;
};

export function HeroBanner({ title, subtitle, imageUrl, overlayClassName = "bg-black/55" }: HeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative min-h-[24rem] px-8 py-20 text-white sm:min-h-[28rem] sm:px-12 sm:py-24">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-3xl text-neutral-100">{subtitle}</p>
      </div>
    </section>
  );
}
