type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  copy,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}