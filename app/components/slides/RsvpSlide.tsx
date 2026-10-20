import { config } from "@/config/config";
import Form from "../Form";
import Slide from "./Slide";
import SlideHeader from "./SlideHeader";

export default function RsvpSlide() {
  const { title, rsvp: r } = config.slides.rsvp;

  return (
    <Slide
      image={r.image}
      alt={title.fr}
      className="slide--rsvp"
    >
      <SlideHeader title={title} />
      <div className="rsvp-slide__form-wrap">
        <div className="rsvp-slide__form-panel">
          <Form />
        </div>
      </div>
    </Slide>
  );
}
