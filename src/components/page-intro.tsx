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
    <header className="page-shell pb-14 pt-20 md:pb-20 md:pt-28">
      <p className="eyebrow">{label}</p>
      <h1 className="mt-5 max-w-[17ch] text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-[58ch] text-lg leading-8 text-muted">{description}</p>
    </header>
  );
}
