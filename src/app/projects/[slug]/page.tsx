import type { Metadata } from "next";
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
        <header className="page-shell pb-14 pt-16 md:pb-20 md:pt-24">
          <Link className="text-link" href="/projects">
            <ArrowLeft aria-hidden size={16} weight="bold" />
            Projects
          </Link>
          <div className="mt-10 max-w-[840px]">
            <div>
              <p className="font-mono text-xs text-accent">{project.year} / {project.status}</p>
              <h1 className="mt-5 max-w-[16ch] text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                {project.title}
              </h1>
            </div>
            <div className="mt-7">
              <p className="max-w-[58ch] text-xl leading-8 text-muted">{project.summary}</p>
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

        <div className="page-shell grid gap-12 border-t border-line py-16 md:grid-cols-[0.25fr_0.75fr] md:py-20">
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
