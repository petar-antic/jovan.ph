import { Allura } from "next/font/google";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const signatureFont = Allura({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

type HeroProps = {
  header: React.ReactNode;
};

const imageFrames = [
  { dimensions: "524 × 780", className: "h-full flex-[30.65]" },
  { dimensions: "477 × 667", className: "h-[85.5%] flex-[27.9]" },
  { dimensions: "327 × 577", className: "h-[74%] flex-[19.1]" },
  { dimensions: "251 × 429", className: "h-[55%] flex-[14.7]" },
  { dimensions: "130 × 171", className: "h-[22%] flex-[7.6]" },
];

export default function Hero({ header }: HeroProps) {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#efefef] text-ink">
      {header}

      <div className="flex h-full flex-col px-5 pt-20 md:px-[26px] md:pt-20">
        <div className="relative mt-auto">
          <h1 className="animate-fade-up flex items-end gap-[0.06em] whitespace-nowrap text-[clamp(3rem,12.4vw,11.5rem)] leading-[0.7]">
            <span className="text-[1.18em] font-black tracking-[-0.095em]">
              DNC
            </span>
            <span
              className={`${signatureFont.className} inline-block translate-y-[0.03em] text-[1.04em] font-normal tracking-[-0.045em]`}
            >
              Weedings
            </span>
          </h1>

          <p className="absolute bottom-full left-0 mb-4 whitespace-nowrap text-left text-[9px] leading-relaxed tracking-[-0.01em] text-ink/60 md:text-xs">
            Wedding photographers from Serbia.
          </p>
        </div>

        <div className="flex h-[58vh] min-h-0 shrink-0 items-end gap-2 md:gap-3">
          {imageFrames.map((frame, index) => (
            <div
              key={frame.dimensions}
              className={`min-w-0 animate-frame-reveal ${frame.className}`}
              style={{ animationDelay: `${180 + index * 120}ms` }}
            >
              <ImagePlaceholder
                dimensions={frame.dimensions}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[2.2%] top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex">
        <p className="text-xs uppercase tracking-[0.08em] [writing-mode:vertical-rl]">
          Since — 2026
        </p>
        <p
          className={`${signatureFont.className} mt-5 text-3xl leading-none [writing-mode:vertical-rl]`}
        >
          Jovan Dončić
        </p>
      </div>
    </section>
  );
}
