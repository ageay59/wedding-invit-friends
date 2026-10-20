import { useMemo, type CSSProperties } from "react";
import { config } from "@/config/config";
import Slide from "./Slide";
import SlideHeader from "./SlideHeader";

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
  const { title, invited: s } = config.slides.invited;
  // Particles are random, so they are only generated after a burst is triggered on the client
  const particles = useMemo(() => (cannonKey > 0 ? makeParticles() : []), [cannonKey]);

  return (
    <Slide
      image={s.image}
      alt={title.fr}
      className="slide--invited"
    >
      <div className="invited-slide__confetti">
        <div className="invited-slide__confetti-source">
          {particles.map((p, i) => (
            <span
              key={`${cannonKey}-${i}`}
              className="invited-slide__particle"
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

      <SlideHeader title={title} />

      <div className="invited-slide__spacer" />

      <div className="invited-slide__next">
        <button
          className="invited-slide__next-button"
          onClick={onNext}
        >
          {s.nextLabel}
        </button>
      </div>
    </Slide>
  );
}
