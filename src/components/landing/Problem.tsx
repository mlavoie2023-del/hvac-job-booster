import { useEffect, useState, useRef } from "react";
import { 
  Clock, Brain, Users, TrendingDown, AlertCircle,
  Mail, Phone, Calendar, FileText, DollarSign, 
  ClipboardList, MessageSquare, RefreshCw, Bell, Inbox
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "You're buried in admin work",
    description: "Scheduling, reminders, paperwork, follow-ups—tasks that don't require your expertise but consume your entire day.",
  },
  {
    icon: Brain,
    title: "You can't turn off",
    description: "Mental note to follow up with that prospect. Did you send that welcome email? Is the client onboarding on track? It never stops.",
  },
  {
    icon: Users,
    title: "Growth means burnout",
    description: "You want more clients, but every new client means more admin. Scaling feels impossible without hiring staff you can't afford.",
  },
  {
    icon: TrendingDown,
    title: "Leads slip through the cracks",
    description: "That prospect who said 'not right now'? They went silent. Without a system, warm leads go cold and referrals never happen.",
  },
];

// Floating tasks that swirl around the overwhelmed figure
const floatingTasks = [
  { icon: Mail, label: "Follow up", x: 15, y: 20, delay: 0 },
  { icon: Phone, label: "Call back", x: 78, y: 15, delay: 0.5 },
  { icon: Calendar, label: "Schedule", x: 85, y: 55, delay: 1 },
  { icon: FileText, label: "Paperwork", x: 10, y: 60, delay: 1.5 },
  { icon: DollarSign, label: "Invoice", x: 25, y: 80, delay: 2 },
  { icon: ClipboardList, label: "Onboard", x: 75, y: 80, delay: 2.5 },
  { icon: MessageSquare, label: "Reply", x: 5, y: 40, delay: 3 },
  { icon: Bell, label: "Remind", x: 90, y: 35, delay: 3.5 },
  { icon: RefreshCw, label: "Repeat", x: 50, y: 10, delay: 4 },
  { icon: Inbox, label: "Review", x: 50, y: 88, delay: 4.5 },
];

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section ref={containerRef} className="relative py-20 lg:py-28 spotlight-section overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(217_91%_60%/0.04),transparent)]" />
      
      <div className="section-container relative">
        {/* Empathetic headline */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4" />
            Sound familiar?
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            You became a planner to <span className="gradient-text">help people</span>—not to drown in busywork
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            As a solo advisor, you wear every hat. But somewhere along the way, the admin took over.
          </p>
        </div>

        {/* Animated Illustration - Overwhelmed Advisor */}
        <div className="relative mx-auto max-w-lg h-64 sm:h-80 mb-16">
          {/* Central figure - silhouette/icon representing the advisor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              {/* Stress rings */}
              <div className="absolute inset-0 -m-8 rounded-full border border-destructive/20 animate-[ping_3s_ease-out_infinite]" />
              <div className="absolute inset-0 -m-16 rounded-full border border-destructive/10 animate-[ping_3s_ease-out_0.5s_infinite]" />
              
              {/* Person icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-muted to-muted/50 border-2 border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted-foreground/30 mx-auto mb-1" />
                  <div className="w-14 h-6 sm:w-16 sm:h-8 rounded-t-full bg-muted-foreground/30" />
                </div>
              </div>
              
              {/* Overwhelmed indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
                <span className="text-destructive text-lg font-bold">!</span>
              </div>
            </div>
          </div>

          {/* Floating task icons swarming around */}
          {floatingTasks.map((task, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                left: `${task.x}%`,
                top: `${task.y}%`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${task.delay * 150}ms`,
              }}
            >
              <div 
                className="group relative"
                style={{
                  animation: `floatChaotic ${4 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${task.delay}s`,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50">
                  <task.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {task.label}
                </span>
              </div>
            </div>
          ))}

          {/* Connecting chaos lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: isVisible ? 0.3 : 0, transition: "opacity 1s" }}>
            <defs>
              <linearGradient id="chaosLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Dashed lines suggesting chaos/connections */}
            <path d="M 50% 50% Q 20% 30% 15% 20%" stroke="url(#chaosLine)" strokeWidth="1" strokeDasharray="4 4" fill="none" className="animate-[dash_10s_linear_infinite]" />
            <path d="M 50% 50% Q 70% 25% 78% 15%" stroke="url(#chaosLine)" strokeWidth="1" strokeDasharray="4 4" fill="none" className="animate-[dash_10s_linear_infinite_0.5s]" />
            <path d="M 50% 50% Q 80% 60% 85% 55%" stroke="url(#chaosLine)" strokeWidth="1" strokeDasharray="4 4" fill="none" className="animate-[dash_10s_linear_infinite_1s]" />
          </svg>
        </div>

        {/* Pain points grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{point.title}</h3>
                  <p className="mt-2 text-body leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The real cost callout */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center">
            <p className="text-lg text-body">
              <span className="text-foreground font-bold">The hidden cost:</span> You're trading{" "}
              <span className="text-destructive font-semibold">10+ hours a week</span> on tasks 
              that could be automated—time you could spend with clients, family, or actually growing your practice.
            </p>
          </div>
        </div>

        {/* Transition to solution */}
        <div className="mx-auto mt-8 text-center">
          <p className="text-muted-foreground italic">
            What if you could get those hours back—without hiring anyone?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
