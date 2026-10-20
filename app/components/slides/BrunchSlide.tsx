import { config } from "@/config/config";
import Slide from "./Slide";

export default function BrunchSlide() {
  const { common, brunch: b } = config.slides.brunch;

  return (
    <Slide
      image={b.image}
      alt={common.title ?? "Brunch"}
      className="slide--brunch"
    >
      <div className="brunch-slide__content">
        <div className="brunch-slide__panel">
          <span className="brunch-slide__date">
            {b.dateLabel}
          </span>
          <h4 className="brunch-slide__title">{common.title}</h4>
          <p className="brunch-slide__text">
            <span>{b.text.fr}</span>
            <span className="brunch-slide__text-en">{b.text.en}</span>
          </p>
        </div>
      </div>
    </Slide>
  );
}
