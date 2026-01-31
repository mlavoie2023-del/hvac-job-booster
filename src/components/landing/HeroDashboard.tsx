import { useEffect, useState, useRef } from "react";
import { 
  Users, Calendar, DollarSign, TrendingUp, Mail, MessageSquare, 
  Bell, Search, ChevronRight, LayoutDashboard, Filter, Zap, 
  Megaphone, BarChart3, FileText, Smartphone, Settings, Plus,
  Clock, CheckCircle2, ArrowUpRight
} from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const HeroDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationStep, setAnimationStep] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Contacts" },
    { icon: Filter, label: "Pipelines" },
    { icon: Calendar, label: "Calendar" },
    { icon: Zap, label: "Automation" },
    { icon: Megaphone, label: "Marketing" },
    { icon: BarChart3, label: "Analytics" },
    { icon: FileText, label: "Documents" },
    { icon: Smartphone, label: "Mobile" },
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
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(0_0%_12%)] border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-[hsl(0_0%_8%)] rounded-md text-[10px] text-muted-foreground flex items-center gap-2">
              <span className="text-green-400">🔒</span>
              app.lavoiesystems.com/dashboard
            </div>
          </div>
        </div>

        <div className="flex min-h-[380px]">
          {/* Sidebar */}
          <div className="w-16 bg-[hsl(0_0%_6%)] border-r border-border/30 flex flex-col items-center py-3 gap-1">
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center mb-3 overflow-hidden">
              <img src={lavoieLogo} alt="Logo" className="w-7 h-7 object-contain" />
            </div>
            
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 group ${
                  item.active 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
              </div>
            ))}
            
            <div className="flex-1" />
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer">
              <Settings className="w-4 h-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Top Bar */}
            <div className="h-12 px-4 flex items-center justify-between border-b border-border/30 bg-[hsl(0_0%_7%)]">
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold text-foreground">Dashboard</h2>
                <span className="text-[10px] text-muted-foreground">Good morning, Matt</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-muted/30 rounded-md">
                  <Search className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Search...</span>
                </div>
                <div className="relative">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <div className={`absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full transition-all duration-300 ${
                    animationStep === 0 ? "scale-125" : "scale-100"
                  }`} />
                </div>
                <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-[10px] font-medium text-primary">
                  ML
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-hidden">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`bg-[hsl(0_0%_9%)] rounded-lg p-3 border border-border/20 transition-all duration-500 ${
                      animationStep === idx ? "border-primary/40 shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]" : ""
                    }`}
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
                                className={`bg-[hsl(0_0%_12%)] rounded-md p-2 border border-border/30 transition-all duration-500 ${
                                  animationStep === 5 + stageIdx 
                                    ? "border-primary/50 translate-x-0.5" 
                                    : ""
                                }`}
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
                          {/* Placeholder cards */}
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
                        <div className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${
                          animationStep < 3 ? "animate-pulse" : ""
                        }`} />
                        <span className="text-[7px] text-emerald-400">Live</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {recentActivity.map((activity, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            animationStep === idx ? "bg-primary/5 -mx-1.5 px-1.5 py-0.5 rounded" : ""
                          }`}
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
                          <div className={`w-3 h-3 rounded border flex items-center justify-center ${
                            idx === 0 && animationStep === 4
                              ? "border-primary bg-primary/20"
                              : "border-border/50"
                          }`}>
                            {idx === 0 && animationStep === 4 && (
                              <CheckCircle2 className="w-2 h-2 text-primary" />
                            )}
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

export default HeroDashboard;
