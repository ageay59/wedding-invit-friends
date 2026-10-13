import { config } from "@/config/config";
import Slide from "./Slide";

export default function HotelSlide() {
  const h = config.slides.hotel;
  const phoneHref = `tel:${h.phone}`;

  return (
    <Slide
      image={h.image}
      alt={h.alt}
      className="justify-start p-6 sm:p-8 pb-24 md:pb-8 bg-stone-900"
    >
      <div className="relative z-10 pt-2 text-center mb-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-amberaccent font-semibold block text-glow">
          {h.eyebrow}
        </span>
        <h3 className="text-3xl font-philosopher text-white text-glow mt-0.5">{h.title}</h3>
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full">
        <div className="p-3 sm:p-4 text-center">
          <h4 className="text-2xl font-philosopher font-bold text-amberaccent text-center mb-4 text-glow">
            {h.name}
          </h4>
          <div className="grid grid-cols-2 gap-4 text-xs font-sans text-left">
            <div className="border-r border-white/20 pr-3 space-y-2 text-white text-[11px] leading-relaxed">
              <p className="font-bold text-white text-[13px] tracking-wide text-glow">
                <a className="hover:text-amberaccent transition" href={phoneHref}>
                  {h.phone}
                </a>
              </p>
              <p className="text-champagne font-medium text-glow-subtle">
                {h.codeLabel.fr} <span className="font-mono text-amberaccent font-bold">{h.code}</span>
              </p>
              <p className="text-white text-glow-subtle">{h.travel.fr}</p>
              <p className="text-white/90 text-glow-subtle">{h.payment.fr}</p>
              <p className="text-champagne/80 text-[10px] italic text-glow-subtle">{h.help.fr}</p>
            </div>

            <div className="pl-1 space-y-2 text-white leading-relaxed">
              <p className="font-bold text-white text-[10.4px] tracking-wide text-glow">
                <a className="hover:text-amberaccent transition" href={phoneHref}>
                  {h.phone}
                </a>
              </p>
              <p className="text-champagne font-medium text-[8.8px] text-glow-subtle">
                {h.codeLabel.en} <span className="font-mono text-amberaccent font-bold">{h.code}</span>
              </p>
              <p className="text-white text-[8.8px] text-glow-subtle">{h.travel.en}</p>
              <p className="text-white/90 text-[8.8px] text-glow-subtle">{h.payment.en}</p>
              <p className="text-champagne/80 text-[8px] italic text-glow-subtle">{h.help.en}</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
