"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/stories", label: "Stories" },
  { href: "/stories?category=business", label: "Businesses" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif-display text-xl italic tracking-tight text-ink">
            Humans of
          </span>
          <span className="font-serif-display text-2xl font-semibold tracking-tight text-ink -mt-1">
            Kashmir
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-wide-caps text-ink-soft transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/about#share"
            className="hidden rounded-full border border-ink px-5 py-2 text-xs uppercase tracking-wide-caps text-ink transition hover:bg-ink hover:text-paper sm:inline-block"
          >
            Share a Story
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm uppercase tracking-wide-caps text-ink-soft"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about#share"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-ink px-5 py-2.5 text-center text-xs uppercase tracking-wide-caps text-ink"
          >
            Share a Story
          </Link>
        </nav>
      )}
    </header>
  );
}
