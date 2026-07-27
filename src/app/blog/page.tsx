import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog-explorer";
import { SectionTitle } from "@/components/section-title";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes by Sarthak Pani on engineering, AI, physics, products, and building.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const visible = new Set([
    "why-this-site-exists",
    "devfest-central-valley-startup-journey",
    "wake-up-alarm",
  ]);
  const posts = getPosts().filter((post) => visible.has(post.slug));

  return (
    <main className="site-grid">
      <SectionTitle count={posts.length} title="Blog" />
      <BlogExplorer posts={posts} />
    </main>
  );
}
