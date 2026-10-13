import { useMemo, type CSSProperties } from "react";
import { config } from "@/config/config";
import Slide from "./Slide";

type Particle = {
  width: number;
  height: number;
  color: string;
  radius: string;
  tx: number;
  ty: number;
  rot: string;
};

const COLORS = ["#e59b34", "#f3e6d3", "#ffffff", "#b58a57", "#d97706", "#ffd700"];

function makeParticles(count = 90): Particle[] {
  return Array.from({ length: count }, () => {
    const angle = Math.PI * 0.1 + Math.random() * Math.PI * 0.8;
    const distance = 380 + Math.random() * 460;
    return {
      width: 6 + Math.random() * 8,
      height: 8 + Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      radius: Math.random() > 0.4 ? "2px" : "9999px",
      tx: (Math.random() - 0.5) * 440,
      ty: Math.sin(angle) * distance,
      rot: `${Math.random() * 1080 - 540}deg`,
    };
  });
}

type InvitedSlideProps = { onNext: () => void; cannonKey: number };

export default function InvitedSlide({ onNext, cannonKey }: InvitedSlideProps) {
  const s = config.slides.invited;
  // Particles are random, so they are only generated after a burst is triggered on the client
  const particles = useMemo(() => (cannonKey > 0 ? makeParticles() : []), [cannonKey]);

  return (
    <Slide
      image={s.image}
      alt={s.alt}
      className="justify-between p-6 sm:p-8 pb-24 md:pb-8 bg-stone-900"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0">
          {particles.map((p, i) => (
            <span
              key={`${cannonKey}-${i}`}
              className="cannon-particle absolute block pointer-events-none"
              style={
                {
                  width: p.width,
                  height: p.height,
                  backgroundColor: p.color,
                  borderRadius: p.radius,
                  "--tx": `${p.tx}px`,
                  "--ty": `${p.ty}px`,
                  "--rot": p.rot,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 pt-6 text-center">
        <span className="text-[11px] tracking-[0.35em] uppercase text-amberaccent font-semibold block text-glow">
          {s.eyebrow}
        </span>
        <h3 className="text-3xl sm:text-4xl font-philosopher text-white text-glow mt-1">{s.title}</h3>
        <p className="text-3xl sm:text-4xl font-philosopher italic text-champagne text-glow mt-1">
          {s.subtitle}
        </p>
      </div>

      <div className="relative z-10 my-auto" />

      <div className="relative z-20 text-center pb-6">
        <button
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-amberaccent hover:bg-amberwarm text-stone-950 font-bold text-xs uppercase tracking-wider transition shadow-2xl hover:scale-105"
          onClick={onNext}
        >
          {s.nextLabel}
        </button>
      </div>
    </Slide>
  );
}
