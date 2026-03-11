import { CTASection } from "@/components/CTASection";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { academyPrograms, caseStudies, consultingServices, whyUs } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Consulting"
            title="Consulting services built for real business needs"
            description="Practical technology support for organisations that need better visibility, better systems, and better digital execution."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {consultingServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Why Strategic Tech Consulting"
            title="A founder-led model that stays practical, credible, and scalable"
            description="The business is structured to deliver high-value work within realistic capacity, while remaining flexible enough to grow through trusted outsourcing and specialist support."
          />
          <div className="grid gap-5">
            {whyUs.map((item) => (
              <ServiceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Academy"
            title="Career preparation with real-world relevance"
            description="A paid student platform focused on portfolio quality, employability, and readiness for the realities of the modern workplace."
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
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Structured examples of the work this business is built to deliver"
            description="The case-study layer can evolve into a strong trust asset as you complete more projects and capture measurable outcomes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div className="flex min-h-[260px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl font-semibold text-white">
              TS
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Founder"
              title="A business built at the intersection of technology, analysis, and opportunity"
              description="Strategic Tech Consulting is founded by a self-taught full-stack developer and business intelligence analyst with experience across banking and construction technology. The long-term vision is to help businesses adopt smarter systems while helping students become more employable through practical, market-relevant preparation."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
