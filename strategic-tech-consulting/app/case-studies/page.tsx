import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/lib/site";

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <SectionHeading
        eyebrow="Case Studies"
        title="A clean framework for demonstrating business outcomes"
        description="As client work grows, this page becomes a trust engine. Start with structured sample engagements, then replace them with real case studies over time."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} {...study} />
        ))}
      </div>
    </section>
  );
}
