import { 
  Mail, 
  Bell, 
  Check,
  MessageSquare,
  Plug
} from "lucide-react";

// Animated Workflow Mockup - nodes pulse in sequence with flowing lines (only on hover)
export const WorkflowMockup = () => (
  <div className="flex items-center justify-center gap-2 py-3">
    <div 
      className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:animate-node-pulse"
      style={{ animationDelay: "0s" }}
    >
      <Mail className="w-4 h-4 text-primary" />
    </div>
    <div className="w-6 h-0.5 bg-primary/30 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary/50 group-hover:to-primary group-hover:bg-[length:200%_100%] group-hover:animate-line-flow transition-colors" />
    <div 
      className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:animate-node-pulse"
      style={{ animationDelay: "0.5s" }}
    >
      <Bell className="w-4 h-4 text-primary" />
    </div>
    <div className="w-6 h-0.5 bg-primary/30 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary/50 group-hover:to-primary group-hover:bg-[length:200%_100%] group-hover:animate-line-flow transition-colors" style={{ animationDelay: "0.5s" }} />
    <div 
      className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:animate-node-pulse"
      style={{ animationDelay: "1s" }}
    >
      <Check className="w-4 h-4 text-primary" />
    </div>
  </div>
);

// Animated Landing Page Mockup - cursor moves and clicks button (only on hover)
export const LandingPageMockup = () => (
  <div className="bg-background/50 rounded-lg border border-border/50 p-2 mx-auto max-w-[140px] relative">
    <div className="h-2 w-12 bg-primary/40 rounded mb-2" />
    <div className="h-1.5 w-full bg-muted-foreground/20 rounded mb-1" />
    <div className="h-1.5 w-3/4 bg-muted-foreground/20 rounded mb-2" />
    <div className="h-5 w-16 bg-primary rounded-md group-hover:animate-button-click" />
    {/* Animated cursor - only animates on hover */}
    <div 
      className="absolute w-3 h-3 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-cursor-move transition-opacity"
      style={{ bottom: "8px", left: "8px" }}
    >
      <svg viewBox="0 0 24 24" fill="hsl(var(--foreground))" className="w-full h-full drop-shadow-md">
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z" />
      </svg>
    </div>
  </div>
);

// Animated Forms Mockup - checkboxes check themselves (only on hover)
export const FormsMockup = () => (
  <div className="space-y-2 max-w-[140px] mx-auto">
    {[0, 1, 2].map((i) => (
      <div key={i} className="flex items-center gap-2">
        <div 
          className="w-3.5 h-3.5 rounded border border-primary bg-primary/20 flex items-center justify-center overflow-hidden"
        >
          <Check 
            className="w-2.5 h-2.5 text-primary opacity-30 group-hover:opacity-100 group-hover:animate-check-bounce transition-opacity" 
            style={{ animationDelay: `${i * 0.4}s`, animationIterationCount: "infinite", animationDuration: "2s" }}
          />
        </div>
        <div className={`h-1.5 rounded bg-muted-foreground/30`} style={{ width: `${60 + i * 10}px` }} />
      </div>
    ))}
  </div>
);

// Animated Calendar Mockup - selected date pulses (only on hover)
export const CalendarMockup = () => (
  <div className="grid grid-cols-7 gap-0.5 max-w-[120px] mx-auto">
    {[...Array(21)].map((_, i) => (
      <div 
        key={i} 
        className={`w-4 h-4 rounded text-[8px] flex items-center justify-center transition-all ${
          i === 10 ? 'bg-primary text-primary-foreground font-medium group-hover:animate-date-pulse' : 
          i === 15 ? 'bg-primary/30 text-primary' :
          'bg-muted/50 text-muted-foreground'
        }`}
      >
        {i + 1}
      </div>
    ))}
  </div>
);

// Animated Pipeline Mockup - lead dot slides through stages (only on hover)
export const PipelineMockup = () => (
  <div className="flex items-center justify-center gap-1 relative">
    {['Lead', 'Call', 'Won'].map((stage, i) => (
      <div key={stage} className="flex items-center">
        <div className={`px-2 py-1 rounded text-[9px] font-medium transition-all ${
          i === 0 ? 'bg-muted text-muted-foreground' :
          i === 1 ? 'bg-primary/30 text-primary' :
          'bg-success/30 text-success'
        }`}>
          {stage}
        </div>
        {i < 2 && <div className="w-3 h-0.5 bg-border" />}
      </div>
    ))}
    {/* Sliding indicator dot - only animates on hover */}
    <div 
      className="absolute w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] group-hover:animate-slide-stage transition-all"
      style={{ top: "50%", marginTop: "-4px" }}
    />
  </div>
);

// Animated Inbox Mockup - messages slide in with notification pulse (only on hover)
export const InboxMockup = () => (
  <div className="space-y-1.5 max-w-[140px] mx-auto relative">
    {[Mail, MessageSquare, Bell].map((Icon, i) => (
      <div 
        key={i} 
        className={`flex items-center gap-2 p-1.5 rounded-md transition-all ${
          i === 0 ? 'bg-primary/10 border border-primary/30 group-hover:animate-message-slide-in' : 'bg-muted/30'
        }`}
        style={{ animationDelay: `${i * 0.2}s` }}
      >
        <div className="relative">
          <Icon className={`w-3 h-3 ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
          {i === 0 && (
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:bg-primary group-hover:animate-pulse-soft transition-colors" />
          )}
        </div>
        <div className="flex-1">
          <div className={`h-1 w-12 rounded ${i === 0 ? 'bg-primary/40' : 'bg-muted-foreground/30'}`} />
        </div>
      </div>
    ))}
  </div>
);

// Animated Dashboard Mockup - bars grow up with staggered timing (only on hover)
export const DashboardMockup = () => (
  <div className="flex items-end justify-center gap-1.5 h-12">
    {[40, 65, 45, 80, 55].map((height, i) => (
      <div 
        key={i} 
        className="w-4 rounded-t bg-gradient-to-t from-primary/40 to-primary/80 origin-bottom transition-all duration-300 group-hover:animate-bar-grow"
        style={{ 
          height: `20%`,
          animationDelay: `${i * 0.15}s`,
          ['--bar-height' as string]: `${height}%`
        }}
      />
    ))}
  </div>
);

// Animated Integrations Mockup - orbiting icons around center hub (only on hover)
export const IntegrationsMockup = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-20 h-20">
      {/* Center hub with pulse */}
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:animate-pulse-soft">
        <Plug className="w-5 h-5 text-primary" />
      </div>
      {/* Orbiting icons - only animate on hover */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <div 
          key={i}
          className="absolute w-5 h-5 rounded-lg bg-muted border border-border flex items-center justify-center group-hover:animate-orbit"
          style={{
            top: '50%',
            left: '50%',
            marginTop: '-10px',
            marginLeft: '-10px',
            transform: `rotate(${angle}deg) translateX(32px) rotate(-${angle}deg)`,
            animationDelay: `${-i * 2.4}s`
          }}
        >
          <div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/40" />
        </div>
      ))}
    </div>
  </div>
);

// Animated Social Media Mockup - posts queue and send (only on hover)
export const SocialMockup = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-2">
      {['in', 'f', 'ig'].map((platform, i) => (
        <div 
          key={i} 
          className="w-6 h-6 rounded-md bg-muted border border-border flex items-center justify-center text-[8px] font-bold text-muted-foreground group-hover:animate-post-send"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          {platform}
        </div>
      ))}
    </div>
    <div className="w-20 h-1.5 bg-primary/20 rounded-full overflow-hidden">
      <div className="h-full bg-primary/40 rounded-full group-hover:animate-[gradient-shift_2s_ease-in-out_infinite] transition-all" style={{ width: "30%" }} />
    </div>
  </div>
);

// Mockup registry
export const mockups: Record<string, React.FC> = {
  "Customized Workflows": WorkflowMockup,
  "Landing Pages": LandingPageMockup,
  "Forms": FormsMockup,
  "Calendars": CalendarMockup,
  "Pipelines": PipelineMockup,
  "Unified Inbox": InboxMockup,
  "Dashboard & Analytics": DashboardMockup,
  "Integrations": IntegrationsMockup,
  "Social Media": SocialMockup,
};
