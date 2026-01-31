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
  MousePointer,
  Clock
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
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="relative w-full h-32 bg-card/50 rounded-lg border border-border/50 overflow-hidden">
      <div className="h-5 bg-primary/10 border-b border-border/30 flex items-center px-2 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[7px] text-muted-foreground font-medium">Unified Inbox</span>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '28px', animationDelay: '0s' }}>
        <div className="flex items-center gap-2 h-6 bg-emerald-500/15 rounded border-l-2 border-emerald-500 px-2">
          <div className="w-4 h-4 rounded bg-emerald-500/30 flex items-center justify-center">
            <span className="text-[7px]">💬</span>
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-12 bg-emerald-500/30 rounded mb-0.5" />
            <div className="h-1 w-20 bg-emerald-500/20 rounded" />
          </div>
          <span className="text-[6px] text-emerald-400">SMS</span>
        </div>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '58px', animationDelay: '2s' }}>
        <div className="flex items-center gap-2 h-6 bg-primary/15 rounded border-l-2 border-primary px-2">
          <div className="w-4 h-4 rounded bg-primary/30 flex items-center justify-center">
            <span className="text-[7px]">✉️</span>
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-14 bg-primary/30 rounded mb-0.5" />
            <div className="h-1 w-16 bg-primary/20 rounded" />
          </div>
          <span className="text-[6px] text-primary">Email</span>
        </div>
      </div>
      
      <div className="absolute left-2 right-2 animate-[inboxSlide_6s_ease-in-out_infinite]" style={{ top: '88px', animationDelay: '4s' }}>
        <div className="flex items-center gap-2 h-6 bg-blue-500/15 rounded border-l-2 border-blue-500 px-2">
          <div className="w-4 h-4 rounded bg-blue-600/40 flex items-center justify-center">
            <span className="text-[7px] font-bold text-blue-300">in</span>
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-10 bg-blue-500/30 rounded mb-0.5" />
            <div className="h-1 w-14 bg-blue-500/20 rounded" />
          </div>
          <span className="text-[6px] text-blue-400">LinkedIn</span>
        </div>
      </div>
      
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-[notificationPop_6s_ease-in-out_infinite] shadow-lg shadow-primary/30">
        <span className="text-[10px] font-bold text-primary-foreground">3</span>
      </div>
    </div>
  </div>
);

const ContactAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3 animate-[fadeSlideIn_3s_ease-in-out_infinite]">
      {/* Header with avatar */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">JD</span>
        </div>
        <div>
          <div className="text-[10px] font-medium text-foreground">John Davidson</div>
          <div className="text-[8px] text-muted-foreground">Pre-Retiree • Age 58</div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-1.5 mb-3">
        <div className="px-2 py-0.5 bg-emerald-500/20 rounded text-[7px] text-emerald-400">Active Client</div>
        <div className="px-2 py-0.5 bg-primary/20 rounded text-[7px] text-primary">$1.2M AUM</div>
      </div>
      
      {/* Notes section */}
      <div className="bg-muted/30 rounded p-2 border border-border/30">
        <div className="text-[7px] text-muted-foreground mb-1.5 font-medium">Financial Goals</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[7px] text-foreground/70">Retire at 62 with $80K/year</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[7px] text-foreground/70">Estate planning for 2 children</span>
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
    <div className="relative h-40 flex items-center justify-center p-3">
      <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
        {/* Stage Headers */}
        <div className="flex gap-4 mb-3">
          {stages.map((stage) => (
            <div key={stage.name} className="flex-1">
              <div className={cn("h-1.5 rounded-full mb-2", stage.color)} />
              <span className="text-[9px] font-medium text-foreground/80">{stage.name}</span>
            </div>
          ))}
        </div>
        
        {/* Pipeline Columns */}
        <div className="flex gap-4">
          {/* Lead */}
          <div className="flex-1 bg-muted/20 rounded-lg p-2">
            <div className="bg-card/80 rounded-lg px-2.5 py-2 border border-border/40 animate-[pipelineCardMove_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">JD</span>
                </div>
                <div className="text-[8px] text-foreground/70">New inquiry</div>
              </div>
            </div>
          </div>
          
          {/* Meeting */}
          <div className="flex-1 bg-muted/20 rounded-lg p-2">
            <div className="bg-card/80 rounded-lg px-2.5 py-2 border border-primary/30 animate-[pipelineCardPulse_2s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">MK</span>
                </div>
                <div className="text-[8px] text-foreground/70">Discovery call</div>
              </div>
            </div>
          </div>
          
          {/* Won */}
          <div className="flex-1 bg-emerald-500/10 rounded-lg p-2 border border-emerald-500/20">
            <div className="bg-card/80 rounded-lg px-2.5 py-2 border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-[8px] text-white">✓</span>
                </div>
                <div className="text-[8px] text-emerald-400">Signed!</div>
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
  <div className="relative h-40 flex items-center justify-center p-2">
    <div className="flex gap-3 w-full">
      {/* Calendar */}
      <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-3">
        <div className="text-[9px] font-semibold text-foreground mb-2 text-center">February 2026</div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-[6px] text-muted-foreground font-medium">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {[...Array(28)].map((_, i) => {
            const day = i + 1;
            const isSelected = day === 14;
            const hasAppointment = [8, 12, 20].includes(day);
            return (
              <div 
                key={i}
                className={cn(
                  "w-5 h-5 rounded flex items-center justify-center text-[7px] transition-all",
                  isSelected 
                    ? "bg-emerald-500 text-white animate-[calendarSelect_4s_ease-in-out_infinite]" 
                    : hasAppointment 
                      ? "bg-primary/40 text-primary-foreground" 
                      : "text-foreground/60"
                )}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Confirmation message */}
      <div className="w-28 flex flex-col justify-center">
        <div className="bg-card/50 rounded-lg border border-emerald-500/30 p-2.5 animate-[confirmSlideIn_4s_ease-out_infinite]" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[8px] text-emerald-400 font-medium">Confirmed!</span>
          </div>
          <div className="text-[6px] text-muted-foreground leading-relaxed">
            Your call is booked for Feb 14 at 2:00 PM
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Automation Animations
const WorkflowAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      {/* Workflow title */}
      <div className="text-[8px] text-muted-foreground mb-3">New Lead Nurture Sequence</div>
      
      {/* Workflow nodes */}
      <div className="flex items-center justify-center gap-2">
        {/* Trigger node */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center animate-[workflowNode1_4s_ease-in-out_infinite]">
            <Inbox className="w-5 h-5 text-pink-400" />
          </div>
          <span className="text-[6px] text-muted-foreground mt-1">New Lead</span>
        </div>
        
        {/* Connector line 1 */}
        <div className="w-8 h-0.5 bg-muted/30 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-pink-500 to-primary animate-[workflowLine1_4s_ease-in-out_infinite]" />
        </div>
        
        {/* Wait node */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center animate-[workflowNode2_4s_ease-in-out_infinite]">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[6px] text-muted-foreground mt-1">Wait 1 day</span>
        </div>
        
        {/* Connector line 2 */}
        <div className="w-8 h-0.5 bg-muted/30 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary to-emerald-500 animate-[workflowLine2_4s_ease-in-out_infinite]" />
        </div>
        
        {/* Email node */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-[workflowNode3_4s_ease-in-out_infinite]">
            <Mail className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-[6px] text-muted-foreground mt-1">Send Email</span>
        </div>
      </div>
    </div>
  </div>
);

const FollowUpAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3">
      {/* Reminder card */}
      <div className="flex items-start gap-3">
        {/* Bell icon with badge */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center">
            <Bell className="w-5 h-5 text-pink-400" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite]">
            <span className="text-[8px] font-bold text-white">!</span>
          </div>
        </div>
        
        {/* Reminder content */}
        <div className="flex-1">
          <div className="text-[9px] font-semibold text-foreground mb-1">Follow-up Reminder</div>
          <div className="text-[7px] text-muted-foreground mb-2">Call John Davidson - Retirement consultation</div>
          <div className="flex gap-2">
            <div className="px-2 py-1 bg-emerald-500/20 rounded text-[6px] text-emerald-400 border border-emerald-500/30">
              Call Now
            </div>
            <div className="px-2 py-1 bg-muted/30 rounded text-[6px] text-muted-foreground border border-border/30">
              Snooze 1hr
            </div>
          </div>
        </div>
      </div>
      
      {/* Time indicator */}
      <div className="mt-3 pt-2 border-t border-border/30 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-[6px] text-amber-400">Due in 30 minutes</span>
      </div>
    </div>
  </div>
);

const TriggerAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-3">
      <div className="text-[8px] text-muted-foreground mb-3">Automation Rule</div>
      
      {/* If-Then display */}
      <div className="space-y-2">
        {/* IF condition */}
        <div className="flex items-center gap-2 p-2 bg-amber-500/10 rounded-lg border border-amber-500/30 animate-[triggerPulse_4s_ease-in-out_infinite]">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-[7px] text-amber-400 font-medium">IF</div>
            <div className="text-[7px] text-foreground/80">Meeting is booked</div>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-0.5 h-3 bg-gradient-to-b from-amber-500/40 to-emerald-500/40" />
        </div>
        
        {/* THEN actions */}
        <div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 animate-[triggerPulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <span className="text-[10px]">✓</span>
          </div>
          <div>
            <div className="text-[7px] text-emerald-400 font-medium">THEN</div>
            <div className="text-[7px] text-foreground/80">Send confirmation + Create task</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Marketing Animations
const EmailCampaignAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      {/* Email campaign preview */}
      <div className="flex items-start gap-4">
        {/* Email template */}
        <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-2">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/30">
            <div className="w-6 h-6 rounded bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
              <Mail className="w-3 h-3 text-orange-400" />
            </div>
            <div>
              <div className="text-[7px] font-medium text-foreground">March Newsletter</div>
              <div className="text-[5px] text-muted-foreground">To: 1,247 subscribers</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full bg-muted/30 rounded" />
            <div className="h-1.5 w-3/4 bg-muted/30 rounded" />
            <div className="h-1.5 w-5/6 bg-muted/30 rounded" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="w-20 space-y-2">
          <div className="bg-emerald-500/10 rounded-lg border border-emerald-500/30 p-2 animate-[statPop_3s_ease-in-out_infinite]">
            <div className="text-[6px] text-emerald-400 mb-0.5">Sent</div>
            <div className="text-[10px] font-bold text-emerald-400">1,247</div>
          </div>
          <div className="bg-primary/10 rounded-lg border border-primary/30 p-2 animate-[statPop_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
            <div className="text-[6px] text-primary mb-0.5">Opened</div>
            <div className="text-[10px] font-bold text-primary">42%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SMSAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex items-start gap-4">
        {/* Phone mockup */}
        <div className="w-24 bg-card/80 rounded-xl border border-border/50 p-2">
          <div className="h-1 w-8 mx-auto bg-muted/40 rounded mb-2" />
          <div className="space-y-1.5">
            <div className="ml-auto max-w-[80%] px-2 py-1 bg-orange-500/20 rounded-l-lg rounded-tr-lg animate-[smsSlide_4s_ease-out_infinite]">
              <div className="text-[6px] text-foreground/80">Your retirement review is tomorrow at 2pm!</div>
            </div>
            <div className="max-w-[60%] px-2 py-1 bg-muted/30 rounded-r-lg rounded-tl-lg animate-[smsSlide_4s_ease-out_infinite]" style={{ animationDelay: '1s' }}>
              <div className="text-[6px] text-foreground/60">Thanks! See you then</div>
            </div>
          </div>
        </div>
        
        {/* Campaign info */}
        <div className="flex-1">
          <div className="text-[8px] font-medium text-foreground mb-2">Appointment Reminder</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[6px] text-muted-foreground">98% delivery rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[6px] text-muted-foreground">A2P compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex items-center gap-4">
        {/* Central hub */}
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center animate-[hubGlow_3s_ease-in-out_infinite]">
            <Share2 className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        {/* Platform icons */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          {[
            { name: "LinkedIn", color: "bg-blue-500/20 border-blue-500/30 text-blue-400", delay: "0s" },
            { name: "Facebook", color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-400", delay: "0.3s" },
            { name: "Instagram", color: "bg-pink-500/20 border-pink-500/30 text-pink-400", delay: "0.6s" }
          ].map((platform) => (
            <div 
              key={platform.name}
              className={`p-2 rounded-lg border ${platform.color} animate-[platformPulse_3s_ease-in-out_infinite]`}
              style={{ animationDelay: platform.delay }}
            >
              <div className="text-[7px] font-medium mb-1">{platform.name}</div>
              <div className="text-[5px] opacity-70">Scheduled</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Analytics Animations
const DashboardAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[8px] font-medium text-foreground">Performance Overview</div>
        <div className="flex gap-1">
          <div className="px-1.5 py-0.5 bg-amber-500/20 rounded text-[6px] text-amber-400">This Month</div>
        </div>
      </div>
      
      {/* Chart area */}
      <div className="flex items-end gap-1.5 h-16 mb-2">
        {[
          { h: 40, label: "Jan" },
          { h: 55, label: "Feb" },
          { h: 35, label: "Mar" },
          { h: 70, label: "Apr" },
          { h: 85, label: "May" },
          { h: 65, label: "Jun" }
        ].map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-gradient-to-t from-amber-500 to-amber-400/60 rounded-t animate-[barGrow_3s_ease-out_infinite]"
              style={{ 
                height: `${bar.h}%`,
                animationDelay: `${i * 0.15}s`
              }}
            />
            <span className="text-[5px] text-muted-foreground">{bar.label}</span>
          </div>
        ))}
      </div>
      
      {/* Stats row */}
      <div className="flex gap-2">
        <div className="flex-1 bg-amber-500/10 rounded px-2 py-1 border border-amber-500/20 animate-[statPop_3s_ease-in-out_infinite]">
          <div className="text-[5px] text-amber-400/70">Revenue</div>
          <div className="text-[9px] font-bold text-amber-400">$47,200</div>
        </div>
        <div className="flex-1 bg-emerald-500/10 rounded px-2 py-1 border border-emerald-500/20 animate-[statPop_3s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}>
          <div className="text-[5px] text-emerald-400/70">New Clients</div>
          <div className="text-[9px] font-bold text-emerald-400">+12</div>
        </div>
      </div>
    </div>
  </div>
);

const ReportsAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex gap-4">
        {/* Pie chart */}
        <div className="relative w-20 h-20 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" opacity="0.2" />
            <circle 
              cx="18" cy="18" r="15.9" fill="none" 
              stroke="hsl(45 93% 47%)" strokeWidth="3"
              strokeDasharray="45 55" strokeDashoffset="0"
              className="animate-[pieSlice1_4s_ease-out_infinite]"
            />
            <circle 
              cx="18" cy="18" r="15.9" fill="none" 
              stroke="hsl(160 84% 39%)" strokeWidth="3"
              strokeDasharray="30 70" strokeDashoffset="-45"
              className="animate-[pieSlice2_4s_ease-out_infinite]"
            />
            <circle 
              cx="18" cy="18" r="15.9" fill="none" 
              stroke="hsl(217 91% 60%)" strokeWidth="3"
              strokeDasharray="25 75" strokeDashoffset="-75"
              className="animate-[pieSlice3_4s_ease-out_infinite]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[10px] font-bold text-foreground">$125K</div>
              <div className="text-[5px] text-muted-foreground">Total</div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="text-[8px] font-medium text-foreground mb-1">Revenue by Source</div>
          {[
            { label: "Retainer Clients", value: "45%", color: "bg-amber-500" },
            { label: "New Clients", value: "30%", color: "bg-emerald-500" },
            { label: "One-time", value: "25%", color: "bg-primary" }
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 animate-[legendSlide_4s_ease-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className={`w-2 h-2 rounded-sm ${item.color}`} />
              <span className="text-[6px] text-foreground/70 flex-1">{item.label}</span>
              <span className="text-[7px] font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AttributionAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="text-[8px] font-medium text-foreground mb-3">Lead Source Attribution</div>
      
      <div className="space-y-2.5">
        {[
          { label: "Email Campaigns", value: 42, count: "156 leads", color: "from-primary to-cyan-400" },
          { label: "Social Media", value: 28, count: "104 leads", color: "from-pink-500 to-rose-400" },
          { label: "Client Referrals", value: 18, count: "67 leads", color: "from-emerald-500 to-teal-400" },
          { label: "Website Forms", value: 12, count: "45 leads", color: "from-amber-500 to-yellow-400" }
        ].map((item, i) => (
          <div key={item.label} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[6px] text-foreground/70">{item.label}</span>
              <span className="text-[6px] text-muted-foreground">{item.count}</span>
            </div>
            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${item.color} rounded-full animate-[attrBar_3s_ease-out_infinite]`}
                style={{ 
                  width: `${item.value}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Payments & Documents Animations
const InvoiceAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex gap-4">
        {/* Invoice preview */}
        <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center">
                <Receipt className="w-3 h-3 text-violet-400" />
              </div>
              <div>
                <div className="text-[7px] font-medium text-foreground">Invoice #1247</div>
                <div className="text-[5px] text-muted-foreground">Feb 15, 2026</div>
              </div>
            </div>
            <div className="px-1.5 py-0.5 bg-emerald-500/20 rounded text-[6px] text-emerald-400 animate-[statusPulse_2s_ease-in-out_infinite]">
              Paid
            </div>
          </div>
          
          <div className="space-y-1 mb-2">
            <div className="flex justify-between text-[6px]">
              <span className="text-muted-foreground">Financial Planning</span>
              <span className="text-foreground">$2,500</span>
            </div>
            <div className="flex justify-between text-[6px]">
              <span className="text-muted-foreground">Tax Consultation</span>
              <span className="text-foreground">$500</span>
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-1 flex justify-between">
            <span className="text-[7px] font-medium text-foreground">Total</span>
            <span className="text-[8px] font-bold text-violet-400">$3,000</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="w-20 space-y-2">
          <div className="bg-violet-500/10 rounded-lg border border-violet-500/30 p-2 animate-[statPop_3s_ease-in-out_infinite]">
            <div className="text-[5px] text-violet-400/70">Monthly</div>
            <div className="text-[9px] font-bold text-violet-400">$12.4K</div>
          </div>
          <div className="bg-emerald-500/10 rounded-lg border border-emerald-500/30 p-2 animate-[statPop_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
            <div className="text-[5px] text-emerald-400/70">Paid</div>
            <div className="text-[9px] font-bold text-emerald-400">98%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DocumentAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="text-[8px] font-medium text-foreground mb-3">Document Templates</div>
      
      <div className="flex gap-3">
        {/* Template cards */}
        {[
          { name: "Onboarding Packet", icon: FileText, status: "Sent", color: "violet" },
          { name: "Quarterly Review", icon: PieChart, status: "Draft", color: "amber" },
          { name: "Planning Agreement", icon: FileSignature, status: "Signed", color: "emerald" }
        ].map((doc, i) => (
          <div 
            key={doc.name}
            className={`flex-1 bg-card/50 rounded-lg border p-2 animate-[docSlide_4s_ease-out_infinite] ${
              doc.color === 'violet' ? 'border-violet-500/30' :
              doc.color === 'amber' ? 'border-amber-500/30' : 'border-emerald-500/30'
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className={`w-6 h-6 rounded mb-1.5 flex items-center justify-center ${
              doc.color === 'violet' ? 'bg-violet-500/20' :
              doc.color === 'amber' ? 'bg-amber-500/20' : 'bg-emerald-500/20'
            }`}>
              <doc.icon className={`w-3 h-3 ${
                doc.color === 'violet' ? 'text-violet-400' :
                doc.color === 'amber' ? 'text-amber-400' : 'text-emerald-400'
              }`} />
            </div>
            <div className="text-[6px] font-medium text-foreground mb-0.5 leading-tight">{doc.name}</div>
            <div className={`text-[5px] ${
              doc.color === 'violet' ? 'text-violet-400' :
              doc.color === 'amber' ? 'text-amber-400' : 'text-emerald-400'
            }`}>{doc.status}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ESignatureAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-4">
      <div className="flex gap-4">
        {/* Contract preview */}
        <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-3">
          <div className="text-[8px] font-medium text-foreground mb-2">Financial Planning Agreement</div>
          
          <div className="space-y-1 mb-3">
            <div className="h-1 w-full bg-muted/30 rounded" />
            <div className="h-1 w-3/4 bg-muted/30 rounded" />
            <div className="h-1 w-5/6 bg-muted/30 rounded" />
            <div className="h-1 w-2/3 bg-muted/30 rounded" />
          </div>
          
          {/* Signature area */}
          <div className="border-t border-dashed border-violet-500/40 pt-2">
            <div className="text-[5px] text-muted-foreground mb-1">Client Signature</div>
            <div className="h-6 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 24">
                <path
                  d="M5,18 C15,8 25,20 35,12 S55,8 65,14 S85,10 95,16"
                  fill="none"
                  stroke="hsl(263 70% 60%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-[signatureDraw_3s_ease-out_infinite]"
                  strokeDasharray="120"
                  strokeDashoffset="120"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Status */}
        <div className="w-20 flex flex-col justify-center gap-2">
          <div className="bg-violet-500/10 rounded-lg border border-violet-500/30 p-2 animate-[signStatus_3s_ease-out_infinite]">
            <FileSignature className="w-4 h-4 text-violet-400 mb-1" />
            <div className="text-[6px] text-violet-400 font-medium">Signed!</div>
          </div>
          <div className="text-[5px] text-muted-foreground text-center">
            Legally binding • Timestamped
          </div>
        </div>
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
