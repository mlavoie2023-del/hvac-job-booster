import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="relative py-16 lg:py-20 spotlight-section">
      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
              <AlertCircle className="h-4 w-4" />
              Sound familiar?
            </span>
          </div>

          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center leading-tight">
            You became a planner to <span className="gradient-text">help people</span>—<br className="hidden sm:block" />
            not to spend your nights chasing paperwork.
          </h2>

          {/* Pain points as a flowing list */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Following up with cold leads",
              "Chasing down signatures",
              "Sending reminder emails",
              "Manually onboarding clients",
            ].map((pain, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 bg-card/20"
              >
                <div className="h-2 w-2 rounded-full bg-destructive/60 shrink-0" />
                <span className="text-body text-sm">{pain}</span>
              </div>
            ))}
          </div>

          {/* Cost callout */}
          <div className="mt-10 text-center">
            <p className="text-lg text-body">
              That's <span className="text-destructive font-bold">10+ hours a week</span> you'll never get back.
            </p>
            <p className="mt-2 text-muted-foreground italic">
              What if it didn't have to be this way?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
