import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How SarthakPani.com handles visitor information.",
};

export default function PrivacyPage() {
  return (
    <main className="site-grid">
      <SectionTitle title="Privacy" />
      <section className="about-layout">
        <aside className="about-index">
          <div className="filter-block">
            <div className="table-label"><span>/</span> Plain English</div>
          </div>
        </aside>
        <div className="about-content">
          <div className="about-copy">
            <h2>No ads. No tracking pixels. No personal profiles.</h2>
            <p>
              This site uses Vercel Web Analytics to count visits and understand which public pages
              are useful. It collects anonymous, aggregated usage information without third-party
              advertising cookies.
            </p>
            <p>
              The site has no accounts, comments, contact form, or database. If that changes, this
              notice will change with it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
