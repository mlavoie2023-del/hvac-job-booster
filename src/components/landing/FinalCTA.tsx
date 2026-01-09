import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Wrench } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-12 sm:py-16 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-background blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center px-2">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get Your HVAC Software Installed — Risk Free
          </h2>
          
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            We build it in 7 days. You try it for 14.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>If it doesn't help your business, cancel and pay nothing.
          </p>

          <div className="mt-8 sm:mt-10 px-4 sm:px-0">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/book">
                Start My Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Built for HVAC only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
