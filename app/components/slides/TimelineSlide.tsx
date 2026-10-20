import type { IconType } from "react-icons";
import {
  MdOutlineCelebration,
  MdOutlineDirectionsCar,
  MdOutlineFavoriteBorder,
  MdOutlineLiquor,
  MdOutlineMeetingRoom,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { config, type TimelineIcon } from "@/config/config";
import Slide from "./Slide";
import SlideHeader from "./SlideHeader";

const ICONS: Record<TimelineIcon, IconType> = {
  car: MdOutlineDirectionsCar,
  door: MdOutlineMeetingRoom,
  heart: MdOutlineFavoriteBorder,
  camera: MdOutlinePhotoCamera,
  drink: MdOutlineLiquor,
  party: MdOutlineCelebration,
};

type TimelineSlideProps = { onNext: () => void };

export default function TimelineSlide({ onNext }: TimelineSlideProps) {
  const { title, timeline: t } = config.slides.timeline;

  return (
    <Slide
      image={t.image}
      alt={title.fr}
      className="slide--timeline"
    >
      <SlideHeader title={title} />

      <div className="timeline-slide__events">
        <div className="timeline-slide__events-list">
          <div className="timeline-slide__line" />
          {t.events.map((event) => {
            const Icon = ICONS[event.icon];
            return (
              <div key={event.time.fr} className="timeline-slide__event">
                <div
                  className={`timeline-slide__icon ${
                    event.highlight
                      ? "timeline-slide__icon--highlight"
                        : "timeline-slide__icon--default"
                  }`}
                >
                  <Icon
                    className="timeline-slide__icon-glyph"
                  />
                </div>
                <div className="timeline-slide__event-content">
                  <div className="timeline-slide__time">
                    <span
                      className="timeline-slide__time-fr"
                    >
                      {event.time.fr}
                    </span>
                    <span
                      className="timeline-slide__time-en"
                    >
                      {event.time.en}
                    </span>
                  </div>
                  <div>
                    <h4 className="timeline-slide__event-title">
                      {event.title.fr}
                    </h4>
                    <p className="timeline-slide__event-subtitle">
                      {event.title.en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="timeline-slide__next">
        <button
          className="timeline-slide__next-button"
          onClick={onNext}
        >
          {t.nextLabel}
        </button>
      </div>
    </Slide>
  );
}
