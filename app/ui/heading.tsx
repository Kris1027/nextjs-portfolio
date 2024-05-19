export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl text-[var(--primary)] text-center font-bold">
      {children}
    </h2>
  );
}
