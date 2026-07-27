import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Sarthak Pani, technical founder, engineer, and physics student.",
};

export default function AboutPage() {
  return (
    <main className="site-grid">
      <SectionTitle title="About" />
      <section className="about-layout">
        <aside className="about-index">
          <div className="filter-block">
            <div className="table-label"><span>/</span> Profile</div>
          </div>
        </aside>
        <div className="about-content">
          <dl>
            <div className="about-row">
              <dt>Name</dt>
              <dd>Sarthak Pani</dd>
            </div>
            <div className="about-row">
              <dt>Work</dt>
              <dd>Founder, engineer, physics student</dd>
            </div>
            <div className="about-row">
              <dt>Interests</dt>
              <dd>AI, evidence systems, embedded engineering, computer vision, physics</dd>
            </div>
            <div className="about-row">
              <dt>Contact</dt>
              <dd><a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            </div>
          </dl>
          <div className="about-copy">
            <p>
              I build technology, study physics, and write about the questions that connect
              engineering, evidence, and the physical world.
            </p>
            <p>
              I co-founded Elev to help mission-driven organizations collect stronger evidence
              from everyday work. I have also built embedded, networking, and computer-vision
              prototypes that connect software to real systems.
            </p>
            <p>
              This site is my public notebook: reviewed essays, books worth remembering, and
              honest records of what I am learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
