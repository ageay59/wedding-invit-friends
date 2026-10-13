import { MdOutlineNavigation } from "react-icons/md";
import { config } from "@/config/config";
import Slide from "./Slide";

type DomaineSlideProps = { shimmerKey: number };

export default function DomaineSlide({ shimmerKey }: DomaineSlideProps) {
  const d = config.slides.domaine;

  return (
    <Slide
      image={d.image}
      alt={d.alt}
      className="justify-between p-6 sm:p-8 pb-24 md:pb-8 bg-stone-900"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        <div
          key={shimmerKey}
          className={`absolute inset-y-0 -left-full w-full h-full pointer-events-none opacity-0 mix-blend-screen ${
            shimmerKey > 0 ? "shimmer-active" : ""
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.18) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 -mt-6 sm:-mt-8 flex flex-col items-center text-center">
        <svg
          className="w-8 h-12 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 32 48"
        >
          <line strokeDasharray="4 4" strokeLinecap="round" strokeWidth="2.5" x1="16" x2="16" y1="0" y2="34" />
          <polyline points="8,26 16,36 24,26" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
        <span className="text-[11px] tracking-[0.28em] uppercase text-amberaccent font-semibold block text-glow">
          {d.eyebrow}
        </span>
        <h3 className="text-3xl md:text-5xl font-philosopher text-white text-glow mt-1 font-normal">
          {d.title}
        </h3>
        <div className="w-16 h-0.5 bg-amberaccent/80 mx-auto my-2.5 shadow-md" />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full mb-32 md:mb-28 -translate-y-6">
        <div className="p-5 text-center">
          <p className="text-xs sm:text-sm font-light text-white leading-relaxed text-glow mb-4">
            {d.addressLine1}
            <br />
            <span className="font-medium text-white">{d.addressLine2}</span>
            <br />
            <span className="text-xs text-champagne">{d.addressLine3}</span>
          </p>
          <a
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-amberaccent hover:bg-amberwarm text-stone-950 font-bold text-xs tracking-wider uppercase transition shadow-xl hover:scale-105"
            href={d.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MdOutlineNavigation className="text-base mr-1.5" />
            {d.mapsLabel}
          </a>
        </div>
      </div>
    </Slide>
  );
}
