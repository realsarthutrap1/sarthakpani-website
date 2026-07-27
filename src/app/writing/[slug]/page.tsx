import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { MdxContent } from "@/components/mdx-content";
import { getContentFile, getPosts } from "@/lib/content";

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function WritingPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);
  const file = getContentFile("writing", slug);
  if (!post || !file || post.draft) notFound();

  return (
    <main>
      <article className="mx-auto max-w-[880px] px-5 py-16 md:px-8 md:py-24">
        <Link className="text-link" href="/writing">
          <ArrowLeft aria-hidden size={16} weight="bold" />
          Writing
        </Link>
        <header className="mb-14 mt-10 border-b border-line pb-12">
          <time className="font-mono text-xs text-accent" dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            }).format(new Date(post.publishedAt))}
          </time>
          <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted">{post.description}</p>
        </header>
        <MdxContent source={file.content} />
      </article>
    </main>
  );
}
