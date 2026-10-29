"use client";

import { useEffect, useState } from "react";
import { OPEN_TWIN_EVENT } from "./DigitalTwin";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#academic", label: "Academic" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="grid size-9 place-items-center border border-bone/80 font-mono text-xs font-semibold tracking-tight transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-ink">
            GB
          </span>
          <span className="hidden font-mono text-xs tracking-[0.2em] text-mist uppercase sm:block">
            Guillermo Barreiro
          </span>
        </a>
        <div className="flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden px-3 py-2 font-mono text-xs tracking-[0.15em] text-mist uppercase transition-colors hover:text-bone md:block"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => window.dispatchEvent(new Event(OPEN_TWIN_EVENT))}
            className="flex items-center gap-2 px-3 py-2 font-mono text-xs tracking-[0.15em] text-signal uppercase transition-colors hover:text-bone"
          >
            <span className="size-1.5 rounded-full bg-signal" />
            Ask my twin
          </button>
          <a
            href="#contact"
            className="ml-2 hidden border sm:block border-bone/20 px-4 py-2 font-mono text-xs tracking-[0.15em] uppercase transition-colors hover:border-signal hover:bg-signal hover:text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
