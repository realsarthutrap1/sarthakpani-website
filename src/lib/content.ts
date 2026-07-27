import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostMeta, ProjectLink, ProjectMeta } from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content");

function filesIn(directory: "projects" | "writing") {
  const target = path.join(contentRoot, directory);
  return fs.existsSync(target) ? fs.readdirSync(target).filter((file) => file.endsWith(".mdx")) : [];
}

function requiredString(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: frontmatter "${key}" must be a non-empty string`);
  }
  return value.trim();
}

function stringArray(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`${file}: frontmatter "${key}" must be a string array`);
  }
  return value as string[];
}

function projectLinks(data: Record<string, unknown>, file: string): ProjectLink[] {
  if (data.links === undefined) return [];
  if (
    !Array.isArray(data.links) ||
    data.links.some(
      (item) =>
        typeof item !== "object" ||
        item === null ||
        typeof (item as Record<string, unknown>).label !== "string" ||
        typeof (item as Record<string, unknown>).href !== "string",
    )
  ) {
    throw new Error(`${file}: frontmatter "links" must contain label and href strings`);
  }
  return data.links as ProjectLink[];
}

export function getProjects(): ProjectMeta[] {
  return filesIn("projects")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter.read(path.join(contentRoot, "projects", file));
      const record = data as Record<string, unknown>;
      return {
        slug,
        title: requiredString(record, "title", file),
        summary: requiredString(record, "summary", file),
        year: requiredString(record, "year", file),
        status: requiredString(record, "status", file),
        tags: stringArray(record, "tags", file),
        cover: requiredString(record, "cover", file),
        coverAlt: requiredString(record, "coverAlt", file),
        featured: record.featured === true,
        draft: record.draft === true,
        links: projectLinks(record, file),
      };
    })
    .filter((project) => !project.draft)
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getPosts(): PostMeta[] {
  return filesIn("writing")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter.read(path.join(contentRoot, "writing", file));
      const record = data as Record<string, unknown>;
      return {
        slug,
        title: requiredString(record, "title", file),
        description: requiredString(record, "description", file),
        publishedAt: requiredString(record, "publishedAt", file),
        cover: typeof record.cover === "string" ? record.cover : undefined,
        draft: record.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getContentFile(directory: "projects" | "writing", slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(contentRoot, directory, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return matter.read(file);
}
