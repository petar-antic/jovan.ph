import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const footerLinks = [
  { href: "#about", label: "About us" },
  { href: "#works", label: "Stories" },
  { href: "#works", label: "Collections" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-[82vh] flex-col overflow-hidden border-t border-white/10 bg-ink px-5 pt-20 text-[#efefef] md:px-[26px] md:pt-24">
      <div className="flex items-start justify-between gap-10">
        <nav className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-normal uppercase tracking-[-0.035em] transition-opacity hover:opacity-50 md:text-3xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden text-right text-[9px] uppercase tracking-[0.1em] text-white/45 md:block">
          <p>Email</p>
          <a
            href="mailto:hello@dncweedings.com"
            className="mt-2 block normal-case tracking-normal text-white/75"
          >
            hello@dncweedings.com
          </a>
        </div>
      </div>

      <form className="mx-auto mt-auto flex w-full max-w-sm items-center border-b border-white/25 pb-2">
        <label htmlFor="newsletter" className="sr-only">
          Email for newsletter
        </label>
        <input
          id="newsletter"
          type="email"
          placeholder="Join our newsletter"
          className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-white/35"
        />
        <button
          type="submit"
          className="text-xs text-white/60 transition-colors hover:text-white"
          aria-label="Subscribe"
        >
          ↗
        </button>
      </form>

      <div className="mt-16 flex flex-col gap-5 text-[8px] uppercase tracking-[0.08em] text-white/35 md:flex-row md:items-center md:justify-between">
        <p>Copyright © 2026. All rights reserved.</p>

        <div className="flex items-center gap-4 text-white/55">
          <a href="#" aria-label="Instagram">
            <FaInstagram className="size-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="size-3.5" />
          </a>
          <a href="#" aria-label="TikTok">
            <SiTiktok className="size-3.5" />
          </a>
        </div>

        <div className="flex gap-5">
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>

      <div className="-mx-5 mt-8 overflow-hidden md:-mx-[26px]">
        <div className="flex w-max animate-footer-marquee will-change-transform hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="translate-y-[0.16em] whitespace-nowrap pr-[0.12em] text-[clamp(6.5rem,23vw,21rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]"
            >
              DNC Weedings&nbsp;—&nbsp;
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
