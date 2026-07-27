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
        label="Reading log"
        title="Books that sharpen the questions."
        description="A public record of what I am reading, what stayed with me, and how those ideas changed my work."
      />
      <section className="section-shell border-t border-line">
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
            <h2 className="editorial-heading">The shelf is being curated.</h2>
            <p className="max-w-[58ch] self-end text-lg leading-8 text-muted">
              My reading notes are currently private and scattered. I will add
              books here only after the notes are ready to be shared in public.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
