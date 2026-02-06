import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Pricing = () => {
  useEffect(() => {
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
