const stats = [
  {
    value: "100+",
    lines: ["weddings", "completed"],
  },
  {
    value: "7+",
    lines: ["years", "in the industry"],
  },
  {
    value: "∞",
    lines: ["photographs", "delivered"],
  },
];

export default function Stats() {
  return (
    <section className="bg-background px-5 py-12 text-ink md:px-8 md:py-16 lg:px-10">
      <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-3 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex items-center justify-center gap-5 md:gap-6"
          >
            <p className="font-display text-[clamp(4.5rem,10vw,7rem)] font-medium leading-none tracking-[-0.04em]">
              {stat.value}
            </p>
            <p className="text-left text-sm leading-[1.35] text-ink/70 md:text-base">
              {stat.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
