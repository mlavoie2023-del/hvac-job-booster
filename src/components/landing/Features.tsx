import { useState, useEffect, useRef } from "react";
import { 
  Phone, 
  MessageSquare, 
  Star,
  Users,
  Calendar,
  Search,
  Settings,
  DollarSign,
  BarChart3,
  CreditCard,
  CheckCircle2,
  TrendingUp,
  Send,
  Zap,
  ChevronDown
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const aiEmployees = [
  {
    icon: Phone,
    title: "Reception Specialist",
    subtitle: "Answers Calls 24/7",
    description: "Answers every call and chat instantly. Books appointments, answers questions, and never lets a lead slip away.",
    example: '"Hi! I can schedule your AC repair for tomorrow at 2pm. Does that work for you?"',
    accentColor: "from-blue-500 to-blue-600",
    textColor: "text-blue-600"
  },
  {
    icon: Star,
    title: "Review Specialist", 
    subtitle: "5 Stars Only",
    description: "Automatically requests reviews after every completed job. Filters feedback to protect your online reputation.",
    example: '"Thanks for choosing us! Would you mind leaving a quick review about your experience?"',
    accentColor: "from-amber-500 to-orange-500",
    textColor: "text-amber-600"
  },
  {
    icon: Users,
    title: "Revenue Specialist",
    subtitle: "Repeat Revenue",
    description: "Re-engages past customers with personalized outreach. Turns one-time jobs into recurring revenue.",
    example: '"Hi Sarah! It\'s been 6 months since your last AC tune-up. Ready to schedule?"',
    accentColor: "from-purple-500 to-pink-500",
    textColor: "text-purple-600"
  }
];

const commandCenterFeatures = [
  {
    icon: MessageSquare,
    title: "Contacts",
    description: "All your leads and customers in one place. View call history, messages, and never lose track of a conversation.",
  },
  {
    icon: Calendar,
    title: "Calendar",
    description: "Let customers book appointments directly. Manage your schedule and send automatic reminders.",
  },
  {
    icon: DollarSign,
    title: "Payments",
    description: "Track invoices, receive payments, and see your cash flow at a glance. Get paid faster.",
  },
  {
    icon: BarChart3,
    title: "Data",
    description: "View booked jobs, track leads, and monitor revenue — all your key business metrics at a glance.",
  },
];

// Phone Screen Components
const ContactsScreen = () => (
  <>
    {/* Incoming call notification */}
    <div className="mx-2 mt-1 rounded-xl bg-slate-800 p-2.5 shadow-lg animate-pulse">
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
      <Search className="h-3.5 w-3.5 text-slate-400" />
    </div>
    
    {/* Contact list */}
    <div className="px-2 pb-3 space-y-1.5">
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[9px] font-bold text-white">JM</div>
        <div className="flex-1 min-w-0">
          <div className="text-[9px] font-semibold text-slate-800 truncate">James Morrison</div>
          <div className="text-[7px] text-slate-500 flex items-center gap-1"><Phone className="h-2 w-2" /> AC Repair Quote</div>
        </div>
        <div className="text-right">
          <div className="text-[7px] text-slate-400">2:30 PM</div>
          <div className="h-3 w-3 rounded-full bg-primary text-[6px] text-white flex items-center justify-center mt-0.5 ml-auto">2</div>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white">SK</div>
        <div className="flex-1 min-w-0">
          <div className="text-[9px] font-semibold text-slate-800 truncate">Sarah Kim</div>
          <div className="text-[7px] text-slate-500 flex items-center gap-1"><MessageSquare className="h-2 w-2" /> Thanks! See you...</div>
        </div>
        <div className="text-[7px] text-slate-400">11:15 AM</div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[9px] font-bold text-white">RB</div>
        <div className="flex-1 min-w-0">
          <div className="text-[9px] font-semibold text-slate-800 truncate">Robert Brown</div>
          <div className="text-[7px] text-slate-500 flex items-center gap-1"><Phone className="h-2 w-2" /> Missed call</div>
        </div>
        <div className="text-right">
          <div className="text-[7px] text-slate-400">Yesterday</div>
          <div className="h-3 w-3 rounded-full bg-amber-500 text-[6px] text-white flex items-center justify-center mt-0.5 ml-auto">1</div>
        </div>
      </div>
    </div>
  </>
);

const CalendarScreen = () => (
  <>
    {/* App header */}
    <div className="flex items-center justify-between px-3 py-2 mt-1 bg-white">
      <div className="text-[11px] font-bold text-slate-800">Calendar</div>
      <div className="text-[9px] text-primary font-medium">Jan 2026</div>
    </div>
    
    {/* Mini calendar */}
    <div className="px-3 py-2">
      <div className="grid grid-cols-7 gap-1 text-center text-[7px] text-slate-500 mb-1">
        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[8px]">
        {[6,7,8,9,10,11,12].map(d => (
          <div key={d} className={`py-1 rounded ${d === 9 ? 'bg-primary text-white' : 'text-slate-700'}`}>
            {d}
            {[7,9,10].includes(d) && <div className="h-0.5 w-0.5 rounded-full bg-primary mx-auto mt-0.5" />}
          </div>
        ))}
      </div>
    </div>
    
    {/* Appointments */}
    <div className="px-2 pb-3 space-y-1.5">
      <div className="text-[8px] font-medium text-slate-500 px-1">Today's Schedule</div>
      <div className="rounded-lg bg-primary/10 border-l-2 border-primary p-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[8px] font-bold text-white">DK</div>
          <div className="flex-1">
            <div className="text-[9px] font-semibold text-slate-800">AC Installation - David K.</div>
            <div className="text-[7px] text-primary">9:00 AM - 11:30 AM</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-blue-50 border-l-2 border-blue-500 p-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[8px] font-bold text-white">MW</div>
          <div className="flex-1">
            <div className="text-[9px] font-semibold text-slate-800">Furnace Repair - Mike W.</div>
            <div className="text-[7px] text-blue-600">1:00 PM - 2:30 PM</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-amber-50 border-l-2 border-amber-500 p-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[8px] font-bold text-white">JL</div>
          <div className="flex-1">
            <div className="text-[9px] font-semibold text-slate-800">Duct Cleaning - Jane L.</div>
            <div className="text-[7px] text-amber-600">4:00 PM - 5:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const PaymentsScreen = () => (
  <>
    {/* App header */}
    <div className="flex items-center justify-between px-3 py-2 mt-1 bg-white">
      <div className="text-[11px] font-bold text-slate-800">Payments</div>
      <Search className="h-3.5 w-3.5 text-slate-400" />
    </div>
    
    {/* Balance card */}
    <div className="mx-2 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-lg">
      <div className="text-[8px] text-white/70">Total Balance</div>
      <div className="text-xl font-bold text-white mt-0.5">$24,850.00</div>
      <div className="flex items-center gap-1 mt-1">
        <TrendingUp className="h-2.5 w-2.5 text-emerald-300" />
        <span className="text-[7px] text-emerald-300">+12.5% this month</span>
      </div>
    </div>
    
    {/* Quick actions */}
    <div className="flex gap-2 px-2 py-2">
      <div className="flex-1 rounded-lg bg-slate-100 p-2 text-center">
        <CreditCard className="h-3.5 w-3.5 mx-auto text-slate-600" />
        <div className="text-[7px] text-slate-600 mt-1">Request</div>
      </div>
      <div className="flex-1 rounded-lg bg-slate-100 p-2 text-center">
        <Send className="h-3.5 w-3.5 mx-auto text-slate-600" />
        <div className="text-[7px] text-slate-600 mt-1">Invoice</div>
      </div>
    </div>
    
    {/* Recent transactions */}
    <div className="px-2 text-[8px] font-medium text-slate-500 py-1">Recent Transactions</div>
    <div className="px-2 pb-3 space-y-1.5">
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="text-[9px] font-semibold text-slate-800">AC Installation</div>
          <div className="text-[7px] text-slate-500">David Kim • Paid</div>
        </div>
        <div className="text-[9px] font-bold text-emerald-600">+$3,200</div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="text-[9px] font-semibold text-slate-800">Furnace Repair</div>
          <div className="text-[7px] text-slate-500">Sarah Lee • Paid</div>
        </div>
        <div className="text-[9px] font-bold text-emerald-600">+$850</div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-slate-100">
        <div className="h-7 w-7 rounded-full bg-amber-100 flex items-center justify-center">
          <DollarSign className="h-3.5 w-3.5 text-amber-600" />
        </div>
        <div className="flex-1">
          <div className="text-[9px] font-semibold text-slate-800">Duct Cleaning</div>
          <div className="text-[7px] text-slate-500">Mike Brown • Pending</div>
        </div>
        <div className="text-[9px] font-bold text-amber-600">$450</div>
      </div>
    </div>
  </>
);

const DashboardScreen = () => (
  <>
    {/* App header */}
    <div className="flex items-center justify-between px-3 py-2 mt-1 bg-white">
      <div className="text-[11px] font-bold text-slate-800">Dashboard</div>
      <Settings className="h-3.5 w-3.5 text-slate-400" />
    </div>
    
    {/* Stats grid */}
    <div className="grid grid-cols-2 gap-2 px-2 py-2">
      <div className="rounded-lg bg-emerald-50 p-2.5 text-center">
        <div className="text-lg font-bold text-emerald-600">24</div>
        <div className="text-[7px] text-slate-600">Booked Jobs</div>
      </div>
      <div className="rounded-lg bg-blue-50 p-2.5 text-center">
        <div className="text-lg font-bold text-blue-600">11</div>
        <div className="text-[7px] text-slate-600">Active Leads</div>
      </div>
      <div className="rounded-lg bg-amber-50 p-2.5 text-center">
        <div className="text-lg font-bold text-amber-600">$18.5k</div>
        <div className="text-[7px] text-slate-600">Revenue</div>
      </div>
      <div className="rounded-lg bg-purple-50 p-2.5 text-center">
        <div className="text-lg font-bold text-purple-600">4.9</div>
        <div className="text-[7px] text-slate-600">Avg Rating</div>
      </div>
    </div>
    
    {/* Chart */}
    <div className="mx-2 rounded-lg bg-white border border-slate-100 p-2.5 shadow-sm">
      <div className="text-[8px] font-medium text-slate-600 mb-2">This Week's Revenue</div>
      <div className="flex items-end justify-between h-16 px-1">
        {[35, 52, 48, 70, 45, 85, 60].map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div 
              className="w-4 rounded-t bg-gradient-to-t from-primary to-primary/60 transition-all duration-500"
              style={{ height: `${height}%` }}
            />
            <span className="text-[6px] text-slate-400">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
    
    {/* AI Summary */}
    <div className="mx-2 mt-2 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-2.5 border border-primary/20">
      <div className="flex items-center gap-1.5 mb-1">
        <Zap className="h-3 w-3 text-primary" />
        <span className="text-[8px] font-semibold text-primary">AI Insight</span>
      </div>
      <p className="text-[7px] text-slate-600 leading-relaxed">
        Revenue up 12% this week! 3 leads ready to book - follow up recommended.
      </p>
    </div>
  </>
);

const PhoneMockup = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = [
    { name: 'Contacts', component: ContactsScreen },
    { name: 'Calendar', component: CalendarScreen },
    { name: 'Payments', component: PaymentsScreen },
    { name: 'Dashboard', component: DashboardScreen }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  const ActiveScreenComponent = screens[activeScreen].component;

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[200px] h-[400px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-white">
            <span className="text-[9px] font-medium text-slate-800">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-2 border border-slate-800 rounded-sm relative">
                <div className="absolute inset-0.5 bg-slate-800 rounded-[1px]" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
          
          {/* Screen content */}
          <div className="h-[calc(100%-28px)] overflow-hidden bg-slate-50">
            <ActiveScreenComponent />
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {screens.map((screen, index) => (
          <button
            key={screen.name}
            onClick={() => setActiveScreen(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeScreen 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`View ${screen.name} screen`}
          />
        ))}
      </div>
    </div>
  );
};

// AI Employee Card Component
const AIEmployeeCard = ({ 
  employee, 
  index,
  isVisible 
}: { 
  employee: typeof aiEmployees[0];
  index: number;
  isVisible: boolean;
}) => {
  const Icon = employee.icon;
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  
  // On desktop, always show expanded content
  const showContent = !isMobile || isExpanded;
  
  // Load the chat widget for Reception Specialist (index 0)
  useEffect(() => {
    if (index === 0 && showContent && widgetContainerRef.current) {
      // Check if script already exists
      const existingScript = widgetContainerRef.current.querySelector('script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://beta.leadconnectorhq.com/loader.js';
        script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
        script.setAttribute('data-widget-id', '696fce2f24cb5a018aa31418');
        widgetContainerRef.current.appendChild(script);
      }
    }
  }, [index, showContent]);
  
  return (
    <div 
      className={`relative rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:shadow-lg hover:border-primary/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header - clickable on mobile */}
      <button 
        className="flex items-start gap-4 w-full text-left"
        onClick={() => isMobile && setIsExpanded(!isExpanded)}
        disabled={!isMobile}
      >
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${employee.accentColor} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground">{employee.title}</h3>
          <p className={`text-sm font-medium ${employee.textColor}`}>{employee.subtitle}</p>
        </div>
        {/* Expand chevron on mobile, 24/7 badge on desktop */}
        {isMobile ? (
          <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-muted transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </div>
        ) : (
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" style={{ animationDuration: '2s' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-600">24/7</span>
          </div>
        )}
      </button>
      
      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-300 ${showContent ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {employee.description}
        </p>
        
        {/* Example quote */}
        <div className="mt-4 rounded-xl bg-muted/50 p-4 border border-border/50">
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            {employee.example}
          </p>
        </div>
        
        {/* Inline chat widget for Reception Specialist */}
        {index === 0 && (
          <div 
            ref={widgetContainerRef}
            className="mt-4"
          />
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="features" className="bg-background py-16 lg:py-24">
      <div className="section-container">
        {/* AI Employees Section */}
        <div ref={sectionRef}>
          <div className="text-center">
            <h2 className={`text-3xl font-bold text-foreground sm:text-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Your AI Team
            </h2>
            <p className={`mx-auto mt-3 max-w-xl text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Three specialists working around the clock to grow your business
            </p>
          </div>
          
          {/* AI Employee Cards - Mobile-first stacked layout */}
          <div className="mt-10 space-y-4 lg:space-y-6">
            {aiEmployees.map((employee, index) => (
              <AIEmployeeCard 
                key={employee.title}
                employee={employee}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Command Center Section */}
        <div className="mt-20 lg:mt-28">
          <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
            Meet Your New CRM
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
            One app to manage your entire team and run your business from anywhere
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
              <div className="lg:col-span-3 flex items-center">
                <div className="grid gap-5 sm:grid-cols-2 w-full">
                  {commandCenterFeatures.map((feature, index) => (
                    <div key={index} className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-muted/50 p-5 transition-all hover:border-primary/30 hover:shadow-xl">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 transition-transform group-hover:scale-110">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                        <p className="mt-1.5 text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
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
