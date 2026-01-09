import { PhoneOff, Clock, UserX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls",
    description: "Every unanswered call is a lost job. You're busy on installs while leads go to voicemail.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Up",
    description: "Leads go cold waiting for callbacks. By the time you follow up, they've booked someone else.",
  },
  {
    icon: UserX,
    title: "No One to Help",
    description: "You can't afford a full-time receptionist, but you need someone answering phones.",
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    description: "Missed calls and slow responses add up to thousands in lost revenue every month.",
  },
];

const Problem = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Most HVAC owners are losing jobs without even knowing it
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-destructive/30 hover:shadow-lg"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
