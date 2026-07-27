import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostMeta } from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content");

function filesIn(directory: "blog") {
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
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || !item.trim())
  ) {
    throw new Error(`${file}: frontmatter "${key}" must be a non-empty string array`);
  }
  return (value as string[]).map((item) => item.trim());
}

function publishedDate(data: Record<string, unknown>, file: string) {
  const value = requiredString(data, "publishedAt", file);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`${file}: frontmatter "publishedAt" must be a valid YYYY-MM-DD date`);
  }
  return value;
}

function postOrder(data: Record<string, unknown>, file: string) {
  const value = data.order;
  if (value === undefined) return 0;
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1) {
    throw new Error(`${file}: frontmatter "order" must be a positive integer`);
  }
  return value;
}

export function getPosts(): PostMeta[] {
  return filesIn("blog")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter.read(path.join(contentRoot, "blog", file));
      const record = data as Record<string, unknown>;
      const order = postOrder(record, file);
      return {
        slug,
        title: requiredString(record, "title", file),
        description: requiredString(record, "description", file),
        publishedAt: publishedDate(record, file),
        author: requiredString(record, "author", file),
        topics: stringArray(record, "topics", file),
        draft: record.draft === true,
        order,
        live: order === 1,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => a.order - b.order || b.publishedAt.localeCompare(a.publishedAt));
}

export function getContentFile(directory: "blog", slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(contentRoot, directory, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return matter.read(file);
}
