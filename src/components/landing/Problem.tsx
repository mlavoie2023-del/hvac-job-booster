import { Clock, Brain, Users, TrendingDown, AlertCircle } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "You're buried in admin work",
    description: "Scheduling, reminders, paperwork, follow-ups—tasks that don't require your expertise but consume your entire day.",
  },
  {
    icon: Brain,
    title: "You can't turn off",
    description: "Mental note to follow up with that prospect. Did you send that welcome email? Is the client onboarding on track? It never stops.",
  },
  {
    icon: Users,
    title: "Growth means burnout",
    description: "You want more clients, but every new client means more admin. Scaling feels impossible without hiring staff you can't afford.",
  },
  {
    icon: TrendingDown,
    title: "Leads slip through the cracks",
    description: "That prospect who said 'not right now'? They went silent. Without a system, warm leads go cold and referrals never happen.",
  },
];

const Problem = () => {
  return (
    <section className="relative py-20 lg:py-28 spotlight-section">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(217_91%_60%/0.04),transparent)]" />
      
      <div className="section-container relative">
        {/* Empathetic headline */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4" />
            Sound familiar?
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            You became a planner to <span className="gradient-text">help people</span>—not to drown in busywork
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            As a solo advisor, you wear every hat. But somewhere along the way, the admin took over. 
            You're spending more time on operations than on the work that actually matters.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{point.title}</h3>
                  <p className="mt-2 text-body leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The real cost callout */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center">
            <p className="text-lg text-body">
              <span className="text-foreground font-bold">The hidden cost:</span> You're trading{" "}
              <span className="text-destructive font-semibold">10+ hours a week</span> on tasks 
              that could be automated—time you could spend with clients, family, or actually growing your practice.
            </p>
          </div>
        </div>

        {/* Transition to solution */}
        <div className="mx-auto mt-8 text-center">
          <p className="text-muted-foreground italic">
            What if you could get those hours back—without hiring anyone?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
