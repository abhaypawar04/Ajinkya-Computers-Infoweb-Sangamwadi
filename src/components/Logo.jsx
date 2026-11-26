export default function Logo({ light = false }) {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 group"
      aria-label="Ajinkya Computers Infoweb home"
    >
      <div className="w-10 h-10 bg-brand-blue flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 32 32" className="w-6 h-6" aria-hidden="true">
          <path
            d="M8 22 L14 10 L18 10 L24 22 L20.5 22 L19.3 19 L12.7 19 L11.5 22 Z M13.8 16 L18.2 16 L16 11.2 Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div
          className={`text-sm font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          Ajinkya Computers Infoweb
        </div>
        <div
          className={`text-[10px] tracking-[0.15em] uppercase ${light ? "text-white/50" : "text-ink-soft"}`}
        >
          Academy for Computer Studies
        </div>
      </div>
    </a>
  );
}
