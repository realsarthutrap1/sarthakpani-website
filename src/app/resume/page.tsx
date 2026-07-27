import type { Metadata } from "next";
import { DownloadSimple, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Sarthak Pani, technical founder, engineer, and physics student.",
};

export default function ResumePage() {
  return (
    <main>
      <PageIntro
        label="Resume"
        title="Experience and work."
        description="A concise record of my education, projects, engineering, and leadership."
      />
      <section className="page-shell content-section">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="editorial-heading">Download my resume.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" download href="/resume/sarthak-pani-resume.pdf">
                Download PDF
                <DownloadSimple aria-hidden size={18} weight="bold" />
              </a>
              <a
                className="button button-secondary"
                href="/resume/sarthak-pani-resume.pdf"
                rel="noreferrer"
                target="_blank"
              >
                Open PDF
                <ArrowUpRight aria-hidden size={17} weight="bold" />
              </a>
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Current work</h3>
              <p className="mt-3 leading-7 text-muted">
                Co-founder and CEO of Elev, building an AI evidence platform for mission-driven programs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Study</h3>
              <p className="mt-3 leading-7 text-muted">
                Physics and astrophysics preparation supported by mathematics, computing, and engineering coursework.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Engineering</h3>
              <p className="mt-3 leading-7 text-muted">
                AI systems, full-stack software, embedded hardware, networking, and computer vision.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Leadership</h3>
              <p className="mt-3 leading-7 text-muted">
                Startup building, public speaking, nonprofit leadership, sales, and community partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
