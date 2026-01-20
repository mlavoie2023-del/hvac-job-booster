import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Pricing = () => {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={lavoieLogo} alt="Lavoie Systems" className="h-9 w-9" />
              <span className="text-xl font-bold text-foreground">Lavoie Systems</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-container py-12 sm:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your HVAC business. Cancel anytime.
          </p>
        </div>

        {/* Stripe Pricing Table */}
        <div className="max-w-5xl mx-auto">
          {/* @ts-ignore */}
          <stripe-pricing-table
            pricing-table-id="prctbl_1SnZgwGWnVbnMOOOlK7TY0WA"
            publishable-key="pk_live_51SNJR5GWnVbnMOOObb1g77kAxufDWK1WKC2ULoPuAV5PzanEwSMUR7HiFDxBwwoGH5sjufPKfNZ83Vghd5dTuXkz00eTKR0ryA"
          />
        </div>
      </main>
    </div>
  );
};

export default Pricing;
