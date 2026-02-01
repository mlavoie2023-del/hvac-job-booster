import { useEffect, useState, useRef } from "react";
import { 
  Users, Calendar, DollarSign, TrendingUp, Bell, Search, ChevronRight, 
  Plus, Clock, ArrowUpRight, LayoutGrid, MessageCircle,
  Contact, Receipt, Send, PlayCircle, Globe, LineChart, Smartphone,
  Phone, Video, MoreHorizontal, Paperclip, Smile, ChevronLeft, ChevronDown, Filter,
  Mail, MessageSquare, Linkedin, PhoneCall, Users2, Download, Settings, ArrowUpDown, BarChart3,
  Check, FileText, CreditCard, BookImage, GitBranch, Eye, Target
} from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

type TabType = "dashboard" | "conversations" | "calendars" | "contacts" | "opportunities" | "payments" | "marketing" | "automation" | "sites" | "reporting";

const HeroDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const sidebarItems: { icon: typeof LayoutGrid; label: string; id: TabType; showLabel?: boolean }[] = [
    { icon: LayoutGrid, label: "Dashboard", id: "dashboard", showLabel: true },
    { icon: MessageCircle, label: "Conversations", id: "conversations", showLabel: true },
    { icon: Calendar, label: "Calendars", id: "calendars", showLabel: true },
    { icon: Contact, label: "Contacts", id: "contacts", showLabel: true },
    { icon: Filter, label: "Opportunities", id: "opportunities", showLabel: true },
    { icon: Receipt, label: "Payments & Docs", id: "payments", showLabel: true },
    { icon: Send, label: "Marketing", id: "marketing", showLabel: true },
    { icon: PlayCircle, label: "Automations", id: "automation", showLabel: true },
    { icon: Globe, label: "Sites", id: "sites", showLabel: true },
    { icon: LineChart, label: "Reporting", id: "reporting", showLabel: true },
  ];

  const stats = [
    { label: "New Leads", value: "12", change: "+3 today", icon: Users, color: "text-primary" },
    { label: "Appointments", value: "8", change: "2 upcoming", icon: Calendar, color: "text-emerald-400" },
    { label: "Revenue", value: "$24.5k", change: "+12% MTD", icon: DollarSign, color: "text-amber-400" },
    { label: "Conversion", value: "34%", change: "+5% vs last", icon: TrendingUp, color: "text-purple-400" },
  ];

  const recentActivity = [
    { name: "Sarah Mitchell", action: "Booked discovery call", time: "2m ago", avatar: "SM" },
    { name: "James Chen", action: "Opened email campaign", time: "15m ago", avatar: "JC" },
    { name: "Emily Rodriguez", action: "Submitted inquiry form", time: "1h ago", avatar: "ER" },
  ];

  const pipelineCards = [
    { name: "David K.", stage: "Lead", amount: "$850k", daysIn: 2 },
    { name: "Lisa M.", stage: "Meeting", amount: "$1.2M", daysIn: 5 },
    { name: "Robert J.", stage: "Proposal", amount: "$2.1M", daysIn: 3 },
  ];

  const upcomingTasks = [
    { task: "Follow up with David K.", due: "Today, 3pm", priority: "high" },
    { task: "Send proposal to Lisa M.", due: "Tomorrow", priority: "medium" },
    { task: "Annual review - Mike T.", due: "Wed, 10am", priority: "low" },
  ];

  const conversations = [
    { name: "Sarah Mitchell", message: "Thanks for the info! I'll review...", time: "2m", unread: true, avatar: "SM", channel: "sms" as const },
    { name: "James Chen", message: "Can we reschedule to Thursday?", time: "15m", unread: true, avatar: "JC", channel: "email" as const },
    { name: "Emily Rodriguez", message: "Looking forward to our call", time: "1h", unread: false, avatar: "ER", channel: "linkedin" as const },
    { name: "Michael Brown", message: "Sent over the documents", time: "3h", unread: false, avatar: "MB", channel: "email" as const },
    { name: "Lisa Thompson", message: "Great meeting you yesterday!", time: "5h", unread: false, avatar: "LT", channel: "linkedin" as const },
    { name: "David Wilson", message: "Confirmed for next week", time: "1d", unread: false, avatar: "DW", channel: "sms" as const },
  ];

  const calendarEvents = [
    { title: "Discovery Call - Sarah M.", time: "9:00 AM", duration: "30 min", type: "call" },
    { title: "Portfolio Review - James C.", time: "11:00 AM", duration: "1 hr", type: "meeting" },
    { title: "Follow-up - Emily R.", time: "2:00 PM", duration: "15 min", type: "call" },
    { title: "New Client Onboarding", time: "4:00 PM", duration: "45 min", type: "meeting" },
  ];

  const getPageTitle = () => {
    const item = sidebarItems.find(i => i.id === activeTab);
    return item?.label || "Dashboard";
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-12 px-4">
      <div 
        className={`relative rounded-xl overflow-hidden border border-border/50 shadow-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          background: "linear-gradient(145deg, hsl(0 0% 8%) 0%, hsl(0 0% 5%) 100%)",
          boxShadow: "0 25px 80px -20px rgba(0,0,0,0.6), 0 0 60px -30px hsl(217 91% 60% / 0.2)",
        }}
      >

        <div className="flex min-h-[380px]">
          {/* Sidebar */}
          <div className="w-16 bg-[hsl(0_0%_6%)] border-r border-border/30 flex flex-col items-center py-3 gap-0.5">
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center mb-3 overflow-hidden">
              <img src={lavoieLogo} alt="Logo" className="w-7 h-7 object-contain" />
            </div>
            
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-12 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group ${
                  item.showLabel ? "py-1.5 gap-0.5" : "h-10"
                } ${
                  activeTab === item.id 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.showLabel && (
                  <span className="text-[6px] font-medium truncate">{item.label}</span>
                )}
              </div>
            ))}
            
            <div className="flex-1" />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Top Bar */}
            <div className="h-12 px-4 flex items-center justify-between border-b border-border/30 bg-[hsl(0_0%_7%)]">
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold text-foreground">{getPageTitle()}</h2>
                <span className="text-[10px] text-muted-foreground">Good morning, John</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-muted/30 rounded-md">
                  <Search className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Search...</span>
                </div>
                <div className="relative">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                </div>
                <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-[10px] font-medium text-primary">
                  JD
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-hidden relative">
              <div key={activeTab} className="animate-fade-in">
                {activeTab === "dashboard" && (
                  <DashboardContent 
                    stats={stats} 
                    pipelineCards={pipelineCards} 
                    recentActivity={recentActivity} 
                    upcomingTasks={upcomingTasks} 
                  />
                )}
                {activeTab === "conversations" && (
                  <ConversationsContent conversations={conversations} />
                )}
                {activeTab === "calendars" && (
                  <CalendarContent events={calendarEvents} />
                )}
                {activeTab === "contacts" && (
                  <ContactsContent />
                )}
                {activeTab === "opportunities" && (
                  <OpportunitiesContent />
                )}
                {activeTab === "payments" && (
                  <PaymentsContent />
                )}
                {activeTab === "marketing" && (
                  <MarketingContent />
                )}
                {activeTab === "automation" && (
                  <AutomationsContent />
                )}
                {activeTab === "sites" && (
                  <SitesContent />
                )}
                {activeTab === "reporting" && (
                  <ReportingContent />
                )}
                {activeTab !== "dashboard" && activeTab !== "conversations" && activeTab !== "calendars" && activeTab !== "contacts" && activeTab !== "opportunities" && activeTab !== "payments" && activeTab !== "marketing" && activeTab !== "automation" && activeTab !== "sites" && activeTab !== "reporting" && (
                  <PlaceholderContent title={getPageTitle()} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(217 91% 60% / 0.15), transparent)",
          }}
        />
      </div>
    </div>
  );
};

/* Dashboard Content */
const DashboardContent = ({ 
  stats, 
  pipelineCards, 
  recentActivity, 
  upcomingTasks 
}: { 
  stats: { label: string; value: string; change: string; icon: typeof Users; color: string }[];
  pipelineCards: { name: string; stage: string; amount: string; daysIn: number }[];
  recentActivity: { name: string; action: string; time: string; avatar: string }[];
  upcomingTasks: { task: string; due: string; priority: string }[];
}) => (
  <>
    {/* Stats Row */}
    <div className="grid grid-cols-4 gap-3 mb-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-[hsl(0_0%_9%)] rounded-lg p-3 border border-border/20"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] text-muted-foreground">{stat.label}</span>
            <stat.icon className={`w-3 h-3 ${stat.color}`} />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-foreground">{stat.value}</span>
            <span className="text-[8px] text-emerald-400 flex items-center">
              <ArrowUpRight className="w-2 h-2" />
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Two Column Layout */}
    <div className="grid grid-cols-5 gap-3">
      {/* Pipeline Preview */}
      <div className="col-span-3 bg-[hsl(0_0%_9%)] rounded-lg p-3 border border-border/20">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-medium text-foreground">Active Pipeline</span>
          <button className="text-[8px] text-primary flex items-center gap-0.5">
            View all <ChevronRight className="w-2.5 h-2.5" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Lead", "Meeting", "Proposal"].map((stage, stageIdx) => (
            <div key={stage} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-muted-foreground">{stage}</span>
                <span className="text-[8px] text-muted-foreground">
                  {stage === "Lead" ? "4" : stage === "Meeting" ? "3" : "2"}
                </span>
              </div>
              <div className="space-y-1.5">
                {pipelineCards
                  .filter((_, idx) => idx === stageIdx)
                  .map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-[hsl(0_0%_12%)] rounded-md p-2 border border-border/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[6px] text-primary font-medium">
                          {card.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-[8px] font-medium text-foreground">{card.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-emerald-400">{card.amount}</span>
                        <span className="text-[6px] text-muted-foreground">{card.daysIn}d</span>
                      </div>
                    </div>
                  ))}
                {stageIdx === 0 && (
                  <div className="bg-[hsl(0_0%_10%)] rounded-md p-2 border border-dashed border-border/20">
                    <div className="flex items-center justify-center gap-1 text-[7px] text-muted-foreground">
                      <Plus className="w-2.5 h-2.5" />
                      Add lead
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-2 space-y-3">
        {/* Recent Activity */}
        <div className="bg-[hsl(0_0%_9%)] rounded-lg p-3 border border-border/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-foreground">Recent Activity</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[7px] text-emerald-400">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            {recentActivity.map((activity, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[6px] text-primary font-medium">
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] font-medium text-foreground truncate">{activity.name}</div>
                  <div className="text-[7px] text-muted-foreground truncate">{activity.action}</div>
                </div>
                <span className="text-[6px] text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-[hsl(0_0%_9%)] rounded-lg p-3 border border-border/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-foreground">Today's Tasks</span>
            <span className="text-[8px] text-muted-foreground">3 pending</span>
          </div>
          <div className="space-y-1.5">
            {upcomingTasks.map((task, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded border border-border/50 flex items-center justify-center">
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] text-foreground truncate">{task.task}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-2 h-2 text-muted-foreground" />
                  <span className="text-[6px] text-muted-foreground">{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

/* Conversations Content */
const ConversationsContent = ({ conversations }: { conversations: { name: string; message: string; time: string; unread: boolean; avatar: string; channel: "email" | "sms" | "linkedin" }[] }) => {
  const getChannelIcon = (channel: "email" | "sms" | "linkedin") => {
    switch (channel) {
      case "email": return <Mail className="w-2.5 h-2.5" />;
      case "sms": return <MessageSquare className="w-2.5 h-2.5" />;
      case "linkedin": return <Linkedin className="w-2.5 h-2.5" />;
    }
  };

  const getChannelColor = (channel: "email" | "sms" | "linkedin") => {
    switch (channel) {
      case "email": return "text-amber-400";
      case "sms": return "text-emerald-400";
      case "linkedin": return "text-blue-400";
    }
  };

  return (
  <div className="flex h-full gap-3">
    {/* Conversation List */}
    <div className="w-2/5 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden">
      <div className="p-2 border-b border-border/20">
        <div className="flex items-center gap-2 px-2 py-1.5 bg-muted/30 rounded-md">
          <Search className="w-3 h-3 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground">Search conversations...</span>
        </div>
      </div>
      <div className="divide-y divide-border/20">
        {conversations.map((conv, idx) => (
          <div 
            key={idx} 
            className={`p-2.5 cursor-pointer transition-colors ${idx === 0 ? "bg-primary/10" : "hover:bg-muted/30"}`}
          >
            <div className="flex items-start gap-2">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[7px] text-primary font-medium">
                  {conv.avatar}
                </div>
                {conv.unread && (
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-medium text-foreground">{conv.name}</span>
                    <span className={getChannelColor(conv.channel)}>{getChannelIcon(conv.channel)}</span>
                  </div>
                  <span className="text-[7px] text-muted-foreground">{conv.time}</span>
                </div>
                <p className="text-[8px] text-muted-foreground truncate mt-0.5">{conv.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Chat View */}
    <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 flex flex-col">
      {/* Chat Header */}
      <div className="p-2.5 border-b border-border/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[7px] text-primary font-medium">
            SM
          </div>
          <div>
            <div className="text-[9px] font-medium text-foreground">Sarah Mitchell</div>
            <div className="text-[7px] text-emerald-400">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground" />
          <Video className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground" />
          <MoreHorizontal className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        <div className="flex justify-start">
          <div className="bg-muted/30 rounded-lg px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[8px] text-foreground">Hi! I saw your planning services and I'm interested in learning more.</p>
            <span className="text-[6px] text-muted-foreground">9:41 AM</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary/20 rounded-lg px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[8px] text-foreground">Hello Sarah! I'd be happy to help. Would you like to schedule a discovery call?</p>
            <span className="text-[6px] text-muted-foreground">9:43 AM</span>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-muted/30 rounded-lg px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[8px] text-foreground">Thanks for the info! I'll review and get back to you.</p>
            <span className="text-[6px] text-muted-foreground">9:45 AM</span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-2 border-t border-border/20">
        <div className="flex items-center gap-2 bg-muted/20 rounded-md px-2 py-1.5">
          <Paperclip className="w-3 h-3 text-muted-foreground" />
          <span className="flex-1 text-[8px] text-muted-foreground">Type a message...</span>
          <Smile className="w-3 h-3 text-muted-foreground" />
          <Send className="w-3 h-3 text-primary" />
        </div>
      </div>
    </div>
  </div>
  );
};

/* Calendar Content */
const CalendarContent = ({ events }: { events: { title: string; time: string; duration: string; type: string }[] }) => (
  <div className="flex h-full gap-3">
    {/* Mini Calendar */}
    <div className="w-1/3 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-medium text-foreground">February 2026</span>
        <div className="flex items-center gap-1">
          <ChevronLeft className="w-3 h-3 text-muted-foreground cursor-pointer" />
          <ChevronRight className="w-3 h-3 text-muted-foreground cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-[7px] text-muted-foreground">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
          const hasAppointment = [5, 12, 18, 25].includes(day);
          const isToday = day === 1;
          return (
            <div 
              key={day} 
              className={`relative text-[7px] py-1 rounded cursor-pointer transition-colors ${
                isToday ? "bg-primary text-primary-foreground" : 
                "text-muted-foreground hover:bg-muted/30"
              }`}
            >
              {day}
              {hasAppointment && !isToday && (
                <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-3 pt-3 border-t border-border/20">
        <div className="text-[8px] text-muted-foreground mb-1">Today</div>
        <div className="text-[10px] font-medium text-foreground">Sunday, Feb 1</div>
        <div className="text-[8px] text-primary mt-0.5">4 appointments</div>
      </div>
    </div>

    {/* Day Schedule */}
    <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-medium text-foreground">Today's Schedule</span>
          <span className="text-[8px] text-muted-foreground ml-2">4 appointments</span>
        </div>
        <button className="flex items-center gap-1 text-[8px] text-primary bg-primary/10 px-2 py-1 rounded">
          <Plus className="w-2.5 h-2.5" />
          Add Event
        </button>
      </div>
      <div className="space-y-2">
        {events.map((event, idx) => (
          <div 
            key={idx} 
            className="flex items-start gap-3 p-2 bg-[hsl(0_0%_12%)] rounded-md border-l-2 border-primary"
          >
            <div className="text-right min-w-[50px]">
              <div className="text-[9px] font-medium text-foreground">{event.time}</div>
              <div className="text-[7px] text-muted-foreground">{event.duration}</div>
            </div>
            <div className="flex-1">
              <div className="text-[9px] font-medium text-foreground">{event.title}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`flex items-center gap-1 text-[7px] px-1.5 py-0.5 rounded ${
                  event.type === "call" ? "bg-emerald-400/20 text-emerald-400" : "bg-primary/20 text-primary"
                }`}>
                  {event.type === "call" ? <><PhoneCall className="w-2 h-2" /> Call</> : <><Users2 className="w-2 h-2" /> Meeting</>}
                </span>
              </div>
            </div>
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Contacts Content */
const ContactsContent = () => {
  const contacts = [
    { id: 1, name: "Sarah Mitchell", initials: "SM", phone: "(555) 123-4567", email: "sarah.m@email.com", age: 52, aum: "$1.2M", lastActivity: "2 hours ago", activityType: "email" as const, status: "Qualified" },
    { id: 2, name: "James Chen", initials: "JC", phone: "(555) 234-5678", email: "jchen@outlook.com", age: 45, aum: "$850K", lastActivity: "1 day ago", activityType: "call" as const, status: "Prospect" },
    { id: 3, name: "Emily Rodriguez", initials: "ER", phone: "(555) 345-6789", email: "emily.r@gmail.com", age: 61, aum: "$2.4M", lastActivity: "3 days ago", activityType: "email" as const, status: "Client" },
    { id: 4, name: "Michael Brown", initials: "MB", phone: "(555) 456-7890", email: "mbrown@corp.com", age: 38, aum: "$425K", lastActivity: "5 days ago", activityType: "call" as const, status: "Qualified" },
    { id: 5, name: "Lisa Thompson", initials: "LT", phone: "(555) 567-8901", email: "lisa.t@email.com", age: 55, aum: "$1.8M", lastActivity: "1 week ago", activityType: "linkedin" as const, status: "Client" },
    { id: 6, name: "David Wilson", initials: "DW", phone: "(555) 678-9012", email: "dwilson@mail.com", age: 67, aum: "$3.1M", lastActivity: "1 week ago", activityType: "email" as const, status: "Client" },
  ];

  const tabs = ["All", "Prospects", "Qualified", "Clients"];

  const getActivityIcon = (type: "email" | "call" | "linkedin") => {
    switch (type) {
      case "email": return <Mail className="w-2 h-2" />;
      case "call": return <PhoneCall className="w-2 h-2" />;
      case "linkedin": return <Linkedin className="w-2 h-2" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Client": return "bg-emerald-400/20 text-emerald-400";
      case "Qualified": return "bg-primary/20 text-primary";
      case "Prospect": return "bg-amber-400/20 text-amber-400";
      default: return "bg-muted/30 text-muted-foreground";
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with count and actions */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-medium">47 Contacts</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 text-[7px] text-muted-foreground border border-border/30 px-2 py-1 rounded hover:bg-muted/30">
            <Download className="w-2.5 h-2.5" />
            Import
          </button>
          <button className="flex items-center gap-1 text-[7px] text-primary-foreground bg-primary px-2 py-1 rounded">
            <Plus className="w-2.5 h-2.5" />
            Add Contact
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 mb-2 border-b border-border/20 pb-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`text-[8px] pb-1 border-b-2 transition-colors ${
              idx === 0 
                ? "border-primary text-primary font-medium" 
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="text-[8px] text-muted-foreground flex items-center gap-0.5 ml-2">
          <Plus className="w-2 h-2" />
          Add Smart List
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-[7px] text-muted-foreground border border-border/30 px-2 py-1 rounded hover:bg-muted/30">
            <Filter className="w-2.5 h-2.5" />
            Filters
          </button>
          <button className="flex items-center gap-1 text-[7px] text-muted-foreground border border-border/30 px-2 py-1 rounded hover:bg-muted/30">
            <ArrowUpDown className="w-2.5 h-2.5" />
            Sort
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-muted/30 rounded">
            <Search className="w-2.5 h-2.5 text-muted-foreground" />
            <span className="text-[7px] text-muted-foreground">Search Contacts</span>
          </div>
          <button className="flex items-center gap-1 text-[7px] text-muted-foreground">
            <Settings className="w-2.5 h-2.5" />
            Fields
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[20px_1fr_90px_120px_40px_60px_90px_70px] gap-2 px-2 py-1.5 bg-[hsl(0_0%_7%)] border-b border-border/20 items-center">
          <div className="w-3 h-3 rounded border border-border/50" />
          <span className="text-[7px] text-muted-foreground font-medium flex items-center gap-0.5">
            Contact Name <ArrowUpDown className="w-2 h-2" />
          </span>
          <span className="text-[7px] text-muted-foreground font-medium">Phone</span>
          <span className="text-[7px] text-muted-foreground font-medium">Email</span>
          <span className="text-[7px] text-muted-foreground font-medium">Age</span>
          <span className="text-[7px] text-muted-foreground font-medium flex items-center gap-0.5">
            AUM <ArrowUpDown className="w-2 h-2" />
          </span>
          <span className="text-[7px] text-muted-foreground font-medium">Last Activity</span>
          <span className="text-[7px] text-muted-foreground font-medium">Status</span>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border/10">
          {contacts.map((contact, idx) => (
            <div 
              key={contact.id}
              className={`grid grid-cols-[20px_1fr_90px_120px_40px_60px_90px_70px] gap-2 px-2 py-1.5 items-center hover:bg-muted/20 cursor-pointer transition-colors ${
                idx === 0 ? "bg-primary/5" : ""
              }`}
            >
              <div className={`w-3 h-3 rounded border flex items-center justify-center ${
                idx === 0 ? "border-primary bg-primary/20" : "border-border/50"
              }`}>
                {idx === 0 && <Check className="w-2 h-2 text-primary" />}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[6px] text-primary font-medium">
                  {contact.initials}
                </div>
                <span className="text-[8px] font-medium text-foreground">{contact.name}</span>
              </div>
              <div className="flex items-center gap-1 text-[7px] text-muted-foreground">
                <Phone className="w-2 h-2" />
                <span className="truncate">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-1 text-[7px] text-muted-foreground">
                <Mail className="w-2 h-2" />
                <span className="truncate">{contact.email}</span>
              </div>
              <span className="text-[7px] text-foreground">{contact.age}</span>
              <span className="text-[7px] text-emerald-400 font-medium">{contact.aum}</span>
              <div className="flex items-center gap-1 text-[7px] text-muted-foreground">
                {getActivityIcon(contact.activityType)}
                <span>{contact.lastActivity}</span>
              </div>
              <span className={`text-[6px] px-1.5 py-0.5 rounded font-medium ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Opportunities Content */
const OpportunitiesContent = () => {
  const stages = [
    {
      name: "Discovery",
      count: 4,
      value: "$2.3M",
      color: "bg-slate-500",
      opportunities: [
        { id: 1, name: "Robert Anderson", aum: "$450K", probability: 20 },
        { id: 2, name: "Patricia Hayes", aum: "$680K", probability: 15 },
      ]
    },
    {
      name: "Qualification",
      count: 3,
      value: "$2.9M",
      color: "bg-blue-500",
      opportunities: [
        { id: 5, name: "Daniel Foster", aum: "$1.2M", probability: 40 },
        { id: 6, name: "Sandra Kelly", aum: "$750K", probability: 35 },
      ]
    },
    {
      name: "Proposal Sent",
      count: 2,
      value: "$2.5M",
      color: "bg-amber-500",
      opportunities: [
        { id: 8, name: "Jennifer Adams", aum: "$1.5M", probability: 60 },
        { id: 9, name: "William Parker", aum: "$980K", probability: 55 },
      ]
    },
    {
      name: "Commitment",
      count: 2,
      value: "$4.0M",
      color: "bg-emerald-500",
      opportunities: [
        { id: 10, name: "Elizabeth Turner", aum: "$1.8M", probability: 85 },
        { id: 11, name: "Christopher Lee", aum: "$2.2M", probability: 90 },
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col max-h-[290px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-muted/30 rounded-md border border-border/20">
            <span className="text-[8px] text-foreground font-medium">Sales Pipeline</span>
            <ChevronDown className="w-2.5 h-2.5 text-muted-foreground" />
          </div>
          <span className="text-[9px] text-primary font-medium">11 opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-[8px] rounded font-medium">
            <Plus className="w-2.5 h-2.5" />
            Add
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 grid grid-cols-4 gap-2 overflow-hidden">
        {stages.map((stage) => (
          <div key={stage.name} className="flex flex-col min-h-0">
            {/* Stage Header */}
            <div className="mb-1.5 flex-shrink-0">
              <div className={`h-0.5 ${stage.color} rounded-full mb-1`} />
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold text-foreground">{stage.name}</span>
                <span className="text-[7px] text-muted-foreground">{stage.count}</span>
              </div>
              <span className="text-[7px] text-emerald-400 font-medium">{stage.value}</span>
            </div>

            {/* Cards */}
            <div className="flex-1 space-y-1 overflow-hidden">
              {stage.opportunities.map((opp) => (
                <div 
                  key={opp.id}
                  className="bg-[hsl(0_0%_9%)] rounded-md p-1.5 border border-border/30 cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[5px] text-primary font-medium">
                      {opp.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-[7px] font-medium text-foreground truncate">{opp.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] text-emerald-400 font-medium">{opp.aum}</span>
                    <span className="text-[6px] text-muted-foreground">{opp.probability}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Payments & Documents Content */
const PaymentsContent = () => {
  const [activeSubTab, setActiveSubTab] = useState<"invoices" | "documents">("invoices");

  const invoices = [
    { id: "INV-000012", name: "Annual Planning Fee", customer: "Sarah Mitchell", initials: "SM", date: "Jan 28, 2026", amount: "$2,500.00", status: "Paid" },
    { id: "INV-000011", name: "Portfolio Review", customer: "James Chen", initials: "JC", date: "Jan 25, 2026", amount: "$750.00", status: "Due In 7 Days" },
    { id: "INV-000010", name: "Retirement Analysis", customer: "Emily Rodriguez", initials: "ER", date: "Jan 20, 2026", amount: "$1,200.00", status: "Paid" },
    { id: "INV-000009", name: "Estate Planning Consult", customer: "Michael Brown", initials: "MB", date: "Jan 15, 2026", amount: "$3,000.00", status: "Overdue" },
    { id: "INV-000008", name: "Tax Strategy Session", customer: "Lisa Thompson", initials: "LT", date: "Jan 10, 2026", amount: "$500.00", status: "Paid" },
    { id: "INV-000007", name: "Investment Rebalancing", customer: "David Wilson", initials: "DW", date: "Jan 5, 2026", amount: "$850.00", status: "Paid" },
  ];

  const documents = [
    { id: 1, title: "Financial Planning Agreement", status: "Completed", customer: "Sarah Mitchell", initials: "SM", date: "Jan 28, 2026", value: "$2,500.00" },
    { id: 2, title: "Investment Policy Statement", status: "Pending Signature", customer: "James Chen", initials: "JC", date: "Jan 27, 2026", value: "$0.00" },
    { id: 3, title: "Retirement Proposal", status: "Draft", customer: "Emily Rodriguez", initials: "ER", date: "Jan 25, 2026", value: "$1,200.00" },
    { id: 4, title: "Estate Plan Review", status: "Completed", customer: "Michael Brown", initials: "MB", date: "Jan 20, 2026", value: "$3,000.00" },
    { id: 5, title: "Risk Tolerance Questionnaire", status: "Waiting for Client", customer: "Robert Anderson", initials: "RA", date: "Jan 18, 2026", value: "$0.00" },
    { id: 6, title: "Annual Review Summary", status: "Completed", customer: "Lisa Thompson", initials: "LT", date: "Jan 15, 2026", value: "$500.00" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
      case "Completed":
        return "bg-emerald-500/20 text-emerald-400";
      case "Due In 7 Days":
      case "Pending Signature":
        return "bg-amber-500/20 text-amber-400";
      case "Overdue":
        return "bg-red-500/20 text-red-400";
      case "Draft":
        return "bg-slate-500/20 text-slate-400";
      case "Waiting for Client":
        return "bg-blue-500/20 text-blue-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Sub-tabs */}
      <div className="flex items-center gap-4 border-b border-border/30 pb-2">
        <button
          onClick={() => setActiveSubTab("invoices")}
          className={`flex items-center gap-1.5 text-[9px] font-medium pb-1 border-b-2 transition-colors ${
            activeSubTab === "invoices" 
              ? "border-primary text-primary" 
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="w-3 h-3" />
          Invoices
        </button>
        <button
          onClick={() => setActiveSubTab("documents")}
          className={`flex items-center gap-1.5 text-[9px] font-medium pb-1 border-b-2 transition-colors ${
            activeSubTab === "documents" 
              ? "border-primary text-primary" 
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="w-3 h-3" />
          Documents
        </button>
        <div className="flex-1" />
        <button className="flex items-center gap-1 px-2 py-1 text-[8px] bg-primary text-primary-foreground rounded-md font-medium">
          <Plus className="w-2.5 h-2.5" />
          New
        </button>
      </div>

      {/* Stats Row */}
      {activeSubTab === "invoices" && (
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Draft", count: 2, value: "$1,500.00" },
            { label: "Due", count: 1, value: "$750.00" },
            { label: "Received", count: 4, value: "$7,050.00" },
            { label: "Overdue", count: 1, value: "$3,000.00" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg p-2 border border-border/20">
              <div className="text-[7px] text-muted-foreground">{stat.count} Invoice(s) {stat.label}</div>
              <div className="text-[11px] font-bold text-foreground">{stat.value}</div>
            </div>
          ))}
        </div>
      )}


      {/* Table */}
      <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden">
        {activeSubTab === "invoices" ? (
          <>
            {/* Invoice Header */}
            <div className="grid grid-cols-[1fr_80px_100px_80px_70px_60px] gap-2 px-3 py-2 border-b border-border/20 text-[7px] text-muted-foreground font-medium">
              <span>Invoice Name</span>
              <span>Invoice #</span>
              <span>Customer</span>
              <span>Issue Date</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {/* Invoice Rows */}
            <div className="divide-y divide-border/10">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="grid grid-cols-[1fr_80px_100px_80px_70px_60px] gap-2 px-3 py-1.5 items-center hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[8px] font-medium text-foreground">{invoice.name}</span>
                  </div>
                  <span className="text-[7px] text-muted-foreground">{invoice.id}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[5px] text-primary font-medium">
                      {invoice.initials}
                    </div>
                    <span className="text-[7px] text-foreground truncate">{invoice.customer}</span>
                  </div>
                  <span className="text-[7px] text-muted-foreground">{invoice.date}</span>
                  <span className="text-[8px] font-medium text-foreground">{invoice.amount}</span>
                  <span className={`text-[6px] px-1.5 py-0.5 rounded font-medium ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Documents Header */}
            <div className="grid grid-cols-[1fr_90px_100px_80px_70px] gap-2 px-3 py-2 border-b border-border/20 text-[7px] text-muted-foreground font-medium">
              <span>Title</span>
              <span>Status</span>
              <span>Customer</span>
              <span>Date Modified</span>
              <span>Value</span>
            </div>
            {/* Document Rows */}
            <div className="divide-y divide-border/10">
              {documents.map((doc) => (
                <div key={doc.id} className="grid grid-cols-[1fr_90px_100px_80px_70px] gap-2 px-3 py-1.5 items-center hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[8px] font-medium text-foreground">{doc.title}</span>
                  </div>
                  <span className={`text-[6px] px-1.5 py-0.5 rounded font-medium w-fit ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[5px] text-primary font-medium">
                      {doc.initials}
                    </div>
                    <span className="text-[7px] text-foreground truncate">{doc.customer}</span>
                  </div>
                  <span className="text-[7px] text-muted-foreground">{doc.date}</span>
                  <span className="text-[8px] font-medium text-emerald-400">{doc.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* Marketing Content */
const MarketingContent = () => {
  const [activeMarketingTab, setActiveMarketingTab] = useState<"social" | "email" | "sms">("social");

  const marketingTabs = [
    { id: "social" as const, label: "Social Planner", icon: BookImage },
    { id: "email" as const, label: "Email", icon: Mail },
    { id: "sms" as const, label: "SMS", icon: MessageSquare },
  ];

  return (
    <div className="h-full flex flex-col gap-2">
      {/* Top Level Marketing Tabs */}
      <div className="flex items-center gap-2 border-b border-border/20 pb-2">
        {marketingTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveMarketingTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[8px] font-medium transition-colors ${
              activeMarketingTab === tab.id
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Social Planner Content */}
      {activeMarketingTab === "social" && (
        <SocialPlannerContent />
      )}

      {/* Email Content */}
      {activeMarketingTab === "email" && (
        <div className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-semibold text-foreground">Email Campaigns</h3>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[8px] text-muted-foreground">
                <Settings className="w-2.5 h-2.5" />
                Templates
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
                <Plus className="w-2.5 h-2.5" />
                New Campaign
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Total Sent", value: "12,847", change: "+8.2%" },
              { label: "Open Rate", value: "42.3%", change: "+2.1%" },
              { label: "Click Rate", value: "18.7%", change: "+1.5%" },
              { label: "Unsubscribes", value: "0.3%", change: "-0.1%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2">
                <div className="text-[7px] text-muted-foreground">{stat.label}</div>
                <div className="text-[11px] font-semibold text-foreground mt-0.5">{stat.value}</div>
                <div className={`text-[6px] ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Campaigns Table */}
          <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
            <div className="grid grid-cols-[1fr_80px_60px_60px_50px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
              <span>Campaign Name</span>
              <span>Status</span>
              <span>Sent</span>
              <span>Opens</span>
              <span>Clicks</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { name: "Q1 Newsletter - Market Update", status: "Sent", sent: "2,450", opens: "1,127", clicks: "412", date: "Jan 15" },
                { name: "New Year Portfolio Review Invite", status: "Sent", sent: "1,890", opens: "823", clicks: "298", date: "Jan 2" },
                { name: "February Wealth Insights", status: "Scheduled", sent: "-", opens: "-", clicks: "-", date: "Feb 5" },
                { name: "Tax Planning Reminder 2025", status: "Draft", sent: "-", opens: "-", clicks: "-", date: "-" },
                { name: "Client Appreciation Event", status: "Sent", sent: "3,200", opens: "1,456", clicks: "567", date: "Dec 18" },
              ].map((campaign, idx) => (
                <div key={idx} className="grid grid-cols-[1fr_80px_60px_60px_50px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
                  <div>
                    <div className="text-[8px] font-medium text-foreground truncate">{campaign.name}</div>
                    <div className="text-[6px] text-muted-foreground">{campaign.date}</div>
                  </div>
                  <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                    campaign.status === "Sent" ? "bg-emerald-500/20 text-emerald-400" :
                    campaign.status === "Scheduled" ? "bg-primary/20 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>{campaign.status}</span>
                  <span className="text-[7px] text-muted-foreground">{campaign.sent}</span>
                  <span className="text-[7px] text-muted-foreground">{campaign.opens}</span>
                  <span className="text-[7px] text-muted-foreground">{campaign.clicks}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SMS Content */}
      {activeMarketingTab === "sms" && (
        <div className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-semibold text-foreground">SMS Campaigns</h3>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[8px] text-muted-foreground">
                <Settings className="w-2.5 h-2.5" />
                Templates
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
                <Plus className="w-2.5 h-2.5" />
                New SMS
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Messages Sent", value: "4,892", change: "+12.4%" },
              { label: "Delivery Rate", value: "98.7%", change: "+0.2%" },
              { label: "Response Rate", value: "24.5%", change: "+3.8%" },
              { label: "Opt-outs", value: "0.1%", change: "-0.05%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2">
                <div className="text-[7px] text-muted-foreground">{stat.label}</div>
                <div className="text-[11px] font-semibold text-foreground mt-0.5">{stat.value}</div>
                <div className={`text-[6px] ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>{stat.change}</div>
              </div>
            ))}
          </div>

          {/* SMS Table */}
          <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
            <div className="grid grid-cols-[1fr_70px_60px_60px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
              <span>Message Preview</span>
              <span>Status</span>
              <span>Sent</span>
              <span>Responses</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { message: "Hi {name}, your quarterly review is scheduled for tomorrow at {time}. Reply Y to confirm.", status: "Sent", sent: "847", responses: "312", date: "Jan 28" },
                { message: "Reminder: Tax documents due Feb 15. Need an extension? Reply HELP for assistance.", status: "Sent", sent: "1,230", responses: "89", date: "Jan 25" },
                { message: "Happy Birthday {name}! 🎂 We're grateful to have you as a client. Enjoy your special day!", status: "Scheduled", sent: "-", responses: "-", date: "Feb 3" },
                { message: "Market Alert: New investment opportunities available. Call us to discuss your portfolio.", status: "Draft", sent: "-", responses: "-", date: "-" },
                { message: "Thank you for meeting today! Your updated plan is attached to your email. Questions? Reply here.", status: "Sent", sent: "156", responses: "43", date: "Jan 20" },
              ].map((sms, idx) => (
                <div key={idx} className="grid grid-cols-[1fr_70px_60px_60px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
                  <div>
                    <div className="text-[7px] text-foreground line-clamp-2">{sms.message}</div>
                    <div className="text-[6px] text-muted-foreground mt-0.5">{sms.date}</div>
                  </div>
                  <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                    sms.status === "Sent" ? "bg-emerald-500/20 text-emerald-400" :
                    sms.status === "Scheduled" ? "bg-primary/20 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>{sms.status}</span>
                  <span className="text-[7px] text-muted-foreground">{sms.sent}</span>
                  <span className="text-[7px] text-muted-foreground">{sms.responses}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* Social Planner Content */
const SocialPlannerContent = () => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-semibold text-foreground">Social Planner</h3>
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded-md border border-border/30 hover:bg-muted/30 transition-colors">
            <Settings className="w-3 h-3 text-muted-foreground" />
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[8px] text-muted-foreground">
            <Plus className="w-2.5 h-2.5" />
            Socials
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-2.5 h-2.5" />
            New Post
          </button>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* LinkedIn Dropdown */}
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors">
            <div className="w-4 h-4 rounded-sm bg-[#0077B5] flex items-center justify-center">
              <Linkedin className="w-2.5 h-2.5 text-white" />
            </div>
            <ChevronDown className="w-2.5 h-2.5 text-muted-foreground" />
          </button>
          {/* Date Range */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 text-[7px] text-muted-foreground">
            <span>2025-09-01</span>
            <span>→</span>
            <span>2026-03-01</span>
            <Calendar className="w-2.5 h-2.5 ml-1" />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[7px] text-muted-foreground">
            <Filter className="w-2.5 h-2.5" />
            Filters
          </button>
          <button className="p-1.5 rounded-md border border-border/30 hover:bg-muted/30 transition-colors">
            <LayoutGrid className="w-3 h-3 text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded-md border border-border/30 hover:bg-muted/30 transition-colors">
            <Calendar className="w-3 h-3 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Actions Row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[7px] text-muted-foreground">
            Actions
            <ChevronDown className="w-2.5 h-2.5" />
          </button>
          <div className="flex items-center gap-1 text-[7px] text-muted-foreground">
            <span>Filter Views:</span>
            <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors font-medium text-foreground">
              All
              <ChevronDown className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 text-[7px] text-muted-foreground">
          <Search className="w-2.5 h-2.5" />
          <span>Search by caption (min 3 chars)</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-[20px_1fr_60px_60px_50px_60px_40px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded border border-border/50" />
          </div>
          <span>Caption</span>
          <span>Media</span>
          <span>Status</span>
          <span>Type</span>
          <span>Date</span>
          <span>Social</span>
        </div>
        
        {/* Posts */}
        <div className="divide-y divide-border/10">
          {[
            { id: 1, caption: "🚀 Excited to share our Q4 results! Record growth...", media: "Image", status: "Published", type: "Post", date: "Jan 28", hasImage: true },
            { id: 2, caption: "Looking for talented engineers to join our team...", media: "None", status: "Scheduled", type: "Post", date: "Feb 3", hasImage: false },
            { id: 3, caption: "Great insights from today's fintech conference...", media: "Image", status: "Published", type: "Post", date: "Jan 25", hasImage: true },
            { id: 4, caption: "New blog post: 5 Tips for Financial Planning in 2026", media: "Link", status: "Draft", type: "Article", date: "Feb 5", hasImage: false },
          ].map((post) => (
            <div key={post.id} className="grid grid-cols-[20px_1fr_60px_60px_50px_60px_40px] gap-2 px-3 py-2 items-center hover:bg-muted/20 transition-colors">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded border border-border/50" />
              </div>
              <span className="text-[7px] text-foreground truncate">{post.caption}</span>
              <span className="text-[7px] text-muted-foreground">{post.media}</span>
              <span className={`text-[6px] px-1.5 py-0.5 rounded font-medium w-fit ${
                post.status === "Published" ? "bg-emerald-500/20 text-emerald-400" :
                post.status === "Scheduled" ? "bg-primary/20 text-primary" :
                "bg-muted/30 text-muted-foreground"
              }`}>
                {post.status}
              </span>
              <span className="text-[7px] text-muted-foreground">{post.type}</span>
              <span className="text-[7px] text-muted-foreground">{post.date}</span>
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-[#0077B5] flex items-center justify-center">
                  <Linkedin className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Automations Content */
const AutomationsContent = () => {
  const workflows = [
    { id: 1, name: "New Lead Welcome Sequence", status: "Active", triggers: "Form Submission", actions: 4, lastRun: "2 hours ago", runs: 847 },
    { id: 2, name: "Appointment Reminder (24h)", status: "Active", triggers: "Calendar Event", actions: 2, lastRun: "35 min ago", runs: 2341 },
    { id: 3, name: "Post-Meeting Follow-up", status: "Active", triggers: "Meeting Completed", actions: 3, lastRun: "Yesterday", runs: 156 },
    { id: 4, name: "Birthday Greeting", status: "Active", triggers: "Contact Birthday", actions: 2, lastRun: "Jan 28", runs: 89 },
    { id: 5, name: "Quarterly Review Reminder", status: "Paused", triggers: "Date Trigger", actions: 5, lastRun: "Dec 15", runs: 234 },
    { id: 6, name: "Referral Request Campaign", status: "Draft", triggers: "Manual", actions: 3, lastRun: "-", runs: 0 },
  ];

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-semibold text-foreground">Workflows</h3>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[8px] text-muted-foreground">
            <Filter className="w-2.5 h-2.5" />
            Filter
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-2.5 h-2.5" />
            New Workflow
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active Workflows", value: "6", icon: PlayCircle },
          { label: "Total Runs", value: "3,667", icon: GitBranch },
          { label: "Success Rate", value: "99.2%", icon: Check },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
              <stat.icon className="w-3 h-3 text-primary" />
            </div>
            <div>
              <div className="text-[7px] text-muted-foreground">{stat.label}</div>
              <div className="text-[11px] font-semibold text-foreground">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflows Table */}
      <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
        <div className="grid grid-cols-[1fr_70px_90px_50px_70px_50px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
          <span>Workflow Name</span>
          <span>Status</span>
          <span>Trigger</span>
          <span>Actions</span>
          <span>Last Run</span>
          <span>Total Runs</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="grid grid-cols-[1fr_70px_90px_50px_70px_50px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                  <GitBranch className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-[8px] font-medium text-foreground truncate">{workflow.name}</span>
              </div>
              <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                workflow.status === "Active" ? "bg-emerald-500/20 text-emerald-400" :
                workflow.status === "Paused" ? "bg-amber-500/20 text-amber-400" :
                "bg-muted text-muted-foreground"
              }`}>{workflow.status}</span>
              <span className="text-[7px] text-muted-foreground truncate">{workflow.triggers}</span>
              <span className="text-[7px] text-muted-foreground text-center">{workflow.actions}</span>
              <span className="text-[7px] text-muted-foreground">{workflow.lastRun}</span>
              <span className="text-[7px] text-muted-foreground text-center">{workflow.runs.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Sites Content */
const SitesContent = () => {
  const [activeSubTab, setActiveSubTab] = useState<"pages" | "forms">("pages");

  const landingPages = [
    { id: 1, name: "Retirement Planning Guide", status: "Published", views: 1247, conversions: 89, convRate: "7.1%", lastUpdated: "2 days ago" },
    { id: 2, name: "Free Consultation Booking", status: "Published", views: 892, conversions: 67, convRate: "7.5%", lastUpdated: "5 days ago" },
    { id: 3, name: "Wealth Assessment Quiz", status: "Published", views: 634, conversions: 52, convRate: "8.2%", lastUpdated: "1 week ago" },
    { id: 4, name: "Tax Planning Webinar", status: "Draft", views: 0, conversions: 0, convRate: "—", lastUpdated: "3 days ago" },
  ];

  const forms = [
    { id: 1, name: "Contact Request Form", status: "Active", submissions: 234, fields: 5, lastSubmission: "1 hour ago" },
    { id: 2, name: "Financial Goals Survey", status: "Active", submissions: 156, fields: 8, lastSubmission: "3 hours ago" },
    { id: 3, name: "Newsletter Signup", status: "Active", submissions: 512, fields: 3, lastSubmission: "30 min ago" },
    { id: 4, name: "Appointment Request", status: "Active", submissions: 89, fields: 6, lastSubmission: "2 hours ago" },
    { id: 5, name: "Referral Submission", status: "Inactive", submissions: 45, fields: 4, lastSubmission: "2 weeks ago" },
  ];

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Header with Sub-navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-[11px] font-semibold text-foreground">Sites</h3>
          <div className="flex items-center gap-1 bg-muted/30 rounded-md p-0.5">
            <button
              onClick={() => setActiveSubTab("pages")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[8px] font-medium transition-colors ${
                activeSubTab === "pages" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe className="w-2.5 h-2.5" />
              Landing Pages
            </button>
            <button
              onClick={() => setActiveSubTab("forms")}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[8px] font-medium transition-colors ${
                activeSubTab === "forms" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="w-2.5 h-2.5" />
              Forms
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-2.5 h-2.5" />
          {activeSubTab === "pages" ? "New Page" : "New Form"}
        </button>
      </div>

      {activeSubTab === "pages" && (
        <>
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Total Pages", value: "4", icon: Globe },
              { label: "Total Views", value: "2,773", icon: Eye },
              { label: "Conversions", value: "208", icon: Target },
              { label: "Avg. Conv. Rate", value: "7.5%", icon: TrendingUp },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <div className="text-[7px] text-muted-foreground">{stat.label}</div>
                  <div className="text-[11px] font-semibold text-foreground">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Landing Pages Table */}
          <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
            <div className="grid grid-cols-[1fr_70px_60px_70px_55px_70px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
              <span>Page Name</span>
              <span>Status</span>
              <span>Views</span>
              <span>Conversions</span>
              <span>Conv. Rate</span>
              <span>Last Updated</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {landingPages.map((page) => (
                <div key={page.id} className="grid grid-cols-[1fr_70px_60px_70px_55px_70px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                      <FileText className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-[8px] font-medium text-foreground truncate">{page.name}</span>
                  </div>
                  <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                    page.status === "Published" ? "bg-emerald-500/20 text-emerald-400" : "bg-muted text-muted-foreground"
                  }`}>{page.status}</span>
                  <span className="text-[7px] text-muted-foreground">{page.views.toLocaleString()}</span>
                  <span className="text-[7px] text-muted-foreground">{page.conversions}</span>
                  <span className={`text-[7px] ${page.convRate !== "—" ? "text-emerald-400" : "text-muted-foreground"}`}>{page.convRate}</span>
                  <span className="text-[7px] text-muted-foreground">{page.lastUpdated}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeSubTab === "forms" && (
        <>
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Active Forms", value: "4", icon: FileText },
              { label: "Total Submissions", value: "1,036", icon: Send },
              { label: "This Month", value: "187", icon: TrendingUp },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <div className="text-[7px] text-muted-foreground">{stat.label}</div>
                  <div className="text-[11px] font-semibold text-foreground">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Forms Table */}
          <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
            <div className="grid grid-cols-[1fr_60px_80px_50px_80px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
              <span>Form Name</span>
              <span>Status</span>
              <span>Submissions</span>
              <span>Fields</span>
              <span>Last Submission</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {forms.map((form) => (
                <div key={form.id} className="grid grid-cols-[1fr_60px_80px_50px_80px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                      <FileText className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-[8px] font-medium text-foreground truncate">{form.name}</span>
                  </div>
                  <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                    form.status === "Active" ? "bg-emerald-500/20 text-emerald-400" : "bg-muted text-muted-foreground"
                  }`}>{form.status}</span>
                  <span className="text-[7px] text-muted-foreground">{form.submissions.toLocaleString()}</span>
                  <span className="text-[7px] text-muted-foreground text-center">{form.fields}</span>
                  <span className="text-[7px] text-muted-foreground">{form.lastSubmission}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* Reporting Content */
const ReportingContent = () => {
  const reports = [
    { id: 1, name: "Revenue Summary", description: "Monthly revenue breakdown by source", type: "Financial", lastRun: "Today, 9:00 AM", schedule: "Daily" },
    { id: 2, name: "Pipeline Performance", description: "Conversion rates across pipeline stages", type: "Sales", lastRun: "Today, 8:00 AM", schedule: "Daily" },
    { id: 3, name: "Lead Source Analysis", description: "Attribution and ROI by lead source", type: "Marketing", lastRun: "Yesterday", schedule: "Weekly" },
    { id: 4, name: "Client Retention Report", description: "Churn analysis and retention metrics", type: "Client", lastRun: "Jan 28", schedule: "Monthly" },
    { id: 5, name: "Campaign Performance", description: "Email and SMS campaign analytics", type: "Marketing", lastRun: "Jan 27", schedule: "Weekly" },
    { id: 6, name: "Activity Summary", description: "Team productivity and task completion", type: "Operations", lastRun: "Today, 7:00 AM", schedule: "Daily" },
  ];

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-semibold text-foreground">Reports</h3>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/30 hover:bg-muted/30 transition-colors text-[8px] text-muted-foreground">
            <Filter className="w-2.5 h-2.5" />
            Filter
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-[8px] font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-2.5 h-2.5" />
            New Report
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Reports", value: "6", icon: FileText },
          { label: "Scheduled", value: "5", icon: Clock },
          { label: "Run Today", value: "3", icon: PlayCircle },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 p-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
              <stat.icon className="w-3 h-3 text-primary" />
            </div>
            <div>
              <div className="text-[7px] text-muted-foreground">{stat.label}</div>
              <div className="text-[11px] font-semibold text-foreground">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Reports Table */}
      <div className="flex-1 bg-[hsl(0_0%_9%)] rounded-lg border border-border/20 overflow-hidden flex flex-col">
        <div className="grid grid-cols-[1fr_70px_65px_80px_55px] gap-2 px-3 py-2 bg-[hsl(0_0%_8%)] border-b border-border/20 text-[7px] font-medium text-muted-foreground">
          <span>Report Name</span>
          <span>Type</span>
          <span>Schedule</span>
          <span>Last Run</span>
          <span>Actions</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {reports.map((report) => (
            <div key={report.id} className="grid grid-cols-[1fr_70px_65px_80px_55px] gap-2 px-3 py-2 border-b border-border/10 hover:bg-muted/20 transition-colors items-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-2.5 h-2.5 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-[8px] font-medium text-foreground block truncate">{report.name}</span>
                  <span className="text-[6px] text-muted-foreground truncate block">{report.description}</span>
                </div>
              </div>
              <span className={`text-[7px] font-medium px-1.5 py-0.5 rounded-full w-fit ${
                report.type === "Financial" ? "bg-emerald-500/20 text-emerald-400" :
                report.type === "Sales" ? "bg-primary/20 text-primary" :
                report.type === "Marketing" ? "bg-purple-500/20 text-purple-400" :
                report.type === "Client" ? "bg-amber-500/20 text-amber-400" :
                "bg-muted text-muted-foreground"
              }`}>{report.type}</span>
              <span className="text-[7px] text-muted-foreground">{report.schedule}</span>
              <span className="text-[7px] text-muted-foreground">{report.lastRun}</span>
              <div className="flex items-center gap-1">
                <button className="w-5 h-5 rounded bg-muted/30 flex items-center justify-center hover:bg-muted/50 transition-colors">
                  <PlayCircle className="w-2.5 h-2.5 text-muted-foreground" />
                </button>
                <button className="w-5 h-5 rounded bg-muted/30 flex items-center justify-center hover:bg-muted/50 transition-colors">
                  <Download className="w-2.5 h-2.5 text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Placeholder Content */
const PlaceholderContent = ({ title }: { title: string }) => (
  <div className="h-full flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-3">
        <LayoutGrid className="w-6 h-6 text-muted-foreground" />
      </div>
      <div className="text-[11px] font-medium text-foreground">{title}</div>
      <div className="text-[9px] text-muted-foreground mt-1">Click to explore this section</div>
    </div>
  </div>
);

export default HeroDashboard;
