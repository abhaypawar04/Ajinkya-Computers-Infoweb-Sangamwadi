import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  showArrow = false,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-none";

  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-ink border border-ink/20 hover:border-brand-blue hover:text-brand-blue",
    dark: "bg-white text-dark-bg hover:bg-white/90",
    ghost:
      "text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  );
}
