export default function ProjectListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="relative z-10">{children}</section>;
}
