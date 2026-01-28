import mattLavoie from "@/assets/matt-lavoie.jpg";

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

const FounderCredibility = () => {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Subtle spotlight background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-transparent" />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 30%, hsl(217 91% 60% / 0.06), transparent)"
        }}
      />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-[800px] text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Built By Hand, Not From a Template
          </h2>
          
          {/* Quote Card */}
          <div className="relative p-8 sm:p-10 rounded-xl border border-primary/20 bg-card/60 backdrop-blur-sm">
            {/* Subtle glow effect */}
            <div 
              className="absolute inset-0 rounded-xl opacity-40"
              style={{
                background: "radial-gradient(ellipse at center, hsl(217 91% 60% / 0.08), transparent 70%)"
              }}
            />
            
            <blockquote className="relative">
              <p className="text-lg sm:text-xl text-body leading-relaxed">
                "I'm Matt Lavoie, and I build every system myself. After watching planners struggle with generic software for years, I started Lavoie to offer something different: truly custom automation built around how you actually work."
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <img 
                  src={mattLavoie} 
                  alt="Matt Lavoie" 
                  className="h-10 w-10 rounded-full object-cover border-2 border-primary/30"
                />
                <cite className="text-primary font-medium not-italic">
                  — Founder, Lavoie Systems
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
        
        {/* Visual Process Roadmap */}
        <div className="mx-auto mt-16 max-w-5xl">
          <p className="text-center text-sm font-medium text-primary mb-8">My process</p>
          
          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block">
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
          <div className="lg:hidden">
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
        </div>
      </div>
    </section>
  );
};

export default FounderCredibility;
