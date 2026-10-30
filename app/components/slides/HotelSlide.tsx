import { config } from "@/config/config";
import {
  MdDirectionsCar,
  MdKey,
  MdLocalPhone,
  MdOutlineNavigation,
  MdPayments,
} from "react-icons/md";
import Slide from "./Slide";

export default function HotelSlide() {
  const { title, hotel: h } = config.slides.hotel;
  const phoneHref = `tel:${h.phone}`;

  return (
    <Slide
      image={h.image}
      alt={title.fr}
      className="slide--hotel"
    >
      <header className="slide-header">
      <h2 className="slide-header__title">
        <span className="slide-header__title-fr" lang="fr">{title.en}</span>
      </h2>
    </header>

      <div className="hotel-slide__content">
        <div className="hotel-slide__panel">
          <div className="hotel-slide__name-row">
            <a
              className="hotel-slide__name"
              href={h.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${h.name} in Google Maps`}
            >
              <MdOutlineNavigation className="hotel-slide__maps-icon" />
              {h.name}
            </a>
          </div>
          <div className="hotel-slide__facts">
            <div className="hotel-slide__fact"><MdLocalPhone /><a href={phoneHref}>{h.phone}</a></div>
            <div className="hotel-slide__fact"><MdKey /><span>{h.codeLabel.fr}<small>{h.codeLabel.en}</small> <strong>{h.code}</strong></span></div>
            <div className="hotel-slide__fact"><MdDirectionsCar /><span>{h.travel.fr}<small>{h.travel.en}</small></span></div>
            <div className="hotel-slide__fact"><MdPayments /><span>{h.payment.fr}<small>{h.payment.en}</small></span></div>
          </div>
          <p className="hotel-slide__help">{h.help.en}</p>
        </div>
        <div className="hotel-slide__platforms-block">
          <p className="hotel-slide__platform-label">You can also look on:</p>
          <div className="hotel-slide__platforms">
            {h.platforms.map((platform) => (
              <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={platform.name}>
                <img src={platform.image} alt={platform.name} />
              </a>
            ))}
          </div>
          <p className="hotel-slide__platform-label">{h.help2.fr}</p>
        </div>
      </div>
    </Slide>
  );
}
