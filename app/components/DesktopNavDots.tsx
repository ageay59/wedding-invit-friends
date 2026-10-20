import { config } from "@/config/config";

type DesktopNavDotsProps = {
  visible: boolean;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function DesktopNavDots({ visible, activeIndex, onSelect }: DesktopNavDotsProps) {
  return (
    <div
      className={`desktop-nav ${visible ? "desktop-nav--visible" : ""}`}
    >
      {config.nav.map((item, i) => (
        <button
          key={item.label}
          aria-label={`Slide ${i + 1} - ${item.label}`}
          onClick={() => onSelect(i)}
          className={`desktop-nav__dot ${i === activeIndex ? "desktop-nav__dot--active" : ""}`}
        />
      ))}
    </div>
  );
}
