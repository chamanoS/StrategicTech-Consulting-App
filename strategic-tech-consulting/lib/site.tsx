import type { ReactNode } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  LayoutDashboard,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Strategic Tech Consulting",
  description:
    "Founder-led technology consulting for growing businesses, with a paid academy that prepares final-year students for the tech job market.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/consulting", label: "Consulting" },
    { href: "/academy", label: "Academy" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/founder", label: "Founder" },
    { href: "/contact", label: "Contact" },
  ],
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const consultingServices: FeatureCard[] = [
  {
    title: "Business Intelligence & Dashboards",
    description:
      "Power BI dashboards, reporting layers, and insight systems that help decision-makers act faster.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Automation Systems",
    description:
      "Internal tools and streamlined workflows that reduce manual work and improve day-to-day operations.",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    title: "Startup MVP Development",
    description:
      "Modern web applications for founders who need to validate ideas and launch with confidence.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "Technology Advisory",
    description:
      "Strategic guidance on architecture, digital direction, and realistic implementation choices.",
    icon: <Compass className="h-5 w-5" />,
  },
];

export const academyPrograms: FeatureCard[] = [
  {
    title: "Portfolio Builder Programme",
    description:
      "Help students build real GitHub projects, case studies, and personal proof of work.",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Career Launch Programme",
    description:
      "CVs, LinkedIn, interview preparation, and workplace readiness for final-year students.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Mentorship Membership",
    description:
      "Ongoing guidance, code reviews, portfolio support, and practical career accountability.",
    icon: <Users className="h-5 w-5" />,
  },
];

export const caseStudies = [
  {
    title: "Operations dashboard for faster business visibility",
    description:
      "A reporting layer designed to help leadership track performance, bottlenecks, and KPIs in one place.",
    tag: "BI & Analytics",
  },
  {
    title: "Internal workflow tool for process automation",
    description:
      "A practical business tool concept that reduces repetitive tasks and improves consistency.",
    tag: "Automation",
  },
  {
    title: "Startup MVP structure for early product validation",
    description:
      "A clean application foundation built to help founders move from idea to usable product faster.",
    tag: "Product Build",
  },
];

export const trustStats = [
  "5 years of industry experience",
  "Full-stack development and BI analytics",
  "Exposure to banking and construction tech",
  "Founder-led delivery with scalable support",
];

export const whyUs = [
  {
    title: "Founder-led delivery",
    description: "Clients work directly with the person shaping the strategy and building the solution.",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
  },
  {
    title: "Business and technical thinking",
    description: "Every solution is designed with both execution and business value in mind.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Realistic implementation",
    description: "The service model is structured to stay practical, deliverable, and scalable.",
    icon: <Compass className="h-5 w-5" />,
  },
];
