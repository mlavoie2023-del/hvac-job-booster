import { Phone, MessageSquare, Calendar, Star, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "Every Call Answered",
    description: "AI receptionist picks up instantly, 24/7. No more missed opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Instant Follow-Up",
    description: "Automatic texts and follow-ups keep leads warm until they book.",
  },
  {
    icon: Calendar,
    title: "Jobs Booked For You",
    description: "Customers schedule directly into your calendar. You just show up.",
  },
  {
    icon: Star,
    title: "More 5-Star Reviews",
    description: "Automated review requests turn happy customers into online reviews.",
  },
];

const benefits = [
  "No hiring or training required",
  "Works while you're on jobs",
  "Pays for itself in one booking",
  "Cancel anytime, no contracts",
];

const Solution = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            We Build One Simple System
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            That handles calls, follow-ups, and bookings — so you can focus on the work that pays
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-muted/50 p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
