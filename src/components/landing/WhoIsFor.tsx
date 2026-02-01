import { Check, X } from "lucide-react";

const forList = [
  "Solo fee-only planner (no partners, no staff)",
  "Making $100-250K annually",
  "30-100 planning clients",
  "Drowning in manual follow-up",
  "Prospects fall through the cracks",
  "Want to scale without hiring",
];

const notForList = [
  "Large RIAs with existing staff",
  "Broker-dealers",
  "Planners who enjoy staying small",
];

const WhoIsFor = () => {
  return (
    <section className="relative py-20 lg:py-28 spotlight-section">
      {/* Subtle transition glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built For Solo Fee-Only Planners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            We specialize in one thing: helping one-person planning firms run like a well-oiled machine.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* For list */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              This is for you if...
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {forList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div className="mt-6 rounded-xl border border-border/50 bg-card/50 p-6">
            <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
              <X className="h-4 w-4" />
              Not the right fit:
            </p>
            <div className="flex flex-wrap gap-4">
              {notForList.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item}</span>
                  {index < notForList.length - 1 && (
                    <span className="text-muted-foreground/50">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
