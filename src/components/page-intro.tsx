export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto max-w-[1400px] px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28 lg:px-12">
      <p className="eyebrow">{label}</p>
      <h1 className="mt-6 max-w-[15ch] text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-7 max-w-[62ch] text-lg leading-8 text-muted">{description}</p>
    </header>
  );
}
