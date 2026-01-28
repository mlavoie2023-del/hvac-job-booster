import { 
  Mail, 
  UserCheck, 
  Users, 
  Calendar, 
  BarChart3, 
  Palette 
} from "lucide-react";

const deliverables = [
  {
    icon: Mail,
    title: "Prospect Nurture System",
    description:
      "Automatic follow-up for leads who aren't ready. Educational emails that keep you top-of-mind for months, without you lifting a finger.",
    soloNote: "No more lost leads",
  },
  {
    icon: UserCheck,
    title: "Client Onboarding",
    description:
      "Automated welcome sequences, document collection, meeting prep. Your new clients feel taken care of from day one.",
    soloNote: "Hours saved per client",
  },
  {
    icon: Users,
    title: "Referral Engine",
    description:
      "Systematic referral requests at the perfect moment. Easy submission. Automatic thank-yous. Finally, a referral system that works.",
    soloNote: "Referrals on autopilot",
  },
  {
    icon: Calendar,
    title: "Review Coordination",
    description:
      "Never chase clients for annual reviews again. Automated scheduling, reminders, and prep—90 days before their review date.",
    soloNote: "No more chasing",
  },
  {
    icon: BarChart3,
    title: "Lead Tracking",
    description:
      "Know exactly which marketing channels bring in real clients. Stop wasting money on what doesn't work.",
    soloNote: "Data-driven marketing",
  },
  {
    icon: Palette,
    title: "Your Brand, Everywhere",
    description:
      "Your logo, colors, voice, and messaging throughout. Clients see you—not some generic software.",
    soloNote: "100% white-labeled",
  },
];

const WhatYouGet = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)]" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Your complete system</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Six integrated systems that work together—built around <em>your</em> practice, not generic templates.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {deliverables.map((item, index) => (
            <div key={index} className="card-dark group">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded">
                  {item.soloNote}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
