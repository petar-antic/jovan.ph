import { Oswald } from "next/font/google";

const heroName = Oswald({
  weight: "700",
  subsets: ["latin"],
});

type HeroProps = {
  header: React.ReactNode;
};

export default function Hero({ header }: HeroProps) {
  return (
    <section className="flex h-dvh flex-col md:h-auto">
      <div className="relative z-10 flex min-h-0 flex-[2] flex-col bg-white md:h-[60vh] md:flex-none">
        {header}

        <div className="flex min-h-0 flex-1 flex-col px-5 md:px-8">
          <div className="flex items-start pt-4 md:pt-6 animate-fade-up">
            <p className="text-xs leading-relaxed tracking-wide text-black md:text-sm">
              <span className="mr-1.5" aria-hidden>
                ●
              </span>
              2025 — photographer
            </p>
          </div>

          <div className="mt-auto flex flex-col items-center animate-fade-up [animation-delay:120ms]">
            <h1
              className={`${heroName.className} -translate-y-1 flex flex-col items-center whitespace-nowrap text-center text-[clamp(2.75rem,14vw,12rem)] uppercase leading-[0.75] tracking-tighter text-black md:-translate-y-1.5`}
            >
              {/* Blank first line — same rhythm as two-line name in the mockup */}
              <span className="block h-[0.8em]" aria-hidden />
              <span className="block">Jovan Doncic</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-[3] flex-col items-center justify-center bg-black px-5 md:h-[70vh] md:flex-none animate-fade-in [animation-delay:240ms]">
        <p className="border border-dashed border-white/30 px-4 py-3 text-center text-xs tracking-wide text-white/50 md:text-sm">
          Attach hero image
        </p>
      </div>
    </section>
  );
}
