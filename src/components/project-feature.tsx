import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { ProjectMeta } from "@/lib/types";

export function ProjectFeature({ project, reverse = false }: { project: ProjectMeta; reverse?: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <Link
        className={`relative min-h-[330px] overflow-hidden rounded-2xl bg-surface sm:min-h-[440px] ${
          reverse ? "md:order-2" : ""
        }`}
        href={`/projects/${project.slug}`}
      >
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
      </Link>
      <div className={reverse ? "md:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <h3 className="mt-5 max-w-[16ch] text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-[55ch] text-lg leading-8 text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] text-muted" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link className="text-link mt-8" href={`/projects/${project.slug}`}>
          Read project
          <ArrowRight aria-hidden size={16} weight="bold" />
        </Link>
      </div>
    </article>
  );
}
