const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Complete a short onboarding call so we understand your business",
  },
  {
    number: "02",
    title: "We Build It",
    description: "We build and install your HVAC software system in 7 days",
  },
  {
    number: "03",
    title: "Try It Free",
    description: "You use it free for 14 days in your real business",
  },
  {
    number: "04",
    title: "Keep or Cancel",
    description: "Keep it only if you love it — cancel anytime before billing",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How the Free HVAC Software Install Works
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 lg:left-1/2 lg:-ml-0.5 lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-primary lg:absolute lg:left-1/2 lg:-ml-8">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-xl border border-border bg-card p-6 lg:w-[calc(50%-4rem)] ${
                      index % 2 === 1 ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-lg text-center text-sm text-muted-foreground">
          Card required to start. No charge unless you keep the system.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
