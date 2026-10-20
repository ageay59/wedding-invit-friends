"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/config";
import Monogram from "../Monogram";
import Slide from "./Slide";

type InvitationSlideProps = { onNext: () => void };

export default function InvitationSlide({ onNext }: InvitationSlideProps) {
  const { images, badge, scrollLabel } = config.slides.invitation.invitation;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      3800
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <Slide className="slide--invitation">
      <div className="invitation-slide__backgrounds">
        {images.map((src, i) => (
          <img
            key={src}
            alt=""
            src={src}
            className={`invitation-slide__background ${i === current ? "invitation-slide__background--active" : ""}`}
          />
        ))}
      </div>

      <div className="invitation-slide__content">
        <div className="invitation-slide__monogram">
          <Monogram className="invitation-slide__monogram-image" />
        </div>
        <div className="invitation-slide__badge-wrap">
          <button
            className="invitation-slide__badge"
            onClick={onNext}
          >
            {badge}
          </button>
        </div>
        <h2 className="invitation-slide__title">
          {config.couple.bride} &amp; {config.couple.groom}
        </h2>
        <div className="invitation-slide__divider" />
        <p className="invitation-slide__date">
         {config.event.dateNumeric}
        </p>
      </div>

      <div className="invitation-slide__scroll">
        <p className="invitation-slide__scroll-label">
          {scrollLabel}
        </p>
        <button
          aria-label="Faire défiler"
          className="invitation-slide__scroll-button"
          onClick={onNext}
        >
          <span className="invitation-slide__scroll-dot" />
        </button>
      </div>
    </Slide>
  );
}
