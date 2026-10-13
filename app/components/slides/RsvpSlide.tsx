import { config } from "@/config/config";
import Form from "../Form";
import Slide from "./Slide";

export default function RsvpSlide() {
  const r = config.slides.rsvp;

  return (
    <Slide
      image={r.image}
      alt={r.alt}
      className="justify-start p-4 sm:p-6 pb-24 md:pb-6 bg-stone-900"
    >
      <div className="relative z-10 pt-2 text-center mb-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-amberaccent font-semibold block text-glow">
          {r.eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl font-philosopher text-white text-glow">{r.title}</h3>
      </div>
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="p-4 sm:p-5 rounded-3xl">
          <Form />
        </div>
      </div>
    </Slide>
  );
}
