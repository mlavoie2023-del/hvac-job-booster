import { Check, X } from "lucide-react";

const forList = [
  "You're making $100-250K annually",
  "You have 30-100 planning clients",
  "You're drowning in manual follow-up",
  "Prospects fall through the cracks",
  "You want to scale without hiring staff",
  "You know you need systems but don't have time to build them",
];

const notForList = [
  "Large RIAs",
  "Broker-dealers",
  "Planners happy staying small",
];

const WhoIsFor = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built For Solo Fee-Only Planners
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* For list */}
          <div className="card-dark">
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
          <div className="mt-8 rounded-xl border border-border/50 bg-card/50 p-6">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              NOT for:
            </p>
            <div className="flex flex-wrap gap-4">
              {notForList.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <X className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item}</span>
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
