import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { 
  Mail, 
  Calendar, 
  FileSpreadsheet, 
  BarChart3,
  FormInput,
  CreditCard,
  FileSignature,
  Inbox,
  Check,
  FileText,
  Megaphone,
  Receipt,
  FolderOpen,
  type LucideIcon
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
  rotate: number;
}

const beforeTools: Tool[] = [
  { icon: FileSpreadsheet, label: "CRM", x: 50, y: 42, rotate: -2 },
  { icon: BarChart3, label: "Planning Software", x: 12, y: 15, rotate: 3 },
  { icon: Calendar, label: "Scheduling", x: 88, y: 12, rotate: -4 },
  { icon: Mail, label: "Email Marketing", x: 88, y: 45, rotate: 3 },
  { icon: FormInput, label: "Website Forms", x: 50, y: 75, rotate: -3 },
  { icon: CreditCard, label: "Payments", x: 12, y: 75, rotate: 4 },
  { icon: FileSignature, label: "E-Signature", x: 88, y: 78, rotate: -2 },
  { icon: FileText, label: "Document Mgmt", x: 12, y: 45, rotate: 2 },
  { icon: Megaphone, label: "Digital Marketing", x: 50, y: 12, rotate: -3 },
  { icon: Receipt, label: "Fee Billing", x: 30, y: 30, rotate: 2 },
  { icon: FolderOpen, label: "File Sharing", x: 70, y: 58, rotate: -2 },
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

  const scrollToProcess = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">

      <div className="section-container relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A Simplified Tech Stack For Solo{" "}
            <span className="gradient-text">Financial Planners</span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-body transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The done-for-you automation system that helps you with follow up, onboarding, and marketing so you can focus on planning, not admin work.
          </p>

          <div
            className={`mt-10 flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link to="/book" className="btn-primary px-8 py-4 text-lg">
              Book a Discovery Call
            </Link>
          </div>

          {/* Before/After Comparison */}
          <div
            className={`mt-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* BEFORE */}
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10">
                  <span className="bg-destructive/20 text-destructive text-sm font-semibold px-4 py-1.5 rounded-full border border-destructive/30">
                    Before
                  </span>
                </div>
                <div className="bg-card/50 rounded-2xl border border-border p-6 pt-10 min-h-[400px] sm:min-h-[380px] relative overflow-hidden flex flex-col">
                  <div className="relative flex-1 min-h-[260px]">
                    {beforeTools.map((tool, index) => {
                      const IconComponent = tool.icon;
                      return (
                        <div
                          key={index}
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: `${tool.x}%`,
                            top: `${tool.y}%`,
                            zIndex: 10,
                          }}
                        >
                          <div 
                            className="animate-float-around"
                            style={{
                              animationDelay: `${index * 0.2}s`,
                            }}
                          >
                            <div 
                              className="flex flex-col items-center gap-1"
                              style={{ transform: `rotate(${tool.rotate}deg)` }}
                            >
                              <div className="p-2 sm:p-2.5 rounded-xl bg-[hsl(240_10%_10%)] border border-border shadow-lg group-hover:border-destructive/50 transition-colors">
                                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground/80" />
                              </div>
                              <span className="text-[7px] sm:text-[8px] text-muted-foreground font-medium bg-background px-1 py-0.5 rounded whitespace-nowrap">
                                {tool.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="space-y-1 bg-background/60 backdrop-blur-sm rounded-lg p-2.5 mt-3">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-destructive">✗</span> Data scattered everywhere
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-destructive">✗</span> Nothing talks to each other
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-destructive">✗</span> Hours wasted on manual work
                    </p>
                  </div>
                </div>
              </div>

              {/* AFTER - Single Glowing Hub */}
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10">
                  <span className="bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/30">
                    After
                  </span>
                </div>
                <div className="bg-card/50 rounded-2xl border border-primary/20 p-6 pt-10 min-h-[400px] sm:min-h-[380px] relative overflow-hidden shadow-[0_0_60px_-20px_hsl(217_91%_60%/0.2)] flex flex-col">
                  <div className="relative flex-1 min-h-[260px] flex items-center justify-center">
                    {/* Single Unified Hub */}
                    <div className="relative flex flex-col items-center">
                      {/* Outer glow rings */}
                      <div 
                        className="absolute w-48 h-48 rounded-full opacity-20"
                        style={{
                          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent 70%)',
                          animation: 'pulseGlow 3s ease-in-out infinite',
                        }}
                      />
                      <div 
                        className="absolute w-36 h-36 rounded-full opacity-30"
                        style={{
                          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.5), transparent 70%)',
                          animation: 'pulseGlow 3s ease-in-out infinite 0.5s',
                        }}
                      />
                      
                      {/* Main hub */}
                      <div 
                        className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 shadow-lg"
                        style={{
                          boxShadow: '0 0 40px 8px hsl(217 91% 60% / 0.25), 0 0 80px 16px hsl(217 91% 60% / 0.1)',
                        }}
                      >
                        <Inbox className="h-12 w-12 text-primary" />
                      </div>
                      
                      {/* Label */}
                      <div className="mt-5 text-center">
                        <p className="text-base font-semibold text-primary">Lavoie Systems</p>
                        <p className="text-sm text-muted-foreground mt-0.5">One Unified Platform</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 bg-background/60 backdrop-blur-sm rounded-lg p-2.5 mt-3">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Everything in one place
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Seamless data flow
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Hours saved every week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
