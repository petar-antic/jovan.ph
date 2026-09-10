"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import HeroImageSlider from "@/components/HeroImageSlider";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/messages";

const languages: { code: Locale; label: string }[] = [
  { code: "sr", label: "SR" },
  { code: "en", label: "EN" },
];

const fadeUp = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("portfolio") },
    { href: "#services", label: t("services") },
    { href: "#contact", label: t("contact") },
  ];

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const wasMenuOpen = menuOpen;
    setMenuOpen(false);
    setLangOpen(false);

    window.setTimeout(
      () => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      wasMenuOpen ? 320 : 0,
    );
  };

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

  useEffect(() => {
    if (!langOpen) return;

    const closeOnClick = (event: MouseEvent) => {
      if (!langRef.current?.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };

    window.addEventListener("mousedown", closeOnClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("mousedown", closeOnClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [langOpen]);

  return (
    <header className="pointer-events-none text-ink">
      <div
        className={`fixed inset-x-0 top-0 z-[60] grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 text-background mix-blend-difference md:px-8 lg:px-10 ${
          menuOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <motion.a
          href="/"
          initial="hidden"
          animate={menuOpen ? "hidden" : "show"}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`justify-self-start text-xl font-black tracking-[-0.08em] md:text-2xl ${
            menuOpen ? "pointer-events-none" : ""
          }`}
          aria-label="DNC Weddings home"
        >
          DNC
        </motion.a>

        <nav
          className="hidden items-center gap-8 md:flex lg:gap-10"
          aria-label="Main"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              initial="hidden"
              animate={menuOpen ? "hidden" : "show"}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                delay: 0.18 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[10px] uppercase tracking-[0.14em] underline-offset-4 transition-[text-decoration-color] hover:underline lg:text-xs"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div
          className={`col-start-3 flex items-center justify-self-end gap-4 ${
            menuOpen ? "pointer-events-none opacity-0" : ""
          }`}
        >
          <motion.div
            ref={langRef}
            className="relative"
            initial="hidden"
            animate={menuOpen ? "hidden" : "show"}
            variants={fadeUp}
            transition={{
              duration: 0.5,
              delay: 0.18 + navLinks.length * 0.08 + 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] md:text-xs"
              aria-label="Language"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              onClick={() => setLangOpen((open) => !open)}
            >
              {locale.toUpperCase()}
              <svg
                viewBox="0 0 12 12"
                className={`size-2.5 transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            <AnimatePresence>
              {langOpen ? (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 min-w-12 bg-background text-ink shadow-sm"
                >
                  {languages.map((language) => (
                    <li key={language.code} role="option">
                      <button
                        type="button"
                        className={`block w-full px-3 py-2 text-left text-[10px] uppercase tracking-[0.08em] transition-opacity hover:opacity-60 md:text-xs ${
                          locale === language.code ? "font-semibold" : ""
                        }`}
                        onClick={() => {
                          setLocale(language.code);
                          setLangOpen(false);
                        }}
                      >
                        {language.label}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </motion.div>

          <button
            type="button"
            className="relative -mr-0.5 flex size-6 shrink-0 items-center justify-center md:hidden"
            aria-label={t("openMenu")}
            aria-controls="fullscreen-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">{t("openMenu")}</span>
            <span className="relative block h-[12px] w-4">
              <span className="absolute left-0 top-0 block h-px w-full bg-current" />
              <span className="absolute left-0 top-[5.5px] block h-px w-full bg-current" />
              <span className="absolute bottom-0 left-0 block h-px w-full bg-current" />
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
            className="pointer-events-auto fixed inset-0 z-[70] h-dvh bg-background"
          >
            <div className="flex h-full">
              <aside className="relative flex h-full w-full shrink-0 flex-col bg-background px-5 py-5 text-ink md:w-[23%] md:px-8">
                <button
                  type="button"
                  className="absolute right-5 top-5 z-10 flex size-8 items-center justify-center text-ink"
                  aria-label={t("closeMenu")}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="relative block size-4" aria-hidden>
                    <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 rotate-45 bg-current" />
                    <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 -rotate-45 bg-current" />
                  </span>
                </button>

                <nav
                  className="absolute left-1/2 top-1/2 flex w-[72%] max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col gap-3"
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
                      className="text-2xl font-normal uppercase tracking-[-0.035em] text-ink transition-opacity hover:opacity-50 md:text-3xl"
                      onClick={(event) => scrollToSection(event, link.href)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto flex w-full flex-col items-center pb-2 text-center">
                  <a
                    href="mailto:hello@dncweedings.com"
                    className="block text-[10px] text-ink transition-opacity hover:opacity-60"
                  >
                    hello@dncweedings.com
                  </a>

                  <div className="mt-5 flex items-center justify-center gap-5 text-ink">
                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="size-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn className="size-5" />
                    </a>
                    <a href="#" aria-label="TikTok">
                      <SiTiktok className="size-5" />
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
