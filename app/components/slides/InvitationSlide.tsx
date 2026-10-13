"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/config";
import Monogram from "../Monogram";
import Slide from "./Slide";

type InvitationSlideProps = { onNext: () => void };

export default function InvitationSlide({ onNext }: InvitationSlideProps) {
  const { images, crossfadeMs, badge, scrollLabel, scrollAriaLabel } =
    config.slides.invitation;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      crossfadeMs
    );
    return () => clearInterval(id);
  }, [images.length, crossfadeMs]);

  return (
    <Slide className="justify-between p-6 sm:p-8 pb-24 md:pb-8 text-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            alt={`Couple ${i + 1}`}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-105 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
        <div className="w-32 h-32 sm:w-36 sm:h-36 text-white drop-shadow-2xl mb-2 transition-transform duration-300 hover:scale-105">
          <Monogram className="w-full h-full fill-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]" />
        </div>
        <div className="mt-4 mb-4">
          <button
            className="animate-badge-jump inline-flex items-center px-5 py-2 rounded-full border border-amberaccent bg-black/60 backdrop-blur-md text-amberaccent font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-amberaccent hover:text-stone-950 transition-all shadow-xl cursor-pointer"
            onClick={onNext}
          >
            {badge}
          </button>
        </div>
        <h2 className="text-4xl sm:text-5xl font-philosopher font-normal text-white text-glow mb-2">
          {config.couple.first} &amp; {config.couple.second}
        </h2>
        <div className="w-16 h-px bg-amberaccent/70 mx-auto my-3" />
        <p className="text-sm sm:text-base font-philosopher italic tracking-wider text-champagne text-glow-subtle">
          {config.event.dateLabel} • {config.event.dateNumeric}
        </p>
      </div>

      <div className="relative z-10 pb-6 flex flex-col items-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white font-medium text-glow-subtle mb-2">
          {scrollLabel}
        </p>
        <button
          aria-label={scrollAriaLabel}
          className="w-7 h-11 rounded-full border border-white/60 bg-black/30 backdrop-blur-sm flex items-start justify-center p-1.5 hover:border-amberaccent transition-colors"
          onClick={onNext}
        >
          <span className="w-1.5 h-2.5 rounded-full bg-amberaccent animate-bounce" />
        </button>
      </div>
    </Slide>
  );
}
