import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const results = [
  {
    icon: Clock,
    metric: "10+ hrs/week",
    label: "Saved on follow-up",
    description: "Automation handles what used to eat your evenings",
  },
  {
    icon: TrendingUp,
    metric: "Zero",
    label: "Leads falling through cracks",
    description: "Every prospect gets systematic nurturing",
  },
  {
    icon: Users,
    metric: "More",
    label: "Referrals per client",
    description: "Because you're actually asking—automatically",
  },
  {
    icon: Zap,
    metric: "Day 1",
    label: "Professional onboarding",
    description: "New clients feel taken care of immediately",
  },
];

const Results = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Gentle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(217_91%_60%/0.03),transparent)]" />
      

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">
            The transformation
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Changes When You Have a System
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Stop running your practice on memory and sticky notes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <result.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                {result.metric}
              </div>
              <div className="text-sm font-medium text-primary mt-1">
                {result.label}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
