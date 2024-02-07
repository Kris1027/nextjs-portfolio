export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
      {children}
    </h3>
  );
}
