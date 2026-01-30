import { useState, useEffect, useRef } from "react";
import { 
  Workflow, 
  FileText, 
  ClipboardList, 
  Calendar, 
  GitBranch, 
  Inbox, 
  BarChart3, 
  Plug, 
  Share2,
  MessageSquare,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  animation: React.ReactNode;
}

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  color: string;
  features: Feature[];
}

// Mini animation components for each feature
const WorkflowAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative">
          <div 
            className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          </div>
          {i < 2 && (
            <div className="absolute top-1/2 -right-2 w-2 h-0.5 bg-primary/60">
              <div className="absolute inset-0 bg-primary animate-[pulse_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.4}s` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const InboxAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative w-32 h-20 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className="absolute left-2 right-2 h-4 bg-primary/10 rounded border-l-2 border-primary animate-[messageSlide_3s_ease-in-out_infinite]"
          style={{ 
            top: `${8 + i * 18}px`,
            animationDelay: `${i * 0.5}s`,
            opacity: 1 - i * 0.2
          }}
        />
      ))}
    </div>
  </div>
);

const CalendarAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-24 h-20 bg-card/50 rounded-lg border border-border/50 p-1.5">
      <div className="grid grid-cols-5 gap-0.5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "w-3 h-3 rounded-sm transition-all duration-300",
              i === 7 ? "bg-primary animate-pulse" : 
              [3, 11, 13].includes(i) ? "bg-primary/30" : "bg-muted/30"
            )}
          />
        ))}
      </div>
    </div>
  </div>
);

const PipelineAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex gap-1">
      {["Lead", "Call", "Close"].map((stage, i) => (
        <div key={stage} className="flex flex-col items-center gap-1">
          <div 
            className={cn(
              "w-8 h-12 rounded bg-gradient-to-b border transition-all",
              i === 1 ? "from-primary/40 to-primary/20 border-primary/50" : "from-muted/30 to-muted/10 border-border/30"
            )}
          >
            {i === 1 && (
              <div className="w-full h-full flex items-end justify-center pb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            )}
          </div>
          <span className="text-[8px] text-muted-foreground">{stage}</span>
        </div>
      ))}
    </div>
  </div>
);

const FormsAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-24 space-y-2 p-2 bg-card/50 rounded-lg border border-border/50">
      <div className="h-2 w-full bg-muted/30 rounded" />
      <div className="h-2 w-3/4 bg-muted/30 rounded" />
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded border-2 border-primary bg-primary/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-sm animate-[scaleIn_0.5s_ease-out_infinite_alternate]" />
        </div>
        <div className="h-2 w-8 bg-muted/30 rounded" />
      </div>
    </div>
  </div>
);

const SocialAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
        <Share2 className="w-4 h-4 text-primary" />
      </div>
      {[0, 120, 240].map((deg, i) => (
        <div 
          key={deg}
          className="absolute w-6 h-6 rounded-full bg-card border border-border/50 flex items-center justify-center animate-[orbit_4s_linear_infinite]"
          style={{ 
            transformOrigin: "center",
            transform: `rotate(${deg}deg) translateX(24px)`,
            animationDelay: `${i * -1.3}s`
          }}
        >
          <div className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
      ))}
    </div>
  </div>
);

const LandingPageAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-20 h-16 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
      <div className="h-3 bg-primary/20 border-b border-border/30" />
      <div className="p-1.5 space-y-1">
        <div className="h-1.5 w-full bg-muted/40 rounded" />
        <div className="h-1.5 w-2/3 bg-muted/30 rounded" />
        <div className="h-3 w-8 mx-auto bg-primary/40 rounded animate-pulse mt-1" />
      </div>
    </div>
  </div>
);

const AnalyticsAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex items-end gap-1 h-16">
      {[40, 65, 45, 80, 55].map((h, i) => (
        <div 
          key={i}
          className="w-4 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t transition-all"
          style={{ 
            height: `${h}%`,
            animationDelay: `${i * 0.1}s`
          }}
        >
          <div 
            className="w-full bg-primary/40 rounded-t animate-[grow_2s_ease-in-out_infinite]"
            style={{ 
              height: '0%',
              animationDelay: `${i * 0.2}s`
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const IntegrationsAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
        <Plug className="w-4 h-4 text-primary" />
      </div>
      {[{ x: -20, y: -16 }, { x: 20, y: -16 }, { x: -20, y: 16 }, { x: 20, y: 16 }].map((pos, i) => (
        <div key={i}>
          <div 
            className="absolute w-5 h-5 rounded bg-card border border-border/50"
            style={{ left: `calc(50% + ${pos.x}px - 10px)`, top: `calc(50% + ${pos.y}px - 10px)` }}
          />
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            <line 
              x1="50%" y1="50%" 
              x2={`calc(50% + ${pos.x}px)`} 
              y2={`calc(50% + ${pos.y}px)`}
              className="stroke-primary/30"
              strokeWidth="1"
              strokeDasharray="2 2"
            >
              <animate attributeName="stroke-dashoffset" from="4" to="0" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      ))}
    </div>
  </div>
);

const categories: Category[] = [
  {
    id: "communication",
    icon: MessageSquare,
    title: "Client Communication",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: Inbox,
        title: "Unified Inbox",
        description: "One place for SMS, email, and social messages. Never miss a client communication.",
        animation: <InboxAnimation />
      },
      {
        icon: ClipboardList,
        title: "Smart Forms",
        description: "Client intake, surveys, and referrals that integrate directly into your workflows.",
        animation: <FormsAnimation />
      },
      {
        icon: Share2,
        title: "Social Media Hub",
        description: "Schedule posts and engage across LinkedIn, Instagram, and Facebook from one dashboard.",
        animation: <SocialAnimation />
      }
    ]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        icon: Workflow,
        title: "Customized Workflows",
        description: "Automated sequences for nurturing, follow-ups, and appointment confirmations.",
        animation: <WorkflowAnimation />
      },
      {
        icon: Calendar,
        title: "Smart Calendars",
        description: "Let clients book directly. Syncs with your calendar and sends automatic reminders.",
        animation: <CalendarAnimation />
      },
      {
        icon: GitBranch,
        title: "Visual Pipelines",
        description: "Track every prospect and client journey. See exactly what's next for each relationship.",
        animation: <PipelineAnimation />
      }
    ]
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Growth & Insights",
    color: "from-emerald-500 to-teal-500",
    features: [
      {
        icon: FileText,
        title: "Landing Pages",
        description: "Professional pages for booking, lead magnets, and resources—designed to convert.",
        animation: <LandingPageAnimation />
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track lead sources, conversions, and campaign performance. Know what's working.",
        animation: <AnalyticsAnimation />
      },
      {
        icon: Plug,
        title: "Integrations",
        description: "Connect your calendar, email, and planning software seamlessly.",
        animation: <IntegrationsAnimation />
      }
    ]
  }
];

// All features flattened for mobile carousel
const allFeatures = categories.flatMap(cat => 
  cat.features.map(f => ({ ...f, categoryColor: cat.color, categoryTitle: cat.title }))
);

const WhatYouGet = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % allFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev + 1) % allFeatures.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev - 1 + allFeatures.length) % allFeatures.length);
  };

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">Your complete system</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Nine integrated tools across three core areas—built around <em>your</em> practice.
          </p>
        </div>

        {/* Desktop: Category Icons with Expandable Panels */}
        <div className="hidden md:block">
          {/* Category Icons Row */}
          <div className="flex justify-center gap-6 lg:gap-12 mb-8">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(isActive ? null : category.id)}
                  className={cn(
                    "group relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-500",
                    isActive 
                      ? "bg-card border border-primary/30 shadow-[0_0_40px_-10px_hsl(217_91%_60%/0.4)] scale-105" 
                      : "bg-card/50 border border-border hover:border-primary/20 hover:bg-card"
                  )}
                >
                  {/* Glow effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500",
                    category.color,
                    isActive ? "opacity-10" : "group-hover:opacity-5"
                  )} />
                  
                  {/* Icon */}
                  <div className={cn(
                    "relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500",
                    isActive 
                      ? `bg-gradient-to-br ${category.color} shadow-lg` 
                      : "bg-primary/10 group-hover:bg-primary/20"
                  )}>
                    <category.icon className={cn(
                      "w-8 h-8 transition-all duration-500",
                      isActive ? "text-white" : "text-primary"
                    )} />
                    
                    {/* Pulse ring when active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl animate-ping-slow bg-gradient-to-br from-primary/30 to-transparent" />
                    )}
                  </div>
                  
                  {/* Title */}
                  <span className={cn(
                    "font-semibold text-sm lg:text-base transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {category.title}
                  </span>
                  
                  {/* Feature count badge */}
                  <span className={cn(
                    "absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300",
                    isActive 
                      ? `bg-gradient-to-br ${category.color} text-white` 
                      : "bg-muted text-muted-foreground"
                  )}>
                    3
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expandable Panel */}
          <div className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            activeCategory ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}>
            {activeData && (
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 mt-4">
                <div className="grid grid-cols-3 gap-6">
                  {activeData.features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="group relative bg-background/50 rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(217_91%_60%/0.2)]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Animation area */}
                      <div className="mb-4 bg-muted/20 rounded-lg overflow-hidden">
                        {feature.animation}
                      </div>
                      
                      {/* Content */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br",
                          activeData.color
                        )}>
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-body leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Prompt to click if nothing selected */}
          {!activeCategory && (
            <p className="text-center text-muted-foreground mt-4 animate-pulse">
              Click a category above to explore features
            </p>
          )}
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="relative" ref={carouselRef}>
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {allFeatures.map((feature, index) => (
                  <div 
                    key={`${feature.title}-${index}`}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 mx-auto max-w-sm">
                      {/* Category badge */}
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r text-white",
                        feature.categoryColor
                      )}>
                        {feature.categoryTitle}
                      </div>
                      
                      {/* Animation */}
                      <div className="mb-4 bg-muted/20 rounded-lg">
                        {feature.animation}
                      </div>
                      
                      {/* Content */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                          feature.categoryColor
                        )}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                      </div>
                      <p className="text-body leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg hover:bg-primary/10 transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg hover:bg-primary/10 transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {allFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index 
                    ? "w-6 bg-primary" 
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes messageSlide {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-4px); opacity: 0.7; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(24px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.5); }
          to { transform: scale(1); }
        }
        @keyframes grow {
          0%, 100% { height: 0%; }
          50% { height: 30%; }
        }
      `}</style>
    </section>
  );
};

export default WhatYouGet;
