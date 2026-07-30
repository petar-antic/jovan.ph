import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "group relative isolate inline-flex items-center gap-2.5 rounded-full border border-ink bg-ink py-1 pl-3.5 pr-1 text-xs font-semibold text-white transition-colors hover:bg-ink/90",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="relative block overflow-hidden leading-none">
        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-[135%]">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-[135%] transition-transform duration-500 ease-out group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>

      <span className="relative flex size-6 shrink-0 items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white mix-blend-destination-out"
        />
        <span className="relative size-full overflow-hidden rounded-full text-ink">
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-x-[120%] group-hover:-translate-y-[120%]">
            {icon}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center translate-x-[-120%] translate-y-[120%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
          >
            {icon}
          </span>
        </span>
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
