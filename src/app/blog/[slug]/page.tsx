import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { getContentFile, getPosts } from "@/lib/content";

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}.${month}.${day}`;
}

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
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);
  const file = getContentFile("blog", slug);
  if (!post || !file || post.draft) notFound();

  return (
    <main>
      <article className="post-page">
        <Link className="post-back" href="/blog">← [B] Blog</Link>
        <header className="post-header">
          <div className="post-meta">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>{post.author}</span>
            <span>{post.topics.join(" / ")}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-dek">{post.description}</p>
        </header>
        <MdxContent source={file.content} />
      </article>
    </main>
  );
}
