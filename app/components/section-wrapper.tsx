export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-10 bg-white dark:bg-black">{children}</section>;
}
