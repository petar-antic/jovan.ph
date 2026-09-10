"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

const imageClass =
  "object-cover scale-100 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105 group-hover:grayscale-0";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-background px-5 py-14 text-ink md:px-8 md:py-16 lg:px-10"
    >
      <div className="mb-6 flex items-end justify-between gap-6 md:mb-8">
        <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]">
          <span className="size-1 bg-ink" />
          {t("services")}
        </p>

        <a
          href="#contact"
          className="shrink-0 bg-ink px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-80 md:px-7 md:text-xs"
        >
          {t("viewMore")}
        </a>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-2 md:grid-cols-3 md:gap-2 lg:gap-3">
        <a
          href="#contact"
          className="group relative block aspect-[3/4] overflow-hidden bg-ink"
        >
          <Image
            src="/photos/JovanPh-152.JPG"
            alt={t("serviceWeddings")}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={imageClass}
          />
          <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:bg-ink/10" />
          <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-background md:text-base">
            {t("serviceWeddings")}
          </p>
        </a>

        <a
          href="#contact"
          className="group relative block aspect-[3/4] overflow-hidden bg-ink"
        >
          <Image
            src="/photos/JovanPh-155.JPG"
            alt={t("serviceDebut")}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={imageClass}
          />
          <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:bg-ink/10" />
          <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-background md:text-base">
            {t("serviceDebut")}
          </p>
        </a>

        <div className="flex min-h-0 flex-col gap-2 md:h-full lg:gap-3">
          <a
            href="#contact"
            className="group relative min-h-[14rem] flex-1 overflow-hidden bg-ink"
          >
            <Image
              src="/photos/JovanPh-115.JPG"
              alt={t("serviceFirstBirthdays")}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={imageClass}
            />
            <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:bg-ink/10" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-background md:text-base">
              {t("serviceFirstBirthdays")}
            </p>
          </a>

          <a
            href="#contact"
            className="group relative min-h-[12rem] flex-[0.9] overflow-hidden bg-ink"
          >
            <Image
              src="/photos/JovanPh-124.jpg"
              alt={t("serviceCorporate")}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={imageClass}
            />
            <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:bg-ink/10" />
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-background md:text-base">
              {t("serviceCorporate")}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
