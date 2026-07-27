export function SectionTitle({ count, title }: { count?: number; title: string }) {
  return (
    <header className="section-title">
      <h1>
        {title}
        {count === undefined ? null : <sup>({count})</sup>}
      </h1>
    </header>
  );
}
