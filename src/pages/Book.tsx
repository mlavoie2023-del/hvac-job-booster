import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const Book = () => {
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
            <div className="w-16" /> {/* Spacer for centering */}
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

          {/* Calendar embed placeholder */}
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              [Calendar embed will go here]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
