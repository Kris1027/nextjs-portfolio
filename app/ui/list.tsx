export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-8">
      {children}
    </ul>
  );
}
