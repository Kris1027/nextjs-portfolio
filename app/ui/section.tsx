export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      className="pt-40 pb-5 px-4 sm:px-10 min-h-screen flex flex-col justify-center overflow-hidden"
      id={id}
    >
      {children}
    </section>
  );
}
