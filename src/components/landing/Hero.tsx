import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HeroWorkflow from "./HeroWorkflow";

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
      {/* Background with subtle gradient that flows into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="section-container relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A simplified tech stack{" "}
            <span className="gradient-text">for solo financial planners</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-body transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The done-for-you automation system that handles follow-up, onboarding, and referrals so you can focus on planning, not admin work.
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
              Schedule a Discovery Call →
            </Link>
          </div>

          {/* Workflow Diagram */}
          <HeroWorkflow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
