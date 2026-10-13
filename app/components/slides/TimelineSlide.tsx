import type { IconType } from "react-icons";
import {
  MdOutlineCelebration,
  MdOutlineDirectionsCar,
  MdOutlineFavoriteBorder,
  MdOutlineLiquor,
  MdOutlineMeetingRoom,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { config, type TimelineIcon } from "@/config/config";
import Slide from "./Slide";

const ICONS: Record<TimelineIcon, IconType> = {
  car: MdOutlineDirectionsCar,
  door: MdOutlineMeetingRoom,
  heart: MdOutlineFavoriteBorder,
  camera: MdOutlinePhotoCamera,
  drink: MdOutlineLiquor,
  party: MdOutlineCelebration,
};

type TimelineSlideProps = { onNext: () => void };

export default function TimelineSlide({ onNext }: TimelineSlideProps) {
  const t = config.slides.timeline;

  return (
    <Slide
      image={t.image}
      alt={t.alt}
      className="justify-between p-5 sm:p-7 pb-24 md:pb-6 bg-stone-900"
    >
      <div className="relative z-10 pt-2 text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-amberaccent font-semibold block text-glow">
          {t.eyebrow}
        </span>
        <h3 className="text-3xl font-philosopher text-white text-glow mt-0.5">{t.title}</h3>
        <p className="text-sm font-philosopher italic text-champagne text-glow-subtle mt-0.5">
          {t.subtitle}
        </p>
      </div>

      <div className="relative z-10 my-auto h-[62%] flex flex-col justify-between max-w-sm mx-auto w-full px-2">
        <div className="relative pl-10 h-full flex flex-col justify-between">
          <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-amberaccent via-white/40 to-amberaccent" />
          {t.events.map((event) => {
            const Icon = ICONS[event.icon];
            return (
              <div key={event.time.fr} className="relative flex items-center">
                <div
                  className={`absolute -left-10 w-8 h-8 rounded-full border flex items-center justify-center text-center shadow-lg ${
                    event.highlight
                      ? "bg-amberaccent border-amberaccent"
                      : "bg-stone-900/95 border-white/35"
                  }`}
                >
                  <Icon
                    className={`text-[16px] ${
                      event.highlight ? "text-stone-950 font-bold" : "text-amberaccent"
                    }`}
                  />
                </div>
                <div className="flex items-center pl-2 w-full">
                  <div className="w-16 flex-shrink-0 text-left pr-2">
                    <span
                      className={`text-[13px] font-bold block leading-none text-glow ${
                        event.highlight ? "text-amberaccent" : "text-white"
                      }`}
                    >
                      {event.time.fr}
                    </span>
                    <span
                      className={`text-[11.5px] font-mono block leading-tight text-glow-subtle ${
                        event.highlight ? "text-amberaccent font-semibold" : "text-champagne"
                      }`}
                    >
                      {event.time.en}
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-xs sm:text-sm text-white text-glow leading-tight ${
                        event.highlight ? "font-bold" : "font-semibold"
                      }`}
                    >
                      {event.title.fr}
                    </h4>
                    <p
                      className={`text-[11.5px] font-philosopher italic leading-tight text-glow-subtle ${
                        event.highlight ? "text-champagne" : "text-champagne/95"
                      }`}
                    >
                      {event.title.en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 text-center pb-4">
        <button
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm text-white hover:text-amberaccent text-[11px] font-medium transition"
          onClick={onNext}
        >
          {t.nextLabel}
        </button>
      </div>
    </Slide>
  );
}
