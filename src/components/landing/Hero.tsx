import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

  const scrollToProcess = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Workflow visualization */}
      <div className="absolute inset-0 overflow-hidden">
        <WorkflowVisualization />
      </div>

      <div className="section-container relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Solo planner badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Built exclusively for solo fee-only planners
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Custom CRM & Marketing Automation{" "}
            <span className="gradient-text">For Solo Financial Planners</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-body transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The done-for-you automation system that handles follow-up, onboarding, and referrals—so you can focus on planning, not admin work.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button onClick={scrollToProcess} className="btn-primary px-8 py-4 text-lg">
              See How It Works
            </button>
            <Link to="/book" className="link-accent text-lg font-medium">
              Schedule a Strategy Call →
            </Link>
          </div>

          {/* Trust indicator */}
          <p
            className={`mt-8 text-sm text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            For CFP® practitioners scaling from $100K to $300K+ · No staff required
          </p>
        </div>
      </div>
    </section>
  );
};

// Abstract workflow visualization component
const WorkflowVisualization = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <svg
        className="w-full h-full max-w-6xl"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nodes */}
        <circle cx="150" cy="200" r="8" fill="hsl(217 91% 60%)" className="animate-pulse" />
        <circle cx="300" cy="120" r="6" fill="hsl(0 0% 40%)" />
        <circle cx="300" cy="280" r="6" fill="hsl(0 0% 40%)" />
        <circle cx="450" cy="200" r="10" fill="hsl(217 91% 60%)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="550" cy="100" r="5" fill="hsl(0 0% 40%)" />
        <circle cx="550" cy="300" r="5" fill="hsl(0 0% 40%)" />
        <circle cx="650" cy="200" r="8" fill="hsl(217 91% 60%)" className="animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Connections */}
        <line x1="150" y1="200" x2="300" y2="120" stroke="hsl(0 0% 30%)" strokeWidth="1" />
        <line x1="150" y1="200" x2="300" y2="280" stroke="hsl(0 0% 30%)" strokeWidth="1" />
        <line x1="300" y1="120" x2="450" y2="200" stroke="hsl(217 91% 60% / 0.5)" strokeWidth="1.5" />
        <line x1="300" y1="280" x2="450" y2="200" stroke="hsl(217 91% 60% / 0.5)" strokeWidth="1.5" />
        <line x1="450" y1="200" x2="550" y2="100" stroke="hsl(0 0% 30%)" strokeWidth="1" />
        <line x1="450" y1="200" x2="550" y2="300" stroke="hsl(0 0% 30%)" strokeWidth="1" />
        <line x1="550" y1="100" x2="650" y2="200" stroke="hsl(217 91% 60% / 0.5)" strokeWidth="1.5" />
        <line x1="550" y1="300" x2="650" y2="200" stroke="hsl(217 91% 60% / 0.5)" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default Hero;
