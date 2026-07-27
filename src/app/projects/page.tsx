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
        label="Selected work"
        title="Systems built across software and the physical world."
        description="A working archive of products, engineering prototypes, and experiments that connect evidence, intelligence, and real-world feedback."
      />
      <section className="section-shell border-t border-line">
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>
    </main>
  );
}
