import { Phone, CalendarCheck, MessageSquare } from "lucide-react";
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
      {/* Animated Background - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-40 hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 py-12 sm:py-16 lg:py-28">
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
        </div>

        {/* Simple Feature Snapshot */}
        <div 
          className={`mx-auto mt-10 sm:mt-16 max-w-3xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            {featureSnapshot.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 mb-2 sm:mb-3">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-xs sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
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
