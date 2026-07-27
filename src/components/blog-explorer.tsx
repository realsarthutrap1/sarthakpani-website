"use client";

import { useState } from "react";
import { BlogFeed } from "@/components/blog-feed";
import { BlogFilters } from "@/components/blog-filters";
import type { PostMeta } from "@/lib/types";

export function BlogExplorer({ posts }: { posts: PostMeta[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const topics = Array.from(new Set(posts.flatMap((post) => post.topics)))
    .sort()
    .map((name) => ({ name, count: posts.filter((post) => post.topics.includes(name)).length }));
  const visiblePosts = selected.length
    ? posts.filter((post) => post.topics.some((topic) => selected.includes(topic)))
    : posts;

  function toggleTopic(topic: string) {
    setSelected((current) =>
      current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic],
    );
  }

  return (
    <div className="blog-explorer">
      <BlogFilters onToggle={toggleTopic} selected={selected} topics={topics} />
      <BlogFeed expanded={expanded} onExpand={setExpanded} posts={visiblePosts} />
    </div>
  );
}
