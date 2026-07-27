import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { MdxContent } from "@/components/mdx-content";
import { getContentFile, getProjects } from "@/lib/content";

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjects().find((item) => item.slug === slug);
  const file = getContentFile("projects", slug);
  if (!project || !file || project.draft) notFound();

  return (
    <main>
      <article>
        <header className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24 lg:px-12">
          <Link className="text-link" href="/projects">
            <ArrowLeft aria-hidden size={16} weight="bold" />
            Projects
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs text-accent">{project.year} / {project.status}</p>
              <h1 className="mt-5 max-w-[13ch] text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>
            <div className="self-end">
              <p className="text-xl leading-8 text-muted">{project.summary}</p>
              {project.links.length ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      className="button button-secondary"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden size={16} weight="bold" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl bg-surface sm:min-h-[620px]">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 md:grid-cols-[0.28fr_0.72fr] md:px-8 md:py-24">
          <aside>
            <p className="font-mono text-xs text-muted">Built with</p>
            <div className="mt-4 flex flex-wrap gap-2 md:grid">
              {project.tags.map((tag) => (
                <span className="font-mono text-xs text-muted" key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
          <MdxContent source={file.content} />
        </div>
      </article>
    </main>
  );
}
