import { config } from "@/config/config";

type DesktopNavDotsProps = {
  visible: boolean;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function DesktopNavDots({ visible, activeIndex, onSelect }: DesktopNavDotsProps) {
  return (
    <div
      className={`transition-opacity duration-500 absolute right-6 bottom-10 flex flex-col space-y-3 z-30 border-l-2 border-[#fea200]/80 pl-3 py-1 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {config.nav.map((item, i) => (
        <button
          key={item.ariaLabel}
          aria-label={item.ariaLabel}
          onClick={() => onSelect(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
            i === activeIndex ? "bg-amberaccent scale-125" : "bg-white/40 hover:bg-white/90"
          }`}
        />
      ))}
    </div>
  );
}
