import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { books } from "@/lib/site";

export const metadata: Metadata = {
  title: "Books",
  description: "Sarthak Pani's public reading shelf.",
};

export default function BooksPage() {
  return (
    <main className="site-grid">
      <SectionTitle count={books.length} title="Books" />

      <section className="books-intro" aria-label="Personal reading shelf">
        <div className="books-intro-copy">
          <span className="table-label">/ Personal shelf</span>
          <p>
            Books I have finished and kept close, across fiction, philosophy,
            science, economics, and company building.
          </p>
        </div>

        <figure className="books-intro-photo books-intro-photo-stack">
          <Image
            alt="A tall stack of books from Sarthak Pani's personal shelf"
            height={1308}
            sizes="(max-width: 767px) 100vw, 34vw"
            src="/books/sarthak-reading-stack.webp"
            width={592}
          />
        </figure>

        <figure className="books-intro-photo books-intro-photo-table">
          <Image
            alt="Books arranged on Sarthak Pani's reading table"
            height={1066}
            sizes="(max-width: 767px) 100vw, 46vw"
            src="/books/sarthak-reading-table.webp"
            width={1176}
          />
        </figure>
      </section>

      <section className="books-library" aria-labelledby="books-library-title">
        <header className="books-library-header table-label">
          <span id="books-library-title">/ All books</span>
          <span>{books.length} read</span>
        </header>

        <ul className="book-grid">
          {books.map((book, index) => (
            <li key={`${book.title}-${book.author}`}>
              <a
                className="book-card"
                href={book.sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="book-cover">
                  <Image
                    alt={`${book.title} book cover`}
                    className={book.coverScale ? "book-cover-image is-shelf-crop" : "book-cover-image"}
                    decoding={index < 2 ? "sync" : "async"}
                    fill
                    preload={index < 2}
                    sizes="(max-width: 539px) 46vw, (max-width: 799px) 30vw, (max-width: 1199px) 23vw, 15vw"
                    src={book.cover}
                    style={{
                      objectPosition: book.coverPosition,
                      transform: book.coverScale ? `scale(${book.coverScale})` : undefined,
                    }}
                    unoptimized
                  />
                </span>
                <span className="book-title">{book.title}</span>
                <span className="book-author">{book.author}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="books-source">
          Cover records from{" "}
          <a href="https://openlibrary.org" rel="noreferrer" target="_blank">
            Open Library
          </a>
          .
        </p>
      </section>
    </main>
  );
}
