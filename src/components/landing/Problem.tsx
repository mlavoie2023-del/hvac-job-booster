import { UserX, Layers, Gift } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Prospects say 'not now' and disappear forever",
  },
  {
    icon: Layers,
    title: "Client onboarding feels chaotic and unprofessional",
  },
  {
    icon: Gift,
    title: "You know you should ask for referrals but never do",
  },
];

const Problem = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Spotlight focus zone */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] bg-gradient-to-b from-transparent via-[#111111] to-transparent" />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            You're Drowning in Follow-Up
          </h2>
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
              <p className="mt-4 text-body">{problem.title}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground">
          Meanwhile, you're spending 10+ hours per week on manual follow-up
          instead of serving clients.
        </p>
      </div>
    </section>
  );
};

export default Problem;
