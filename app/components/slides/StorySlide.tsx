import { config } from "@/config/config";
import Slide from "./Slide";

const STROKE = "rgba(255,255,255,0.95)";

const badgeBase = "inline-block rounded-full pill-badge font-philosopher shadow-xl pointer-events-auto";
const badgeSmall = `${badgeBase} px-4 py-1 text-xs italic`;
const badgeMajor = `${badgeBase} px-4 py-1.5 text-sm font-bold bg-black/75 border-amberaccent text-amberaccent`;

type PlaceBadgeProps = { left: string; top: string; className: string; children: string };

function PlaceBadge({ left, top, className, children }: PlaceBadgeProps) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left, top }}
    >
      <span className={className}>{children}</span>
    </div>
  );
}

export default function StorySlide() {
  const { image, alt, places } = config.slides.story;

  return (
    <Slide
      image={image}
      alt={alt}
      className="justify-between p-4 sm:p-6 pb-24 md:pb-6 bg-stone-900"
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-2">
        <div className="relative w-full h-full max-w-[360px] mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 1590"
          >
            <g stroke={STROKE} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M 270 50 L 270 180 C 270 280 430 360 500 390" />
              <path d="M 730 50 L 805 95 L 715 145 L 815 195 L 705 245 L 805 295 L 725 345 L 500 390" />
              <path d="M 500 390 L 500 405" />
              <path d="M 500 405 C 330 405 270 520 270 715 C 270 910 390 1020 500 1020" />
              <path d="M 500 405 C 670 405 730 520 730 715 C 730 910 610 1020 500 1020" />
              <path d="M 500 1020 L 500 1145" />
              <path d="M 500 1145 L 500 1590" strokeDasharray="10 10" />
            </g>
            <g fill="#e59b34">
              <circle cx="270" cy="50" r="5.5" />
              <circle cx="730" cy="50" r="5.5" />
              <circle cx="500" cy="405" r="7.5" />
              <circle cx="270" cy="715" r="5.5" />
              <circle cx="730" cy="715" r="5.5" />
              <circle cx="500" cy="1020" r="7.5" />
              <circle cx="500" cy="1145" r="7.5" />
            </g>
          </svg>

          <PlaceBadge left="27%" top="3.1%" className={`${badgeSmall} font-bold text-white`}>
            {places.dreux}
          </PlaceBadge>
          <PlaceBadge left="73%" top="3.1%" className={`${badgeSmall} font-bold text-white`}>
            {places.anywhere}
          </PlaceBadge>
          <PlaceBadge left="50%" top="25.5%" className={badgeMajor}>
            {places.creapole}
          </PlaceBadge>
          <PlaceBadge left="27%" top="45%" className={`${badgeSmall} font-medium text-white bg-black/75`}>
            {places.shanghai}
          </PlaceBadge>
          <PlaceBadge left="73%" top="45%" className={`${badgeSmall} font-medium text-white bg-black/75`}>
            {places.paris}
          </PlaceBadge>
          <PlaceBadge left="50%" top="64.1%" className={badgeMajor}>
            {places.lille}
          </PlaceBadge>
          <PlaceBadge
            left="50%"
            top="72%"
            className={`${badgeBase} px-4 py-1.5 text-sm font-bold text-white bg-black/75`}
          >
            {places.viroflay}
          </PlaceBadge>
        </div>
      </div>
    </Slide>
  );
}
