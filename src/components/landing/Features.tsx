import { 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  Star,
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  Send,
  Eye,
  Sliders
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
  {
    icon: Star,
    title: "Review Specialist",
    description: "Automatically requests reviews and filters out negative reviews from your Google page.",
    gradient: "from-yellow-500 to-amber-600",
    bgGlow: "bg-yellow-500/20",
  },
];

const commandCenterFeatures = [
  {
    icon: Sliders,
    title: "Control Your AI Team",
    description: "Manage all your AI employees from one dashboard. Turn them on/off, adjust settings, and monitor their performance.",
  },
  {
    icon: Eye,
    title: "See Your Data",
    description: "View booked jobs, track leads, and monitor revenue — all your key metrics at a glance.",
  },
  {
    icon: Send,
    title: "Send Estimates",
    description: "Create and send professional estimates to customers in seconds, right from your phone.",
  },
  {
    icon: Calendar,
    title: "Calendars",
    description: "Let customers book appointments directly. Manage your schedule and send automatic reminders.",
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

const CommandCenterCard = ({ feature, index }: { feature: typeof commandCenterFeatures[0]; index: number }) => (
  <div key={index} className="group flex items-start gap-4 rounded-xl border border-border/50 bg-background/60 p-4 transition-all hover:border-primary/30 hover:bg-background/90 hover:shadow-lg">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 transition-transform group-hover:scale-110">
      <feature.icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{feature.title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
    </div>
  </div>
);

// Phone Mockup with CRM-style Contacts View
const PhoneMockup = () => (
  <div className="relative mx-auto w-[220px]">
    {/* Phone frame */}
    <div className="rounded-[32px] border-[8px] border-slate-900 bg-slate-900 p-1 shadow-2xl">
      {/* Camera notch */}
      <div className="absolute left-6 top-3 h-3 w-3 rounded-full bg-slate-800 z-10 flex items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
      </div>
      
      {/* Screen */}
      <div className="rounded-[24px] bg-slate-50 overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 pt-3 bg-white">
          <div className="text-[9px] font-semibold text-slate-800">9:41</div>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="h-1 w-1 rounded-full bg-slate-600"></div>
              <div className="h-1 w-1 rounded-full bg-slate-600"></div>
              <div className="h-1 w-1 rounded-full bg-slate-400"></div>
              <div className="h-1 w-1 rounded-full bg-slate-300"></div>
            </div>
            <div className="h-2 w-4 rounded-sm border border-slate-600 ml-1">
              <div className="h-full w-3/4 rounded-sm bg-slate-600"></div>
            </div>
          </div>
        </div>
        
        {/* Incoming call notification */}
        <div className="mx-2 mt-1 rounded-xl bg-slate-800 p-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <Phone className="h-3 w-3 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-semibold text-white">Incoming call</span>
                <span className="text-[7px] text-slate-400">• now</span>
              </div>
              <div className="text-[8px] text-slate-300">+1 (555) 234-8901</div>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 rounded-lg bg-slate-700 py-1.5 text-[8px] font-medium text-white">Decline</button>
            <button className="flex-1 rounded-lg bg-primary py-1.5 text-[8px] font-medium text-white">Answer</button>
          </div>
        </div>
        
        {/* App header */}
        <div className="flex items-center justify-between px-3 py-2 mt-2">
          <div className="text-[11px] font-bold text-slate-800">Contacts</div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-slate-100 flex items-center justify-center">
              <div className="h-2 w-2 border border-slate-400 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Contact list */}
        <div className="px-2 pb-3 space-y-1.5">
          {/* Contact 1 */}
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[9px] font-bold text-white">
              JM
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-slate-800 truncate">James Morrison</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1">
                <Phone className="h-2 w-2" /> AC Repair Quote
              </div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-slate-400">2:30 PM</div>
              <div className="h-3 w-3 rounded-full bg-primary text-[6px] text-white flex items-center justify-center mt-0.5 ml-auto">2</div>
            </div>
          </div>
          
          {/* Contact 2 */}
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white">
              SK
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-slate-800 truncate">Sarah Kim</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1">
                <MessageSquare className="h-2 w-2" /> Thanks! See you...
              </div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-slate-400">11:15 AM</div>
            </div>
          </div>
          
          {/* Contact 3 */}
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[9px] font-bold text-white">
              RB
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-slate-800 truncate">Robert Brown</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1">
                <Phone className="h-2 w-2" /> Missed call
              </div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-slate-400">Yesterday</div>
              <div className="h-3 w-3 rounded-full bg-amber-500 text-[6px] text-white flex items-center justify-center mt-0.5 ml-auto">1</div>
            </div>
          </div>
          
          {/* Contact 4 */}
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-[9px] font-bold text-white">
              LP
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-slate-800 truncate">Lisa Park</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1">
                <Star className="h-2 w-2" /> Left a 5-star review
              </div>
            </div>
            <div className="text-right">
              <div className="text-[7px] text-slate-400">Monday</div>
            </div>
          </div>
        </div>
        
        {/* Bottom navigation */}
        <div className="flex items-center justify-around border-t border-slate-200 bg-white px-2 py-2">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 rounded bg-slate-100 flex items-center justify-center">
              <div className="h-2 w-2 rounded-sm bg-slate-400"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageSquare className="h-2.5 w-2.5 text-primary" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Home indicator */}
    <div className="absolute bottom-2.5 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-600"></div>
    
    {/* Floating action button */}
    <div className="absolute bottom-14 right-4 h-8 w-8 rounded-full bg-primary shadow-lg flex items-center justify-center">
      <span className="text-white text-lg font-light">+</span>
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

        {/* Command Center Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Your Command Center
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
            One app to control your entire AI team and run your business from anywhere
          </p>
          
          {/* Command Center Layout */}
          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Phone Mockup - Left Side */}
              <div className="flex flex-col items-center justify-center lg:col-span-2">
                <div className="relative">
                  {/* Glow effect behind phone */}
                  <div className="absolute inset-0 -z-10 blur-3xl">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/30 to-primary/10"></div>
                  </div>
                  <PhoneMockup />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-foreground">HVAC Business App</h4>
                  <p className="mt-2 text-muted-foreground">
                    Your business in your pocket
                  </p>
                </div>
              </div>
              
              {/* Features Grid - Right Side */}
              <div className="lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  {commandCenterFeatures.map((feature, index) => (
                    <CommandCenterCard key={index} feature={feature} index={index} />
                  ))}
                </div>
                
                {/* Stats highlight */}
                <div className="mt-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-5">
                  <p className="text-sm font-medium text-muted-foreground">Everything you need to see at a glance:</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-600">
                      <Briefcase className="h-3.5 w-3.5" /> Booked Jobs
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 text-sm font-medium text-blue-600">
                      <Users className="h-3.5 w-3.5" /> Active Leads
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-600">
                      <TrendingUp className="h-3.5 w-3.5" /> Revenue
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-3 py-1 text-sm font-medium text-purple-600">
                      <MessageSquare className="h-3.5 w-3.5" /> Conversations
                    </span>
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
