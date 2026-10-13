"use client";

import { config } from "@/config/config";
import Countdown from "../Countdown";
import Slide from "./Slide";

type PawType = "cat" | "dog";

// Easter eggs are wired here later
function handlePawClick(type: PawType) {
  void type;
}

const pawButtonClass =
  "group relative w-10 h-10 rounded-full bg-black/60 border border-amberaccent/50 hover:border-amberaccent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(229,155,52,0.45)] cursor-pointer";
const pawIconClass = "w-5 h-5 text-champagne group-hover:text-amberaccent transition-colors";

export default function CountdownSlide() {
  const c = config.slides.countdown;

  return (
    <Slide
      image={c.image}
      alt={c.alt}
      className="justify-end p-5 sm:p-7 pb-24 md:pb-8 bg-stone-900"
    >
      <div className="relative z-10 max-w-sm mx-auto w-full mb-2 sm:mb-4">
        <div className="p-5 sm:p-6 rounded-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-philosopher text-white text-glow mb-3">
            {c.title}
          </h3>
          <Countdown />
          <div className="pt-1 border-t border-white/20">
            <p className="font-philosopher italic text-2xl sm:text-3xl text-champagne text-glow tracking-wide mb-2.5">
              {c.tagline}
            </p>
            <div className="flex items-center justify-center space-x-3">
              <button
                aria-label={c.catLabel}
                className={pawButtonClass}
                onClick={() => handlePawClick("cat")}
              >
                <svg
                  className={pawIconClass}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 11a8 8 0 0 0 16 0c0-2-1-3.5-1-6l-3.5 2.5C14 7 13 7 12 7s-2 0-3.5.5L5 5c0 2.5-1 4-1 6z" />
                  <circle cx="9" cy="12" fill="currentColor" r="0.9" stroke="none" />
                  <circle cx="15" cy="12" fill="currentColor" r="0.9" stroke="none" />
                  <path d="M11.5 14.2h1l-.5.7z" fill="currentColor" />
                  <path d="M7 13.5L4.5 13" />
                  <path d="M7 15L4.5 16" />
                  <path d="M17 13.5L19.5 13" />
                  <path d="M17 15L19.5 16" />
                </svg>
              </button>
              <button
                aria-label={c.dogLabel}
                className={pawButtonClass}
                onClick={() => handlePawClick("dog")}
              >
                <svg
                  className={pawIconClass}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 7.5 C4.5 8 3 11 3.5 14 C3.8 15.5 5 16 6 14.5 C6.8 13.2 7 11 7.2 9.5" />
                  <path d="M17 7.5 C19.5 8 21 11 20.5 14 C20.2 15.5 19 16 18 14.5 C17.2 13.2 17 11 16.8 9.5" />
                  <path d="M7 8 C8.5 6 15.5 6 17 8 C18.5 10 18.5 14 17.5 16.5 C16 20 8 20 6.5 16.5 C5.5 14 5.5 10 7 8 Z" />
                  <circle cx="9.2" cy="11.5" fill="currentColor" r="0.9" stroke="none" />
                  <circle cx="14.8" cy="11.5" fill="currentColor" r="0.9" stroke="none" />
                  <path
                    d="M10.7 14 C11 13.6 13 13.6 13.3 14 C13.6 14.5 12.8 15.3 12 15.3 C11.2 15.3 10.4 14.5 10.7 14 Z"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path d="M12 15.3 V16.2" />
                  <path d="M10.2 16.2 C11 17 12 16.8 12 16.2 C12 16.8 13 17 13.8 16.2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
