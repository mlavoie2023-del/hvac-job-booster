import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Book = () => {
  useEffect(() => {
    // Load the booking widget script
    const script = document.createElement("script");
    script.src = "https://api.lavoiesystems.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={lavoieLogo} 
                alt="Lavoie Systems" 
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-foreground">
                Lavoie Systems
              </span>
            </Link>

            {/* Back to Home */}
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="section-container py-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              Book a Discovery Call
            </h1>
            <p className="mt-4 text-lg text-body">
              Let's discuss your practice and see if we're a good fit.
            </p>
          </div>

          {/* Calendar embed */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <iframe 
              src="https://api.lavoiesystems.com/widget/booking/RbdszjGc8cqHsJVEqQDr" 
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
              scrolling="no" 
              id="RbdszjGc8cqHsJVEqQDr_1769992610444"
              title="Book a Discovery Call"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
