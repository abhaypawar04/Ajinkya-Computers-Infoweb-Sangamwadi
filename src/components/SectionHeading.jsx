export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4 text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
