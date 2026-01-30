import { useEffect, useRef, useState } from "react";
import { 
  Workflow, 
  FileText, 
  ClipboardList, 
  Calendar, 
  GitBranch, 
  Inbox, 
  BarChart3, 
  Plug, 
  Share2
} from "lucide-react";
import { mockups } from "./FeatureMockups";

const features = [
  {
    icon: Workflow,
    title: "Customized Workflows",
    oneLiner: "Automate follow-ups, reminders, and check-ins automatically",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    oneLiner: "Professional pages that convert visitors into prospects",
  },
  {
    icon: ClipboardList,
    title: "Forms",
    oneLiner: "Smart intake forms that feed directly into your workflows",
  },
  {
    icon: Calendar,
    title: "Calendars",
    oneLiner: "Let clients book directly with automatic reminders",
  },
  {
    icon: GitBranch,
    title: "Pipelines",
    oneLiner: "Visual tracking for every prospect and client journey",
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    oneLiner: "SMS, email, and social messages in one place",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    oneLiner: "Track what's working and double down on results",
  },
  {
    icon: Plug,
    title: "Integrations",
    oneLiner: "Connect your calendar, email, and planning software",
  },
  {
    icon: Share2,
    title: "Social Media",
    oneLiner: "Schedule posts and engage across all platforms",
  },
];

const FeatureCard = ({ 
  feature, 
  index, 
  isVisible 
}: { 
  feature: typeof features[0]; 
  index: number;
  isVisible: boolean;
}) => {
  const MockupComponent = mockups[feature.title];
  
  return (
    <div 
      className={`group relative bg-card rounded-xl border border-border p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-primary ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: isVisible ? `${(index % 3) * 100}ms` : '0ms',
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.03)'
      }}
    >
      {/* Icon with glow */}
      <div className="relative mb-4 flex justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
          <feature.icon className="h-7 w-7 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        {feature.title}
      </h3>
      
      {/* One-liner */}
      <p className="text-sm text-muted-foreground text-center mb-5">
        {feature.oneLiner}
      </p>
      
      {/* Visual mockup with border glow on hover - animations only run on group hover */}
      <div className="mockup-container bg-background/50 rounded-lg border border-border/50 p-3 min-h-[80px] flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
        {MockupComponent && <MockupComponent />}
      </div>
      
      {/* Outer glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 40px -10px hsl(217 91% 60% / 0.3)' }} 
      />
    </div>
  );
};

const WhatYouGet = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-3">Your complete system</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Nine integrated tools that work together—built around <em>your</em> practice, not generic templates.
          </p>
        </div>

        {/* Feature cards grid with scroll animation */}
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
