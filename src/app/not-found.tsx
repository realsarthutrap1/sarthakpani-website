import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <h1>404</h1>
        <p>/ This page is not here.</p>
        <Link className="read-link" href="/blog">Return to blog</Link>
      </div>
    </main>
  );
}
