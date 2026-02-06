import { Link } from "react-router-dom";
import { ArrowLeft, LayoutDashboard, Zap, Users, Share2, MessageCircle, BarChart3, Headphones } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";
import { Badge } from "@/components/ui/badge";

const features = [
  { label: "Complete custom CRM build", icon: LayoutDashboard },
  { label: "Custom Automations", icon: Zap },
  { label: "Client onboarding workflows", icon: Users },
  { label: "Referral generation system", icon: Share2 },
  { label: "Unlimited technical support", icon: Headphones },
  { label: "Monthly optimization reviews", icon: BarChart3 },
  { label: "Direct text access to me for any changes", icon: MessageCircle },
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
    fee: "$1,000 setup fee included",
    strikethrough: null,
    buttonLabel: "Get Started",
    href: "https://buy.stripe.com/28E6oHdy0cPE9CTgQy6Na04",
  },
  {
    name: "Bi-Annually",
    subtitle: "Commit to growth and save",
    setupNote: null,
    price: "$2,382",
    priceSuffix: "",
    description: "Then $2,382 every 6 months",
    highlighted: true,
    savings: "Waive $1,000 Setup",
    fee: null,
    strikethrough: "$3,382",
    buttonLabel: "Get Started",
    href: "https://buy.stripe.com/5kQfZh9hK4j8bL16bU6Na07",
    badge: "Most Popular",
  },
  {
    name: "Annually",
    subtitle: "Maximum savings for committed planners",
    setupNote: null,
    price: "$3,970",
    priceSuffix: "",
    description: "Then $3,970 every 12 months",
    highlighted: false,
    savings: "Waive $1,000 Setup + 2 Months Free",
    fee: null,
    strikethrough: "$5,764",
    buttonLabel: "Get Started",
    href: "https://buy.stripe.com/cNi6oHdy06rg5mD0RA6Na08",
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
              One System<span className="gradient-text">.</span> Every Feature<span className="gradient-text">.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick the plan that fits your commitment level — everything's included from day one.
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
                  {tier.fee && (
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {tier.fee}
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
          <div className="mt-16 relative rounded-2xl border border-border bg-card p-8 lg:p-10 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(217 91% 60% / 0.06), transparent 70%)'
            }} />
            <h3 className="relative text-center text-xl font-bold text-foreground mb-2">
              All Plans Include<span className="gradient-text">:</span>
            </h3>
            <p className="relative text-center text-sm text-muted-foreground mb-8">
              Everything you need to scale your practice, included from day one.
            </p>
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {features.slice(0, 6).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="group flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary/70"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Last feature centered */}
            <div className="relative mt-4 flex justify-center max-w-4xl mx-auto">
              <div className="group flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary/70 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                  {features[6].label}
                </span>
              </div>
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
