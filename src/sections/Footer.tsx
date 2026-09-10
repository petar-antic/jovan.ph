import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const footerLinks = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Stories" },
  { href: "#services", label: "Collections" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-[82vh] flex-col overflow-hidden border-t border-background/10 bg-ink px-5 pt-20 text-background md:px-[26px] md:pt-24">
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

        <div className="hidden text-right text-[9px] uppercase tracking-[0.1em] text-background/45 md:block">
          <p>Email</p>
          <a
            href="mailto:hello@dncweedings.com"
            className="mt-2 block normal-case tracking-normal text-background/75"
          >
            hello@dncweedings.com
          </a>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-5 pt-16 text-[8px] uppercase tracking-[0.08em] text-background/35 md:flex-row md:items-center md:justify-between">
        <p>Copyright © 2026. All rights reserved.</p>

        <div className="flex items-center gap-5 text-background/55">
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
              DNC Weddings&nbsp;—&nbsp;
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
