import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, Lightbulb, Gift } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Book = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://api.lavoiesystems.com/js/form_embed.js";
    script.type = "text/javascript";
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
          <div className="flex h-16 items-center justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={lavoieLogo} alt="Lavoie Systems" className="h-9 w-9" />
              <span className="text-xl font-bold text-foreground">Lavoie Systems</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="py-8 lg:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <div className="mx-auto max-w-3xl mb-12">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">See It In Action</p>
                  <p className="text-sm text-muted-foreground">Live demo of the system</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Get a Custom Plan</p>
                  <p className="text-sm text-muted-foreground">Tailored to your business</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Start Your Free Trial</p>
                  <p className="text-sm text-muted-foreground">14 days, no obligation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="rounded-2xl border border-border/50 bg-card p-2 shadow-lg">
            <iframe
              src="https://api.lavoiesystems.com/widget/booking/RbdszjGc8cqHsJVEqQDr"
              style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="RbdszjGc8cqHsJVEqQDr_1767744749114"
              title="Book a Demo"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
