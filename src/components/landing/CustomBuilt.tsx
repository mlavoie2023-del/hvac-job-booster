import mattLavoie from "@/assets/matt-lavoie.jpg";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "60-minute call to understand your practice, goals, and current tech stack.",
  },
  {
    number: "2",
    title: "Build",
    description:
      "I build out your custom platform, automations, and integrations in 1-2 weeks.",
  },
  {
    number: "3",
    title: "Support",
    description:
      "Direct text access to me for updates, tweaks, and new workflows as your practice grows.",
  },
];

const CustomBuilt = () => {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28">
      <div className="section-container relative">
        <div className="mx-auto max-w-5xl">
          {/* Centered headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Custom-Built For <span className="gradient-text">Your</span> Practice
            </h2>
          </div>

          {/* Two-column layout - 1/3 and 2/3 split, centered */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center justify-center mx-auto">
            {/* Left: Founder quote card - 1/3 width */}
            <div className="lg:col-span-1 rounded-xl border border-border/50 bg-card/50 p-6 h-full flex items-center">
              <div className="flex flex-col items-center text-center w-full">
                <img
                  src={mattLavoie}
                  alt="Matt Lavoie"
                  className="h-20 w-20 rounded-full object-cover border-2 border-primary/30 shadow-lg mb-4"
                  style={{ objectPosition: "center 25%" }}
                />
                <blockquote className="text-sm text-body italic leading-relaxed">
                  "You shouldn't have to learn new software or spend weekends setting things up. I build it, connect it, and hand you the keys—ready to go."
                </blockquote>
                <div className="mt-4 flex flex-col items-center">
                  <span className="font-semibold text-foreground text-sm">Matt Lavoie</span>
                  <span className="text-xs text-muted-foreground">Founder, Lavoie Systems</span>
                </div>
              </div>
            </div>

            {/* Right: How It Works - 2/3 width */}
            <div className="lg:col-span-2 flex flex-col h-full">
              {/* Headline above cards */}
              <h3 className="text-lg font-semibold text-primary mb-6 text-center lg:text-left">
                How It Works
              </h3>
              
              {/* Steps cards */}
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Number badge */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-primary">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-xl border border-border bg-card p-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuilt;
