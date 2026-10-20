import { config } from "@/config/config";
import Form from "../Form";
import Slide from "./Slide";

export default function RsvpSlide() {
  const { common, rsvp: r } = config.slides.rsvp;

  return (
    <Slide
      image={r.image}
      alt={common.title ?? "RSVP"}
      className="slide--rsvp"
    >
      <div className="rsvp-slide__heading">
        <span className="rsvp-slide__eyebrow">
          {common.eyebrow}
        </span>
        <h3 className="rsvp-slide__title">{common.title}</h3>
      </div>
      <div className="rsvp-slide__form-wrap">
        <div className="rsvp-slide__form-panel">
          <Form />
        </div>
      </div>
    </Slide>
  );
}
