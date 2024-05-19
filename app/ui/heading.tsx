import Reveal from "../theme/animations/reveal";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-3xl text-[var(--primary)] text-center font-bold">
        {children}
      </h2>
    </Reveal>
  );
}
