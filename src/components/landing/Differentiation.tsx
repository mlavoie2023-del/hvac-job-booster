import { X, Check } from "lucide-react";

const comparisons = [
  {
    title: "DIY Software",
    subtitle: "Redtail, Wealthbox, etc.",
    items: [
      { text: "Spend weeks setting up", negative: true },
      { text: "Generic templates", negative: true },
      { text: "You're on your own", negative: true },
      { text: "50% never finish setup", negative: true },
    ],
  },
  {
    title: "Marketing Agencies",
    subtitle: "$3K-5K/month",
    items: [
      { text: "Don't understand planning", negative: true },
      { text: "Long-term contracts", negative: true },
      { text: "Built for enterprises", negative: true },
      { text: "Cookie-cutter campaigns", negative: true },
    ],
  },
  {
    title: "Lavoie Systems",
    subtitle: "Built for solo planners",
    highlight: true,
    items: [
      { text: "Done in 3 weeks", negative: false },
      { text: "Built for YOUR practice", negative: false },
      { text: "We implement everything", negative: false },
      { text: "Designed for one-person firms", negative: false },
    ],
  },
];

const Differentiation = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Subtle glow from above */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,hsl(217_91%_60%/0.05),transparent)]" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Why we're different</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built For Solo Planners.<br />
            <span className="text-muted-foreground">Not Enterprises.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          {comparisons.map((column, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 ${
                column.highlight
                  ? "border-primary/50 bg-primary/5 shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              <div className="text-center mb-6">
                <h3
                  className={`text-lg font-bold ${
                    column.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {column.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {column.subtitle}
                </p>
              </div>
              <ul className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {item.negative ? (
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    ) : (
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    )}
                    <span
                      className={
                        item.negative ? "text-muted-foreground" : "text-body"
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
