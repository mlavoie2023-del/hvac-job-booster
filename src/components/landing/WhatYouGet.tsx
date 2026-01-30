import { 
  Workflow, 
  FileText, 
  ClipboardList, 
  Calendar, 
  GitBranch, 
  Inbox, 
  BarChart3, 
  Plug, 
  Share2,
  Check,
  Mail,
  MessageSquare,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Customized Workflows",
    oneLiner: "Automate follow-ups, reminders, and check-ins automatically",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    oneLiner: "Professional pages that convert visitors into prospects",
  },
  {
    icon: ClipboardList,
    title: "Forms",
    oneLiner: "Smart intake forms that feed directly into your workflows",
  },
  {
    icon: Calendar,
    title: "Calendars",
    oneLiner: "Let clients book directly with automatic reminders",
  },
  {
    icon: GitBranch,
    title: "Pipelines",
    oneLiner: "Visual tracking for every prospect and client journey",
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    oneLiner: "SMS, email, and social messages in one place",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    oneLiner: "Track what's working and double down on results",
  },
  {
    icon: Plug,
    title: "Integrations",
    oneLiner: "Connect your calendar, email, and planning software",
  },
  {
    icon: Share2,
    title: "Social Media",
    oneLiner: "Schedule posts and engage across all platforms",
  },
];

// Mini-mockup components for each feature
const WorkflowMockup = () => (
  <div className="flex items-center justify-center gap-2 py-3">
    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
      <Mail className="w-4 h-4 text-primary" />
    </div>
    <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
      <Bell className="w-4 h-4 text-primary" />
    </div>
    <div className="w-6 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30" />
    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
      <Check className="w-4 h-4 text-primary" />
    </div>
  </div>
);

const LandingPageMockup = () => (
  <div className="bg-background/50 rounded-lg border border-border/50 p-2 mx-auto max-w-[140px]">
    <div className="h-2 w-12 bg-primary/40 rounded mb-2" />
    <div className="h-1.5 w-full bg-muted-foreground/20 rounded mb-1" />
    <div className="h-1.5 w-3/4 bg-muted-foreground/20 rounded mb-2" />
    <div className="h-5 w-16 bg-primary rounded-md" />
  </div>
);

const FormsMockup = () => (
  <div className="space-y-2 max-w-[140px] mx-auto">
    <div className="flex items-center gap-2">
      <div className="w-3.5 h-3.5 rounded border border-primary bg-primary/20 flex items-center justify-center">
        <Check className="w-2.5 h-2.5 text-primary" />
      </div>
      <div className="h-1.5 w-16 bg-muted-foreground/30 rounded" />
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3.5 h-3.5 rounded border border-border" />
      <div className="h-1.5 w-20 bg-muted-foreground/30 rounded" />
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3.5 h-3.5 rounded border border-border" />
      <div className="h-1.5 w-14 bg-muted-foreground/30 rounded" />
    </div>
  </div>
);

const CalendarMockup = () => (
  <div className="grid grid-cols-7 gap-0.5 max-w-[120px] mx-auto">
    {[...Array(21)].map((_, i) => (
      <div 
        key={i} 
        className={`w-4 h-4 rounded text-[8px] flex items-center justify-center ${
          i === 10 ? 'bg-primary text-primary-foreground font-medium' : 
          i === 15 ? 'bg-primary/30 text-primary' :
          'bg-muted/50 text-muted-foreground'
        }`}
      >
        {i + 1}
      </div>
    ))}
  </div>
);

const PipelineMockup = () => (
  <div className="flex items-center justify-center gap-1">
    {['Lead', 'Call', 'Won'].map((stage, i) => (
      <div key={stage} className="flex items-center">
        <div className={`px-2 py-1 rounded text-[9px] font-medium ${
          i === 0 ? 'bg-muted text-muted-foreground' :
          i === 1 ? 'bg-primary/30 text-primary' :
          'bg-success/30 text-success'
        }`}>
          {stage}
        </div>
        {i < 2 && <div className="w-3 h-0.5 bg-border" />}
      </div>
    ))}
  </div>
);

const InboxMockup = () => (
  <div className="space-y-1.5 max-w-[140px] mx-auto">
    {[Mail, MessageSquare, Bell].map((Icon, i) => (
      <div key={i} className={`flex items-center gap-2 p-1.5 rounded-md ${
        i === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-muted/30'
      }`}>
        <Icon className={`w-3 h-3 ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
        <div className="flex-1">
          <div className={`h-1 w-12 rounded ${i === 0 ? 'bg-primary/40' : 'bg-muted-foreground/30'}`} />
        </div>
      </div>
    ))}
  </div>
);

const DashboardMockup = () => (
  <div className="flex items-end justify-center gap-1.5 h-12">
    {[40, 65, 45, 80, 55].map((height, i) => (
      <div 
        key={i} 
        className="w-4 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
        style={{ height: `${height}%` }}
      />
    ))}
  </div>
);

const IntegrationsMockup = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
        <Plug className="w-5 h-5 text-primary" />
      </div>
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <div 
          key={i}
          className="absolute w-5 h-5 rounded-lg bg-muted border border-border flex items-center justify-center"
          style={{
            transform: `rotate(${angle}deg) translateX(28px) rotate(-${angle}deg)`,
            top: '50%',
            left: '50%',
            marginTop: '-10px',
            marginLeft: '-10px'
          }}
        >
          <div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/40" />
        </div>
      ))}
    </div>
  </div>
);

const SocialMockup = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-2">
      {['in', 'f', 'ig'].map((platform, i) => (
        <div key={i} className="w-6 h-6 rounded-md bg-muted border border-border flex items-center justify-center text-[8px] font-bold text-muted-foreground">
          {platform}
        </div>
      ))}
    </div>
    <div className="w-20 h-1.5 bg-primary/40 rounded-full" />
  </div>
);

const mockups: Record<string, React.FC> = {
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

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const MockupComponent = mockups[feature.title];
  
  return (
    <div 
      className="group relative bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.03)'
      }}
    >
      {/* Icon with glow */}
      <div className="relative mb-4 flex justify-center">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
          <feature.icon className="h-7 w-7 text-primary" />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        {feature.title}
      </h3>
      
      {/* One-liner */}
      <p className="text-sm text-muted-foreground text-center mb-5">
        {feature.oneLiner}
      </p>
      
      {/* Visual mockup */}
      <div className="bg-background/50 rounded-lg border border-border/50 p-3 min-h-[80px] flex items-center justify-center">
        {MockupComponent && <MockupComponent />}
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ boxShadow: '0 0 40px -10px hsl(217 91% 60% / 0.3)' }} />
    </div>
  );
};

const WhatYouGet = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-3">Your complete system</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Nine integrated tools that work together—built around <em>your</em> practice, not generic templates.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
