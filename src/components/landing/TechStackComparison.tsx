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
  type LucideIcon
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
}

// CRM is at center (index 0), other tools radiate outward
const beforeTools: Tool[] = [
  { icon: FileSpreadsheet, label: "CRM / Spreadsheets", x: 50, y: 42 }, // CENTER
  { icon: BarChart3, label: "Planning Software", x: 50, y: 12 },        // Top
  { icon: Calendar, label: "Calendar", x: 82, y: 24 },                  // Top-right
  { icon: Mail, label: "Email", x: 82, y: 58 },                         // Bottom-right
  { icon: FormInput, label: "Website Forms", x: 50, y: 72 },            // Bottom
  { icon: CreditCard, label: "Payments", x: 18, y: 58 },                // Bottom-left
  { icon: FileSignature, label: "DocuSign", x: 18, y: 24 },             // Top-left
];

// CRM (0) is the hub - connects to all surrounding tools
// Some outer tools also connect to each other
const connections: [number, number][] = [
  [0, 1],           // CRM → Planning Software
  [0, 2],           // CRM → Calendar
  [0, 3],           // CRM → Email
  [0, 4],           // CRM → Website Forms
  [0, 5],           // CRM → Payments
  [0, 6],           // CRM → DocuSign
  [1, 2],           // Planning Software → Calendar
  [2, 3],           // Calendar → Email
  [3, 4],           // Email → Website Forms
  [5, 6],           // Payments → DocuSign
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
                  {/* Connection lines */}
                  {connections.map(([from, to], index) => (
                    <line
                      key={index}
                      x1={beforeTools[from].x}
                      y1={beforeTools[from].y}
                      x2={beforeTools[to].x}
                      y2={beforeTools[to].y}
                      stroke="hsl(0 72% 50%)"
                      strokeWidth="0.5"
                      strokeOpacity="0.4"
                    />
                  ))}
                  {/* Connection nodes at each tool */}
                  {beforeTools.map((tool, index) => (
                    <circle
                      key={index}
                      cx={tool.x}
                      cy={tool.y}
                      r="2.5"
                      fill="hsl(0 72% 50%)"
                      fillOpacity="0.3"
                      stroke="hsl(0 72% 50%)"
                      strokeWidth="0.4"
                      strokeOpacity="0.5"
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
                        <div className="p-2.5 sm:p-3 rounded-xl bg-muted border border-border shadow-lg group-hover:border-destructive/50 transition-colors">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70" />
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
                  className="absolute -translate-y-1/2 h-1.5 z-0 animate-pulse"
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
                      <div className="relative p-3 sm:p-4 rounded-xl bg-primary/20 border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 cursor-pointer">
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
                      <div className="relative p-3 sm:p-4 rounded-xl bg-success/20 border-2 border-success shadow-lg shadow-success/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-success/30 cursor-pointer">
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
