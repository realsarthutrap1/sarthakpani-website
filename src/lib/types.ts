export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  topics: string[];
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
