import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-dvh overflow-hidden bg-ink text-[#efefef] lg:h-dvh"
    >
      <span className="absolute left-6 top-6 size-1.5 bg-[#efefef]" />
      <span className="absolute right-[52%] top-6 hidden size-1.5 bg-[#efefef] lg:block" />
      <span className="absolute bottom-6 left-6 size-1.5 bg-[#efefef]" />
      <span className="absolute bottom-6 right-[52%] hidden size-1.5 bg-[#efefef] lg:block" />

      <div className="flex min-h-dvh flex-col lg:h-full lg:min-h-0 lg:flex-row">
        <div className="relative min-h-[58vh] overflow-hidden lg:h-full lg:min-h-0 lg:w-[52%]">
          <Image
            src="/character.png"
            alt="Jovan Dončić, wedding photographer"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-contain object-bottom grayscale"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:w-[34%] lg:px-12 lg:py-20">
          <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/55">
            <span className="size-1 bg-[#efefef]" />
            Behind the lens
          </p>

          <h2 className="mt-5 max-w-md text-2xl font-normal leading-[1.08] tracking-[-0.04em] md:text-3xl">
            I photograph the moments that happen between the planned ones.
          </h2>

          <div className="mt-14 flex max-w-md flex-col gap-8 text-xs leading-relaxed text-white/60 md:text-sm lg:mt-20">
            <p>
              Every wedding has its own rhythm. My work is to notice it — the
              quiet glance, the nervous hands, the laughter that arrives before
              anyone is ready for the camera.
            </p>
            <p>
              I keep the process calm and unobtrusive, shaping honest moments
              into photographs that feel contemporary today and deeply personal
              decades from now.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-12 w-fit border-b border-white/60 pb-1 text-[10px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            Tell me your story
          </a>
        </div>

        <div className="flex min-h-48 items-center justify-center overflow-hidden border-t border-white/10 lg:h-full lg:min-h-0 lg:w-[14%] lg:border-l lg:border-t-0">
          <p className="whitespace-nowrap text-[clamp(6rem,14vw,12rem)] font-black uppercase leading-none tracking-[-0.09em] lg:rotate-90">
            About
          </p>
        </div>
      </div>
    </section>
  );
}
