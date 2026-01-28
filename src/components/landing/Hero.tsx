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
        </div>
      </div>
    </section>
  );
};

// Enhanced workflow visualization with animated particles
const WorkflowVisualization = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-25 sm:opacity-30">
      {/* Radial glow backdrop */}
      <div 
        className="absolute w-[600px] h-[400px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(217 91% 60% / 0.15), transparent 70%)"
        }}
      />
      
      <svg
        className="w-full h-full max-w-5xl"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for primary nodes */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for primary connections */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60% / 0.2)" />
            <stop offset="50%" stopColor="hsl(217 91% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0.2)" />
          </linearGradient>
          
          {/* Particle gradient */}
          <radialGradient id="particleGlow">
            <stop offset="0%" stopColor="hsl(217 91% 70%)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0)" />
          </radialGradient>
        </defs>

        {/* Secondary connections (subtle) */}
        <line x1="120" y1="200" x2="220" y2="140" stroke="hsl(0 0% 25%)" strokeWidth="1" />
        <line x1="120" y1="200" x2="220" y2="260" stroke="hsl(0 0% 25%)" strokeWidth="1" />
        <line x1="580" y1="140" x2="680" y2="200" stroke="hsl(0 0% 25%)" strokeWidth="1" />
        <line x1="580" y1="260" x2="680" y2="200" stroke="hsl(0 0% 25%)" strokeWidth="1" />

        {/* Primary connections (glowing paths) */}
        <path 
          d="M 120 200 Q 270 120 400 200" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-soft"
        />
        <path 
          d="M 120 200 Q 270 280 400 200" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-soft"
          style={{ animationDelay: "0.5s" }}
        />
        <path 
          d="M 400 200 Q 530 120 680 200" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
        <path 
          d="M 400 200 Q 530 280 680 200" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Animated particles along paths */}
        <circle r="3" fill="hsl(217 91% 70%)" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#path1" />
          </animateMotion>
        </circle>
        <path id="path1" d="M 120 200 Q 270 120 400 200" fill="none" stroke="none" />
        
        <circle r="3" fill="hsl(217 91% 70%)" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
            <mpath href="#path2" />
          </animateMotion>
        </circle>
        <path id="path2" d="M 120 200 Q 270 280 400 200" fill="none" stroke="none" />
        
        <circle r="3" fill="hsl(217 91% 70%)" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#path3" />
          </animateMotion>
        </circle>
        <path id="path3" d="M 400 200 Q 530 120 680 200" fill="none" stroke="none" />
        
        <circle r="3" fill="hsl(217 91% 70%)" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin="2.25s">
            <mpath href="#path4" />
          </animateMotion>
        </circle>
        <path id="path4" d="M 400 200 Q 530 280 680 200" fill="none" stroke="none" />

        {/* Secondary nodes */}
        <circle cx="220" cy="140" r="4" fill="hsl(0 0% 35%)" />
        <circle cx="220" cy="260" r="4" fill="hsl(0 0% 35%)" />
        <circle cx="580" cy="140" r="4" fill="hsl(0 0% 35%)" />
        <circle cx="580" cy="260" r="4" fill="hsl(0 0% 35%)" />

        {/* Primary hub nodes with glow */}
        <circle 
          cx="120" cy="200" r="10" 
          fill="hsl(217 91% 60%)" 
          filter="url(#glow)"
          className="animate-glow-pulse"
        />
        <circle 
          cx="400" cy="200" r="14" 
          fill="hsl(217 91% 60%)" 
          filter="url(#glow)"
          className="animate-glow-pulse"
          style={{ animationDelay: "0.7s" }}
        />
        <circle 
          cx="680" cy="200" r="10" 
          fill="hsl(217 91% 60%)" 
          filter="url(#glow)"
          className="animate-glow-pulse"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Inner glow rings on primary nodes */}
        <circle cx="120" cy="200" r="6" fill="hsl(217 91% 70%)" />
        <circle cx="400" cy="200" r="9" fill="hsl(217 91% 70%)" />
        <circle cx="680" cy="200" r="6" fill="hsl(217 91% 70%)" />
      </svg>
    </div>
  );
};

export default Hero;
