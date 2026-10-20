"use client";

import { useEffect, useState } from "react";
import { config } from "@/config/config";
import Slide from "./Slide";

const TIMELINE_SRC = "/timeline.svg";

type Position = { left: string; top: string };
type Anchors = Record<string, Position>;

// Reads the invisible <circle data-anchor="..."> markers of the SVG and converts
// them to percentages of its viewBox, so badges follow the image at any size.
async function loadAnchors(): Promise<Anchors> {
  const response = await fetch(TIMELINE_SRC);
  if (!response.ok) throw new Error(`Unable to load ${TIMELINE_SRC}`);
  const text = await response.text();
  const svg = new DOMParser().parseFromString(text, "image/svg+xml").documentElement;
  const [minX, minY, width, height] = (svg.getAttribute("viewBox") ?? "0 0 1 1")
    .split(/\s+/)
    .map(Number);
  const anchors: Anchors = {};
  svg.querySelectorAll("[data-anchor]").forEach((el) => {
    const name = (el as SVGElement).dataset.anchor;
    if (!name) return;
    anchors[name] = {
      left: `${((Number(el.getAttribute("cx")) - minX) / width) * 100}%`,
      top: `${((Number(el.getAttribute("cy")) - minY) / height) * 100}%`,
    };
  });
  return anchors;
}

const badgeBase = "story-slide__badge";
const badgeSmall = `${badgeBase} story-slide__badge--small`;

type PlaceBadgeProps = Readonly<{
  position?: Position;
  className: string;
  children: string;
}>;

function PlaceBadge({ position, className, children }: PlaceBadgeProps) {
  if (!position) return null;
  return (
    <div
      className="story-slide__place"
      style={position}
    >
      <span
        aria-label={children}
        className="story-slide__badge-flip"
        role="img"
        tabIndex={0}
      >
        <span className={className}>{children}</span>
      </span>
    </div>
  );
}

export default function StorySlide() {
  const { story } = config.slides.story;
  const { image, places } = story;
  const [anchors, setAnchors] = useState<Anchors>({});

  useEffect(() => {
    let cancelled = false;
    loadAnchors()
      .then((result) => !cancelled && setAnchors(result))
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Slide
      image={image}
      alt="Notre histoire"
      className="slide--story"
    >
      <div className="story-slide__content">
        <div className="story-slide__title" aria-label={story.title}>
          {Array.from(story.title).map((character, index) => (
            <span key={`${character}-${index}`}>{character === " " ? "\u00a0" : character}</span>
          ))}
        </div>
        <div className="story-slide__diagram">
          <img
            alt=""
            aria-hidden="true"
            className="story-slide__lines"
            src={TIMELINE_SRC}
          />

          <PlaceBadge position={anchors.dreux} className={`${badgeSmall} story-slide__badge--dark`}>
            {places.dreux}
          </PlaceBadge>
          <PlaceBadge position={anchors.anywhere} className={`${badgeSmall} story-slide__badge--dark`}>
            {places.anywhere}
          </PlaceBadge>
          <PlaceBadge position={anchors.creapole} className={`${badgeSmall} story-slide__badge--accent`}>
            {places.creapole}
          </PlaceBadge>
          <PlaceBadge position={anchors.shanghai} className={`${badgeSmall} story-slide__badge--dark`}>
            {places.shanghai}
          </PlaceBadge>
          <PlaceBadge position={anchors.paris} className={`${badgeSmall} story-slide__badge--dark`}>
            {places.paris}
          </PlaceBadge>
          <PlaceBadge position={anchors.lille} className={`${badgeSmall} story-slide__badge--accent`}>
            {places.lille}
          </PlaceBadge>
          <PlaceBadge
            position={anchors.viroflay}
            className={`${badgeSmall} story-slide__badge--accent`}
          >
            {places.viroflay}
          </PlaceBadge>
        </div>
      </div>
    </Slide>
  );
}
