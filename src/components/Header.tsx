"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import HeroImageSlider from "@/components/HeroImageSlider";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-0 z-50 text-ink">
      <div className="pointer-events-auto absolute inset-x-0 top-0 z-20 flex items-start justify-between px-5 py-4 md:px-7">
        <a
          href="/"
          className={`text-xl font-black tracking-[-0.08em] transition-opacity duration-300 md:text-2xl ${
            menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-label="DNC Weedings home"
        >
          DNC
        </a>

        <div className="flex items-center gap-5 md:gap-7">
          <a
            href="#contact"
            className={`text-[10px] uppercase underline underline-offset-4 transition-opacity duration-300 md:text-xs ${
              menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            Contact
          </a>

          <button
            type="button"
            className="relative flex size-6 items-center justify-end"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="fullscreen-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="relative block h-[12px] w-4">
              <span
                className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[5.5px] block h-px w-full bg-current transition-[opacity,transform] duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="fullscreen-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="pointer-events-auto fixed inset-0 h-dvh bg-[#efefef]"
          >
            <div className="flex h-full">
              <aside className="relative flex h-full w-full shrink-0 flex-col bg-[#efefef] px-5 py-5 md:w-[23%] md:px-8">
                <nav
                  className="absolute left-1/2 top-1/2 flex w-[68%] max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col"
                  aria-label="Menu navigation"
                >
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href + link.label}
                      href={link.href}
                      initial={{ x: -24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.07,
                      }}
                      className="border-b border-ink/20 py-3 text-sm font-normal uppercase tracking-normal transition-opacity hover:opacity-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mx-auto mt-auto w-[68%] max-w-sm">
                  <a
                    href="mailto:hello@dncweedings.com"
                    className="block border-b border-ink/25 pb-3 text-xs"
                  >
                    hello@dncweedings.com
                  </a>

                  <div className="mt-5 flex items-center gap-4">
                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="size-4" />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF className="size-3.5" />
                    </a>
                    <a href="#" aria-label="TikTok">
                      <SiTiktok className="size-3.5" />
                    </a>
                    <a href="#" aria-label="Pinterest">
                      <FaPinterestP className="size-3.5" />
                    </a>
                  </div>
                </div>
              </aside>

              <div className="hidden h-full min-w-0 flex-1 md:block">
                <HeroImageSlider />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
