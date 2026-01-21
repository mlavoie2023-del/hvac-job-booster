import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const VSL = () => {
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
      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Video Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-4">
              See How HVAC Companies Are Booking More Jobs
            </h1>
            <p className="text-muted-foreground text-lg">
              Watch this quick 3-minute demo
            </p>
          </div>

          {/* Video Player */}
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg mb-10">
            <div style={{ position: "relative", paddingBottom: "64.63195691202873%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/ec33b9642eab441792e9297774d4dfd6"
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Product Demo Video"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/book">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">21-day free trial • No contracts • Cancel anytime</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default VSL;