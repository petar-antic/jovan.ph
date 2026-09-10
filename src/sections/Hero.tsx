"use client";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/LanguageProvider";

const quoteFont = Dancing_Script({
  weight: ["500", "600"],
  subsets: ["latin", "latin-ext"],
});

type HeroProps = {
  header: React.ReactNode;
};

function BlackFrame({
  className,
  image,
  caption,
  delay = 0,
}: {
  className?: string;
  image?: { src: string; alt: string };
  caption: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-ink ${className ?? ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      ) : null}
      <p className="absolute bottom-4 left-4 z-10 text-[11px] leading-none tracking-[-0.01em] text-background md:bottom-5 md:left-5 md:text-sm">
        {caption}
      </p>
    </motion.div>
  );
}

export default function Hero({ header }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-background text-ink">
      {header}

      <div className="relative px-5 pb-16 pt-[calc(5rem+150px)] md:px-8 md:pb-24 md:pt-[calc(6rem+150px)] lg:px-10">
        <motion.h1
          className="-ml-[0.06em] flex items-end whitespace-nowrap text-[clamp(3.4rem,13.5vw,12rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="translate-y-[0.12em]">DNC</span>
          <span className="ml-[0.08em] translate-y-[0.12em] text-[0.72em] tracking-[-0.03em]">
            Weddings
          </span>
        </motion.h1>

        <div className="relative mt-3 grid grid-cols-1 items-stretch gap-6 md:mt-4 md:grid-cols-2 md:gap-8 lg:gap-10">
          <BlackFrame
            delay={0}
            className="aspect-[3/5] w-full"
            caption={t("momentsInMotion")}
            image={{
              src: "/photos/JovanPh-44.JPG",
              alt: "Bride and groom in a stone corridor",
            }}
          />

          <div className="flex h-full flex-col gap-5 md:gap-6">
            <motion.p
              className={`${quoteFont.className} shrink-0 self-start text-left text-2xl font-semibold leading-none text-ink md:text-3xl lg:text-4xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {t("heroText")}
            </motion.p>

            <BlackFrame
              delay={0.25}
              className="min-h-[18rem] w-full flex-1 md:min-h-0"
              caption={t("momentsInMotion")}
              image={{
                src: "/photos/JovanPh-315.JPG",
                alt: "Bride and groom with foreheads touching",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
