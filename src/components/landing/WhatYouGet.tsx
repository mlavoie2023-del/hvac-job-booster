import { useState, useEffect, useRef } from "react";
import { 
  Workflow, 
  FileText, 
  Calendar, 
  Inbox, 
  BarChart3, 
  Share2,
  Zap,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  Users,
  Target,
  Mail,
  CreditCard,
  GitBranch,
  Bell,
  Smartphone,
  PieChart,
  FileSignature,
  Receipt,
  ClipboardList,
  MousePointer
} from "lucide-react";
import { cn } from "@/lib/utils";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  animation: React.ReactNode;
}

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  color: string;
  features: Feature[];
}

// ============= ANIMATION COMPONENTS =============

// CRM Animations
const InboxAnimation = () => (
  <div className="relative h-28 flex items-center justify-center">
    <div className="relative w-44 h-24 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
      <div className="h-4 bg-primary/10 border-b border-border/30 flex items-center px-2 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[7px] text-muted-foreground font-medium">Inbox</span>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '20px', animationDelay: '0s' }}>
        <div className="flex items-center gap-2 h-5 bg-emerald-500/15 rounded border-l-2 border-emerald-500 px-2">
          <div className="w-3 h-3 rounded bg-emerald-500/30 flex items-center justify-center">
            <span className="text-[6px]">💬</span>
          </div>
          <div className="flex-1">
            <div className="h-1 w-10 bg-emerald-500/30 rounded mb-0.5" />
            <div className="h-1 w-16 bg-emerald-500/20 rounded" />
          </div>
        </div>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '46px', animationDelay: '2s' }}>
        <div className="flex items-center gap-2 h-5 bg-primary/15 rounded border-l-2 border-primary px-2">
          <div className="w-3 h-3 rounded bg-primary/30 flex items-center justify-center">
            <span className="text-[6px]">✉️</span>
          </div>
          <div className="flex-1">
            <div className="h-1 w-12 bg-primary/30 rounded mb-0.5" />
            <div className="h-1 w-14 bg-primary/20 rounded" />
          </div>
        </div>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '72px', animationDelay: '4s' }}>
        <div className="flex items-center gap-2 h-5 bg-blue-500/15 rounded border-l-2 border-blue-500 px-2">
          <div className="w-3 h-3 rounded bg-blue-600/40 flex items-center justify-center">
            <span className="text-[6px] font-bold text-blue-300">in</span>
          </div>
          <div className="flex-1">
            <div className="h-1 w-8 bg-blue-500/30 rounded mb-0.5" />
            <div className="h-1 w-12 bg-blue-500/20 rounded" />
          </div>
        </div>
      </div>
      
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center animate-[notificationPop_6s_ease-in-out_infinite] shadow-lg shadow-primary/30">
        <span className="text-[9px] font-bold text-primary-foreground">3</span>
      </div>
    </div>
  </div>
);

const ContactAnimation = () => (
  <div className="relative h-32 flex items-center justify-center">
    <div className="w-44 bg-card/50 rounded-lg border border-border/50 p-2.5 animate-[fadeSlideIn_3s_ease-in-out_infinite]">
      {/* Header with avatar */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
          <span className="text-xs font-bold text-primary">JD</span>
        </div>
        <div>
          <div className="text-[9px] font-medium text-foreground">John Davidson</div>
          <div className="text-[7px] text-muted-foreground">Pre-Retiree • Age 58</div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-1 mb-2">
        <div className="px-1.5 py-0.5 bg-emerald-500/20 rounded text-[6px] text-emerald-400">Active</div>
        <div className="px-1.5 py-0.5 bg-primary/20 rounded text-[6px] text-primary">$1.2M AUM</div>
      </div>
      
      {/* Notes section */}
      <div className="bg-muted/30 rounded p-1.5 border border-border/30">
        <div className="text-[6px] text-muted-foreground mb-1 font-medium">Goals</div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-emerald-500" />
            <span className="text-[6px] text-foreground/70">Retire at 62</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-[6px] text-foreground/70">Estate planning</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PipelineAnimation = () => {
  const stages = [
    { name: "Lead", color: "bg-blue-500" },
    { name: "Meeting", color: "bg-cyan-500" },
    { name: "Won", color: "bg-emerald-500" }
  ];
  
  return (
    <div className="relative h-28 flex items-center justify-center">
      <div className="w-44 bg-card/30 rounded-lg border border-border/30 p-2">
        {/* Stage Headers */}
        <div className="flex gap-2 mb-2">
          {stages.map((stage) => (
            <div key={stage.name} className="flex-1">
              <div className={cn("h-1 rounded-full mb-1", stage.color)} />
              <span className="text-[7px] font-medium text-foreground/80">{stage.name}</span>
            </div>
          ))}
        </div>
        
        {/* Pipeline Columns */}
        <div className="flex gap-2 h-12">
          {/* Lead */}
          <div className="flex-1 bg-muted/20 rounded p-1 space-y-1">
            <div className="bg-card/80 rounded px-1.5 py-1 border border-border/40 animate-[pipelineCardMove_4s_ease-in-out_infinite]">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-[5px] font-bold text-white">JD</span>
              </div>
            </div>
          </div>
          
          {/* Meeting */}
          <div className="flex-1 bg-muted/20 rounded p-1">
            <div className="bg-card/80 rounded px-1.5 py-1 border border-primary/30 animate-[pipelineCardPulse_2s_ease-in-out_infinite]">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-[5px] font-bold text-white">MK</span>
              </div>
            </div>
          </div>
          
          {/* Won */}
          <div className="flex-1 bg-emerald-500/10 rounded p-1 border border-emerald-500/20">
            <div className="bg-card/80 rounded px-1.5 py-1 border border-emerald-500/30">
              <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-[6px] text-white">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lead Capture Animations
const LandingPageAnimation = () => (
  <div className="relative h-40 flex items-center justify-center">
    <div className="w-64 h-36 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
      {/* Browser chrome */}
      <div className="h-4 bg-muted/40 border-b border-border/30 flex items-center px-2 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="ml-2 flex-1 h-2 bg-muted/30 rounded text-[4px] text-muted-foreground flex items-center px-1">
          planningpro.com
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="h-4 bg-card/80 border-b border-border/20 flex items-center px-2 justify-between">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-emerald-500/60" />
          <div className="h-1 w-8 bg-foreground/30 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="h-1 w-4 bg-muted-foreground/30 rounded" />
          <div className="h-1 w-4 bg-muted-foreground/30 rounded" />
          <div className="h-1 w-4 bg-muted-foreground/30 rounded" />
        </div>
      </div>
      
      {/* Hero section */}
      <div className="flex h-[calc(100%-2rem)]">
        {/* Left content */}
        <div className="flex-1 p-3 flex flex-col justify-center">
          <div className="text-[7px] font-bold text-foreground leading-tight mb-1">
            Planning Your<br />Amazing Retirement
          </div>
          <div className="text-[5px] text-muted-foreground mb-2 leading-relaxed">
            Expert guidance for your financial future
          </div>
          
          {/* CTA Button */}
          <div className="relative inline-block w-fit">
            <div className="px-2 py-1 bg-emerald-500 rounded text-[5px] font-medium text-white animate-[ctaPulse_3s_ease-in-out_infinite]">
              Book Discovery Call
            </div>
            
            {/* Animated cursor */}
            <div className="absolute -right-1 top-1 animate-[cursorClick_3s_ease-in-out_infinite]">
              <MousePointer className="w-3 h-3 text-foreground fill-foreground/30" />
            </div>
          </div>
        </div>
        
        {/* Right - person silhouette placeholder */}
        <div className="w-20 bg-gradient-to-br from-slate-600/30 to-slate-700/30 flex items-end justify-center">
          <div className="w-10 h-16 bg-gradient-to-b from-slate-500/40 to-slate-600/40 rounded-t-full mb-0" />
        </div>
      </div>
    </div>
  </div>
);

const FormsAnimation = () => (
  <div className="relative h-40 flex items-center justify-center">
    <div className="w-52 bg-card/50 rounded-lg border border-border/50 p-2.5">
      <div className="text-[8px] font-semibold text-foreground mb-2">Financial Goals Intake</div>
      
      {/* Form fields */}
      <div className="space-y-1.5">
        {/* Name field */}
        <div>
          <div className="text-[6px] text-muted-foreground mb-0.5">Name</div>
          <div className="h-4 bg-muted/30 rounded px-1.5 flex items-center border border-border/30">
            <span className="text-[7px] text-foreground/60">John Davidson</span>
          </div>
        </div>
        
        {/* Goals text area */}
        <div>
          <div className="text-[6px] text-muted-foreground mb-0.5">What are your financial goals?</div>
          <div className="h-5 bg-muted/30 rounded px-1.5 flex items-center border border-primary/30">
            <span 
              className="text-[6px] text-foreground/80 whitespace-nowrap overflow-hidden animate-[typing_4s_steps(35)_infinite]"
              style={{ maxWidth: 0 }}
            >
              I want to start investing for retirement
            </span>
            <span className="inline-block w-0.5 h-2 bg-primary animate-[blink_1s_infinite] flex-shrink-0" />
          </div>
        </div>
        
        {/* Checkboxes */}
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm border border-emerald-500 bg-emerald-500/30 flex items-center justify-center">
              <span className="text-[6px] text-emerald-400">✓</span>
            </div>
            <span className="text-[6px] text-foreground/70">Retirement</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm border border-primary bg-primary/30 flex items-center justify-center">
              <span className="text-[6px] text-primary">✓</span>
            </div>
            <span className="text-[6px] text-foreground/70">Tax Strategy</span>
          </div>
        </div>
      </div>
      
      {/* Submit button */}
      <div className="mt-2 h-4 bg-emerald-500/80 rounded flex items-center justify-center">
        <span className="text-[6px] font-medium text-white">Submit</span>
      </div>
    </div>
  </div>
);

const CalendarAnimation = () => (
  <div className="relative h-32 flex items-center justify-center">
    <div className="flex gap-2">
      {/* Calendar */}
      <div className="w-28 bg-card/50 rounded-lg border border-border/50 p-1.5">
        <div className="text-[6px] font-semibold text-foreground mb-1 text-center">February 2026</div>
        <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-[4px] text-muted-foreground">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {[...Array(31)].map((_, i) => {
            const day = i + 1;
            const isSelected = day === 14;
            const hasAppointment = [8, 12, 20].includes(day);
            return (
              <div 
                key={i}
                className={cn(
                  "w-3 h-3 rounded-sm flex items-center justify-center text-[5px] transition-all",
                  isSelected 
                    ? "bg-emerald-500 text-white animate-[calendarSelect_4s_ease-in-out_infinite]" 
                    : hasAppointment 
                      ? "bg-primary/30 text-primary" 
                      : "text-foreground/60 hover:bg-muted/30"
                )}
              >
                {day <= 28 ? day : ""}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Confirmation message */}
      <div className="w-20 flex flex-col justify-center">
        <div className="bg-card/50 rounded-lg border border-emerald-500/30 p-1.5 animate-[confirmSlideIn_4s_ease-out_infinite]" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-1 mb-1">
            <Smartphone className="w-2.5 h-2.5 text-emerald-500" />
            <span className="text-[5px] text-emerald-400 font-medium">Confirmed!</span>
          </div>
          <div className="text-[4px] text-muted-foreground leading-relaxed">
            Your call is booked for Feb 14 at 2:00 PM
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Automation Animations
const WorkflowAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          </div>
          {i < 2 && (
            <div className="absolute top-1/2 -right-2 w-2 h-0.5 bg-primary/60">
              <div className="absolute inset-0 bg-primary animate-[pulse_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.4}s` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const FollowUpAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
        <Bell className="w-4 h-4 text-primary animate-[ring_2s_ease-in-out_infinite]" />
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-[8px] font-bold text-white">!</span>
      </div>
    </div>
  </div>
);

const TriggerAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center">
        <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-6 h-1 bg-primary/40 rounded animate-[slideRight_1s_ease-in-out_infinite]" />
        <div className="w-6 h-1 bg-emerald-500/40 rounded animate-[slideRight_1s_ease-in-out_infinite_0.2s]" />
      </div>
      <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40 animate-[fadeIn_1s_ease-in-out_infinite]" />
    </div>
  </div>
);

// Marketing Animations
const EmailCampaignAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-12 h-10 bg-card/50 rounded border border-border/50 flex items-center justify-center">
        <Mail className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center animate-[sendPulse_2s_ease-in-out_infinite]">
        <span className="text-[8px] text-white">✓</span>
      </div>
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60 animate-[flyOut_2s_ease-out_infinite]"
          style={{ 
            top: '50%', 
            right: '-4px',
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
  </div>
);

const SMSAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-14 h-20 bg-card/50 rounded-xl border border-border/50 p-1.5">
      <div className="h-1 w-4 mx-auto bg-muted/40 rounded mb-1" />
      <div className="space-y-1.5">
        <div className="ml-auto w-8 h-2 bg-primary/30 rounded-l-lg rounded-tr-lg animate-[messageIn_3s_ease-in-out_infinite]" />
        <div className="w-6 h-2 bg-muted/30 rounded-r-lg rounded-tl-lg animate-[messageIn_3s_ease-in-out_infinite_0.5s]" />
        <div className="ml-auto w-7 h-2 bg-primary/30 rounded-l-lg rounded-tr-lg animate-[messageIn_3s_ease-in-out_infinite_1s]" />
      </div>
    </div>
  </div>
);

const SocialAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
        <Share2 className="w-4 h-4 text-primary" />
      </div>
      {[0, 120, 240].map((deg, i) => (
        <div 
          key={deg}
          className="absolute w-6 h-6 rounded-full bg-card border border-border/50 flex items-center justify-center animate-[orbit_4s_linear_infinite]"
          style={{ 
            transformOrigin: "center",
            transform: `rotate(${deg}deg) translateX(24px)`,
            animationDelay: `${i * -1.3}s`
          }}
        >
          <div className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
      ))}
    </div>
  </div>
);

// Analytics Animations
const DashboardAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex items-end gap-1 h-16">
      {[40, 65, 45, 80, 55].map((h, i) => (
        <div 
          key={i}
          className="w-4 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t transition-all"
          style={{ height: `${h}%` }}
        >
          <div 
            className="w-full bg-primary/40 rounded-t animate-[grow_2s_ease-in-out_infinite]"
            style={{ height: '0%', animationDelay: `${i * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  </div>
);

const ReportsAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-20 bg-card/50 rounded-lg border border-border/50 p-2">
      <div className="flex items-center gap-1 mb-2">
        <PieChart className="w-3 h-3 text-primary" />
        <div className="h-1.5 w-8 bg-muted/40 rounded" />
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-full bg-primary/30 rounded" />
        <div className="h-1.5 w-3/4 bg-emerald-500/30 rounded" />
        <div className="h-1.5 w-1/2 bg-yellow-500/30 rounded" />
      </div>
    </div>
  </div>
);

const AttributionAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="flex flex-col gap-1">
      {[
        { label: "Email", width: "w-16", color: "bg-primary/40" },
        { label: "Social", width: "w-10", color: "bg-emerald-500/40" },
        { label: "Referral", width: "w-8", color: "bg-yellow-500/40" }
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-1">
          <span className="text-[6px] text-muted-foreground w-8">{item.label}</span>
          <div className={cn("h-2 rounded animate-[growWidth_2s_ease-out_infinite]", item.width, item.color)} style={{ animationDelay: `${i * 0.2}s` }} />
        </div>
      ))}
    </div>
  </div>
);

// Payments & Documents Animations
const InvoiceAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-16 bg-card/50 rounded-lg border border-border/50 p-2">
      <div className="flex items-center justify-between mb-2">
        <Receipt className="w-3 h-3 text-primary" />
        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center animate-[checkIn_2s_ease-out_infinite]">
          <span className="text-[8px] text-emerald-500">✓</span>
        </div>
      </div>
      <div className="space-y-1">
        <div className="h-1 w-full bg-muted/30 rounded" />
        <div className="h-1 w-2/3 bg-muted/30 rounded" />
        <div className="h-2 w-8 bg-primary/30 rounded mt-1" />
      </div>
    </div>
  </div>
);

const DocumentAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="relative">
      <div className="w-14 h-18 bg-card/50 rounded border border-border/50 p-1.5">
        <div className="space-y-1">
          <div className="h-1 w-full bg-muted/30 rounded" />
          <div className="h-1 w-3/4 bg-muted/30 rounded" />
          <div className="h-1 w-full bg-muted/30 rounded" />
          <div className="h-1 w-1/2 bg-muted/30 rounded" />
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
        <Smartphone className="w-3 h-3 text-primary" />
      </div>
    </div>
  </div>
);

const ESignatureAnimation = () => (
  <div className="relative h-24 flex items-center justify-center">
    <div className="w-20 bg-card/50 rounded-lg border border-border/50 p-2">
      <div className="h-1 w-full bg-muted/30 rounded mb-2" />
      <div className="h-1 w-3/4 bg-muted/30 rounded mb-3" />
      <div className="relative h-4 border-b border-dashed border-primary/40">
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <path
            d="M2,12 Q6,4 12,10 T22,8 T32,12"
            fill="none"
            stroke="hsl(217 91% 60%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-[drawSignature_3s_ease-in-out_infinite]"
            strokeDasharray="40"
            strokeDashoffset="40"
          />
        </svg>
      </div>
    </div>
  </div>
);

// ============= CATEGORY DATA =============

const categories: Category[] = [
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: Inbox,
        title: "Unified Inbox",
        description: "SMS, Email, LinkedIn, and calls in one place",
        animation: <InboxAnimation />
      },
      {
        icon: Users,
        title: "Contact Management",
        description: "Client profiles with full history and notes",
        animation: <ContactAnimation />
      },
      {
        icon: GitBranch,
        title: "Pipelines",
        description: "Move clients through structured pipelines that trigger automations and tasks",
        animation: <PipelineAnimation />
      }
    ]
  },
  {
    id: "lead-capture",
    icon: Target,
    title: "Lead Capture",
    color: "from-emerald-500 to-teal-500",
    features: [
      {
        icon: FileText,
        title: "Landing Pages",
        description: "Professional pages that convert visitors to leads",
        animation: <LandingPageAnimation />
      },
      {
        icon: ClipboardList,
        title: "Smart Forms",
        description: "Intake forms, surveys, and referral capture",
        animation: <FormsAnimation />
      },
      {
        icon: Calendar,
        title: "Calendars",
        description: "Clients book themselves and receive automatic reminders",
        animation: <CalendarAnimation />
      }
    ]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        icon: Workflow,
        title: "Workflows",
        description: "Automated nurture sequences and follow-ups",
        animation: <WorkflowAnimation />
      },
      {
        icon: Bell,
        title: "Follow Up",
        description: "Never miss a touchpoint with smart reminders",
        animation: <FollowUpAnimation />
      },
      {
        icon: MousePointer,
        title: "Triggers & Actions",
        description: "If-this-then-that logic for any event",
        animation: <TriggerAnimation />
      }
    ]
  },
  {
    id: "marketing",
    icon: Mail,
    title: "Marketing",
    color: "from-orange-500 to-red-500",
    features: [
      {
        icon: Mail,
        title: "Email Campaigns",
        description: "Newsletters, drip sequences, and broadcasts",
        animation: <EmailCampaignAnimation />
      },
      {
        icon: Smartphone,
        title: "SMS Marketing",
        description: "Boost open rates with A2P compliant SMS marketing",
        animation: <SMSAnimation />
      },
      {
        icon: Share2,
        title: "Social Media Hub",
        description: "Schedule and manage posts across platforms",
        animation: <SocialAnimation />
      }
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    color: "from-amber-500 to-yellow-500",
    features: [
      {
        icon: BarChart3,
        title: "Dashboard",
        description: "Real-time KPIs and performance metrics",
        animation: <DashboardAnimation />
      },
      {
        icon: PieChart,
        title: "Reports",
        description: "Detailed insights on leads, conversions, and revenue",
        animation: <ReportsAnimation />
      },
      {
        icon: Target,
        title: "Campaign Attribution",
        description: "See which marketing efforts drive results",
        animation: <AttributionAnimation />
      }
    ]
  },
  {
    id: "payments-docs",
    icon: CreditCard,
    title: "Payments & Documents",
    color: "from-violet-500 to-purple-500",
    features: [
      {
        icon: Receipt,
        title: "Invoicing & Subscriptions",
        description: "One-time and recurring billing",
        animation: <InvoiceAnimation />
      },
      {
        icon: FileText,
        title: "Documents",
        description: "Custom documents templated and sent over SMS or email",
        animation: <DocumentAnimation />
      },
      {
        icon: FileSignature,
        title: "E-Signatures",
        description: "Contracts, proposals, and digital signing",
        animation: <ESignatureAnimation />
      }
    ]
  }
];

// All features flattened for mobile carousel
const allFeatures = categories.flatMap(cat => 
  cat.features.map(f => ({ ...f, categoryColor: cat.color, categoryTitle: cat.title }))
);

// ============= HUB COMPONENT =============

const CentralHub = ({ activeCategory }: { activeCategory: string | null }) => {
  return (
    <div className="relative flex flex-col items-center mb-12">
      {/* Hub element */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl animate-[hubPulse_3s_ease-in-out_infinite]" />
        
        {/* Animated border ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-primary animate-[spin_8s_linear_infinite] opacity-60" />
        
        {/* Hub core */}
        <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-[0_0_40px_-10px_hsl(217_91%_60%/0.5)]">
          <img 
            src={lavoieLogo} 
            alt="Lavoie Systems" 
            className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
          />
        </div>
        
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping-slow" />
      </div>
      
      {/* "One Platform" label */}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          One Platform
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    </div>
  );
};


// ============= MAIN COMPONENT =============

const WhatYouGet = () => {
  const [activeCategory, setActiveCategory] = useState<string>("crm");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % allFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev + 1) % allFeatures.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev - 1 + allFeatures.length) % allFeatures.length);
  };

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,hsl(217_91%_60%/0.04),transparent)] pointer-events-none" />
      
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything a Solo Planner Needs
          </h2>
          
          
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            One Platform. One Login. Zero App Switching.
          </p>
        </div>

        {/* Desktop: Narrow Sidebar Left + Large Features Right */}
        <div className="hidden md:block">
          <div className="flex gap-6 lg:gap-8">
            {/* Left Sidebar - Compact Category Icons */}
            <div className="w-20 lg:w-24 flex-shrink-0">
              {/* Mini Hub */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-md animate-[hubPulse_3s_ease-in-out_infinite]" />
                  <div className="relative w-10 h-10 rounded-full bg-card border border-primary/50 flex items-center justify-center shadow-[0_0_20px_-6px_hsl(217_91%_60%/0.5)]">
                    <img 
                      src={lavoieLogo} 
                      alt="Lavoie Systems" 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Category Icons - Vertical Stack */}
              <div className="space-y-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "w-full group relative flex flex-col items-center gap-1 py-3 px-2 rounded-xl transition-all duration-300",
                        isActive 
                          ? "bg-card border border-primary/30 shadow-[0_0_20px_-8px_hsl(217_91%_60%/0.4)]" 
                          : "bg-transparent border border-transparent hover:bg-card/50"
                      )}
                      title={category.title}
                    >
                      {/* Glow effect */}
                      <div className={cn(
                        "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
                        category.color,
                        isActive ? "opacity-15" : "group-hover:opacity-5"
                      )} />
                      
                      {/* Icon */}
                      <div className={cn(
                        "relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                        isActive 
                          ? `bg-gradient-to-br ${category.color} shadow-md` 
                          : "bg-muted/50 group-hover:bg-primary/20"
                      )}>
                        <category.icon className={cn(
                          "w-5 h-5 transition-all duration-300",
                          isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                        )} />
                      </div>
                      
                      {/* Title - Small */}
                      <span className={cn(
                        "text-[10px] font-medium transition-colors text-center leading-tight",
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        {category.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Right Side - Large Features Display */}
            <div className="flex-1 min-w-0">
              {activeData && (
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 lg:p-8 animate-fade-in">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                      activeData.color
                    )}>
                      <activeData.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{activeData.title}</h3>
                  </div>
                  
                  {/* Features - Vertical Stack */}
                  <div className="space-y-4">
                    {activeData.features.map((feature, index) => (
                      <div 
                        key={feature.title}
                        className="group relative bg-background/50 rounded-xl border border-border/50 p-5 lg:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(217_91%_60%/0.2)]"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex gap-6 items-start">
                          {/* Large Animation area */}
                          <div className="w-56 lg:w-72 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden border border-border/30">
                            <div className="transform scale-110 origin-center">
                              {feature.animation}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 py-2">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={cn(
                                "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                activeData.color
                              )}>
                                <feature.icon className="w-4 h-4 text-white" />
                              </div>
                              <h4 className="font-bold text-foreground text-lg lg:text-xl">{feature.title}</h4>
                            </div>
                            <p className="text-body leading-relaxed text-base">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Carousel with Platform Indicator */}
        <div className="md:hidden">
          {/* Sticky "1 Platform | 18 Tools" indicator */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 border border-border">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">1 Platform</span>
              <div className="w-px h-4 bg-border" />
              <span className="text-xs font-semibold text-foreground">
                Tool {currentSlide + 1} of {allFeatures.length}
              </span>
            </div>
          </div>
          
          <div className="relative" ref={carouselRef}>
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {allFeatures.map((feature, index) => (
                  <div 
                    key={`${feature.title}-${index}`}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 mx-auto max-w-sm">
                      {/* Category badge */}
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r text-white",
                        feature.categoryColor
                      )}>
                        {feature.categoryTitle}
                      </div>
                      
                      {/* Animation */}
                      <div className="mb-4 bg-muted/20 rounded-lg">
                        {feature.animation}
                      </div>
                      
                      {/* Content */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                          feature.categoryColor
                        )}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                      </div>
                      <p className="text-body leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg hover:bg-primary/10 transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg hover:bg-primary/10 transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator with category grouping */}
          <div className="flex justify-center gap-1.5 mt-6 flex-wrap px-4">
            {allFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index 
                    ? "w-6 bg-primary" 
                    : "bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to ${feature.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes inboxSlide {
          0% { transform: translateX(-120%); opacity: 0; }
          10%, 90% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes notificationPop {
          0%, 10% { transform: scale(0); }
          20%, 80% { transform: scale(1); }
          90%, 100% { transform: scale(0); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(24px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.5); }
          to { transform: scale(1); }
        }
        @keyframes grow {
          0%, 100% { height: 0%; }
          50% { height: 30%; }
        }
        @keyframes fadeSlideIn {
          0%, 100% { opacity: 0.5; transform: translateY(5px); }
          50% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0); }
          10%, 30% { transform: rotate(-10deg); }
          20%, 40% { transform: rotate(10deg); }
          50% { transform: rotate(0); }
        }
        @keyframes slideRight {
          0% { width: 0; opacity: 0; }
          50%, 100% { width: 100%; opacity: 1; }
        }
        @keyframes fadeIn {
          0%, 50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes sendPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes flyOut {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(20px, -10px) scale(0); opacity: 0; }
        }
        @keyframes messageIn {
          0% { opacity: 0; transform: translateX(-5px); }
          20%, 80% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(5px); }
        }
        @keyframes growWidth {
          0% { width: 0; }
          50%, 100% { width: 100%; }
        }
        @keyframes checkIn {
          0%, 100% { transform: scale(0); }
          30%, 70% { transform: scale(1); }
        }
        @keyframes drawSignature {
          0% { stroke-dashoffset: 40; }
          50%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes hubPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes glowBadge {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
        @keyframes pulseConnection {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default WhatYouGet;
