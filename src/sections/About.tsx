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

        <div className="flex flex-col border-t border-white/10 px-6 py-16 md:px-10 lg:w-[48%] lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
          <div className="flex items-start justify-end">
            <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
              <span className="size-1 bg-[#efefef]" />
              Behind the lens
            </p>
          </div>

          <p className="my-auto max-w-xl py-20 text-3xl font-normal leading-[1.04] tracking-[-0.05em] md:text-5xl">
            We photograph the moments that happen between the planned ones.
          </p>

          <div>
            <div className="grid max-w-2xl gap-8 border-t border-white/20 pt-6 text-xs leading-relaxed text-white/55 md:grid-cols-2">
              <p>
                Every wedding has its own rhythm. We notice the quiet glance,
                the nervous hands, and the laughter that arrives before anyone
                is ready for the camera.
              </p>
              <p>
                Our process stays calm and unobtrusive, shaping honest moments
                into photographs that feel contemporary today and deeply
                personal decades from now.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex border-b border-white/40 pb-2 text-[10px] uppercase tracking-[0.14em] transition-opacity hover:opacity-50"
            >
              Tell us your story ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
