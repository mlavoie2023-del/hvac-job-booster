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
    description: "Let homeowners book service calls or quote appointments directly on your calendar with automatic confirmations and reminders.",
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

// Simple Dashboard Mockup Component
const DashboardMockup = () => (
  <div className="rounded-xl border border-border/50 bg-background p-3 shadow-inner">
    {/* Header bar */}
    <div className="mb-3 flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-primary/60"></div>
        <div className="h-2 w-16 rounded bg-primary/40"></div>
      </div>
      <div className="flex gap-1">
        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
        <div className="h-2 w-2 rounded-full bg-red-400"></div>
      </div>
    </div>
    
    {/* Stats row */}
    <div className="mb-3 grid grid-cols-3 gap-2">
      <div className="rounded-lg bg-emerald-500/15 p-2 text-center">
        <div className="text-lg font-bold text-emerald-600">24</div>
        <div className="text-[10px] text-muted-foreground">Active Jobs</div>
      </div>
      <div className="rounded-lg bg-blue-500/15 p-2 text-center">
        <div className="text-lg font-bold text-blue-600">8</div>
        <div className="text-[10px] text-muted-foreground">New Leads</div>
      </div>
      <div className="rounded-lg bg-amber-500/15 p-2 text-center">
        <div className="text-lg font-bold text-amber-600">$12k</div>
        <div className="text-[10px] text-muted-foreground">Revenue</div>
      </div>
    </div>
    
    {/* Mini chart */}
    <div className="rounded-lg bg-muted/50 p-2">
      <div className="mb-1 text-[10px] font-medium text-muted-foreground">Weekly Overview</div>
      <div className="flex items-end justify-between gap-1 h-8">
        <div className="w-full rounded-t bg-primary/30 h-3"></div>
        <div className="w-full rounded-t bg-primary/50 h-5"></div>
        <div className="w-full rounded-t bg-primary/40 h-4"></div>
        <div className="w-full rounded-t bg-primary/70 h-6"></div>
        <div className="w-full rounded-t bg-primary/60 h-5"></div>
        <div className="w-full rounded-t bg-primary/80 h-7"></div>
        <div className="w-full rounded-t bg-primary h-8"></div>
      </div>
    </div>
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-foreground">HVAC CRM App</h4>
                      <p className="text-sm text-muted-foreground">
                        Your business in your pocket
                      </p>
                    </div>
                  </div>
                  <DashboardMockup />
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Track jobs, leads, and conversations from your phone.
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
