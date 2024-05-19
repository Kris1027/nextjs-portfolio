export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm tablet:text-lg pb-5 leading-8 text-[var(--secondary)] text-center">
      {children}
    </p>
  );
}
