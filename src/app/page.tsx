import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ProjectFeature } from "@/components/project-feature";
import { books, focusItems } from "@/lib/site";
import { getPosts, getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects().filter((project) => project.featured).slice(0, 2);
  const posts = getPosts().slice(0, 2);
  const currentBooks = books.filter((book) => book.status === "reading").slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-[1400px] items-center gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-8 lg:gap-16 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Technical founder + astrophysics student</p>
          <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.1rem]">
            Building evidence. Exploring the universe.
          </h1>
          <p className="mt-6 max-w-[55ch] text-lg leading-8 text-muted">
            Founder of Elev, physics student, and engineer working across AI,
            embedded systems, and computer vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button button-primary" href="/projects">
              View projects
              <ArrowRight aria-hidden size={18} weight="bold" />
            </Link>
            <Link className="button button-secondary" href="/resume">
              Resume
            </Link>
          </div>
        </div>

        <div className="relative min-h-[120px] overflow-hidden rounded-2xl bg-[#0e1210] shadow-[0_30px_90px_rgba(14,18,16,0.16)] sm:min-h-[300px] md:min-h-[620px]">
          <Image
            src="/images/astrophysics-hero.webp"
            alt="Abstract scientific visualization of orbital paths around a luminous stellar body"
            fill
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-16 text-white md:p-6 md:pt-28">
            <p className="hidden max-w-[30ch] text-sm leading-6 text-white/76 sm:block">
              Curiosity becomes useful when it is paired with disciplined
              engineering.
            </p>
            <span className="font-mono text-xs tracking-wide text-white/60">
              2026
            </span>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section-shell border-t border-line">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="editorial-heading">What I am focused on now</h2>
            <Link className="text-link mt-6" href="/now">
              Read the full update
              <ArrowRight aria-hidden size={16} weight="bold" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {focusItems.slice(0, 2).map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-shell border-t border-line">
        <h2 className="editorial-heading mb-12">Selected projects</h2>
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section-shell border-t border-line">
        <p className="eyebrow">Across disciplines</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <h2 className="editorial-heading max-w-[18ch]">
            The same instinct connects my work: understand the system, then
            make it more useful.
          </h2>
          <div className="grid gap-7 self-end text-base leading-7 text-muted">
            <p>
              In physics, that means learning how models explain the world. In
              software, it means turning evidence into decisions people can
              trust.
            </p>
            <p>
              I am most interested in work that crosses boundaries between
              research, engineering, public benefit, and entrepreneurship.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-shell border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="editorial-heading">Latest writing</h2>
            <Link className="text-link mt-6" href="/writing">
              Writing archive
              <ArrowRight aria-hidden size={16} weight="bold" />
            </Link>
          </div>
          <div className="space-y-0">
            {posts.length ? (
              posts.map((post) => (
                <Link
                  className="group grid gap-3 border-b border-line py-7 first:pt-0 sm:grid-cols-[1fr_auto]"
                  href={`/writing/${post.slug}`}
                  key={post.slug}
                >
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] leading-7 text-muted">
                      {post.description}
                    </p>
                  </div>
                  <time className="font-mono text-xs text-muted" dateTime={post.publishedAt}>
                    {new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(post.publishedAt))}
                  </time>
                </Link>
              ))
            ) : (
              <p className="text-muted">The first essay is in progress.</p>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-shell border-t border-line">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <h2 className="editorial-heading">Reading as an operating system</h2>
          <div>
            {currentBooks.length ? (
              <div className="grid gap-6">
                {currentBooks.map((book) => (
                  <article key={`${book.title}-${book.author}`}>
                    <h3 className="text-xl font-medium">{book.title}</h3>
                    <p className="mt-1 text-muted">{book.author}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="max-w-[58ch] leading-7 text-muted">
                I am turning scattered notes into a public reading log. The
                first entries will appear after they are reviewed for sharing.
              </p>
            )}
            <Link className="text-link mt-7" href="/books">
              Open reading log
              <ArrowRight aria-hidden size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-shell border-t border-line">
        <div className="rounded-2xl bg-ink px-6 py-12 text-paper sm:px-10 lg:px-14 lg:py-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="max-w-[15ch] text-4xl font-medium leading-[1.03] tracking-[-0.045em] sm:text-5xl">
                Interested in the work or the questions behind it?
              </h2>
              <p className="mt-5 max-w-[52ch] leading-7 text-paper/70">
                I am always glad to meet people building thoughtful technology,
                studying hard problems, or working for public benefit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a className="button bg-paper text-ink hover:bg-paper/90" href="mailto:official.sarthakp@gmail.com">
                Email me
              </a>
              <Link className="button border border-paper/25 text-paper hover:border-paper/55" href="/about">
                About me
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
