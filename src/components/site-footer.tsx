import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="page-shell flex flex-col gap-8 py-10 text-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-2 text-muted">Building, learning, and writing in public.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted">
          <a className="simple-link" href={`mailto:${siteConfig.email}`}>Email</a>
          <a className="simple-link" href={siteConfig.socials.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
          <a className="simple-link" href={siteConfig.socials.github} rel="noreferrer" target="_blank">GitHub</a>
          <Link className="simple-link" href="/resume">Resume</Link>
        </div>
      </div>
    </footer>
  );
}
