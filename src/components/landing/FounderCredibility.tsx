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
                "I'm [Your Name], and I build every system myself. After watching planners struggle with generic software for years, I started Lavoie to offer something different: truly custom automation built around how you actually work."
              </p>
              <footer className="mt-6">
                <cite className="text-primary font-medium not-italic">
                  — Founder, Lavoie Systems
                </cite>
              </footer>
            </blockquote>
          </div>
          
          {/* Process Line */}
          <div className="mt-10">
            <p className="text-muted-foreground text-base sm:text-lg">
              <span className="text-body">My process:</span>
              {" "}
              <span className="text-body">90-minute discovery call</span>
              <span className="text-primary mx-2">→</span>
              <span className="text-body">I build everything custom over 2 weeks</span>
              <span className="text-primary mx-2">→</span>
              <span className="text-body">train you personally</span>
              <span className="text-primary mx-2">→</span>
              <span className="text-body">launch together</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderCredibility;
