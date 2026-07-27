import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 text-sm md:grid-cols-[1fr_auto] md:px-8 lg:px-12">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-[48ch] leading-6 text-muted">
            Founder, engineer, and physics student building useful systems from difficult questions.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted md:justify-end">
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a href={siteConfig.socials.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
          <a href={siteConfig.socials.github} rel="noreferrer" target="_blank">GitHub</a>
          <Link href="/resume">Resume</Link>
        </div>
        <p className="font-mono text-xs text-muted md:col-span-2">
          © {new Date().getFullYear()} Sarthak Pani
        </p>
      </div>
    </footer>
  );
}
