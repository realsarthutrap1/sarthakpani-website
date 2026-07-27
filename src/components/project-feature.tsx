import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ProjectMeta } from "@/lib/types";

export function ProjectFeature({
  project,
  headingLevel = "h3",
}: {
  project: ProjectMeta;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <Link className="project-row group" href={`/projects/${project.slug}`}>
      <div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <Heading>{project.title}</Heading>
        <p>{project.summary}</p>
      </div>
      <ArrowUpRight aria-hidden className="project-arrow" size={22} weight="regular" />
    </Link>
  );
}
