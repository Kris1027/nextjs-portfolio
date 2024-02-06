export default function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl py-2 dark:text-gray-500">{children}</h3>;
}
