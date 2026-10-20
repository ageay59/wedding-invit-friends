import { config } from "@/config/config";

type MobileNavProps = {
  visible: boolean;
  activeIndex: number;
  onSelect: (index: number) => void;
};

const dotClass = "mobile-nav__dot";

export default function MobileNav({ visible, activeIndex, onSelect }: MobileNavProps) {
  const labels = config.nav.map((n) => n.label);
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < labels.length - 1;

  return (
    <div className={`mobile-nav ${visible ? "mobile-nav--visible" : ""}`}>
      <div className="mobile-nav__side mobile-nav__side--previous">
        {labels.slice(0, activeIndex).map((label, i) => (
          <button key={label} aria-label={label} className={dotClass} onClick={() => onSelect(i)} />
        ))}
      </div>

      <div className="mobile-nav__current-group">
        <button
          className="mobile-nav__label mobile-nav__label--adjacent"
          style={{ visibility: hasPrev ? "visible" : "hidden" }}
          onClick={() => onSelect(activeIndex - 1)}
        >
          {hasPrev ? labels[activeIndex - 1] : ""}
        </button>
        <button className="mobile-nav__label mobile-nav__label--current">
          {labels[activeIndex]}
        </button>
        <button
          className="mobile-nav__label mobile-nav__label--adjacent"
          style={{ visibility: hasNext ? "visible" : "hidden" }}
          onClick={() => onSelect(activeIndex + 1)}
        >
          {hasNext ? labels[activeIndex + 1] : ""}
        </button>
      </div>

      <div className="mobile-nav__side mobile-nav__side--next">
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
