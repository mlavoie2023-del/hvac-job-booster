import { useState, useEffect } from "react";
import { Bell, MessageSquare, Users, Smartphone, Calendar, Inbox, Send } from "lucide-react";

// Realistic iPhone 15 Pro frame
const PhoneFrame = ({ children, activeTab = 'inbox' }: { children: React.ReactNode; activeTab?: 'inbox' | 'contacts' | 'calendar' | 'notifications' }) => (
  <div className="relative">
    {/* Outer glow */}
    <div className="absolute -inset-8 bg-gradient-to-b from-rose-500/30 via-pink-500/20 to-purple-500/30 rounded-[80px] blur-3xl -z-10 opacity-60" />
    
    {/* Phone frame - titanium style */}
    <div 
      className="relative w-[280px] sm:w-[320px] lg:w-[340px]"
      style={{ aspectRatio: '9/19.5' }}
    >
      {/* Titanium outer frame */}
      <div className="absolute inset-0 rounded-[50px] sm:rounded-[55px] bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e] p-[3px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)]">
        {/* Inner black bezel */}
        <div className="w-full h-full rounded-[47px] sm:rounded-[52px] bg-black p-[2px]">
          {/* Screen container */}
          <div className="relative w-full h-full rounded-[45px] sm:rounded-[50px] bg-[#0a0a0a] overflow-hidden">
            
            {/* Dynamic Island */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[90px] sm:w-[100px] h-[28px] sm:h-[32px] bg-black rounded-full z-30 flex items-center justify-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              {/* Camera */}
              <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-[#0c3d6b]" />
              </div>
            </div>
            
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-14 flex items-end justify-between px-7 sm:px-8 pb-0 z-20">
              <span className="text-[11px] sm:text-xs text-white font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                {/* Signal */}
                <div className="flex items-end gap-[2px]">
                  <div className="w-[3px] h-[5px] rounded-[1px] bg-white" />
                  <div className="w-[3px] h-[7px] rounded-[1px] bg-white" />
                  <div className="w-[3px] h-[9px] rounded-[1px] bg-white" />
                  <div className="w-[3px] h-[11px] rounded-[1px] bg-white/40" />
                </div>
                {/* WiFi */}
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4.9-2.5c2.7-2.7 7.1-2.7 9.8 0l1.4-1.4c-3.5-3.5-9.1-3.5-12.6 0l1.4 1.4zm-2.8-2.8c4.3-4.3 11.3-4.3 15.6 0l1.4-1.4c-5.1-5.1-13.3-5.1-18.4 0l1.4 1.4z"/>
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-0.5">
                  <div className="w-6 sm:w-7 h-3 sm:h-3.5 border border-white/50 rounded-[3px] p-[1.5px]">
                    <div className="w-3/4 h-full bg-white rounded-[1.5px]" />
                  </div>
                  <div className="w-[2px] h-1.5 bg-white/50 rounded-r-full" />
                </div>
              </div>
            </div>
            
            {/* App content area */}
            <div className="absolute inset-0 top-12 sm:top-14 bottom-0 bg-[#0f0f0f] overflow-hidden">
              {children}
              
              {/* Bottom nav bar */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-[#1c1c1e]/95 backdrop-blur-xl border-t border-white/10 flex items-start pt-2 sm:pt-3 justify-around px-6">
                <div className="flex flex-col items-center gap-0.5">
                  <Inbox className={`w-6 h-6 sm:w-7 sm:h-7 ${activeTab === 'inbox' ? 'text-primary' : 'text-white/40'}`} />
                  <span className={`text-[9px] sm:text-[10px] ${activeTab === 'inbox' ? 'text-primary' : 'text-white/40'}`}>Inbox</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Users className={`w-6 h-6 sm:w-7 sm:h-7 ${activeTab === 'contacts' ? 'text-primary' : 'text-white/40'}`} />
                  <span className={`text-[9px] sm:text-[10px] ${activeTab === 'contacts' ? 'text-primary' : 'text-white/40'}`}>Contacts</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Calendar className={`w-6 h-6 sm:w-7 sm:h-7 ${activeTab === 'calendar' ? 'text-primary' : 'text-white/40'}`} />
                  <span className={`text-[9px] sm:text-[10px] ${activeTab === 'calendar' ? 'text-primary' : 'text-white/40'}`}>Calendar</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Bell className={`w-6 h-6 sm:w-7 sm:h-7 ${activeTab === 'notifications' ? 'text-primary' : 'text-white/40'}`} />
                  <span className={`text-[9px] sm:text-[10px] ${activeTab === 'notifications' ? 'text-primary' : 'text-white/40'}`}>Alerts</span>
                </div>
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 bg-white/40 rounded-full z-30" />
          </div>
        </div>
      </div>
      
      {/* Side buttons - left */}
      <div className="absolute -left-[2px] top-[100px] sm:top-[120px] w-[3px] h-7 sm:h-8 bg-gradient-to-b from-[#4a4a4c] to-[#2a2a2c] rounded-l-sm" />
      <div className="absolute -left-[2px] top-[140px] sm:top-[165px] w-[3px] h-12 sm:h-14 bg-gradient-to-b from-[#4a4a4c] to-[#2a2a2c] rounded-l-sm" />
      <div className="absolute -left-[2px] top-[195px] sm:top-[230px] w-[3px] h-12 sm:h-14 bg-gradient-to-b from-[#4a4a4c] to-[#2a2a2c] rounded-l-sm" />
      
      {/* Side button - right (power) */}
      <div className="absolute -right-[2px] top-[150px] sm:top-[180px] w-[3px] h-16 sm:h-20 bg-gradient-to-b from-[#4a4a4c] to-[#2a2a2c] rounded-r-sm" />
    </div>
  </div>
);

// Screen 1: Push Notifications
const NotificationsScreen = () => (
  <div className="px-4 sm:px-5 py-4 sm:py-5 pb-24 sm:pb-28 h-full">
    <div className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-5">Notifications</div>
    
    {/* Notification stack */}
    <div className="space-y-3 sm:space-y-4">
      <div 
        className="bg-primary/20 rounded-2xl p-3 sm:p-4 border border-primary/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite' }}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold text-white truncate">New SMS</div>
            <div className="text-[11px] sm:text-xs text-primary truncate mt-0.5">Thanks for the quick reply!</div>
          </div>
        </div>
      </div>
      
      <div 
        className="bg-emerald-500/20 rounded-2xl p-3 sm:p-4 border border-emerald-500/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '0.5s' }}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold text-white truncate">Upcoming Meeting</div>
            <div className="text-[11px] sm:text-xs text-emerald-400 truncate mt-0.5">Tomorrow at 2pm</div>
          </div>
        </div>
      </div>
      
      <div 
        className="bg-amber-500/20 rounded-2xl p-3 sm:p-4 border border-amber-500/30"
        style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '1s' }}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold text-white truncate">New Lead</div>
            <div className="text-[11px] sm:text-xs text-amber-400 truncate mt-0.5">James K. via website form</div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes notifSlideDown {
        0%, 5% { opacity: 0; transform: translateY(-16px); }
        15%, 70% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(-16px); }
      }
    `}</style>
  </div>
);

// Screen 2: Quick Reply / Conversations
const QuickReplyScreen = () => (
  <div className="px-4 sm:px-5 py-4 sm:py-5 pb-24 sm:pb-28 flex flex-col h-full">
    {/* Chat header */}
    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-white/10">
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center">
        <span className="text-xs sm:text-sm font-bold text-white">SK</span>
      </div>
      <div>
        <div className="text-xs sm:text-sm font-semibold text-white">Sarah Kim</div>
        <div className="text-[10px] sm:text-xs text-emerald-400">Online</div>
      </div>
    </div>
    
    {/* Messages */}
    <div className="flex-1 space-y-3 sm:space-y-4 overflow-hidden">
      <div 
        className="bg-muted/30 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]"
        style={{ animation: 'msgSlide 6s ease-out infinite' }}
      >
        <div className="text-xs sm:text-sm text-white/80">When can we meet to discuss the portfolio?</div>
      </div>
      
      <div 
        className="bg-primary/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] ml-auto"
        style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '0.8s' }}
      >
        <div className="text-xs sm:text-sm text-white/80">Tomorrow at 2pm works great!</div>
      </div>
      
      <div 
        className="bg-muted/30 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]"
        style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '1.6s' }}
      >
        <div className="text-xs sm:text-sm text-white/80">Perfect! See you then 👍</div>
      </div>
    </div>
    
    {/* Reply input */}
    <div 
      className="mt-3 sm:mt-4 flex items-center gap-3 bg-muted/20 rounded-full px-4 sm:px-5 py-3 sm:py-3.5"
      style={{ animation: 'replyType 6s ease-out infinite', animationDelay: '2.4s' }}
    >
      <div className="flex-1 text-[11px] sm:text-xs text-white/40 overflow-hidden truncate">
        Sounds great! Looking forward to it...
      </div>
      <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
    </div>
    
    <style>{`
      @keyframes msgSlide {
        0%, 5% { opacity: 0; transform: translateY(12px); }
        12%, 75% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(12px); }
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
  <div className="px-4 sm:px-5 py-4 sm:py-5 pb-24 sm:pb-28 h-full overflow-hidden">
    {/* Stage tabs */}
    <div className="flex gap-2 sm:gap-2.5 mb-4 sm:mb-5">
      <div 
        className="flex-1 text-center py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-semibold"
        style={{ animation: 'stageActive1 6s ease-in-out infinite' }}
      >
        Leads
      </div>
      <div 
        className="flex-1 text-center py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-semibold"
        style={{ animation: 'stageActive2 6s ease-in-out infinite' }}
      >
        Meeting
      </div>
      <div 
        className="flex-1 text-center py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-semibold"
        style={{ animation: 'stageActive3 6s ease-in-out infinite' }}
      >
        Won
      </div>
    </div>
    
    {/* Swipeable content area */}
    <div className="relative h-[calc(100%-70px)] overflow-hidden">
      {/* Stage 1: Leads */}
      <div 
        className="absolute inset-0 space-y-3 sm:space-y-4"
        style={{ animation: 'stageSwipe1 6s ease-in-out infinite' }}
      >
        <div className="bg-slate-800/60 rounded-2xl p-3 sm:p-4 border border-slate-700/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-600 flex items-center justify-center">
              <span className="text-[11px] sm:text-sm font-bold text-white">JK</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">James Kim</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Via website form</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/60 rounded-2xl p-3 sm:p-4 border border-slate-700/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-600 flex items-center justify-center">
              <span className="text-[11px] sm:text-sm font-bold text-white">LP</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">Lisa Park</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Referral from Mike</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage 2: Meeting */}
      <div 
        className="absolute inset-0 space-y-3 sm:space-y-4"
        style={{ animation: 'stageSwipe2 6s ease-in-out infinite' }}
      >
        <div className="bg-rose-500/20 rounded-2xl p-3 sm:p-4 border border-rose-500/30">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-rose-500 flex items-center justify-center">
              <span className="text-[11px] sm:text-sm font-bold text-white">SD</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">Sarah Davis</div>
              <div className="text-[10px] sm:text-xs text-rose-400 mt-0.5">Today 2pm</div>
            </div>
          </div>
        </div>
        <div className="bg-rose-500/20 rounded-2xl p-3 sm:p-4 border border-rose-500/30">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-rose-500 flex items-center justify-center">
              <span className="text-[11px] sm:text-sm font-bold text-white">TW</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">Tom Wilson</div>
              <div className="text-[10px] sm:text-xs text-rose-400 mt-0.5">Tomorrow 10am</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage 3: Won */}
      <div 
        className="absolute inset-0 space-y-3 sm:space-y-4"
        style={{ animation: 'stageSwipe3 6s ease-in-out infinite' }}
      >
        <div className="bg-emerald-500/20 rounded-2xl p-3 sm:p-4 border border-emerald-500/30">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-sm sm:text-base text-white">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">Mike Chen</div>
              <div className="text-[10px] sm:text-xs text-emerald-400 mt-0.5">$850K signed</div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-500/20 rounded-2xl p-3 sm:p-4 border border-emerald-500/30">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-sm sm:text-base text-white">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-white truncate">Amy Lee</div>
              <div className="text-[10px] sm:text-xs text-emerald-400 mt-0.5">$1.2M signed</div>
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
