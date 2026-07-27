import type { Book, SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Sarthak Pani",
  description:
    "Technical founder, engineer, and physics student working across AI, evidence systems, embedded systems, and computer vision.",
  url: "https://sarthakpani.com",
  email: "official.sarthakp@gmail.com",
  socials: {
    github: "https://github.com/kingsarthucodes",
    linkedin: "https://www.linkedin.com/in/sarthak-pani-b675a22a8/",
  },
};

export const focusItems = [
  {
    title: "Building Elev",
    description:
      "Developing an AI evidence platform that helps mission-driven programs turn field activity into source-backed reporting.",
  },
  {
    title: "Studying physics",
    description:
      "Strengthening the mathematics and physical intuition required for deeper work in astrophysics and computational science.",
  },
  {
    title: "Prototyping systems",
    description:
      "Exploring how cameras, embedded hardware, networking, and machine learning can produce useful real-world feedback.",
  },
] as const;

// Entries stay empty until Sarthak reviews which private reading notes should be public.
export const books: Book[] = [];
