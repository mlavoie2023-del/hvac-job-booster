const steps = [
  {
    number: "1",
    title: "Week 1: Discovery & Build",
    description:
      "90-minute call to understand your practice, your niche, and exactly how you work. Then we build your custom system—not a template.",
  },
  {
    number: "2",
    title: "Week 2: Training & Refinement",
    description:
      "Two hands-on training sessions. You test everything in your real workflow. We adjust until it's perfect for your practice.",
  },
  {
    number: "3",
    title: "Week 3: Launch & Support",
    description:
      "We launch it live. Daily check-ins for the first week. Your prospects never fall through the cracks again.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Done for you, not DIY</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Custom-Built For <span className="gradient-text">Your</span> Practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            We don't hand you software and wish you luck. We build a complete system around how <em>you</em> work—then train you on it.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="mx-auto mt-16 hidden max-w-5xl lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Number badge */}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-primary">
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className="mt-6 rounded-xl border border-border bg-card p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mx-auto mt-12 max-w-md lg:hidden">
          <div className="relative space-y-6">
            {/* Vertical line */}
            <div className="absolute bottom-4 left-5 top-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-5">
                {/* Number badge */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-primary">
                  {step.number}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-border bg-card p-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solo planner callout */}
        <p className="mx-auto mt-12 max-w-lg text-center text-muted-foreground">
          No technical skills required. No staff needed. We handle the build—you just use it.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
