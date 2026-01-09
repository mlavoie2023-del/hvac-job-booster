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
    <section className="bg-foreground py-12 sm:py-16 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background">
            Most HVAC Companies Lose Jobs Before They Ever Get a Chance
          </h2>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 max-w-2xl">
          <div className="space-y-3 sm:space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 rounded-xl bg-background/5 p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:bg-background/10"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-destructive/20">
                  <problem.icon className="h-5 w-5 sm:h-6 sm:w-6 text-destructive" />
                </div>
                <p className="text-sm sm:text-lg font-medium text-background/90">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 max-w-2xl text-center px-4">
          <p className="text-base sm:text-xl font-semibold text-accent">
            Every missed call or delayed response is a job going to your competitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
