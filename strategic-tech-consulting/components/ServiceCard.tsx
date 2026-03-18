type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="soft-card h-full">
      <div className="mb-4 h-10 w-10 rounded-full bg-[#f4ead8]" />
      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}