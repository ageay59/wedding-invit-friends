type MonogramProps = { className?: string };

export default function Monogram({ className }: MonogramProps) {
  return <img className={className} src="/monogram.svg" alt="" aria-hidden="true" />;
}
