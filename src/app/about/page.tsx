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
            <p>I build software, hardware, and occasionally better questions.</p>
            <p>
              I’m currently studying physics, co-founding Elev, experimenting with computer vision
              and embedded systems, and collecting books that change how I think.
            </p>
            <p>
              This is not a polished biography. It is a record of the things I’m trying to
              understand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
