import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectFeature } from "@/components/project-feature";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, AI, embedded systems, and computer vision work by Sarthak Pani.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main>
      <PageIntro
        label="Projects"
        title="Things I have built."
        description="Products and experiments across AI, evidence systems, and computer vision."
      />
      <section className="page-shell content-section">
        <div>
          {projects.map((project) => (
            <ProjectFeature headingLevel="h2" key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
