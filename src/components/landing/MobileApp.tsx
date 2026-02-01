import { useState, useEffect } from "react";
import { Bell, MessageSquare, Users, Smartphone, Mail, ChevronRight } from "lucide-react";

// Phone Frame Component
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-[220px] sm:w-[260px]">
    {/* Phone outer frame */}
    <div className="relative rounded-[2.5rem] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-2 shadow-2xl">
      {/* Side buttons */}
      <div className="absolute -left-0.5 top-24 h-8 w-1 rounded-l bg-slate-600" />
      <div className="absolute -left-0.5 top-36 h-12 w-1 rounded-l bg-slate-600" />
      <div className="absolute -right-0.5 top-28 h-10 w-1 rounded-r bg-slate-600" />
      
      {/* Phone inner frame */}
      <div className="relative rounded-[2rem] bg-black p-1">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900" style={{ aspectRatio: '9/19' }}>
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
          
          {/* Screen content */}
          <div className="relative h-full pt-10 pb-4">
            {children}
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
    
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20 rounded-[3rem] blur-2xl -z-10" />
  </div>
);

// Push Notifications Animation
const NotificationsScreen = () => {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleNotifications([0]), 500),
      setTimeout(() => setVisibleNotifications([0, 1]), 1500),
      setTimeout(() => setVisibleNotifications([0, 1, 2]), 2500),
    ];
    
    const resetTimer = setTimeout(() => {
      setVisibleNotifications([]);
      // Restart animation
      setTimeout(() => setVisibleNotifications([0]), 500);
    }, 6000);
    
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, [visibleNotifications.length === 0]);

  const notifications = [
    { icon: Users, title: "New Lead", message: "Sarah Mitchell submitted a form", time: "Just now", color: "bg-emerald-500" },
    { icon: MessageSquare, title: "New Message", message: "James Chen: Can we reschedule?", time: "2m ago", color: "bg-primary" },
    { icon: Bell, title: "Reminder", message: "Call with David K. in 15 minutes", time: "5m ago", color: "bg-amber-500" },
  ];

  return (
    <div className="h-full px-3 pt-2">
      <div className="text-[8px] text-slate-400 uppercase tracking-wide mb-2 px-1">Notifications</div>
      <div className="space-y-2">
        {notifications.map((notif, idx) => (
          <div
            key={idx}
            className={`transform transition-all duration-500 ${
              visibleNotifications.includes(idx)
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="bg-slate-800/80 backdrop-blur rounded-xl p-2.5 border border-slate-700/50">
              <div className="flex items-start gap-2">
                <div className={`w-6 h-6 rounded-full ${notif.color} flex items-center justify-center flex-shrink-0`}>
                  <notif.icon className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-white">{notif.title}</span>
                    <span className="text-[7px] text-slate-500">{notif.time}</span>
                  </div>
                  <p className="text-[8px] text-slate-400 truncate">{notif.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Quick Reply Screen
const QuickReplyScreen = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Thanks Sarah! I'll see you Thursday at 2pm.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Reset after delay
        setTimeout(() => setTypedText(""), 3000);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, [typedText === ""]);

  return (
    <div className="h-full flex flex-col">
      {/* Chat header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/50">
        <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center">
          <span className="text-[8px] font-bold text-primary">SM</span>
        </div>
        <div>
          <div className="text-[9px] font-medium text-white">Sarah Mitchell</div>
          <div className="text-[7px] text-emerald-400">Online</div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 px-3 py-2 space-y-2">
        <div className="flex justify-start">
          <div className="bg-slate-700/50 rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[8px] text-white">Hi! Just confirming our meeting for Thursday?</p>
          </div>
        </div>
        {typedText && (
          <div className="flex justify-end">
            <div className="bg-primary rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%]">
              <p className="text-[8px] text-white">{typedText}<span className="animate-pulse">|</span></p>
            </div>
          </div>
        )}
      </div>
      
      {/* Input */}
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 bg-slate-800 rounded-full px-3 py-1.5">
          <span className="text-[8px] text-slate-500 flex-1">Type a message...</span>
          <Mail className="w-3.5 h-3.5 text-primary" />
        </div>
      </div>
    </div>
  );
};

// Pipeline at a Glance Screen
const PipelineScreen = () => {
  const [activeStage, setActiveStage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { name: "Discovery", count: 4, color: "bg-blue-500", deals: [
      { name: "Mike Chen", value: "$850K" },
      { name: "Lisa Park", value: "$620K" },
    ]},
    { name: "Meeting", count: 3, color: "bg-cyan-500", deals: [
      { name: "Sarah Davis", value: "$1.2M" },
      { name: "Tom Wilson", value: "$480K" },
    ]},
    { name: "Won", count: 2, color: "bg-emerald-500", deals: [
      { name: "John Davidson", value: "$2.1M" },
      { name: "Amy Lee", value: "$920K" },
    ]},
  ];

  return (
    <div className="h-full px-3 pt-2">
      {/* Stage tabs */}
      <div className="flex gap-1 mb-3">
        {stages.map((stage, idx) => (
          <button
            key={idx}
            className={`flex-1 py-1.5 rounded-lg text-[7px] font-medium transition-all ${
              activeStage === idx
                ? "bg-primary/30 text-white"
                : "bg-slate-800/50 text-slate-400"
            }`}
          >
            {stage.name} ({stage.count})
          </button>
        ))}
      </div>
      
      {/* Deals */}
      <div className="space-y-2 relative overflow-hidden">
        {stages[activeStage].deals.map((deal, idx) => (
          <div
            key={`${activeStage}-${idx}`}
            className="bg-slate-800/50 rounded-xl p-2.5 border border-slate-700/30 animate-in slide-in-from-right duration-300"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full ${stages[activeStage].color} flex items-center justify-center`}>
                <span className="text-[7px] font-bold text-white">
                  {deal.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-medium text-white">{deal.name}</div>
                <div className="text-[8px] text-emerald-400">{deal.value}</div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileApp = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Push Notifications",
      description: "Never miss a lead or message with instant mobile alerts",
      icon: Bell,
      screen: <NotificationsScreen />,
    },
    {
      title: "Quick Reply",
      description: "Respond to clients on-the-go via SMS or email",
      icon: MessageSquare,
      screen: <QuickReplyScreen />,
    },
    {
      title: "Pipeline at a Glance",
      description: "Check your deals and contacts from anywhere",
      icon: Users,
      screen: <PipelineScreen />,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(340_82%_52%/0.06),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-rose-400">Mobile App</span>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
              Your CRM in Your Pocket
            </h2>
            
            <p className="text-lg text-body mb-8 max-w-lg">
              Stay connected to your business from anywhere. Respond to leads, check your pipeline, and never miss an opportunity—all from your phone.
            </p>
            
            {/* Feature list */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeFeature === idx
                      ? "bg-rose-500/10 border-rose-500/30"
                      : "bg-card/50 border-border/50 hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeFeature === idx ? "bg-rose-500/20" : "bg-muted"
                    }`}>
                      <feature.icon className={`w-4 h-4 ${
                        activeFeature === idx ? "text-rose-400" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        activeFeature === idx ? "text-foreground" : "text-foreground/80"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Phone mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneFrame>
              {features[activeFeature].screen}
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
