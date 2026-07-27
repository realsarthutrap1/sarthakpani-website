import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ProjectFeature } from "@/components/project-feature";
import { books, focusItems } from "@/lib/site";
import { getPosts, getProjects } from "@/lib/content";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function Home() {
  const projects = getProjects().slice(0, 3);
  const posts = getPosts().slice(0, 3);
  const currentBook = books.find((book) => book.status === "reading");

  return (
    <main>
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#08100b] text-[#f4f8f4]">
        <Image
          src="/images/astrophysics-hero.webp"
          alt="Orbital paths surrounding a luminous stellar body"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,7,0.28)_0%,rgba(5,10,7,0.14)_35%,rgba(5,10,7,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,transparent_0%,rgba(4,10,6,0.2)_45%,rgba(4,10,6,0.5)_100%)]" />

        <div className="relative mx-auto flex min-h-[100dvh] max-w-[1240px] items-end px-5 pb-10 pt-28 md:px-8 md:pb-14 lg:px-10">
          <div className="grid w-full items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="hero-kicker">Founder, engineer, physics student</p>
              <h1 className="mt-4 max-w-[18ch] text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[5.25rem]">
                Building systems. Studying stars.
              </h1>
            </div>
            <Link className="hero-link" href="/writing">
              Read my notes
              <ArrowRight aria-hidden size={17} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-28">
        <p className="max-w-[31ch] text-3xl font-medium leading-[1.16] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          I am Sarthak Pani. I build technology, study physics, and write about
          what I learn along the way.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
          <Link className="simple-link" href="/about">About</Link>
          <Link className="simple-link" href="/now">What I am doing now</Link>
          <Link className="simple-link" href="/resume">Resume</Link>
        </div>
      </section>

      <section className="page-shell content-section">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link className="simple-link" href="/writing">All writing</Link>
        </div>
        <div>
          {posts.map((post) => (
            <Link className="index-row group" href={`/writing/${post.slug}`} key={post.slug}>
              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell content-section">
        <div className="section-heading">
          <h2>Projects</h2>
          <Link className="simple-link" href="/projects">All projects</Link>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectFeature key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-shell grid gap-14 py-20 md:grid-cols-2 md:gap-20 md:py-28">
        <div>
          <div className="section-heading">
            <h2>Now</h2>
            <Link className="simple-link" href="/now">Full update</Link>
          </div>
          <h3 className="text-2xl font-medium tracking-[-0.03em]">{focusItems[0].title}</h3>
          <p className="mt-3 max-w-[52ch] leading-7 text-muted">{focusItems[0].description}</p>
        </div>
        <div>
          <div className="section-heading">
            <h2>Books</h2>
            <Link className="simple-link" href="/books">Reading log</Link>
          </div>
          {currentBook ? (
            <>
              <h3 className="text-2xl font-medium tracking-[-0.03em]">{currentBook.title}</h3>
              <p className="mt-2 text-muted">{currentBook.author}</p>
            </>
          ) : (
            <p className="max-w-[50ch] leading-7 text-muted">
              I am organizing my reading notes before publishing the first entries.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
