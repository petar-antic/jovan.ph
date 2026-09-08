import Image from "next/image";
import HoverImageList from "@/components/HoverImageList";

const processItems = [
  {
    title: "Meet and connect",
    number: "01",
    image: "/photos/JovanPh-45.jpg",
  },
  {
    title: "Define your story",
    number: "02",
    image: "/photos/JovanPh-509.jpg",
  },
  {
    title: "Plan the atmosphere",
    number: "03",
    image: "/photos/JovanPh-737.jpg",
  },
  {
    title: "Capture the honest moments",
    number: "04",
    image: "/photos/JovanPh-45.jpg",
  },
  {
    title: "Shape the final narrative",
    number: "05",
    image: "/photos/JovanPh-509.jpg",
  },
  {
    title: "Relive it for years",
    number: "06",
    image: "/photos/JovanPh-737.jpg",
  },
];

export default function Process() {
  return (
    <section
      id="works"
      className="min-h-dvh bg-[#efefef] px-5 py-24 text-ink md:px-[26px] md:py-32"
    >
      <div className="flex min-h-[calc(100dvh-12rem)] flex-col gap-16 md:min-h-[calc(100dvh-16rem)] lg:flex-row lg:items-end lg:gap-20">
        <div className="flex lg:w-[36%] lg:flex-col lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]">
              <span className="size-1 bg-ink" />
              Our process
            </p>
            <h2 className="mt-5 max-w-md text-3xl font-normal leading-[1.02] tracking-[-0.045em] md:text-5xl">
              A moment becomes part of your story
            </h2>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink/60 md:text-sm">
              Every celebration begins differently. We listen first, then build
              a visual approach around the people, place, and feeling of your
              day.
            </p>
          </div>

          <div className="relative mt-12 hidden aspect-[4/5] w-56 overflow-hidden lg:block">
            <Image
              src="/photos/JovanPh-45.jpg"
              alt="Wedding portrait"
              fill
              sizes="224px"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div className="lg:w-[64%]">
          <HoverImageList items={processItems} />
        </div>
      </div>
    </section>
  );
}
