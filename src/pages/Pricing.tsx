import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const includedFeatures = [
  "Custom Prospect Nurture System",
  "Professional Client Onboarding",
  "Referral Generation Engine",
  "Review Meeting Coordination",
  "Lead Source Tracking",
  "Everything Branded to You",
  "Two Training Sessions",
  "Daily Support (First Week)",
  "Email Support (Ongoing)",
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-body">
              One system. One price. Everything included.
            </p>
          </div>

          {/* Pricing card */}
          <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-8 lg:p-12 shadow-glow">
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-foreground">
                $497<span className="text-2xl text-muted-foreground">/month</span>
              </p>
              <p className="mt-2 text-lg text-body">
                for your complete automation system
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-body">
                One-time implementation:{" "}
                <span className="font-semibold text-foreground">$1,997</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Or prepay 3 months ($1,491) and skip the setup fee entirely
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link to="/book" className="btn-primary px-8 py-4 text-lg">
                Book a Discovery Call
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            No long-term contracts. Cancel anytime after 90 days.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
