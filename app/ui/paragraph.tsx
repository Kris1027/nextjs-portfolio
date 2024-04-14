export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
      {children}
    </p>
  );
}
