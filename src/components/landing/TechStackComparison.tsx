import { 
  Mail, 
  Calendar, 
  MessageSquare, 
  FileSpreadsheet, 
  Users, 
  BarChart3,
  Share2,
  FormInput,
  Megaphone,
  Phone,
  Inbox,
  Check,
  type LucideIcon
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
}

const beforeTools: Tool[] = [
  { icon: Mail, label: "Mailchimp", x: 15, y: 12 },
  { icon: Calendar, label: "Calendly", x: 50, y: 8 },
  { icon: MessageSquare, label: "Slack", x: 85, y: 12 },
  { icon: FileSpreadsheet, label: "Excel", x: 8, y: 35 },
  { icon: Users, label: "HubSpot", x: 50, y: 38 },
  { icon: Phone, label: "Twilio", x: 92, y: 35 },
  { icon: Share2, label: "Hootsuite", x: 12, y: 58 },
  { icon: FormInput, label: "Typeform", x: 50, y: 62 },
  { icon: Megaphone, label: "Constant Contact", x: 88, y: 58 },
];

// Connection pairs for the web (indices into beforeTools)
const connections: [number, number][] = [
  [0, 1], [0, 3], [0, 4],
  [1, 2], [1, 4], [1, 5],
  [2, 5], [2, 4],
  [3, 4], [3, 6], [3, 7],
  [4, 5], [4, 6], [4, 7], [4, 8],
  [5, 8],
  [6, 7],
  [7, 8],
];

const TechStackComparison = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(217_91%_60%/0.05),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Simplify your stack</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            From Chaos to Clarity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Stop juggling a dozen different platforms. One unified system does it all.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* BEFORE */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="bg-destructive/20 text-destructive text-sm font-semibold px-4 py-1.5 rounded-full border border-destructive/30">
                Before
              </span>
            </div>
            <div className="bg-card/50 rounded-2xl border border-border p-6 pt-10 min-h-[520px] sm:min-h-[480px] relative overflow-hidden flex flex-col">
              {/* Web diagram area */}
              <div className="relative flex-1 min-h-[320px]">
                {/* Connection lines SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="lineGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {connections.map(([from, to], index) => (
                    <line
                      key={index}
                      x1={beforeTools[from].x}
                      y1={beforeTools[from].y}
                      x2={beforeTools[to].x}
                      y2={beforeTools[to].y}
                      stroke="url(#lineGradRed)"
                      strokeWidth="0.4"
                      className="opacity-60"
                    />
                  ))}
                </svg>
                
                {/* Tool nodes */}
                {beforeTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                      style={{
                        left: `${tool.x}%`,
                        top: `${(tool.y / 80) * 100}%`,
                      }}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="p-2.5 sm:p-3 rounded-xl bg-muted/80 border border-border shadow-lg group-hover:border-destructive/50 transition-colors">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium bg-background/80 px-1.5 py-0.5 rounded whitespace-nowrap">
                          {tool.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Pain points */}
              <div className="space-y-1.5 bg-background/60 backdrop-blur-sm rounded-lg p-3 mt-4">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-destructive">✗</span> Data scattered everywhere
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-destructive">✗</span> Nothing talks to each other
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-destructive">✗</span> Hours wasted on manual work
                </p>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="bg-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/30">
                After
              </span>
            </div>
            <div className="bg-card/50 rounded-2xl border border-primary/20 p-6 pt-10 min-h-[520px] sm:min-h-[480px] relative overflow-hidden shadow-[0_0_60px_-20px_hsl(217_91%_60%/0.2)] flex flex-col">
              {/* Diagram area */}
              <div className="relative flex-1 min-h-[320px]">
                {/* Simple pulsing connection line */}
                <div 
                  className="absolute -translate-y-1/2 h-1.5 z-0 animate-pulse transition-all duration-300 hover:h-2 hover:shadow-[0_0_24px_4px_hsl(217_91%_60%/0.6),0_0_48px_8px_hsl(172_66%_50%/0.4)] cursor-pointer"
                  style={{
                    top: '42%',
                    left: '38%',
                    right: '38%',
                    background: 'linear-gradient(90deg, hsl(217 91% 60%), hsl(195 80% 55%), hsl(172 66% 50%))',
                    borderRadius: '4px',
                    boxShadow: '0 0 16px 2px hsl(217 91% 60% / 0.4), 0 0 32px 4px hsl(172 66% 50% / 0.2)',
                  }}
                />
                
                {/* Lavoie Systems Node */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: '30%', top: '50%' }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/30 rounded-xl blur-lg" />
                      <div className="relative p-3 sm:p-4 rounded-xl bg-primary/20 border-2 border-primary shadow-lg shadow-primary/20">
                        <Inbox className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs text-primary font-semibold bg-background/90 px-2 py-1 rounded whitespace-nowrap">
                      Lavoie Systems
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                      CRM & Automation
                    </span>
                  </div>
                </div>

                {/* Planning Software Node */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: '70%', top: '50%' }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-success/30 rounded-xl blur-lg" />
                      <div className="relative p-3 sm:p-4 rounded-xl bg-success/20 border-2 border-success shadow-lg shadow-success/20">
                        <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-success" />
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs text-success font-semibold bg-background/90 px-2 py-1 rounded whitespace-nowrap">
                      Planning Software
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground">
                      eMoney, RightCapital
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="space-y-1.5 bg-background/60 backdrop-blur-sm rounded-lg p-3 mt-4">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" /> Everything in one place
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" /> Seamless data flow
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-success" /> Hours saved every week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackComparison;
