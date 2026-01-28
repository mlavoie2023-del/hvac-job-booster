import { UserX, Layers, Gift, Clock } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Prospects ghost you",
    description: "They say 'not now' and you never hear from them again. No system to stay top-of-mind.",
  },
  {
    icon: Layers,
    title: "Onboarding is chaos",
    description: "Chasing documents, manual reminders, unprofessional first impressions.",
  },
  {
    icon: Gift,
    title: "Referrals don't happen",
    description: "You know you should ask. But there's no system, so you don't.",
  },
];

const Problem = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(217_91%_60%/0.03),transparent)]" />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">The solo planner struggle</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            You're the Planner, Admin, <em className="not-italic text-muted-foreground">and</em> Follow-Up Machine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            When you're a one-person firm, everything falls on you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-spotlight text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-body">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border/50 bg-card/50 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">The real cost:</span>
          </div>
          <p className="text-lg text-body">
            <span className="text-foreground font-semibold">10+ hours per week</span> on manual follow-up instead of serving the clients you already have.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
