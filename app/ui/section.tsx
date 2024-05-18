export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      className="pt-40 pb-5 px-4 min-h-screen flex flex-col justify-center overflow-hidden tablet:px-20 mx-auto"
      id={id}
    >
      {children}
    </section>
  );
}
