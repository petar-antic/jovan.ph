const details = [
  { value: "01", label: "Story at a time" },
  { value: "100%", label: "Personal approach" },
  { value: "∞", label: "Fleeting moments" },
  { value: "Forever", label: "Made to last" },
];

export default function Perspective() {
  return (
    <section className="bg-[#efefef] px-5 py-24 text-ink md:px-[26px] md:py-32">
      <div className="grid gap-14 lg:grid-cols-[24%_1fr] lg:gap-12">
        <p className="flex items-start gap-2 text-[9px] uppercase tracking-[0.14em] text-ink/55">
          <span className="mt-1 size-1 bg-ink" />
          Beyond the frame
        </p>

        <div>
          <h2 className="max-w-4xl text-3xl font-normal leading-[1.04] tracking-[-0.05em] md:text-5xl">
            We preserve how your wedding felt, not only how it looked.
          </h2>

          <p className="mt-10 max-w-xl text-xs leading-relaxed text-ink/55 md:text-sm">
            Every glance, gesture, and fleeting detail becomes part of a story
            that feels honest now and timeless later.
          </p>

          <div className="mt-14 grid grid-cols-2 border-t border-ink/15 pt-5 md:grid-cols-4 md:gap-8">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="border-b border-ink/10 py-4 first:pt-0 md:border-b-0 md:py-0"
              >
                <p className="text-2xl font-normal uppercase tracking-[-0.035em] md:text-3xl">
                  {detail.value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.06em] text-ink/45">
                  {detail.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
