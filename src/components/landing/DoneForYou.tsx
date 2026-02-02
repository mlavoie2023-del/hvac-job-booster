import { CheckCircle2, Wrench, Plug, Settings, HeadphonesIcon, Zap } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Fully Built",
    description: "Your entire system built from scratch—no templates, no DIY.",
  },
  {
    icon: Plug,
    title: "Connected & Integrated",
    description: "Linked to your calendar, email, forms, and payment tools.",
  },
  {
    icon: Settings,
    title: "Automations Configured",
    description: "Follow-ups, reminders, and workflows set up and tested.",
  },
  {
    icon: Zap,
    title: "Ready to Launch",
    description: "Everything installed and working before you go live.",
  },
  {
    icon: HeadphonesIcon,
    title: "Training Included",
    description: "Walkthrough session so you know exactly how to use it.",
  },
  {
    icon: CheckCircle2,
    title: "Ongoing Support",
    description: "Direct access to me for tweaks and questions anytime.",
  },
];

const DoneForYou = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-muted/30">
      <div className="section-container">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Zero Setup Required
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              100% <span className="gradient-text">Done For You</span>
            </h2>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              You don't lift a finger. I handle everything—from building your platform to connecting 
              your tools to training you on how it all works.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border/50 bg-card/80 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-body">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom emphasis */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              You focus on your clients. I'll handle the tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneForYou;
