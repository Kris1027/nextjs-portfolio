export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl dark:text-gray-500 text-center">{children}</h2>
  );
}
