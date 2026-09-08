"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

type HoverListItem = {
  title: string;
  number: string;
  image: string;
};

type HoverImageListProps = {
  items: HoverListItem[];
};

export default function HoverImageList({ items }: HoverImageListProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeItem = items[activeIndex];

  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none absolute left-[62%] z-10 hidden h-32 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block lg:h-40 lg:w-56"
        animate={{
          top: `${((activeIndex + 0.5) / items.length) * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 170, damping: 24 }}
      >
        <Image
          key={activeItem.image}
          src={activeItem.image}
          alt=""
          fill
          sizes="224px"
          className="object-cover grayscale"
        />
      </motion.div>

      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={item.number}
            type="button"
            className={`relative flex w-full items-center justify-between border-b border-ink/10 py-5 text-left text-lg transition-colors md:text-xl ${
              isActive ? "text-ink" : "text-ink/45 hover:text-ink"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <span>{item.title}</span>
            <span className="text-sm tabular-nums">{item.number}</span>
          </button>
        );
      })}
    </div>
  );
}
