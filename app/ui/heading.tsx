import Reveal from "../theme/animations/reveal";

export default function Heading({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <Reveal>
      <h2
        className="text-3xl text-[var(--primary)] text-center font-bold"
        aria-label={ariaLabel}
      >
        {children}
      </h2>
    </Reveal>
  );
}
