import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneOff, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-foreground">
              Free HVAC Software Install · 7-Day Build + 14-Day Trial · Cancel Anytime
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Stop Losing HVAC Jobs to{" "}
            <span className="gradient-text">Missed Calls</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-delay-1 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            We install AI software that answers every call, follows up with every lead, and books more jobs — built for your HVAC business.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/book">
                Get My Free HVAC Software Install
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>

          {/* Trust Line */}
          <p className="animate-fade-in-delay-3 mt-6 text-sm text-muted-foreground">
            No contracts · Cancel anytime · Built for HVAC only
          </p>
        </div>

        {/* Visual Element */}
        <div className="animate-fade-in-delay-3 mx-auto mt-16 max-w-3xl">
          <div className="card-elevated p-8 lg:p-12">
            <div className="flex items-center justify-center gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
                  <PhoneOff className="h-8 w-8 text-destructive" />
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">Before</p>
                <p className="text-2xl font-bold text-foreground">Missed Calls</p>
              </div>
              <div className="hidden sm:block">
                <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10">
                  <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">After</p>
                <p className="text-2xl font-bold text-foreground">Booked Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
