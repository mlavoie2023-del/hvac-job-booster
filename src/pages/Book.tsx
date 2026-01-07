import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, CheckCircle } from "lucide-react";

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
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Book Your Free Demo
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              See how Lavoie Systems can help you capture more leads, close more jobs, and grow your HVAC business.
            </p>
          </div>

          {/* Benefits */}
          <div className="mx-auto max-w-3xl mb-12">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">30 Minutes</p>
                  <p className="text-sm text-muted-foreground">Quick & focused</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Flexible Times</p>
                  <p className="text-sm text-muted-foreground">Pick what works</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">No Obligation</p>
                  <p className="text-sm text-muted-foreground">Zero pressure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="mx-auto max-w-4xl">
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

          {/* Trust text */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Join dozens of HVAC contractors who are growing their business with Lavoie Systems.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Book;
