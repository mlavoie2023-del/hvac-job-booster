import { Users, Mail, Calendar, MessageSquare, CreditCard, ClipboardList, BarChart3, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

interface Tool {
  id: string;
  icon: LucideIcon;
  label: string;
  color: string;
  x: number;
  y: number;
}

const tools: Tool[] = [
  { id: "crm", icon: Users, label: "CRM", color: "hsl(217 91% 60%)", x: -140, y: -80 },
  { id: "email", icon: Mail, label: "Email", color: "hsl(280 70% 60%)", x: 140, y: -80 },
  { id: "calendar", icon: Calendar, label: "Calendar", color: "hsl(45 93% 55%)", x: -160, y: 20 },
  { id: "sms", icon: MessageSquare, label: "SMS", color: "hsl(142 70% 50%)", x: 160, y: 20 },
  { id: "payments", icon: CreditCard, label: "Payments", color: "hsl(160 84% 39%)", x: -120, y: 100 },
  { id: "forms", icon: ClipboardList, label: "Forms", color: "hsl(330 81% 60%)", x: 120, y: 100 },
  { id: "analytics", icon: BarChart3, label: "Analytics", color: "hsl(190 90% 50%)", x: -60, y: -110 },
  { id: "automation", icon: Zap, label: "Automation", color: "hsl(25 95% 55%)", x: 60, y: -110 },
];

interface ToolIconProps {
  tool: Tool;
  index: number;
}

const ToolIcon = ({ tool, index }: ToolIconProps) => {
  const Icon = tool.icon;
  
  return (
    <div
      className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1"
      style={{
        ["--x" as string]: `${tool.x}px`,
        ["--y" as string]: `${tool.y}px`,
        ["--color" as string]: tool.color,
        animation: `heroToolAnimation 8s ease-in-out infinite`,
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm transition-transform"
        style={{
          backgroundColor: `color-mix(in srgb, ${tool.color} 15%, transparent)`,
          borderColor: `color-mix(in srgb, ${tool.color} 40%, transparent)`,
          boxShadow: `0 0 20px color-mix(in srgb, ${tool.color} 25%, transparent)`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: tool.color }} />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">
        {tool.label}
      </span>
    </div>
  );
};

const UnifiedCard = () => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{
        animation: `heroUnifiedReveal 8s ease-in-out infinite`,
      }}
    >
      <div 
        className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-primary/50 bg-card/90 backdrop-blur-md"
        style={{
          boxShadow: `0 0 60px hsl(217 91% 60% / 0.4), 0 0 100px hsl(217 91% 60% / 0.2)`,
        }}
      >
        <img 
          src={lavoieLogo} 
          alt="Lavoie Systems" 
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-semibold text-foreground">One Platform</p>
        <p className="text-xs text-primary font-medium">8 Tools → 1</p>
      </div>
    </div>
  );
};

const HeroWorkflow = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-4">
      <div className="relative h-[280px] md:h-[300px]">
        {/* Tool icons */}
        {tools.map((tool, index) => (
          <ToolIcon key={tool.id} tool={tool} index={index} />
        ))}
        
        {/* Central unified card */}
        <UnifiedCard />
      </div>
    </div>
  );
};

export default HeroWorkflow;
