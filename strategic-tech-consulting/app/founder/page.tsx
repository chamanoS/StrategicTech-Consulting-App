import { SectionHeading } from "@/components/SectionHeading";

export default function FounderPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/60">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl font-semibold text-white">
            TS
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Founder Story"
            title="Building a consulting business that combines delivery and community impact"
            description="This page is where your personal credibility becomes a business asset. Use it to tell a grounded story about your journey as a self-taught full-stack developer, your BI and analytics background, your industry experience, and your mission to help both businesses and students grow."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Strategic Tech Consulting is a founder-led business built around practical implementation, modern web technology, and business-minded problem solving.
            </p>
            <p>
              The long-term vision is to help small businesses and startups make smarter technology decisions while creating a structured pathway for students preparing to enter the tech job market.
            </p>
            <p>
              Over time, this page can include your full story, values, consulting philosophy, and future vision for the academy and community impact arm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
