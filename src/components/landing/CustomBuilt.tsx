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
      "I build your custom CRM with automations in 1-2 weeks, connected to tools you already use.",
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
    <section id="how-it-works" className="relative py-20 lg:py-28 spotlight-section-dual">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/30 to-transparent" />
      <div className="section-container relative">
        <div className="mx-auto max-w-5xl">
          {/* Two-column layout on desktop */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: About Matt */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src={mattLavoie}
                  alt="Matt Lavoie"
                  className="h-24 w-24 rounded-full object-cover border-2 border-primary/30 shadow-lg mb-6"
                  style={{ objectPosition: "center 25%" }}
                />
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Custom-Built For{" "}
                  <span className="gradient-text">Your</span> Practice
                </h2>
                <p className="mt-4 text-lg text-body max-w-md">
                  I'm Matt Lavoie, and I build every system myself. After watching planners struggle with generic software for years, I started Lavoie Systems to offer something different.
                </p>
                <p className="mt-4 text-body">
                  No templates. No hand-offs. Just a system built around how <em>you</em> actually work.
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  No technical skills required. I handle everything so you can just use it.
                </p>
              </div>
            </div>

            {/* Right: Process Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-6 text-center lg:text-left">
                How It Works
              </h3>
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Number badge */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-primary">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-4">
                    <h4 className="text-base font-semibold text-foreground">
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
    </section>
  );
};

export default CustomBuilt;
