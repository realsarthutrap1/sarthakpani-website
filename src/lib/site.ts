import type { Book, SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Sarthak Pani",
  description:
    "Essays and reading notes from Sarthak Pani on engineering, AI, physics, products, and building.",
  url: "https://sarthakpani.com",
  email: "official.sarthakp@gmail.com",
  socials: {
    github: "https://github.com/kingsarthucodes",
    linkedin: "https://www.linkedin.com/in/sarthak-pani-b675a22a8/",
  },
};

// Entries stay empty until Sarthak reviews which private reading notes should be public.
export const books: Book[] = [];
