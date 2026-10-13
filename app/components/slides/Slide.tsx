import type { ReactNode } from "react";

type SlideProps = {
  className: string;
  image?: string;
  alt?: string;
  children: ReactNode;
};

export default function Slide({ className, image, alt = "", children }: SlideProps) {
  return (
    <section
      className={`snap-slide relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden snap-start snap-always ${className}`}
    >
      {image && (
        <img
          alt={alt}
          src={image}
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105"
        />
      )}
      {children}
    </section>
  );
}
