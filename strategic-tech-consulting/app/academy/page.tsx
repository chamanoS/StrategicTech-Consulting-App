import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { academyPrograms } from "@/lib/site";

export default function AcademyPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <SectionHeading
        eyebrow="Strategic Tech Academy"
        title="Paid programmes focused on portfolio quality and workplace readiness"
        description="This section can later expand into cohort pages, programme pricing, student testimonials, and an enrolment flow."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {academyPrograms.map((program) => (
          <ServiceCard
            key={program.title}
            icon={program.icon}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </section>
  );
}
