import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { consultingServices } from "@/lib/site";

export default function ConsultingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <SectionHeading
        eyebrow="Consulting Services"
        title="Technology support built for operational clarity and practical growth"
        description="Start with a clear service page that explains what you offer, how you work, and where your strongest capabilities sit today."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {consultingServices.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
