

const Problem = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center leading-tight">
            Running a solo practice means <span className="gradient-text">wearing every hat</span>
          </h2>

          {/* Pain points as a flowing list */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              "Following up with leads",
              "Chasing down signatures",
              "Sending reminder emails",
              "Manually onboarding clients",
            ].map((pain, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 p-6 rounded-xl border border-border/40 bg-card/30"
              >
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40 shrink-0" />
                <span className="text-foreground text-lg font-medium">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
