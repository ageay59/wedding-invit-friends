"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { FaPaw } from "react-icons/fa";

const DEFAULT_IMAGES = [
  ...Array.from({ length: 7 }, (_, index) => `/photos/animals/cat/${String(index + 1).padStart(2, "0")}.png`),
  ...Array.from({ length: 7 }, (_, index) => `/photos/animals/dog/${String(index + 1).padStart(2, "0")}.png`),
];

type Effect = "flyby" | "peek" | "chase" | "rain";

export type EasterEggProps = {
  label: string;
  className?: string;
  images?: string[];
  containerRef?: RefObject<HTMLElement>;
};

const effects: Effect[] = ["flyby", "peek", "chase", "rain"];
const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);
const randomItem = <T,>(items: readonly T[]) =>
  items[Math.floor(Math.random() * items.length)];

export default function EasterEgg({
  label,
  className,
  images = DEFAULT_IMAGES,
  containerRef,
}: EasterEggProps) {
  const [mounted, setMounted] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const animationsRef = useRef(new Set<Animation>());
  const lastEffectRef = useRef<Effect | null>(null);

  useEffect(() => {
    setMounted(true);
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [images]);

  useEffect(() => {
    const animations = animationsRef.current;
    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  const spawn = useCallback((src: string, size: number) => {
    const layer = layerRef.current;
    if (!layer) return null;
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    image.className = "easter-egg__sprite";
    image.style.setProperty("--size", `${size}px`);
    layer.append(image);
    return image;
  }, []);

  const play = useCallback(
    (element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      const animation = element.animate(keyframes, {
        ...options,
        fill: options.fill ?? "backwards",
      });
      animationsRef.current.add(animation);
      const cleanup = () => {
        animationsRef.current.delete(animation);
        element.remove();
      };
      animation.finished.then(cleanup, cleanup);
    },
    [],
  );

  const viewport = useCallback(() => {
    const layer = layerRef.current;
    return { width: layer?.clientWidth ?? 0, height: layer?.clientHeight ?? 0 };
  }, []);

  const balancedImages = useCallback(
    (count: number) => {
      const cats = images.filter((image) => image.includes("/cat/"));
      const dogs = images.filter((image) => image.includes("/dog/"));
      const fallback = cats.length || dogs.length ? [...cats, ...dogs] : images;
      const catImages = cats.length ? cats : fallback;
      const dogImages = dogs.length ? dogs : fallback;

      return Array.from({ length: count }, (_, index) =>
        randomItem(index % 2 === 0 ? catImages : dogImages),
      );
    },
    [images],
  );

  const flyby = useCallback(() => {
    const size = randomBetween(175.5, 292.5);
    const { width, height } = viewport();
    const horizontal = Math.random() > 0.5;
    const from = horizontal
      ? { x: -size, y: randomBetween(0.15, 0.8) * height }
      : { x: randomBetween(0.15, 0.8) * width, y: -size };
    const to = horizontal
      ? { x: width + size, y: randomBetween(0.15, 0.8) * height }
      : { x: randomBetween(0.15, 0.8) * width, y: height + size };
    const image = spawn(randomItem(images), size);
    if (!image) return;
    const middle = {
      x: (from.x + to.x) / 2 + randomBetween(-100, 100),
      y: (from.y + to.y) / 2 + randomBetween(-80, 80),
    };
    play(
      image,
      [from, middle, to].map((point) => ({
        transform: `translate(${point.x - size / 2}px, ${point.y - size / 2}px) rotate(${randomBetween(-20, 20)}deg)`,
      })),
      { duration: randomBetween(2730, 4290), easing: "ease-in-out" },
    );
  }, [images, play, spawn, viewport]);

  const peek = useCallback(() => {
    const size = 273;
    const { width, height } = viewport();
    const image = spawn(randomItem(images), size);
    if (!image) return;
    const side = randomItem(["bottom", "left", "right"] as const);
    const x = randomBetween(0.15, 0.85) * width - size / 2;
    const y = randomBetween(0.2, 0.8) * height - size / 2;
    const hidden =
      side === "bottom" ? `translate(${x}px, ${height}px)` :
      side === "left" ? `translate(${-size}px, ${y}px)` :
      `translate(${width}px, ${y}px)`;
    const shown =
      side === "bottom" ? `translate(${x}px, ${height - size * 0.7}px)` :
      side === "left" ? `translate(${-size * 0.3}px, ${y}px)` :
      `translate(${width - size * 0.7}px, ${y}px)`;
    play(
      image,
      [{ transform: hidden }, { transform: shown }, { transform: shown }, { transform: hidden }],
      { duration: 3380, easing: "ease-in-out" },
    );
  }, [images, play, spawn, viewport]);

  const chase = useCallback(() => {
    const size = 214.5;
    const { width, height } = viewport();
    const leftToRight = Math.random() > 0.5;
    const y = randomBetween(0.35, 0.8) * height;
    const from = leftToRight ? -size : width + size;
    const to = leftToRight ? width + size : -size;
    const cats = images.filter((image) => image.includes("/cat/"));
    const dogs = images.filter((image) => image.includes("/dog/"));
    const cat = randomItem(cats.length ? cats : images);
    const dog = randomItem(dogs.length ? dogs : images);
    const frames = Array.from({ length: 9 }, (_, index) => ({
      transform: `translate(${from + ((to - from) * index) / 8}px, ${y - (index % 2 ? 22 : 0)}px) scaleX(${leftToRight ? 1 : -1})`,
    }));

    [cat, dog].forEach((src, index) => {
      const image = spawn(src, size);
      if (!image) return;
      play(image, frames, {
        duration: 2860,
        delay: index * 338,
        easing: "linear",
      });
    });
  }, [images, play, spawn, viewport]);

  const rain = useCallback(() => {
    const { width, height } = viewport();
    const rainImages = balancedImages(18);
    for (let index = 0; index < 18; index += 1) {
      const size = randomBetween(81.9, 163.8);
      const x = randomBetween(0, width);
      const image = spawn(rainImages[index], size);
      if (!image) continue;
      play(
        image,
        [
          { transform: `translate(${x}px, -${size}px) rotate(0deg)` },
          { transform: `translate(${x + randomBetween(-70, 70)}px, ${height + size}px) rotate(${randomBetween(-360, 360)}deg)` },
        ],
        { duration: randomBetween(2860, 5200), delay: randomBetween(0, 1300), easing: "ease-in" },
      );
    }
  }, [balancedImages, play, spawn, viewport]);

  const handleClick = () => {
    if (!images.length || !layerRef.current) return;
    buttonRef.current?.animate(
      [{ transform: "scale(1)" }, { transform: "scale(.85)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }],
      { duration: 494, easing: "ease-out" },
    );

    const available = effects.filter((effect) => effect !== lastEffectRef.current);
    const effect = randomItem(available.length ? available : effects);
    lastEffectRef.current = effect;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const image = spawn(randomItem(images), 234);
      if (!image) return;
      const { width, height } = viewport();
      play(image, [{ transform: `translate(${width / 2 - 117}px, ${height / 2 - 117}px)`, opacity: 0 }, { opacity: 1 }, { opacity: 0 }], { duration: 1820 });
      return;
    }
    ({ flyby, peek, chase, rain }[effect])();
  };

  return (
    <>
      <div className="easter-egg__prompt">
        <button
          ref={buttonRef}
          type="button"
          className={["easter-egg__button", className].filter(Boolean).join(" ")}
          onClick={handleClick}
          aria-label={label}
          title={label}
        >
          <FaPaw className="easter-egg__icon" aria-hidden="true" />
        </button>
        <span className="easter-egg__label">{label}</span>
      </div>
      {mounted &&
        containerRef?.current &&
        createPortal(
          <div ref={layerRef} className="easter-egg__layer" aria-hidden="true" />,
          containerRef.current,
        )}
    </>
  );
}
