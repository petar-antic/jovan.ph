import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ink px-5 py-20 md:px-8"
    >
      <Image
        src="/photos/JovanPh-45.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover grayscale brightness-[0.42]"
      />
      <div className="absolute inset-0 bg-ink/25" />

      <div className="relative z-10 w-full max-w-3xl bg-[#efefef] p-5 text-ink md:p-7">
        <div className="flex items-start justify-between gap-8">
          <p className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em]">
            <span className="size-2 bg-ink" />
            Contact
          </p>
          <h2 className="max-w-sm text-right text-2xl font-normal leading-[1.05] tracking-[-0.04em] md:text-4xl">
            How a moment becomes part of your story
          </h2>
        </div>

        <div className="mt-20 flex flex-col text-[10px] uppercase tracking-[0.08em] text-ink/55 md:mt-28">
          <a
            href="mailto:hello@dncweedings.com"
            className="flex items-center justify-between border-b border-ink/15 py-4 transition-colors hover:text-ink"
          >
            <span>Email</span>
            <span className="normal-case tracking-normal">
              hello@dncweedings.com
            </span>
          </a>
          <a
            href="tel:+381601234567"
            className="flex items-center justify-between border-b border-ink/15 py-4 transition-colors hover:text-ink"
          >
            <span>Number</span>
            <span className="tracking-normal">+381 60 123 4567</span>
          </a>
        </div>
      </div>
    </section>
  );
}
