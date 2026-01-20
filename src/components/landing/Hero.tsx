import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

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

          {/* Headline */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Your{" "}
            <span className="gradient-text">AI-Powered</span> HVAC Office
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground transition-all duration-700 delay-100 px-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            One system that answers calls, books jobs, and follows up with every lead — 24/7.
          </p>

          {/* CTA Button */}
          <div 
            className={`mt-8 sm:mt-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              to="/vsl"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              See How It Works
              <Play className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Trust Line - Below CTA */}
          <p 
            className={`mt-4 text-xs sm:text-sm text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            14-day free trial · No contracts · Cancel anytime
          </p>

          {/* Trust Stats - Mobile friendly grid */}
          <div 
            className={`mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-xl mx-auto transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground">Always Available</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-xl sm:text-3xl font-bold text-foreground">&lt;3s</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-foreground">100%</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground">Calls Answered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
