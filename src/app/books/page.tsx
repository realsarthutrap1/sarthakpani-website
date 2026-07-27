import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { books } from "@/lib/site";

export const metadata: Metadata = {
  title: "Books",
  description: "Sarthak Pani's public reading log and notes.",
};

export default function BooksPage() {
  return (
    <main>
      <PageIntro
        label="Books"
        title="What I am reading."
        description="A simple log of books, notes, and ideas I want to remember."
      />
      <section className="page-shell content-section">
        {books.length ? (
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {books.map((book) => (
              <article key={`${book.title}-${book.author}`}>
                <p className="font-mono text-xs text-accent">{book.status}</p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em]">{book.title}</h2>
                <p className="mt-2 text-muted">{book.author}</p>
                {book.note ? <p className="mt-5 max-w-[52ch] leading-7 text-muted">{book.note}</p> : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="editorial-heading">The reading log is coming soon.</h2>
            <p className="max-w-[58ch] self-end text-lg leading-8 text-muted">
              I am organizing my notes and will add the first books here once
              they are ready to share.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
