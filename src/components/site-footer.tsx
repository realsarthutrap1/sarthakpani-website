import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-group">
        <span className="footer-label">/ Contact</span>
        <div className="footer-links">
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
      </div>
      <div className="footer-group">
        <span className="footer-label">/ Links</span>
        <div className="footer-links">
          <Link href="/blog">Blog</Link>
          <Link href="/books">Books</Link>
          <Link href="/about">About</Link>
          <a href={siteConfig.socials.github} rel="noreferrer" target="_blank">GitHub</a>
          <a href={siteConfig.socials.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>California / Web</span>
      </div>
    </footer>
  );
}
