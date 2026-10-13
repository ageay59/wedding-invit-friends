"use client";

import { useRef, useState } from "react";
import { config } from "@/config/config";
import DesktopHero from "./DesktopHero";
import DesktopNavDots from "./DesktopNavDots";
import MobileNav from "./MobileNav";
import InvitationSlide from "./slides/InvitationSlide";
import StorySlide from "./slides/StorySlide";
import DomaineSlide from "./slides/DomaineSlide";
import TimelineSlide from "./slides/TimelineSlide";
import InvitedSlide from "./slides/InvitedSlide";
import RsvpSlide from "./slides/RsvpSlide";
import HotelSlide from "./slides/HotelSlide";
import BrunchSlide from "./slides/BrunchSlide";
import CountdownSlide from "./slides/CountdownSlide";

const DOMAINE_INDEX = 2;
const INVITED_INDEX = 4;

export default function Invitation() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotsVisible, setDotsVisible] = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);
  const [cannonKey, setCannonKey] = useState(0);

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ top: index * slider.clientHeight, behavior: "smooth" });
  };

  const openInvitation = () => {
    audioRef.current?.play().catch(() => {});
    scrollToSlide(1);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setDotsVisible(slider.scrollTop > slider.clientHeight * 0.45);

    const index = Math.min(
      Math.round(slider.scrollTop / slider.clientHeight),
      config.nav.length - 1
    );
    if (index === activeRef.current) return;

    const previous = activeRef.current;
    activeRef.current = index;
    setActiveIndex(index);

    if (index === DOMAINE_INDEX && previous !== DOMAINE_INDEX) setShimmerKey((k) => k + 1);
    if (index === INVITED_INDEX) setCannonKey((k) => k + 1);
  };

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden">
      <DesktopHero
        dots={
          <DesktopNavDots
            visible={dotsVisible}
            activeIndex={activeIndex}
            onSelect={scrollToSlide}
          />
        }
      />

      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="w-full md:w-1/2 lg:w-5/12 h-[100dvh] max-h-[100dvh] overflow-y-scroll snap-container scroll-smooth relative z-20 border-l border-white/10 shadow-2xl bg-stone-950"
      >
        <InvitationSlide onNext={openInvitation} />
        <StorySlide />
        <DomaineSlide shimmerKey={shimmerKey} />
        <TimelineSlide onNext={() => scrollToSlide(4)} />
        <InvitedSlide onNext={() => scrollToSlide(5)} cannonKey={cannonKey} />
        <RsvpSlide />
        <HotelSlide />
        <BrunchSlide />
        <CountdownSlide />
      </div>

      <MobileNav activeIndex={activeIndex} onSelect={scrollToSlide} />
      <audio ref={audioRef} src={config.music.src} preload="auto" />
    </div>
  );
}
