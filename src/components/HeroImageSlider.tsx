import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { InfiniteSlider } from "@/components/ui/InfiniteSlider";

type Slide =
  | { type: "image"; src: string; alt: string; height: string }
  | { type: "placeholder"; height: string; dimensions: string };

const leftSlides: Slide[] = [
  {
    type: "image",
    src: "/photos/JovanPh-45.jpg",
    alt: "Bride at a wedding celebration",
    height: "h-72 md:h-[28rem]",
  },
  {
    type: "placeholder",
    height: "h-44 md:h-64",
    dimensions: "1200 × 800",
  },
  {
    type: "image",
    src: "/photos/JovanPh-737.jpg",
    alt: "Guests dancing at a wedding reception",
    height: "h-52 md:h-72",
  },
  {
    type: "placeholder",
    height: "h-64 md:h-80",
    dimensions: "1080 × 1350",
  },
];

const rightSlides: Slide[] = [
  {
    type: "placeholder",
    height: "h-40 md:h-56",
    dimensions: "1600 × 900",
  },
  {
    type: "image",
    src: "/photos/JovanPh-509.jpg",
    alt: "Wedding moment photographed by DNC Weedings",
    height: "h-64 md:h-96",
  },
  {
    type: "placeholder",
    height: "h-56 md:h-72",
    dimensions: "1200 × 1600",
  },
  {
    type: "placeholder",
    height: "h-44 md:h-64",
    dimensions: "1200 × 800",
  },
];

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div
      className={`relative w-[42vw] overflow-hidden bg-ink md:w-[31vw] lg:w-[32vw] ${slide.height}`}
    >
      {slide.type === "image" ? (
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 42vw, 320px"
          className="object-cover"
        />
      ) : (
        <ImagePlaceholder
          dimensions={slide.dimensions}
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export default function HeroImageSlider() {
  return (
    <div className="relative flex h-full w-full justify-center gap-3 overflow-hidden bg-[#efefef] px-3 md:gap-5 md:px-8">
      <InfiniteSlider
        direction="vertical"
        speed={35}
        speedOnHover={12}
        gap={12}
        className="h-full md:[&>div]:gap-5"
      >
        {leftSlides.map((slide, index) => (
          <SlideCard key={`left-${index}`} slide={slide} />
        ))}
      </InfiniteSlider>

      <InfiniteSlider
        direction="vertical"
        reverse
        speed={30}
        speedOnHover={10}
        gap={12}
        className="h-full md:[&>div]:gap-5"
      >
        {rightSlides.map((slide, index) => (
          <SlideCard key={`right-${index}`} slide={slide} />
        ))}
      </InfiniteSlider>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#efefef] to-transparent md:h-28" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#efefef] to-transparent md:h-28" />
    </div>
  );
}
