"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const links = [
  ["Projects", "/projects"],
  ["Writing", "/writing"],
  ["Books", "/books"],
  ["About", "/about"],
  ["Now", "/now"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 h-[4.5rem] border-b border-line bg-paper/88 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-5 px-5 md:px-8 lg:px-12">
        <Link className="text-base font-semibold tracking-[-0.02em]" href="/">
          Sarthak Pani
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === href ? "text-accent" : "text-muted"
              }`}
              href={href}
            >
              {label}
            </Link>
          ))}
          <Link className="button button-primary min-h-10 px-4" href="/resume">
            Resume
          </Link>
          <button
            aria-label="Toggle color theme"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-muted hover:text-ink"
            onClick={toggleTheme}
            type="button"
          >
            <Moon aria-hidden className="dark:hidden" size={18} />
            <Sun aria-hidden className="hidden dark:block" size={18} />
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle color theme"
            className="grid size-10 place-items-center rounded-full border border-line"
            onClick={toggleTheme}
            type="button"
          >
            <Moon aria-hidden className="dark:hidden" size={18} />
            <Sun aria-hidden className="hidden dark:block" size={18} />
          </button>
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="grid size-10 place-items-center rounded-full border border-line"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden size={19} /> : <List aria-hidden size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-line bg-paper px-5 py-5 md:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <Link
                className="rounded-xl px-3 py-3 text-lg font-medium hover:bg-surface"
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link className="button button-primary mt-3" href="/resume" onClick={() => setOpen(false)}>
              Resume
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
