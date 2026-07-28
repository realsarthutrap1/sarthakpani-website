import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="about-photo">
            <Image
              alt="Sarthak Pani speaking at a Google Developer Group event"
              height={551}
              src="/about/sarthak-speaking.jpeg"
              width={502}
            />
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
            <h2>Difficult to compress.</h2>
            <p>
              Founder, engineer, and physics student are useful approximations.
            </p>
            <p>
              The longer version involves building Elev, studying physical systems, wiring hardware,
              writing software, reading books, and following questions that refuse to remain in one
              field.
            </p>
            <p>
              This site is the longer version: projects, essays, experiments, books, and unfinished
              ideas kept together before professional compression turns them into a clean story.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
