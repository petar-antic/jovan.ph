"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex shrink-0 items-center justify-between bg-black px-5 py-4 text-white md:bg-transparent md:px-8 md:text-black lg:items-start animate-fade-in">
      <div className="flex items-start gap-6 lg:gap-8">
        <a
          href="/"
          className="text-2xl font-black tracking-tight md:text-3xl"
          aria-label="Jovan Doncic home"
        >
          JD
        </a>

        <nav
          className="hidden flex-col gap-1.5 pt-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <button
        type="button"
        className="relative flex size-7 items-center justify-center lg:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? "translate-y-[5.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-200 ease-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <Button
        href="#contact"
        className="hidden lg:inline-flex lg:mt-1"
        icon={<ArrowUpRightIcon className="size-3.5 stroke-[2.5]" />}
      >
        Get in touch
      </Button>

      <nav
        className={`absolute left-0 right-0 top-full flex flex-col gap-4 bg-white px-5 py-6 text-ink shadow-sm transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
