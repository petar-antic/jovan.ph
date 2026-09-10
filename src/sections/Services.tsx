"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { MessageKey } from "@/i18n/messages";

const imageClass =
  "object-cover scale-100 grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105 group-hover:grayscale-0";

const services: {
  titleKey: MessageKey;
  src: string;
}[] = [
  { titleKey: "serviceWeddings", src: "/photos/JovanPh-152.JPG" },
  { titleKey: "serviceDebut", src: "/photos/JovanPh-155.JPG" },
  { titleKey: "serviceFirstBirthdays", src: "/photos/JovanPh-115.JPG" },
  { titleKey: "serviceCorporate", src: "/photos/JovanPh-124.jpg" },
];

function ServiceCard({
  title,
  src,
  className,
}: {
  title: string;
  src: string;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`group relative block overflow-hidden bg-ink ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={imageClass}
      />
      <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:bg-ink/10" />
      <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-background md:text-base">
        {title}
      </p>
    </a>
  );
}

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

      {/* Mobile: all four services stacked */}
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {services.map((service) => (
          <ServiceCard
            key={service.titleKey}
            title={t(service.titleKey)}
            src={service.src}
            className="aspect-[3/4]"
          />
        ))}
      </div>

      {/* Desktop: two full cards + split column */}
      <div className="hidden grid-cols-3 items-stretch gap-2 md:grid lg:gap-3">
        <ServiceCard
          title={t("serviceWeddings")}
          src="/photos/JovanPh-152.JPG"
          className="aspect-[3/4]"
        />
        <ServiceCard
          title={t("serviceDebut")}
          src="/photos/JovanPh-155.JPG"
          className="aspect-[3/4]"
        />
        <div className="flex h-full flex-col gap-2 lg:gap-3">
          <ServiceCard
            title={t("serviceFirstBirthdays")}
            src="/photos/JovanPh-115.JPG"
            className="min-h-0 flex-1"
          />
          <ServiceCard
            title={t("serviceCorporate")}
            src="/photos/JovanPh-124.jpg"
            className="min-h-0 flex-[0.9]"
          />
        </div>
      </div>
    </section>
  );
}
