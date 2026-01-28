import { useEffect, useRef, useState } from "react";
import { UserPlus, Mail, Calendar, UserCheck } from "lucide-react";

// Sarah's profile image - using a professional-looking placeholder
const SARAH_AVATAR = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face";

const stages = [
  {
    icon: UserPlus,
    label: "New Lead",
    description: "Someone reaches out",
  },
  {
    icon: Mail,
    label: "Auto Nurture",
    description: "Automated follow-up",
  },
  {
    icon: Calendar,
    label: "Booked",
    description: "Meeting scheduled",
  },
  {
    icon: UserCheck,
    label: "Client",
    description: "Onboarded & happy",
  },
];

const HeroWorkflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-16 px-4">
      {/* Desktop: Horizontal layout */}
      <div className="hidden sm:block relative">
        {/* Flow lines container */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-between px-[60px] pointer-events-none">
          {[0, 1, 2].map((i) => (
            <FlowLine key={i} delay={i * 0.3} isVisible={isVisible} />
          ))}
        </div>

        {/* Demo contact traveling through stages */}
        {isVisible && <TravelingContact />}

        {/* Stage cards */}
        <div className="relative flex items-center justify-between">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.label}
              stage={stage}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Vertical layout */}
      <div className="sm:hidden relative flex flex-col items-center gap-2">
        {/* Demo contact traveling through stages (mobile) */}
        {isVisible && <TravelingContactMobile />}
        
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex flex-col items-center">
            <StageCard stage={stage} index={index} isVisible={isVisible} />
            {index < stages.length - 1 && (
              <VerticalFlowLine delay={index * 0.3} isVisible={isVisible} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface StageCardProps {
  stage: {
    icon: React.ElementType;
    label: string;
    description: string;
  };
  index: number;
  isVisible: boolean;
}

const StageCard = ({ stage, index, isVisible }: StageCardProps) => {
  const Icon = stage.icon;

  return (
    <div
      className={`relative flex flex-col items-center p-4 sm:p-5 bg-card border border-primary/30 rounded-xl shadow-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
      }}
    >
      {/* Icon with glow */}
      <div className="relative mb-3">
        <div
          className="absolute inset-0 rounded-full blur-md animate-glow-pulse"
          style={{ background: "hsl(var(--primary) / 0.3)" }}
        />
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/40">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Label */}
      <span className="text-sm font-semibold text-foreground">{stage.label}</span>

      {/* Description */}
      <span className="text-xs text-muted-foreground mt-1 text-center max-w-[100px]">
        {stage.description}
      </span>
    </div>
  );
};

interface FlowLineProps {
  delay: number;
  isVisible: boolean;
}

const FlowLine = ({ delay, isVisible }: FlowLineProps) => {
  return (
    <div className="relative flex-1 mx-4 h-[2px] overflow-hidden">
      {/* Base line */}
      <div
        className={`absolute inset-0 bg-primary/30 transition-all duration-500 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          transitionDelay: `${delay + 0.4}s`,
          transformOrigin: "left",
        }}
      />

      {/* Animated flowing dots */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${delay + 0.6}s` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-flow-dot" />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-flow-dot"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-flow-dot"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </div>
  );
};

const VerticalFlowLine = ({ delay, isVisible }: FlowLineProps) => {
  return (
    <div className="relative w-[2px] h-8 overflow-hidden my-1">
      {/* Base line */}
      <div
        className={`absolute inset-0 bg-primary/30 transition-all duration-500 ${
          isVisible ? "scale-y-100" : "scale-y-0"
        }`}
        style={{
          transitionDelay: `${delay + 0.4}s`,
          transformOrigin: "top",
        }}
      />

      {/* Animated flowing dot */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${delay + 0.6}s` }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-flow-dot-vertical" />
      </div>
    </div>
  );
};

// Traveling contact avatar (desktop - horizontal)
const TravelingContact = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-full pointer-events-none z-10 pt-4">
      <div className="relative w-full h-12">
        {/* The contact card */}
        <div 
          className="absolute flex items-center gap-2 bg-card border border-primary/40 rounded-full pl-1 pr-3 py-1 shadow-lg animate-travel-contact-bottom"
          style={{
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3), 0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <img 
            src={SARAH_AVATAR} 
            alt="Sarah M." 
            className="w-8 h-8 rounded-full object-cover border-2 border-primary/50"
          />
          <span className="text-xs font-medium text-foreground whitespace-nowrap">
            Sarah M.
          </span>
        </div>
      </div>
    </div>
  );
};

// Traveling contact avatar (mobile - vertical)
const TravelingContactMobile = () => {
  return (
    <div className="absolute right-0 translate-x-full top-0 bottom-0 pointer-events-none z-10 pl-3">
      <div className="relative h-full w-12">
        {/* The contact card */}
        <div 
          className="absolute flex flex-col items-center gap-1 bg-card border border-primary/40 rounded-xl px-2 py-2 shadow-lg animate-travel-contact-vertical-side"
          style={{
            boxShadow: "0 0 16px hsl(var(--primary) / 0.3), 0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <img 
            src={SARAH_AVATAR} 
            alt="Sarah M." 
            className="w-7 h-7 rounded-full object-cover border-2 border-primary/50"
          />
          <span className="text-[10px] font-medium text-foreground whitespace-nowrap">
            Sarah
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroWorkflow;
