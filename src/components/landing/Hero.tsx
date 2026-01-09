import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CalendarCheck, MessageSquare, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Simple feature snapshot data
const featureSnapshot = [
  { 
    icon: Phone, 
    title: "Answers Calls",
    description: "24/7, never misses one"
  },
  { 
    icon: CalendarCheck, 
    title: "Books Jobs",
    description: "Directly on your calendar"
  },
  { 
    icon: MessageSquare, 
    title: "Follows Up",
    description: "Texts leads automatically"
  },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Zap className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered · Ready in 7 Days
            </span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your{" "}
            <span className="gradient-text">AI-Powered</span> HVAC Office
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            One system that answers calls, books jobs, and follows up with every lead — 24/7.
          </p>

          {/* CTAs */}
          <div 
            className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button variant="hero" size="xl" className="relative w-full sm:w-auto" asChild>
                <Link to="/book">
                  Start My Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>

          {/* Trust Line */}
          <p 
            className={`mt-6 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            14-day free trial · No contracts · Cancel anytime
          </p>
        </div>

        {/* Simple Feature Snapshot */}
        <div 
          className={`mx-auto mt-16 max-w-3xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {featureSnapshot.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-3">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
