"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Blog", "/blog", "B"],
  ["Books", "/books", "K"],
  ["About", "/about", "A"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="site-header">
      <Link aria-label="Sarthak Pani blog home" className="site-mark" href="/blog">SP</Link>
      {links.map(([label, href, hotkey]) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link aria-current={active ? "page" : undefined} className="nav-link" href={href} key={href}>
            [{hotkey}]&nbsp;{label}
          </Link>
        );
      })}
    </nav>
  );
}
