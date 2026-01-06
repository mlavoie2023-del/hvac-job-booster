import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Wrench } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-background blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Get Your HVAC Software Installed — Risk Free
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 lg:text-xl">
            We build it in 7 days. You try it for 14.<br />
            If it doesn't help your business, cancel and pay nothing.
          </p>

          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href="https://lavoiesystems.com/book">
                Start My Free HVAC Software Install
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              <span className="text-sm">Built for HVAC only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
