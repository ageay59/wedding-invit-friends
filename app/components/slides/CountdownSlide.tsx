"use client";

import { useRef } from "react";
import { config } from "@/config/config";
import Countdown from "../Countdown";
import Slide from "./Slide";

export default function CountdownSlide() {
  const { common, countdown: c } = config.slides.countdown;
  const slideRef = useRef<HTMLElement>(null);

  return (
    <Slide
      image={c.image}
      alt={common.title ?? "Compte à rebours"}
      className="slide--countdown"
      ref={slideRef}
    >
      <div className="countdown-slide__content">
        <div className="countdown-slide__panel">
          <h3 className="countdown-slide__title">{common.title}</h3>
          <Countdown animationContainerRef={slideRef} />
        </div>
      </div>
    </Slide>
  );
}
