import { X, Check } from "lucide-react";

const comparisons = [
  {
    title: "DIY Software",
    items: [
      { text: "Spend weeks setting up", negative: true },
      { text: "Generic templates", negative: true },
      { text: "You're on your own", negative: true },
      { text: "50% never finish setup", negative: true },
    ],
  },
  {
    title: "Agencies",
    items: [
      { text: "$3K-5K/month", negative: true },
      { text: "Don't understand planning", negative: true },
      { text: "Long-term contracts", negative: true },
      { text: "Built for enterprises", negative: true },
    ],
  },
  {
    title: "Lavoie Systems",
    highlight: true,
    items: [
      { text: "Done in 3 weeks", negative: false },
      { text: "Built for YOUR practice", negative: false },
      { text: "We implement everything", negative: false },
      { text: "Designed for solo planners", negative: false },
    ],
  },
];

const Differentiation = () => {
  return (
    <section className="relative py-20 lg:py-28 spotlight-section">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Why Not Just Use Software?
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
              <h3
                className={`text-lg font-bold text-center ${
                  column.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {column.title}
              </h3>
              <ul className="mt-6 space-y-4">
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
