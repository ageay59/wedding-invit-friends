import { config } from "@/config/config";
import Slide from "./Slide";

export default function BrunchSlide() {
  const b = config.slides.brunch;

  return (
    <Slide
      image={b.image}
      alt={b.alt}
      className="justify-start p-6 sm:p-8 pb-24 md:pb-8 bg-stone-900"
    >
      <div className="relative z-10 pt-4 max-w-sm mx-auto w-full">
        <div className="p-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-amberaccent text-amberaccent text-[11px] font-semibold uppercase tracking-wider mb-3 text-glow shadow-md">
            {b.dateLabel}
          </span>
          <h4 className="text-3xl font-philosopher text-white mb-2 text-glow">{b.title}</h4>
          <p className="text-xs sm:text-sm font-light text-white leading-relaxed text-glow">
            {b.text}
          </p>
        </div>
      </div>
    </Slide>
  );
}
