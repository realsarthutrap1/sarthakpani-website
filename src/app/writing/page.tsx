import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/page-intro";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes by Sarthak Pani on building, learning, physics, and evidence systems.",
};

export default function WritingPage() {
  const posts = getPosts();

  return (
    <main>
      <PageIntro
        label="Writing"
        title="Notes from building and learning."
        description="Essays about engineering judgment, entrepreneurship, scientific curiosity, and the ideas that connect them."
      />
      <section className="section-shell border-t border-line">
        {posts.length ? (
          <div className="max-w-5xl">
            {posts.map((post) => (
              <Link
                className="group grid gap-5 border-b border-line py-9 first:pt-0 md:grid-cols-[0.25fr_0.75fr]"
                href={`/writing/${post.slug}`}
                key={post.slug}
              >
                <time className="font-mono text-xs text-muted" dateTime={post.publishedAt}>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  }).format(new Date(post.publishedAt))}
                </time>
                <div>
                  <h2 className="text-3xl font-medium tracking-[-0.035em] group-hover:text-accent sm:text-4xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-[58ch] leading-7 text-muted">{post.description}</p>
                  <span className="text-link mt-5">
                    Read essay
                    <ArrowRight aria-hidden size={16} weight="bold" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight">The first essay is in progress.</h2>
            <p className="mt-4 leading-7 text-muted">
              This archive will hold reviewed notes on engineering, physics, and building Elev.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
