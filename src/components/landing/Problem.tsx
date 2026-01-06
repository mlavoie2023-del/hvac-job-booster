import { PhoneOff, Clock, MessageSquareX, UserX } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    text: "Calls go to voicemail while you're on a job",
  },
  {
    icon: MessageSquareX,
    text: "Leads fill out forms and never hear back",
  },
  {
    icon: Clock,
    text: "Follow-up is inconsistent or forgotten",
  },
  {
    icon: UserX,
    text: "Past customers don't come back on their own",
  },
];

const Problem = () => {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            Most HVAC Companies Lose Jobs Before They Ever Get a Chance
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl bg-background/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-background/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/20">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <p className="text-lg font-medium text-background/90">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-xl font-semibold text-accent">
            Every missed call or delayed response is a job going to your competitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
