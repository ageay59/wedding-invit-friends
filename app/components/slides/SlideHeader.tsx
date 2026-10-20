import type { Bilingual } from "@/config/config";

type SlideHeaderProps = { title: Bilingual };

export default function SlideHeader({ title }: SlideHeaderProps) {
  return (
    <header className="slide-header">
      <h2 className="slide-header__title">
        <span className="slide-header__title-en" lang="en">{title.en}</span>
        <div className="slide-header__divider" />
        <span className="slide-header__title-fr" lang="fr">{title.fr}</span>
      </h2>
    </header>
  );
}
