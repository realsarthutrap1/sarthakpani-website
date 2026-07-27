"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const links = [
  ["Writing", "/writing"],
  ["Projects", "/projects"],
  ["Books", "/books"],
  ["About", "/about"],
  ["Now", "/now"],
  ["Resume", "/resume"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-40 h-[4.5rem] text-white"
          : "sticky top-0 z-40 h-[4.5rem] border-b border-line bg-paper/92 backdrop-blur-xl"
      }
    >
      <div className="page-shell flex h-full items-center justify-between gap-6">
        <Link className="text-sm font-semibold tracking-[-0.02em]" href="/">
          Sarthak Pani
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className={`text-sm transition-colors ${
                isHome
                  ? "text-white/72 hover:text-white"
                  : pathname === href
                    ? "text-accent"
                    : "text-muted hover:text-ink"
              }`}
              href={href}
            >
              {label}
            </Link>
          ))}
          <button
            aria-label="Toggle color theme"
            className={`grid size-9 place-items-center rounded-full border transition-colors ${
              isHome
                ? "border-white/25 text-white/75 hover:border-white/55 hover:text-white"
                : "border-line text-muted hover:border-muted hover:text-ink"
            }`}
            onClick={toggleTheme}
            type="button"
          >
            <Moon aria-hidden className="dark:hidden" size={16} />
            <Sun aria-hidden className="hidden dark:block" size={16} />
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle color theme"
            className={`grid size-9 place-items-center rounded-full border ${
              isHome ? "border-white/25 text-white" : "border-line"
            }`}
            onClick={toggleTheme}
            type="button"
          >
            <Moon aria-hidden className="dark:hidden" size={16} />
            <Sun aria-hidden className="hidden dark:block" size={16} />
          </button>
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className={`grid size-9 place-items-center rounded-full border ${
              isHome ? "border-white/25 text-white" : "border-line"
            }`}
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden size={18} /> : <List aria-hidden size={19} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-4 top-[4.5rem] rounded-xl border border-line bg-paper p-3 text-ink shadow-[0_20px_60px_rgba(4,10,6,0.18)] md:hidden"
        >
          <div className="grid">
            {links.map(([label, href]) => (
              <Link
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-surface"
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
