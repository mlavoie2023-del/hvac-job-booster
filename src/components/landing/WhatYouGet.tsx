import { 
  Workflow, 
  FileText, 
  ClipboardList, 
  Calendar, 
  GitBranch, 
  Inbox, 
  BarChart3, 
  Plug, 
  Share2 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deliverables = [
  {
    icon: Workflow,
    title: "Customized Workflows",
    description:
      "Automated sequences for prospect nurturing, referral requests, and appointment confirmations. Set it once, and let the system handle follow-ups, reminders, and check-ins automatically.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Professional pages for consultation booking, lead magnets, and client resources. Designed to convert visitors into prospects with your branding and messaging throughout.",
  },
  {
    icon: ClipboardList,
    title: "Forms",
    description:
      "Client intake forms, satisfaction surveys, and referral submission forms. Collect the information you need with smart forms that integrate directly into your workflows.",
  },
  {
    icon: Calendar,
    title: "Calendars",
    description:
      "Let prospects and clients book appointments directly. Syncs with your existing calendar to avoid double-booking and sends automatic reminders to reduce no-shows.",
  },
  {
    icon: GitBranch,
    title: "Pipelines",
    description:
      "Visual tracking for prospects and client journeys. See exactly where each relationship stands, what's next, and never let an opportunity slip through the cracks.",
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    description:
      "One place to manage all client communication—SMS, email, and social media. No more switching between apps or missing messages across platforms.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "Track lead sources, conversion rates, and campaign performance. Know exactly what's working so you can double down on effective strategies.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect with your calendar, email, and financial planning software. Everything works together seamlessly, fitting into your existing tech stack.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Manage LinkedIn, Instagram, Facebook and more from one place. Schedule posts, track engagement, and interact with prospects without juggling multiple platforms.",
  },
];

const WhatYouGet = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)] pointer-events-none" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Your complete system</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Nine integrated tools that work together—built around <em>your</em> practice, not generic templates.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {deliverables.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border transition-all duration-300 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_40px_-10px_hsl(217_91%_60%/0.3)]"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:text-primary">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground text-left">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <p className="text-body pl-14">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
