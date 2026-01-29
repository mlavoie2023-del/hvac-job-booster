import { useState } from "react";
import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  "Done-for-you setup",
  "Built for solo planners",
  "Custom workflows",
  "Unified inbox",
  "No long-term contracts",
  "Dedicated support",
];

type FeatureValue = boolean | "partial";

interface Competitor {
  name: string;
  highlight?: boolean;
  features: FeatureValue[];
}

const competitors: Competitor[] = [
  {
    name: "Lavoie Systems",
    highlight: true,
    features: [true, true, true, true, true, true],
  },
  {
    name: "Redtail",
    features: [false, false, "partial", false, true, false],
  },
  {
    name: "Wealthbox",
    features: [false, false, "partial", false, true, false],
  },
  {
    name: "Salesforce",
    features: [false, false, true, "partial", false, "partial"],
  },
  {
    name: "HubSpot",
    features: [false, false, true, true, "partial", false],
  },
  {
    name: "Marketing Agency",
    features: ["partial", false, "partial", false, false, "partial"],
  },
];

const FeatureIcon = ({ value }: { value: FeatureValue }) => {
  if (value === true) {
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20">
        <Check className="w-4 h-4 text-primary" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted">
        <Minus className="w-4 h-4 text-muted-foreground" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20">
      <X className="w-4 h-4 text-destructive" />
    </div>
  );
};

const CompetitorComparison = () => {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section 
      className="relative py-20 lg:py-28 overflow-hidden"
      onMouseEnter={() => setIsVisible(true)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(217_91%_60%/0.08),transparent)]" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 animate-fade-in">
            The competition
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl animate-fade-in-up">
            See How We Compare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up">
            The only solution built specifically for solo financial planners
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-6xl overflow-x-auto scrollbar-hide">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="p-4" /> {/* Empty cell for feature labels */}
              {competitors.map((competitor, index) => (
                <div
                  key={competitor.name}
                  className={cn(
                    "p-4 rounded-t-xl text-center transition-all duration-500 cursor-pointer",
                    competitor.highlight
                      ? "bg-primary/10 border-2 border-primary/50 border-b-0"
                      : "bg-card border border-border border-b-0",
                    hoveredColumn === index && !competitor.highlight && "bg-muted/50 scale-[1.02]"
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredColumn(index)}
                  onMouseLeave={() => setHoveredColumn(null)}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors duration-300",
                      competitor.highlight ? "text-primary" : "text-foreground"
                    )}
                  >
                    {competitor.name}
                  </span>
                  {competitor.highlight && (
                    <div className="mt-1">
                      <span className="text-xs text-primary/80 font-medium px-2 py-0.5 rounded-full bg-primary/10 animate-pulse-soft">
                        Recommended
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, featureIndex) => (
              <div
                key={feature}
                className="grid grid-cols-7 gap-2 group"
                style={{
                  animation: "slideInFromLeft 0.5s ease-out forwards",
                  animationDelay: `${featureIndex * 100 + 300}ms`,
                  opacity: 0,
                }}
              >
                <div className="p-4 flex items-center">
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </div>
                {competitors.map((competitor, compIndex) => (
                  <div
                    key={`${competitor.name}-${feature}`}
                    className={cn(
                      "p-4 flex items-center justify-center transition-all duration-300",
                      competitor.highlight
                        ? "bg-primary/10 border-x-2 border-primary/50"
                        : "bg-card border-x border-border",
                      featureIndex === features.length - 1 && (
                        competitor.highlight
                          ? "rounded-b-xl border-b-2"
                          : "rounded-b-xl border-b"
                      ),
                      hoveredColumn === compIndex && !competitor.highlight && "bg-muted/30"
                    )}
                    onMouseEnter={() => setHoveredColumn(compIndex)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <div
                      className="transform transition-transform duration-300 hover:scale-125"
                      style={{
                        animation: "popIn 0.4s ease-out forwards",
                        animationDelay: `${featureIndex * 100 + compIndex * 50 + 500}ms`,
                        opacity: 0,
                        transform: "scale(0)",
                      }}
                    >
                      <FeatureIcon value={competitor.features[featureIndex]} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FeatureIcon value={true} />
            <span>Full support</span>
          </div>
          <div className="flex items-center gap-2">
            <FeatureIcon value="partial" />
            <span>Partial/Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <FeatureIcon value={false} />
            <span>Not included</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default CompetitorComparison;
