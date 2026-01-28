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
    title: "Custom Prospect Nurture System",
    description:
      "Automatic follow-up for leads who aren't ready yet. Educational content that keeps you top-of-mind for months.",
  },
  {
    icon: UserCheck,
    title: "Professional Client Onboarding",
    description:
      "Automated welcome sequences, document collection, meeting reminders. Your clients feel taken care of from day one.",
  },
  {
    icon: Users,
    title: "Referral Generation Engine",
    description:
      "Systematic referral requests at the perfect moment. Easy submission process. Automatic thank-yous.",
  },
  {
    icon: Calendar,
    title: "Review Meeting Coordination",
    description:
      "Never chase clients for annual reviews again. Automated scheduling 90 days before, reminders, prep.",
  },
  {
    icon: BarChart3,
    title: "Lead Source Tracking",
    description:
      "Know exactly which marketing channels actually bring in clients. Stop wasting money on what doesn't work.",
  },
  {
    icon: Palette,
    title: "Everything Branded",
    description:
      "Your logo, colors, voice, and messaging throughout. Looks like you built it.",
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What We Build For You
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {deliverables.map((item, index) => (
            <div key={index} className="card-dark">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
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
