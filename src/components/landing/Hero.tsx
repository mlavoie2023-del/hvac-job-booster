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

  return (
    <section ref={sectionRef} className="bg-background">

      <div className="section-container py-12 sm:py-16 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">

          {/* Trust Line - Above headline */}
          <p 
            className={`text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            14-day free trial · No contracts · Cancel anytime
          </p>

          {/* Headline */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your{" "}
            <span className="gradient-text">AI-Powered</span> HVAC Office
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground transition-all duration-700 delay-200 px-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            One system that answers calls, books jobs, and follows up with every lead — 24/7.
          </p>

          {/* CTA Button */}
          <div 
            className={`mt-8 sm:mt-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://calendly.com/lavoie-ai/lavoie-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              Book a Free Demo
            </a>
          </div>

          {/* Trust Stats */}
          <div 
            className={`mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Always Available</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">&lt;3s</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Calls Answered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
