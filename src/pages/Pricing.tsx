import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";
import { Badge } from "@/components/ui/badge";

const features = [
  "Complete custom CRM build",
  "Custom Automations",
  "Client onboarding workflows",
  "Referral generation system",
  "Direct text access to me for any changes",
  "Monthly optimization reviews",
  "Unlimited technical support",
];

const tiers = [
  {
    name: "Month-to-Month",
    subtitle: "Get started with flexibility",
    setupNote: null,
    price: "$1,397",
    priceSuffix: "",
    description: "Then $397/month after first month",
    highlighted: false,
    savings: null,
    strikethrough: null,
    buttonLabel: "Get Started",
    href: "#",
  },
  {
    name: "6 Months Prepaid",
    subtitle: "Commit to growth and save",
    setupNote: null,
    price: "$2,382",
    priceSuffix: "",
    description: "Then $397/month after 6 months",
    highlighted: true,
    savings: "Save $1,000",
    strikethrough: "$3,382",
    buttonLabel: "Get Started",
    href: "#",
    badge: "Most Popular",
  },
  {
    name: "12 Months Prepaid",
    subtitle: "Maximum savings for committed planners",
    setupNote: null,
    price: "$3,970",
    priceSuffix: "",
    description: "12 months fully covered, then $397/month",
    highlighted: false,
    savings: "Save $1,000 + 2 months FREE",
    strikethrough: "$5,764",
    buttonLabel: "Get Started",
    href: "#",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <img src={lavoieLogo} alt="Lavoie Systems" className="h-8 w-8" />
              <span className="text-lg font-bold text-foreground">Lavoie Systems</span>
            </div>
            <div className="w-16" />
          </div>
        </div>
      </header>

      <main className="section-container py-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              One system. Every feature included. Pick the plan that fits your commitment level.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 lg:gap-8 md:grid-cols-3 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`
                  relative rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col
                  ${tier.highlighted
                    ? "border-primary/60 bg-card shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
                  }
                `}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold shadow-md">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-foreground">{tier.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.subtitle}</p>
                </div>

                {/* Price Block */}
                <div className="text-center mb-6 pb-6 border-b border-border">
                  {tier.setupNote && (
                    <p className="text-sm text-muted-foreground mb-1">{tier.setupNote}</p>
                  )}
                  {tier.strikethrough && (
                    <p className="text-sm text-muted-foreground line-through mb-1">{tier.strikethrough}</p>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-base text-muted-foreground font-medium">
                      {tier.priceSuffix}
                    </span>
                  </div>
                  {tier.savings && (
                    <p className="mt-2 text-sm font-semibold text-[hsl(var(--success))]">
                      {tier.savings}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground">{tier.description}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a
                    href={tier.href}
                    className={`
                      block w-full text-center rounded-xl py-3.5 text-sm font-semibold transition-all duration-200
                      ${tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.4)] hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
                        : "border-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50"
                      }
                    `}
                  >
                    {tier.buttonLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* All Plans Include */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="text-center text-xl font-bold text-foreground mb-8">All Plans Include:</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No long-term contracts. Cancel anytime after your commitment period.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
