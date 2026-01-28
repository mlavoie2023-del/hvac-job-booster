import mattLavoie from "@/assets/matt-lavoie.jpg";

const FounderCredibility = () => {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Subtle spotlight background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, hsl(217 91% 60% / 0.06), transparent)",
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
                background:
                  "radial-gradient(ellipse at center, hsl(217 91% 60% / 0.08), transparent 70%)",
              }}
            />

            <blockquote className="relative">
              <p className="text-lg sm:text-xl text-body leading-relaxed">
                "I'm Matt Lavoie, and I build every system myself. After
                watching planners struggle with generic software for years, I
                started Lavoie Systems to offer something different: truly
                custom automation built around how you actually work."
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <img
                  src={mattLavoie}
                  alt="Matt Lavoie"
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary/30"
                  style={{ objectPosition: "center 25%" }}
                />
                <cite className="text-primary font-medium not-italic">
                  — Founder, Lavoie Systems
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderCredibility;