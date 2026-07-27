export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  status: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  featured: boolean;
  draft: boolean;
  links: ProjectLink[];
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  cover?: string;
  draft: boolean;
};

export type Book = {
  title: string;
  author: string;
  status: "reading" | "read" | "paused";
  rating?: number;
  finishedAt?: string;
  note?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
};
