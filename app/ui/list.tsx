export default function List({
  children,
  dataTestId,
}: {
  children: React.ReactNode;
  dataTestId: string;
}) {
  return (
    <ul
      className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-8"
      data-testId={dataTestId}
    >
      {children}
    </ul>
  );
}
