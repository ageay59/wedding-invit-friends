import { config } from "@/config/config";
import { MdDirectionsCar, MdKey, MdLocalPhone, MdPayments } from "react-icons/md";
import Slide from "./Slide";

export default function HotelSlide() {
  const { common, hotel: h } = config.slides.hotel;
  const phoneHref = `tel:${h.phone}`;

  return (
    <Slide
      image={h.image}
      alt={common.title ?? "Hôtel"}
      className="slide--hotel"
    >
      <div className="hotel-slide__heading">
        <span className="hotel-slide__eyebrow">
          {common.eyebrow}
        </span>
        <h3 className="hotel-slide__title">{common.title}</h3>
      </div>

      <div className="hotel-slide__content">
        <div className="hotel-slide__panel">
          <div className="hotel-slide__facts">
            <div className="hotel-slide__fact"><MdLocalPhone /><a href={phoneHref}>{h.phone}</a></div>
            <div className="hotel-slide__fact"><MdKey /><span>{h.codeLabel.fr}<small>{h.codeLabel.en}</small> <strong>{h.code}</strong></span></div>
            <div className="hotel-slide__fact"><MdDirectionsCar /><span>{h.travel.fr}<small>{h.travel.en}</small></span></div>
            <div className="hotel-slide__fact"><MdPayments /><span>{h.payment.fr}<small>{h.payment.en}</small></span></div>
          </div>
          <p className="hotel-slide__help">{h.help.fr}<br />{h.help.en}</p>
        </div>
        <div className="hotel-slide__platforms-block">
          <p className="hotel-slide__platform-label">Pour encore plus près, vous pouvez aussi regarder sur :<br /><em>To get even closer, you can also look on :</em></p>
          <div className="hotel-slide__platforms">
            {h.platforms.map((platform) => (
              <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={platform.name}>
                <img src={platform.image} alt={platform.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
