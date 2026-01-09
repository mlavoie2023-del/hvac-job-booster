import { useState, useEffect, useRef } from "react";
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
  Sliders,
  ChevronLeft,
  Search,
  Settings,
  DollarSign,
  BarChart3,
  CreditCard,
  CheckCircle2,
  Zap
} from "lucide-react";

const customerJourneySteps = [
  {
    stage: 1,
    stageLabel: "Lead Capture",
    employee: {
      icon: Phone,
      title: "Reception Specialist",
      description: "Answers calls and chats, books quotes 24/7.",
      gradient: "from-blue-500 to-blue-600",
      glowColor: "blue",
      stat: "< 3s response",
      example: '"Hi! I can schedule your AC repair for tomorrow at 2pm..."',
    },
  },
  {
    stage: 2,
    stageLabel: "Lead Nurturing",
    employee: {
      icon: MessageSquare,
      title: "Nurture Specialist",
      description: "Follows up with every lead until they book.",
      gradient: "from-red-500 to-red-600",
      glowColor: "red",
      stat: "5x more bookings",
      example: '"Just checking in — still need that furnace quote?"',
    },
  },
  {
    stage: 3,
    stageLabel: "Job Completed",
    isMiddleStep: true,
    employee: null,
  },
  {
    stage: 4,
    stageLabel: "Review Request",
    employee: {
      icon: Star,
      title: "Review Specialist",
      description: "Requests reviews and filters out negatives.",
      gradient: "from-yellow-500 to-amber-600",
      glowColor: "yellow",
      stat: "4.9★ avg rating",
      example: '"Thanks for choosing us! Mind leaving a quick review?"',
    },
  },
  {
    stage: 5,
    stageLabel: "Repeat Business",
    employee: {
      icon: Users,
      title: "Revenue Specialist",
      description: "Re-engages past customers for new jobs.",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "purple",
      stat: "+40% repeat jobs",
      example: '"Time for your annual AC tune-up! Book now?"',
    },
  },
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

// Enhanced Employee Card with glow, badges, and micro-interactions
const EmployeeCard = ({ 
  employee, 
  isVisible,
  delay 
}: { 
  employee: {
    icon: typeof Phone;
    title: string;
    description: string;
    gradient: string;
    glowColor: string;
    stat: string;
    example: string;
  };
  isVisible: boolean;
  delay: number;
}) => {
  const hoverColors: Record<string, string> = {
    blue: "hover:bg-blue-500/10 active:bg-blue-500/20",
    red: "hover:bg-red-500/10 active:bg-red-500/20",
    yellow: "hover:bg-yellow-500/10 active:bg-yellow-500/20",
    purple: "hover:bg-purple-500/10 active:bg-purple-500/20",
  };

  return (
    <div 
      className={`group relative min-h-[200px] rounded-2xl border border-border/50 bg-muted/50 p-4 transition-[opacity,transform] duration-500 hover:border-primary/40 hover:shadow-lg ${hoverColors[employee.glowColor]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
        transitionProperty: 'opacity, transform, background-color, border-color, box-shadow',
        transitionDuration: isVisible ? '100ms, 100ms, 100ms, 100ms, 100ms' : '500ms'
      }}
    >
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon and badge */}
        <div className="flex items-start justify-between mb-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${employee.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
            <employee.icon className="h-6 w-6 text-white" />
          </div>
          
          {/* Live indicator badge */}
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-medium text-emerald-600">24/7</span>
          </div>
        </div>
        
        {/* Title and description */}
        <h4 className="text-sm font-semibold text-foreground">{employee.title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{employee.description}</p>
        
        
        {/* Example interaction */}
        <div className="mt-3 rounded-lg bg-muted/50 p-2 border border-border/30">
          <p className="text-[10px] italic text-muted-foreground leading-relaxed">{employee.example}</p>
        </div>
      </div>
    </div>
  );
};

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
      <div className="flex items-end justify-between gap-1 h-12">
        <div className="w-full rounded-t bg-primary/30 h-3"></div>
        <div className="w-full rounded-t bg-primary/50 h-5"></div>
        <div className="w-full rounded-t bg-primary/40 h-4"></div>
        <div className="w-full rounded-t bg-primary/70 h-8"></div>
        <div className="w-full rounded-t bg-primary/60 h-6"></div>
        <div className="w-full rounded-t bg-primary/80 h-10"></div>
        <div className="w-full rounded-t bg-primary h-12"></div>
      </div>
      <div className="flex justify-between mt-1 text-[6px] text-slate-400">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>
    
    {/* AI status */}
    <div className="mx-2 mt-2 rounded-lg bg-primary/5 border border-primary/20 p-2">
      <div className="text-[8px] font-medium text-slate-700 mb-1.5">AI Employees Active</div>
      <div className="flex items-center gap-1.5">
        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  </>
);

const screens = [
  { component: ContactsScreen, label: "Contacts", icon: MessageSquare },
  { component: CalendarScreen, label: "Calendar", icon: Calendar },
  { component: PaymentsScreen, label: "Payments", icon: DollarSign },
  { component: DashboardScreen, label: "Data", icon: BarChart3 },
];

// Phone Mockup with animated screens
const PhoneMockup = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentScreen = screens[activeScreen].component;

  return (
    <div className="relative mx-auto w-[220px]">
      {/* Phone frame */}
      <div className="rounded-[32px] border-[8px] border-slate-900 bg-slate-900 p-1 shadow-2xl">
        {/* Screen */}
        <div className="rounded-[24px] bg-slate-50 overflow-hidden h-[380px] flex flex-col">
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
          
          {/* Screen content with animation */}
          <div className="flex-1 overflow-hidden relative">
            <div key={activeScreen} className="animate-fade-in">
              <CurrentScreen />
            </div>
          </div>
          
          {/* Bottom navigation */}
          <div className="flex items-center justify-around border-t border-slate-200 bg-white px-2 py-2 mt-auto">
            {screens.map((screen, index) => (
              <button
                key={index}
                onClick={() => setActiveScreen(index)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  activeScreen === index ? 'scale-110' : 'opacity-50'
                }`}
              >
                <div className={`p-1 rounded-full ${activeScreen === index ? 'bg-primary/20' : ''}`}>
                  <screen.icon className={`h-3.5 w-3.5 ${activeScreen === index ? 'text-primary' : 'text-slate-400'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Home indicator */}
      <div className="absolute bottom-2.5 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-600"></div>
      
      {/* Floating action button */}
      <div className="absolute bottom-16 right-4 h-8 w-8 rounded-full bg-primary shadow-lg flex items-center justify-center">
        <span className="text-white text-lg font-light">+</span>
      </div>
      
      {/* Screen indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveScreen(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeScreen === index ? 'w-4 bg-primary' : 'w-1.5 bg-slate-300'
            }`}
          />
        ))}
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
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="section-container">
        {/* AI Employees Customer Journey Section */}
        <div ref={sectionRef}>
          <h2 className={`text-center text-3xl font-bold text-foreground sm:text-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            AI Employees
          </h2>
          <p className={`mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Your always-on team guides every customer through their entire journey
          </p>
          
          {/* Customer Journey Roadmap */}
          <div className="mx-auto mt-12 max-w-6xl">
            {/* Journey Timeline */}
            <div className="relative">
              {/* Animated connecting line - hidden on mobile */}
              <div className="absolute left-[60px] right-[60px] top-6 hidden h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-purple-500 lg:block overflow-hidden">
                {/* Animated glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-gradient-shift bg-[length:200%_100%]" />
              </div>
              
              {/* Journey Steps */}
              <div className="grid gap-8 lg:grid-cols-5">
                {customerJourneySteps.map((step, stepIndex) => (
                  <div key={stepIndex} className="relative flex flex-col items-center">
                    
                    {/* Stage Circle with enhanced styling */}
                    <div 
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background shadow-xl transition-all duration-500 ${
                        step.isMiddleStep 
                          ? 'bg-gradient-to-br from-slate-600 to-slate-700' 
                          : stepIndex === 0 
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                            : stepIndex === 1
                              ? 'bg-gradient-to-br from-red-500 to-red-600'
                              : stepIndex === 3
                                ? 'bg-gradient-to-br from-yellow-500 to-amber-600'
                                : 'bg-gradient-to-br from-purple-500 to-pink-600'
                      } ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                      style={{ transitionDelay: `${stepIndex * 100 + 200}ms` }}
                    >
                      {/* Glow ring */}
                      <div className={`absolute inset-0 rounded-full animate-glow-pulse ${
                        step.isMiddleStep 
                          ? 'bg-slate-500/30' 
                          : stepIndex === 0 
                            ? 'bg-blue-500/30'
                            : stepIndex === 1
                              ? 'bg-red-500/30'
                              : stepIndex === 3
                                ? 'bg-yellow-500/30'
                                : 'bg-purple-500/30'
                      } blur-md`} />
                      <span className="relative text-lg font-bold text-white">{step.stage}</span>
                    </div>
                    
                    {/* Stage Label */}
                    <div 
                      className={`mt-3 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                      style={{ transitionDelay: `${stepIndex * 100 + 300}ms` }}
                    >
                      <span className="text-sm font-semibold text-foreground">{step.stageLabel}</span>
                    </div>
                    
                    {/* Employee Card or Middle Step */}
                    <div className="mt-4 w-full">
                      {step.isMiddleStep ? (
                        <div 
                          className={`flex min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/30 p-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                          style={{ transitionDelay: `${stepIndex * 100 + 400}ms` }}
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200">
                            <Briefcase className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <p className="mt-3 text-sm font-medium text-muted-foreground">You complete the job</p>
                          <p className="mt-1 text-xs text-muted-foreground/70">We handle everything else</p>
                        </div>
                      ) : step.employee ? (
                        <EmployeeCard 
                          employee={step.employee}
                          isVisible={isVisible}
                          delay={stepIndex * 100 + 400}
                        />
                      ) : null}
                    </div>
                    
                    {/* Mobile arrow (vertical) */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Command Center Section */}
        <div className="mt-20">
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
