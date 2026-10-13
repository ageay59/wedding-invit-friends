import { config } from "@/config/config";
import Monogram from "./Monogram";

export default function DesktopHero({ dots }: { dots: React.ReactNode }) {
  const { image, objectPosition } = config.desktopHero;
  const { first, second } = config.couple;

  return (
    <div className="hidden md:block md:w-1/2 lg:w-7/12 relative h-full overflow-hidden bg-stone-950">
      <img
        alt={`${first} & ${second}`}
        src={image}
        className="w-full h-full object-cover filter contrast-105"
        style={{ objectPosition }}
      />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center text-center z-20 pointer-events-none px-6">
        <h1 className="text-4xl lg:text-5xl font-philosopher font-normal leading-tight text-white text-glow tracking-wide flex items-center justify-center">
          <span>{first}</span>
          <Monogram className="inline-block h-[0.9em] w-[0.9em] align-middle mx-3 text-amber-300/90 fill-current drop-shadow-md" />
          <span>{second}</span>
        </h1>
      </div>
      {dots}
    </div>
  );
}
