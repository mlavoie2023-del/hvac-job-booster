const steps = [
  {
    number: "01",
    title: "Demo Call",
    description: "We'll show you how it works and see if your business is a good fit",
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
    <section id="how-it-works" className="bg-background py-12 sm:py-16 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center px-2">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How the Free HVAC Software Install Works
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="mx-auto mt-12 sm:mt-16 hidden max-w-5xl lg:block">
          {/* Connecting Line */}
          <div className="relative mb-8 flex justify-between px-16">
            <div className="absolute left-16 right-16 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary via-primary/70 to-primary/40" />
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30">
                {step.number}
              </div>
            ))}
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-muted/50 p-5 text-center transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mx-auto mt-8 sm:mt-12 max-w-md lg:hidden">
          <div className="relative space-y-4 sm:space-y-6">
            {/* Vertical Line */}
            <div className="absolute bottom-4 left-[18px] sm:left-5 top-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-3 sm:gap-5">
                {/* Number Circle */}
                <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="flex-1 rounded-xl border border-border bg-muted/50 p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
