import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/blog", "/books", "/about", "/privacy"];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date("2026-07-26"),
    })),
    ...getPosts().filter((post) => post.live).map((post) => ({
      url: `${siteConfig.url}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
