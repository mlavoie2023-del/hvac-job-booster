import { useState, useEffect } from "react";
import { Bell, MessageSquare, Users, Smartphone, Calendar, Inbox, Send } from "lucide-react";

// Shared phone frame component - scaled up version from features
const PhoneFrame = ({ children, activeTab = 'inbox' }: { children: React.ReactNode; activeTab?: 'inbox' | 'contacts' | 'calendar' | 'notifications' }) => (
  <div className="relative w-[180px] sm:w-[220px] h-[370px] sm:h-[450px] bg-[#1a1a1a] rounded-[32px] sm:rounded-[40px] border-[3px] border-[#2a2a2a] shadow-2xl overflow-hidden">
    {/* Dynamic Island */}
    <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full z-20" />
    
    {/* Status bar */}
    <div className="h-10 sm:h-12 bg-[#0a0a0a] flex items-end justify-between px-4 sm:px-5 pb-1">
      <span className="text-[9px] sm:text-[10px] text-white/60 font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 sm:w-5 h-2 sm:h-2.5 border border-white/60 rounded-[2px]">
          <div className="w-2 sm:w-2.5 h-full bg-emerald-400 rounded-[1px]" />
        </div>
      </div>
    </div>
    
    {/* App content */}
    <div className="h-[calc(100%-40px)] sm:h-[calc(100%-48px)] bg-[#0f0f0f] overflow-hidden relative">
      {children}
      
      {/* Bottom nav bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 bg-[#1a1a1a] border-t border-white/10 flex items-center justify-around px-4">
        <Inbox className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === 'inbox' ? 'text-primary' : 'text-white/40'}`} />
        <Users className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === 'contacts' ? 'text-primary' : 'text-white/40'}`} />
        <Calendar className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === 'calendar' ? 'text-primary' : 'text-white/40'}`} />
        <Bell className={`w-5 h-5 sm:w-6 sm:h-6 ${activeTab === 'notifications' ? 'text-primary' : 'text-white/40'}`} />
      </div>
    </div>
    
    {/* Home indicator */}
    <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-white/30 rounded-full" />
    
    {/* Glow effect */}
    <div className="absolute -inset-6 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20 rounded-[60px] blur-2xl -z-10" />
  </div>
);

// Screen 1: Push Notifications
const NotificationsScreen = () => (
  <div className="px-3 sm:px-4 py-3 sm:py-4 pb-16 sm:pb-20 h-full">
    <div className="text-xs sm:text-sm font-bold text-white mb-3 sm:mb-4">Notifications</div>
    
    {/* Notification stack */}
    <div className="space-y-2 sm:space-y-3">
      <div 
        className="bg-primary/20 rounded-xl p-2.5 sm:p-3 border border-primary/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite' }}
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] sm:text-xs font-medium text-white truncate">New SMS</div>
            <div className="text-[9px] sm:text-[10px] text-primary truncate">Thanks for the quick reply!</div>
          </div>
        </div>
      </div>
      
      <div 
        className="bg-emerald-500/20 rounded-xl p-2.5 sm:p-3 border border-emerald-500/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '0.5s' }}
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] sm:text-xs font-medium text-white truncate">Upcoming Meeting</div>
            <div className="text-[9px] sm:text-[10px] text-emerald-400 truncate">Tomorrow at 2pm</div>
          </div>
        </div>
      </div>
      
      <div 
        className="bg-amber-500/20 rounded-xl p-2.5 sm:p-3 border border-amber-500/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '1s' }}
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] sm:text-xs font-medium text-white truncate">New Lead</div>
            <div className="text-[9px] sm:text-[10px] text-amber-400 truncate">James K. via website form</div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes notifSlideDown {
        0%, 5% { opacity: 0; transform: translateY(-12px); }
        15%, 70% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(-12px); }
      }
    `}</style>
  </div>
);

// Screen 2: Quick Reply / Conversations
const QuickReplyScreen = () => (
  <div className="px-3 sm:px-4 py-3 sm:py-4 pb-16 sm:pb-20 flex flex-col h-full">
    {/* Chat header */}
    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
        <span className="text-[10px] sm:text-xs font-bold text-white">SK</span>
      </div>
      <div>
        <div className="text-[10px] sm:text-xs font-medium text-white">Sarah Kim</div>
        <div className="text-[8px] sm:text-[10px] text-emerald-400">Online</div>
      </div>
    </div>
    
    {/* Messages */}
    <div className="flex-1 space-y-2 sm:space-y-3 overflow-hidden">
      <div 
        className="bg-muted/30 rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]"
        style={{ animation: 'msgSlide 6s ease-out infinite' }}
      >
        <div className="text-[10px] sm:text-xs text-white/80">When can we meet to discuss the portfolio?</div>
      </div>
      
      <div 
        className="bg-primary/30 rounded-xl rounded-br-sm px-3 py-2 max-w-[85%] ml-auto"
        style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '0.8s' }}
      >
        <div className="text-[10px] sm:text-xs text-white/80">Tomorrow at 2pm works great!</div>
      </div>
      
      <div 
        className="bg-muted/30 rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]"
        style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '1.6s' }}
      >
        <div className="text-[10px] sm:text-xs text-white/80">Perfect! See you then 👍</div>
      </div>
    </div>
    
    {/* Reply input */}
    <div 
      className="mt-2 sm:mt-3 flex items-center gap-2 bg-muted/20 rounded-full px-3 sm:px-4 py-2 sm:py-2.5"
      style={{ animation: 'replyType 6s ease-out infinite', animationDelay: '2.4s' }}
    >
      <div className="flex-1 text-[9px] sm:text-[10px] text-white/40 overflow-hidden truncate">
        Sounds great! Looking forward to it...
      </div>
      <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
    </div>
    
    <style>{`
      @keyframes msgSlide {
        0%, 5% { opacity: 0; transform: translateY(8px); }
        12%, 75% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(8px); }
      }
      @keyframes replyType {
        0%, 35% { opacity: 0; }
        45%, 75% { opacity: 1; }
        85%, 100% { opacity: 0; }
      }
    `}</style>
  </div>
);

// Screen 3: Pipeline View - Swipeable stages
const PipelineScreen = () => (
  <div className="px-3 sm:px-4 py-3 sm:py-4 pb-16 sm:pb-20 h-full overflow-hidden">
    {/* Stage tabs */}
    <div className="flex gap-1 sm:gap-1.5 mb-3 sm:mb-4">
      <div 
        className="flex-1 text-center py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] font-medium"
        style={{ animation: 'stageActive1 6s ease-in-out infinite' }}
      >
        Leads
      </div>
      <div 
        className="flex-1 text-center py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] font-medium"
        style={{ animation: 'stageActive2 6s ease-in-out infinite' }}
      >
        Meeting
      </div>
      <div 
        className="flex-1 text-center py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] font-medium"
        style={{ animation: 'stageActive3 6s ease-in-out infinite' }}
      >
        Won
      </div>
    </div>
    
    {/* Swipeable content area */}
    <div className="relative h-[calc(100%-60px)] overflow-hidden">
      {/* Stage 1: Leads */}
      <div 
        className="absolute inset-0 space-y-2 sm:space-y-3"
        style={{ animation: 'stageSwipe1 6s ease-in-out infinite' }}
      >
        <div className="bg-slate-800/60 rounded-xl p-2.5 sm:p-3 border border-slate-700/50">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-600 flex items-center justify-center">
              <span className="text-[9px] sm:text-[11px] font-bold text-white">JK</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">James Kim</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400">Via website form</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/60 rounded-xl p-2.5 sm:p-3 border border-slate-700/50">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-600 flex items-center justify-center">
              <span className="text-[9px] sm:text-[11px] font-bold text-white">LP</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">Lisa Park</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400">Referral from Mike</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage 2: Meeting */}
      <div 
        className="absolute inset-0 space-y-2 sm:space-y-3"
        style={{ animation: 'stageSwipe2 6s ease-in-out infinite' }}
      >
        <div className="bg-rose-500/20 rounded-xl p-2.5 sm:p-3 border border-rose-500/30">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500 flex items-center justify-center">
              <span className="text-[9px] sm:text-[11px] font-bold text-white">SD</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">Sarah Davis</div>
              <div className="text-[9px] sm:text-[10px] text-rose-400">Today 2pm</div>
            </div>
          </div>
        </div>
        <div className="bg-rose-500/20 rounded-xl p-2.5 sm:p-3 border border-rose-500/30">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500 flex items-center justify-center">
              <span className="text-[9px] sm:text-[11px] font-bold text-white">TW</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">Tom Wilson</div>
              <div className="text-[9px] sm:text-[10px] text-rose-400">Tomorrow 10am</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage 3: Won */}
      <div 
        className="absolute inset-0 space-y-2 sm:space-y-3"
        style={{ animation: 'stageSwipe3 6s ease-in-out infinite' }}
      >
        <div className="bg-emerald-500/20 rounded-xl p-2.5 sm:p-3 border border-emerald-500/30">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-[10px] sm:text-xs text-white">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">Mike Chen</div>
              <div className="text-[9px] sm:text-[10px] text-emerald-400">$850K signed</div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-500/20 rounded-xl p-2.5 sm:p-3 border border-emerald-500/30">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-[10px] sm:text-xs text-white">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs font-medium text-white truncate">Amy Lee</div>
              <div className="text-[9px] sm:text-[10px] text-emerald-400">$1.2M signed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes stageActive1 {
        0%, 30% { background: hsl(217 91% 60% / 0.3); color: white; }
        33.33%, 100% { background: transparent; color: hsl(0 0% 60%); }
      }
      @keyframes stageActive2 {
        0%, 33.32% { background: transparent; color: hsl(0 0% 60%); }
        33.33%, 63.33% { background: hsl(217 91% 60% / 0.3); color: white; }
        66.66%, 100% { background: transparent; color: hsl(0 0% 60%); }
      }
      @keyframes stageActive3 {
        0%, 66.65% { background: transparent; color: hsl(0 0% 60%); }
        66.66%, 96.66% { background: hsl(217 91% 60% / 0.3); color: white; }
        100% { background: transparent; color: hsl(0 0% 60%); }
      }
      @keyframes stageSwipe1 {
        0% { opacity: 1; transform: translateX(0); }
        30% { opacity: 1; transform: translateX(0); }
        33.33% { opacity: 0; transform: translateX(-100%); }
        100% { opacity: 0; transform: translateX(-100%); }
      }
      @keyframes stageSwipe2 {
        0%, 33.32% { opacity: 0; transform: translateX(100%); }
        33.33% { opacity: 0; transform: translateX(100%); }
        36% { opacity: 1; transform: translateX(0); }
        63.33% { opacity: 1; transform: translateX(0); }
        66.66% { opacity: 0; transform: translateX(-100%); }
        100% { opacity: 0; transform: translateX(-100%); }
      }
      @keyframes stageSwipe3 {
        0%, 66.65% { opacity: 0; transform: translateX(100%); }
        66.66% { opacity: 0; transform: translateX(100%); }
        69% { opacity: 1; transform: translateX(0); }
        96.66% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(0); }
      }
    `}</style>
  </div>
);

const MobileApp = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Auto-cycle through features
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
      activeTab: 'notifications' as const,
    },
    {
      title: "Quick Reply",
      description: "Respond to clients on-the-go via SMS or email",
      icon: MessageSquare,
      screen: <QuickReplyScreen />,
      activeTab: 'inbox' as const,
    },
    {
      title: "Pipeline at a Glance",
      description: "Check your deals and contacts from anywhere",
      icon: Users,
      screen: <PipelineScreen />,
      activeTab: 'contacts' as const,
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
            <div className="space-y-3">
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
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeFeature === idx ? "bg-rose-500/20" : "bg-muted"
                    }`}>
                      <feature.icon className={`w-5 h-5 ${
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
            <PhoneFrame activeTab={features[activeFeature].activeTab}>
              {features[activeFeature].screen}
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
