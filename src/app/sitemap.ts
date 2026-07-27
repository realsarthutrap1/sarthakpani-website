import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/writing", "/books", "/about", "/now", "/resume"];
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date("2026-07-26"),
    })),
    ...getProjects().map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date("2026-07-26"),
    })),
    ...getPosts().map((post) => ({
      url: `${siteConfig.url}/writing/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
