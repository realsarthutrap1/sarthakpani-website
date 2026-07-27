"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setTheme, ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["Blog", "/blog", "B"],
  ["Books", "/books", "K"],
  ["About", "/about", "A"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.repeat ||
        (target instanceof HTMLElement &&
          (target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName)))
      ) return;

      const key = event.key.toLowerCase();
      const route = { a: "/about", b: "/blog", k: "/books" }[key];
      if (route) router.push(route);
      if (key === "l" || key === "d") setTheme(key === "l" ? "light" : "dark");
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <nav aria-label="Primary" className="site-header">
      <Link aria-label="SP, Sarthak Pani blog home" className="site-mark" href="/blog">SP</Link>
      {links.map(([label, href, hotkey]) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            aria-current={active ? "page" : undefined}
            aria-keyshortcuts={hotkey}
            className="nav-link"
            href={href}
            key={href}
          >
            [{hotkey}]&nbsp;{label}
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}
