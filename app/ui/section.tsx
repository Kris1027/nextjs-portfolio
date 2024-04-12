export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      className="pt-40 pb-5 sm:px-10 bg-white dark:bg-black ease-in-out duration-500 min-h-screen flex flex-col gap-10 justify-center overflow-hidden"
      id={id}
    >
      {children}
    </section>
  );
}
