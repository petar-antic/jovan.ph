type ImagePlaceholderProps = {
  dimensions: string;
  className?: string;
};

export default function ImagePlaceholder({
  dimensions,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-ink text-white ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="border border-dashed border-white/30 px-4 py-3 text-xs tracking-wide text-white/50">
          Attach image
        </span>
        <span className="text-[9px] tracking-[0.08em] text-white/35">
          {dimensions}
        </span>
      </div>
    </div>
  );
}
