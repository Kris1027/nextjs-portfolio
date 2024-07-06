import Reveal from "../theme/animations/reveal";

export default function Paragraph({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <Reveal>
      <p
        className="text-sm tablet:text-lg pb-5 leading-8 text-[var(--secondary)] text-center"
        aria-label={ariaLabel}
      >
        {children}
      </p>
    </Reveal>
  );
}
