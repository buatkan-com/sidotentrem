export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}) {
  return (
    <div className={`section-heading align-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
