import Image from "next/image";

const fieldClass =
  "h-10 w-full border border-ink/15 bg-transparent px-3 text-xs outline-none transition-colors placeholder:text-ink/35 focus:border-ink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ink px-5 py-24 md:px-8 md:py-32"
    >
      <Image
        src="/photos/JovanPh-45.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover grayscale brightness-[0.42]"
      />
      <div className="absolute inset-0 bg-ink/25" />

      <div className="relative z-10 w-full max-w-2xl bg-[#efefef] p-5 text-ink md:p-6">
        <div className="flex items-start justify-between gap-8">
          <p className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em]">
            <span className="size-2 bg-ink" />
            Contact
          </p>
          <h2 className="max-w-xs text-right text-xl font-normal leading-[1.05] tracking-[-0.04em] md:text-3xl">
            How a moment becomes part of your story
          </h2>
        </div>

        <form
          action="#"
          method="post"
          className="mt-8 grid gap-2.5 md:mt-10 md:grid-cols-2"
        >
          <label>
            <span className="sr-only">Your names</span>
            <input
              type="text"
              name="names"
              placeholder="Your names *"
              required
              className={fieldClass}
            />
          </label>

          <label>
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              required
              className={fieldClass}
            />
          </label>

          <label>
            <span className="sr-only">Wedding date</span>
            <input
              type="date"
              name="weddingDate"
              aria-label="Wedding date"
              className={`${fieldClass} text-ink/55`}
            />
          </label>

          <label>
            <span className="sr-only">Wedding location</span>
            <input
              type="text"
              name="location"
              placeholder="Wedding location"
              className={fieldClass}
            />
          </label>

          <label className="md:col-span-2">
            <span className="sr-only">Tell us about your wedding</span>
            <textarea
              name="message"
              placeholder="Tell us a little about your wedding..."
              className="min-h-20 w-full resize-y border border-ink/15 bg-transparent px-3 py-3 text-xs outline-none transition-colors placeholder:text-ink/35 focus:border-ink"
            />
          </label>

          <button
            type="submit"
            className="h-10 bg-ink px-6 text-[9px] uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 md:col-start-2 md:justify-self-end"
          >
            Send inquiry
          </button>
        </form>

        <div className="mt-5 flex flex-col text-[8px] uppercase tracking-[0.08em] text-ink/55 md:flex-row md:gap-8">
          <a
            href="mailto:hello@dncweedings.com"
            className="flex flex-1 items-center justify-between border-b border-ink/15 py-3 transition-colors hover:text-ink"
          >
            <span>Email</span>
            <span className="normal-case tracking-normal">
              hello@dncweedings.com
            </span>
          </a>
          <a
            href="tel:+381601234567"
            className="flex flex-1 items-center justify-between border-b border-ink/15 py-3 transition-colors hover:text-ink"
          >
            <span>Number</span>
            <span className="tracking-normal">+381 60 123 4567</span>
          </a>
        </div>
      </div>
    </section>
  );
}
