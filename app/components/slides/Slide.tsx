import { forwardRef, type ReactNode } from "react";

type SlideProps = {
  className: string;
  image?: string;
  alt?: string;
  children: ReactNode;
};

const Slide = forwardRef<HTMLElement, SlideProps>(function Slide(
  { className, image, alt = "", children },
  ref,
) {
  return (
    <section
      ref={ref}
      className={`slide ${className}`}
    >
      {image && (
        <img
          alt={alt}
          src={image}
          className="slide__image"
        />
      )}
      {children}
    </section>
  );
});

export default Slide;
