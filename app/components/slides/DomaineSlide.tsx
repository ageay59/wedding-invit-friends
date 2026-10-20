import { MdOutlineNavigation } from "react-icons/md";
import { config } from "@/config/config";
import Slide from "./Slide";

type DomaineSlideProps = { shimmerKey: number };

export default function DomaineSlide({ shimmerKey }: DomaineSlideProps) {
  const { common, domaine: d } = config.slides.domaine;

  return (
    <Slide
      image={d.image}
      alt={common.title ?? "Domaine"}
      className="slide--domaine"
    >
      <div className="domaine-slide__shimmer">
        <div
          key={shimmerKey}
          className={`domaine-slide__shimmer-sweep ${
            shimmerKey > 0 ? "shimmer-active" : ""
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.18) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="domaine-slide__heading">
        <svg
          aria-hidden="true"
          className="domaine-slide__arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 32 48"
        >
          <line  x1="16" x2="16" y1="0" y2="34" />
          <polyline points="8,26 16,36 24,26" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
        <span className="domaine-slide__eyebrow">
          {common.eyebrow}
        </span>
        <h3 className="domaine-slide__title">
          {common.title}
        </h3>
        <div className="domaine-slide__divider" />
      </div>

      <div className="domaine-slide__details">
        <div className="domaine-slide__details-content">
          <p className="domaine-slide__address">
            <span className="domaine-slide__address-strong">{d.addressLine1}</span>
            <br />
            <span className="domaine-slide__address-strong">{d.addressLine2}</span>
            <br />
            <span className="domaine-slide__address-muted">{d.addressLine3}</span>
          </p>
          <a
            className="domaine-slide__maps-link"
            href={d.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MdOutlineNavigation className="domaine-slide__maps-icon" />
            {d.mapsLabel}
          </a>
        </div>
      </div>
    </Slide>
  );
}
