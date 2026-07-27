import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { books } from "@/lib/site";

export const metadata: Metadata = {
  title: "Books",
  description: "Sarthak Pani's public reading log and notes.",
};

export default function BooksPage() {
  return (
    <main className="site-grid">
      <SectionTitle count={books.length} title="Books" />
      <section className="blog-explorer" aria-label="Reading log">
        <aside className="about-index">
          <div className="filter-block">
            <div className="table-label"><span>/</span> Reading log</div>
          </div>
        </aside>
        <div className="blog-feed">
          <div className="article-header table-label" aria-hidden>
            <span className="date-label">/ Status</span>
            <span className="name-label">/ Name</span>
          </div>
          {books.length ? (
            <ul className="blog-list">
              {books.map((book) => (
                <li className="blog-row" key={`${book.title}-${book.author}`}>
                  <div className="blog-row-visible">
                    <div className="blog-row-link">
                      <span className="blog-date">
                        <span aria-hidden className="date-square" />
                        {book.status}
                      </span>
                      <span className="blog-row-title">{book.title} — {book.author}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-row">Reading notes will appear here after review.</p>
          )}
        </div>
      </section>
    </main>
  );
}
