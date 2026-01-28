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
  Inbox,
  ArrowRight,
  Check
} from "lucide-react";

const beforeTools = [
  { icon: Mail, label: "Email Platform", color: "text-red-400" },
  { icon: Calendar, label: "Scheduling Tool", color: "text-orange-400" },
  { icon: MessageSquare, label: "SMS Service", color: "text-green-400" },
  { icon: FileSpreadsheet, label: "Spreadsheets", color: "text-emerald-400" },
  { icon: Users, label: "Contact Manager", color: "text-cyan-400" },
  { icon: BarChart3, label: "Analytics", color: "text-blue-400" },
  { icon: Share2, label: "Social Media", color: "text-indigo-400" },
  { icon: FormInput, label: "Form Builder", color: "text-violet-400" },
  { icon: Megaphone, label: "Marketing Tool", color: "text-purple-400" },
  { icon: Inbox, label: "Help Desk", color: "text-pink-400" },
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
              <span className="bg-red-500/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-500/30">
                Before
              </span>
            </div>
            <div className="bg-card/50 rounded-2xl border border-border p-8 pt-10 min-h-[400px] relative overflow-hidden">
              {/* Chaos lines background */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Chaotic connection lines */}
                <path d="M50,80 Q200,50 350,120" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M80,150 Q250,200 320,80" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M40,200 Q150,300 380,180" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M100,280 Q200,150 300,320" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M60,350 Q180,250 350,300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M200,50 Q100,200 200,350" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
                <path d="M150,100 Q300,180 180,320" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              </svg>
              
              {/* Scattered tool icons */}
              <div className="relative z-10 grid grid-cols-5 gap-4">
                {beforeTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-border transition-colors"
                    style={{
                      transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index % 3 + 1)}deg)`,
                    }}
                  >
                    <div className={`p-2 rounded-lg bg-muted ${tool.color}`}>
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Pain points */}
              <div className="mt-8 space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-red-400">✗</span> Data scattered everywhere
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-red-400">✗</span> Nothing talks to each other
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-red-400">✗</span> Hours wasted on manual work
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
            <div className="bg-card/50 rounded-2xl border border-primary/20 p-8 pt-10 min-h-[400px] relative overflow-hidden shadow-[0_0_60px_-20px_hsl(217_91%_60%/0.2)]">
              {/* Clean connection line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="cleanGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(172 66% 50%)" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path 
                  d="M200,140 L200,260" 
                  stroke="url(#cleanGrad)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />
              </svg>
              
              {/* Simple stack */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
                {/* Lavoie CRM */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 rounded-2xl p-6 min-w-[200px]">
                      <div className="flex items-center justify-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-xl">
                          <Inbox className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">Lavoie Systems</p>
                          <p className="text-xs text-primary">CRM & Automation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center max-w-[180px]">
                    Client communication, marketing & operations
                  </p>
                </div>

                {/* Integration arrow */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <ArrowRight className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-xs">Integrates with</span>
                  <ArrowRight className="h-4 w-4 text-primary animate-pulse" />
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Financial Planning Software */}
                <div className="flex flex-col items-center">
                  <div className="bg-muted/50 border border-border rounded-2xl p-6 min-w-[200px]">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-2 bg-success/20 rounded-xl">
                        <BarChart3 className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Your Planning Software</p>
                        <p className="text-xs text-muted-foreground">eMoney, RightCapital, etc.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center max-w-[180px]">
                    Financial planning & analysis
                  </p>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> Everything in one place
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> Seamless data flow
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> Hours saved every week
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
