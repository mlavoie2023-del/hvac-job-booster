import { 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  Smartphone,
  CalendarCheck,
  Star,
  Users,
  FileText,
  BarChart3,
  Settings
} from "lucide-react";

const aiEmployees = [
  {
    icon: Phone,
    title: "Reception Specialist",
    description: "Answers every call you miss and books quotes for you, 24/7.",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/20",
  },
  {
    icon: MessagesSquare,
    title: "Website Chat Specialist",
    description: "Turns website visitors into leads, 24/7.",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: MessageSquare,
    title: "Lead Nurture Specialist",
    description: "Automatically performs consistent follow up with every lead.",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
  },
  {
    icon: Users,
    title: "Repeat Revenue Specialist",
    description: "Reaches out to past customers and converts them into repeat jobs automatically.",
    gradient: "from-purple-500 to-pink-600",
    bgGlow: "bg-purple-500/20",
  },
];

const crmTools = [
  {
    icon: FileText,
    title: "Easy Estimate",
    description: "Send estimates, invoices, and get paid faster.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/15",
  },
  {
    icon: CalendarCheck,
    title: "Instant Appointments",
    description: "Let customers book directly on your calendar with automatic reminders.",
    color: "text-blue-500",
    bg: "bg-blue-500/15",
  },
  {
    icon: Star,
    title: "Review Boost",
    description: "Automatically requests reviews and filters out negative reviews from your Google page.",
    color: "text-amber-500",
    bg: "bg-amber-500/15",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reports",
    description: "Track all of your data in one simple dashboard so you know what's working and what's not.",
    color: "text-purple-500",
    bg: "bg-purple-500/15",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof aiEmployees[0]; index: number }) => (
  <div key={index} className="card-feature group">
    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform group-hover:scale-110`}>
      <feature.icon className="h-7 w-7 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
    <p className="mt-2 text-muted-foreground">{feature.description}</p>
  </div>
);

const CrmToolCard = ({ feature, index }: { feature: typeof crmTools[0]; index: number }) => (
  <div key={index} className="flex items-start gap-3 rounded-lg bg-background/50 p-4 transition-all hover:bg-background/80">
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
      <feature.icon className={`h-5 w-5 ${feature.color}`} />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{feature.title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
    </div>
  </div>
);

// Phone Mockup with Dashboard
const PhoneMockup = () => (
  <div className="relative mx-auto w-[180px]">
    {/* Phone frame */}
    <div className="rounded-[28px] border-[6px] border-gray-800 bg-gray-800 p-1 shadow-xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-gray-800 z-10"></div>
      
      {/* Screen */}
      <div className="rounded-[20px] bg-background overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-primary/10 px-3 py-1.5 pt-5">
          <div className="text-[8px] font-medium text-foreground">9:41</div>
          <div className="flex gap-0.5">
            <div className="h-1.5 w-2.5 rounded-sm bg-foreground/60"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/60"></div>
          </div>
        </div>
        
        {/* App header */}
        <div className="bg-primary/10 px-3 py-2">
          <div className="text-[10px] font-bold text-foreground">Dashboard</div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 p-2">
          <div className="rounded-lg bg-emerald-500/15 p-1.5 text-center">
            <div className="text-sm font-bold text-emerald-600">24</div>
            <div className="text-[7px] text-muted-foreground">Jobs</div>
          </div>
          <div className="rounded-lg bg-blue-500/15 p-1.5 text-center">
            <div className="text-sm font-bold text-blue-600">8</div>
            <div className="text-[7px] text-muted-foreground">Leads</div>
          </div>
          <div className="rounded-lg bg-amber-500/15 p-1.5 text-center">
            <div className="text-sm font-bold text-amber-600">$12k</div>
            <div className="text-[7px] text-muted-foreground">Revenue</div>
          </div>
        </div>
        
        {/* Mini chart */}
        <div className="mx-2 rounded-lg bg-muted/50 p-2 mb-2">
          <div className="mb-1 text-[7px] font-medium text-muted-foreground">This Week</div>
          <div className="flex items-end justify-between gap-0.5 h-6">
            <div className="w-full rounded-t bg-primary/30 h-2"></div>
            <div className="w-full rounded-t bg-primary/50 h-3"></div>
            <div className="w-full rounded-t bg-primary/40 h-2.5"></div>
            <div className="w-full rounded-t bg-primary/70 h-4"></div>
            <div className="w-full rounded-t bg-primary/60 h-3.5"></div>
            <div className="w-full rounded-t bg-primary/80 h-5"></div>
            <div className="w-full rounded-t bg-primary h-6"></div>
          </div>
        </div>
        
        {/* Recent activity */}
        <div className="px-2 pb-3">
          <div className="text-[7px] font-medium text-muted-foreground mb-1">Recent</div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 rounded bg-background border border-border/50 p-1.5">
              <div className="h-4 w-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-[7px] text-foreground">New job booked</div>
            </div>
            <div className="flex items-center gap-1.5 rounded bg-background border border-border/50 p-1.5">
              <div className="h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              </div>
              <div className="text-[7px] text-foreground">Lead responded</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Home indicator */}
    <div className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-gray-600"></div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="bg-secondary/50 py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Included in Your HVAC Software Install
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to capture, convert, and keep more customers
          </p>
        </div>

        {/* AI Employees Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            AI Employees
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Your always-on team that never misses a beat
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiEmployees.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* HVAC CRM Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            HVAC CRM
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Your all-in-one command center — right from your phone
          </p>
          
          {/* CRM Hero Card */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="card-elevated overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* CRM Main Feature */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-6 lg:w-2/5">
                  <PhoneMockup />
                  <h4 className="mt-4 text-xl font-bold text-foreground">HVAC CRM App</h4>
                  <p className="mt-1 text-center text-sm text-muted-foreground">
                    Your business in your pocket — track jobs, leads, and conversations.
                  </p>
                </div>
                
                {/* Tools Inside CRM */}
                <div className="flex-1 p-5 lg:p-6">
                  <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Built-in Tools
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {crmTools.map((feature, index) => (
                      <CrmToolCard key={index} feature={feature} index={index} />
                    ))}
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

export default Features;
