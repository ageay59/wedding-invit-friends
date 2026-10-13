import { config } from "@/config/config";

type MobileNavProps = {
  activeIndex: number;
  onSelect: (index: number) => void;
};

const dotClass = "w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0";

export default function MobileNav({ activeIndex, onSelect }: MobileNavProps) {
  const labels = config.nav.map((n) => n.label);
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < labels.length - 1;

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center justify-between px-3 py-1.5 rounded-full bg-black/75 border border-white/25 backdrop-blur-md shadow-2xl h-11">
      <div className="flex items-center space-x-1 w-16 justify-start overflow-hidden">
        {labels.slice(0, activeIndex).map((label, i) => (
          <button key={label} aria-label={label} className={dotClass} onClick={() => onSelect(i)} />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-1 w-[200px] flex-shrink-0 mx-auto">
        <button
          className="px-2 py-0.5 rounded-full text-[10px] text-white/60 hover:text-white transition truncate max-w-[64px]"
          style={{ visibility: hasPrev ? "visible" : "hidden" }}
          onClick={() => onSelect(activeIndex - 1)}
        >
          {hasPrev ? labels[activeIndex - 1] : ""}
        </button>
        <button className="px-2.5 py-1 rounded-full bg-amberaccent text-stone-950 font-bold text-[10px] uppercase tracking-wider shadow-sm truncate max-w-[96px] text-center">
          {labels[activeIndex]}
        </button>
        <button
          className="px-2 py-0.5 rounded-full text-[10px] text-white/60 hover:text-white transition truncate max-w-[64px]"
          style={{ visibility: hasNext ? "visible" : "hidden" }}
          onClick={() => onSelect(activeIndex + 1)}
        >
          {hasNext ? labels[activeIndex + 1] : ""}
        </button>
      </div>

      <div className="flex items-center space-x-1 w-16 justify-end overflow-hidden">
        {labels.slice(activeIndex + 1).map((label, i) => (
          <button
            key={label}
            aria-label={label}
            className={dotClass}
            onClick={() => onSelect(activeIndex + 1 + i)}
          />
        ))}
      </div>
    </div>
  );
}
