import { Check, X } from "lucide-react";

const forList = [
  "Miss calls while on installs or service jobs",
  "Want more booked jobs without hiring more staff",
  "Already get leads but don't follow up fast enough",
  "Want systems, not more work",
];

const notForList = [
  "Large call centers with dedicated staff",
  "Franchises with corporate systems",
  "Companies not actively taking new jobs",
];

const WhoIsFor = () => {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            This Is For HVAC Companies Who…
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* For */}
          <div className="card-elevated p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
              <Check className="h-6 w-6 text-success" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Perfect Fit
            </h3>
            <ul className="space-y-3">
              {forList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="card-elevated p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <X className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Not The Right Fit
            </h3>
            <ul className="space-y-3">
              {notForList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
