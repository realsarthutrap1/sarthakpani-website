import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[70dvh] max-w-[900px] place-items-center px-5 py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">This page is not here.</h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-muted">
          The address may have changed, or the page may still be taking shape.
        </p>
        <Link className="button button-primary mt-8" href="/">Return home</Link>
      </div>
    </main>
  );
}
