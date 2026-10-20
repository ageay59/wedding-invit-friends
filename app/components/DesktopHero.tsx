import { config } from "@/config/config";
import Monogram from "./Monogram";

export default function DesktopHero({ dots }: { dots: React.ReactNode }) {
  const { image } = config.desktopHero;
  const { bride, groom } = config.couple;

  return (
    <div className="desktop-hero">
      <img
        alt={`${bride} & ${groom}`}
        src={image}
        className="desktop-hero__image"
      />
      <div className="desktop-hero__border" aria-hidden="true" />
      <div className="desktop-hero__names" aria-label={`${bride} & ${groom}`}>
        <Monogram className="desktop-hero__monogram" />
      </div>
      {dots}
    </div>
  );
}
