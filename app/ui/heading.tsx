export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl text-primary dark:text-primaryDark text-center">
      {children}
    </h2>
  );
}
