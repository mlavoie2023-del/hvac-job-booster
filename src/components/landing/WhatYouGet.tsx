import { useState, useEffect, useRef } from "react";
import { 
  Workflow, 
  FileText, 
  Calendar, 
  Inbox, 
  BarChart3, 
  Share2,
  Zap,
  Megaphone,
  Send,
  MousePointerClick,
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
  Clock,
  MessageSquare,
  Phone,
  Globe,
  ClipboardCheck,
  Filter,
  Linkedin
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
      {/* Browser chrome */}
      <div className="h-5 bg-muted/40 border-b border-border/30 flex items-center px-2 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[7px] text-muted-foreground font-medium">Unified Inbox</span>
      </div>
      
      {/* SMS Row - slides in first */}
      <div 
        className="absolute left-2 right-2 opacity-0" 
        style={{ 
          top: '28px', 
          animation: 'inboxRowSlideIn 8s ease-out infinite backwards',
          animationDelay: '0.5s'
        }}
      >
        <div className="flex items-center gap-2 h-6 bg-emerald-500/20 rounded-lg border border-emerald-500/30 px-2">
          <div className="w-4 h-4 rounded bg-emerald-500/30 flex items-center justify-center">
            <MessageSquare className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[6px] font-medium text-foreground/80 truncate">John Davidson</div>
            <div className="text-[5px] text-muted-foreground truncate">Thanks for the call yesterday!</div>
          </div>
          <span className="text-[6px] font-medium text-emerald-400 flex-shrink-0">SMS</span>
        </div>
      </div>
      
      {/* Email Row - slides in second */}
      <div 
        className="absolute left-2 right-2 opacity-0" 
        style={{ 
          top: '58px', 
          animation: 'inboxRowSlideIn 8s ease-out infinite backwards',
          animationDelay: '1.3s'
        }}
      >
        <div className="flex items-center gap-2 h-6 bg-primary/20 rounded-lg border border-primary/30 px-2">
          <div className="w-4 h-4 rounded bg-primary/30 flex items-center justify-center">
            <Mail className="w-2.5 h-2.5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[6px] font-medium text-foreground/80 truncate">Sarah Kim</div>
            <div className="text-[5px] text-muted-foreground truncate">Re: Portfolio Review Meeting</div>
          </div>
          <span className="text-[6px] font-medium text-primary flex-shrink-0">Email</span>
        </div>
      </div>
      
      {/* LinkedIn Row - slides in third */}
      <div 
        className="absolute left-2 right-2 opacity-0" 
        style={{ 
          top: '88px', 
          animation: 'inboxRowSlideIn 8s ease-out infinite backwards',
          animationDelay: '2.1s'
        }}
      >
        <div className="flex items-center gap-2 h-6 bg-blue-500/20 rounded-lg border border-blue-500/30 px-2">
          <div className="w-4 h-4 rounded bg-blue-600/40 flex items-center justify-center">
            <Linkedin className="w-2.5 h-2.5 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[6px] font-medium text-foreground/80 truncate">Mike Chen</div>
            <div className="text-[5px] text-muted-foreground truncate">I'd love to connect about...</div>
          </div>
          <span className="text-[6px] font-medium text-blue-400 flex-shrink-0">LinkedIn</span>
        </div>
      </div>
      
      <style>{`
        @keyframes inboxRowSlideIn {
          0% { opacity: 0; transform: translateX(-20px); }
          6% { opacity: 1; transform: translateX(0); }
          80% { opacity: 1; transform: translateX(0); }
          90%, 100% { opacity: 0; transform: translateX(-20px); }
        }
      `}</style>
    </div>
  </div>
);

const ContactAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3">
      {/* Header with avatar */}
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center opacity-0"
          style={{ animation: 'contactReveal 8s ease-out infinite backwards', animationDelay: '0.5s' }}
        >
          <span className="text-sm font-bold text-primary">JD</span>
        </div>
        <div className="opacity-0" style={{ animation: 'contactReveal 8s ease-out infinite backwards', animationDelay: '0.8s' }}>
          <div className="text-[10px] font-medium text-foreground overflow-hidden whitespace-nowrap">
            <span className="inline-block opacity-0" style={{ animation: 'typeReveal 8s steps(14) infinite backwards', animationDelay: '0.9s' }}>John Davidson</span>
          </div>
          <div className="text-[8px] text-muted-foreground overflow-hidden whitespace-nowrap">
            <span className="inline-block opacity-0" style={{ animation: 'typeReveal 8s steps(18) infinite backwards', animationDelay: '1.3s' }}>Pre-Retiree • Age 58</span>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-1.5 mb-3">
        <div 
          className="px-2 py-0.5 bg-emerald-500/20 rounded text-[7px] text-emerald-400 opacity-0"
          style={{ animation: 'tagReveal 8s ease-out infinite backwards', animationDelay: '1.7s' }}
        >
          Active Client
        </div>
        <div 
          className="px-2 py-0.5 bg-primary/20 rounded text-[7px] text-primary opacity-0"
          style={{ animation: 'tagReveal 8s ease-out infinite backwards', animationDelay: '2s' }}
        >
          $1.2M AUM
        </div>
      </div>
      
      {/* Notes section */}
      <div 
        className="bg-muted/30 rounded p-2 border border-border/30 opacity-0"
        style={{ animation: 'contactReveal 8s ease-out infinite backwards', animationDelay: '2.3s' }}
      >
        <div className="text-[7px] text-muted-foreground mb-1.5 font-medium">Financial Goals</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <div 
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0"
              style={{ animation: 'dotPop 8s ease-out infinite backwards', animationDelay: '2.7s' }}
            />
            <span 
              className="text-[7px] text-foreground/70 overflow-hidden whitespace-nowrap opacity-0"
              style={{ animation: 'goalReveal 8s ease-out infinite backwards', animationDelay: '2.8s' }}
            >
              Retire at 62 with $80K/year
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div 
              className="w-1.5 h-1.5 rounded-full bg-primary opacity-0"
              style={{ animation: 'dotPop 8s ease-out infinite backwards', animationDelay: '3.3s' }}
            />
            <span 
              className="text-[7px] text-foreground/70 overflow-hidden whitespace-nowrap opacity-0"
              style={{ animation: 'goalReveal 8s ease-out infinite backwards', animationDelay: '3.4s' }}
            >
              Estate planning for 2 children
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes contactReveal {
        0% { opacity: 0; transform: scale(0.95); }
        8%, 80% { opacity: 1; transform: scale(1); }
        92%, 100% { opacity: 0; transform: scale(0.95); }
      }
      @keyframes typeReveal {
        0% { opacity: 0; max-width: 0; }
        8% { opacity: 1; max-width: 0; }
        25%, 80% { opacity: 1; max-width: 200px; }
        92%, 100% { opacity: 0; max-width: 200px; }
      }
      @keyframes tagReveal {
        0% { opacity: 0; transform: scale(0.8); }
        10%, 80% { opacity: 1; transform: scale(1); }
        92%, 100% { opacity: 0; transform: scale(0.8); }
      }
      @keyframes dotPop {
        0% { opacity: 0; transform: scale(0); }
        10%, 80% { opacity: 1; transform: scale(1); }
        92%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes goalReveal {
        0% { opacity: 0; max-width: 0; }
        8% { opacity: 1; max-width: 0; }
        30%, 80% { opacity: 1; max-width: 200px; }
        92%, 100% { opacity: 0; max-width: 200px; }
      }
    `}</style>
  </div>
);

const PipelineAnimation = () => {
  return (
    <div className="relative h-40 flex items-center justify-center p-2">
      <style>{`
        /* J. Davidson: Meeting -> Won (stacks below M. Chen at position 1) */
        @keyframes jdMove {
          0%, 25% { left: calc(33.33% + 4px); top: 0; }
          35%, 100% { left: calc(66.66% + 8px); top: 34px; }
        }
        @keyframes jdToGreen {
          0%, 30% { background: linear-gradient(135deg, #3b82f6, #2563eb); }
          35%, 100% { background: #10b981; }
        }
        @keyframes jdCardToGreen {
          0%, 30% { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.4); }
          35%, 100% { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        }
        @keyframes jdShowCheck {
          0%, 30% { opacity: 0; transform: scale(0); }
          35%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes jdHideInitials {
          0%, 30% { opacity: 1; }
          35%, 100% { opacity: 0; }
        }
        @keyframes jdStatusText {
          0%, 30% { opacity: 1; }
          35%, 100% { opacity: 0; }
        }
        @keyframes jdWonText {
          0%, 30% { opacity: 0; }
          35%, 100% { opacity: 1; }
        }

        /* S. Kim: Lead -> Meeting -> Won (stacks below J. Davidson at position 2) */
        @keyframes skMove {
          0%, 40% { left: 0; top: 0; }
          50%, 70% { left: calc(33.33% + 4px); top: 0; }
          80%, 100% { left: calc(66.66% + 8px); top: 68px; }
        }
        @keyframes skAvatar {
          0%, 45% { background: linear-gradient(135deg, #94a3b8, #64748b); }
          50%, 75% { background: linear-gradient(135deg, #3b82f6, #2563eb); }
          80%, 100% { background: #10b981; }
        }
        @keyframes skCard {
          0%, 45% { background: rgba(15, 23, 42, 0.6); border-color: rgba(148, 163, 184, 0.3); }
          50%, 75% { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.4); }
          80%, 100% { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        }
        @keyframes skShowCheck {
          0%, 75% { opacity: 0; transform: scale(0); }
          80%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes skHideInitials {
          0%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes skStatusText {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes skMeetingText {
          0%, 45% { opacity: 0; }
          50%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes skWonText {
          0%, 75% { opacity: 0; }
          80%, 100% { opacity: 1; }
        }
      `}</style>
      <div className="w-full h-full bg-card/40 rounded-lg border border-border/40 overflow-hidden">
        {/* Header */}
        <div className="h-5 bg-muted/30 border-b border-border/30 flex items-center px-2">
          <span className="text-[7px] text-muted-foreground font-medium">Sales Pipeline</span>
        </div>
        
        {/* Pipeline columns */}
        <div className="flex h-[calc(100%-20px)] relative">
          {/* Lead Column */}
          <div className="flex-1 border-r border-border/20 p-1.5">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[7px] font-medium text-foreground/80">Lead</span>
            </div>
          </div>
          
          {/* Meeting Column */}
          <div className="flex-1 border-r border-border/20 p-1.5">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span className="text-[7px] font-medium text-foreground/80">Meeting</span>
            </div>
          </div>
          
          {/* Won Column */}
          <div className="flex-1 p-1.5">
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[7px] font-medium text-foreground/80">Won</span>
            </div>
          </div>

          {/* Animated cards container - positioned absolutely */}
          <div className="absolute inset-0 top-5 p-1.5">
            {/* M. Chen - Static at TOP of Won column (always there) */}
            <div 
              className="absolute rounded p-1.5 border w-[calc(33.33%-8px)] bg-emerald-500/10 border-emerald-500/30"
              style={{ left: 'calc(66.66% + 8px)', top: '0' }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-[7px] text-white">✓</span>
                </div>
                <div>
                  <div className="text-[6px] font-medium text-foreground/80">M. Chen</div>
                  <div className="text-[5px] text-emerald-400">$850K signed</div>
                </div>
              </div>
            </div>

            {/* J. Davidson - starts in Meeting, moves to Won (below M. Chen) */}
            <div 
              className="absolute rounded p-1.5 border w-[calc(33.33%-8px)]"
              style={{ animation: 'jdMove 10s ease-in-out infinite, jdCardToGreen 10s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-1.5">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center relative"
                  style={{ animation: 'jdToGreen 10s ease-in-out infinite' }}
                >
                  <span 
                    className="text-[6px] font-bold text-white absolute"
                    style={{ animation: 'jdHideInitials 10s ease-in-out infinite' }}
                  >JD</span>
                  <span 
                    className="text-[7px] text-white absolute"
                    style={{ animation: 'jdShowCheck 10s ease-in-out infinite' }}
                  >✓</span>
                </div>
                <div>
                  <div className="text-[6px] font-medium text-foreground/80">J. Davidson</div>
                  <div className="text-[5px] relative h-3">
                    <span style={{ animation: 'jdStatusText 10s ease-in-out infinite' }} className="text-primary absolute">Call scheduled</span>
                    <span style={{ animation: 'jdWonText 10s ease-in-out infinite' }} className="text-emerald-400 absolute">$1.2M signed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* S. Kim - starts in Lead, moves to Meeting, then to Won (below J. Davidson) */}
            <div 
              className="absolute rounded p-1.5 border w-[calc(33.33%-8px)]"
              style={{ animation: 'skMove 10s ease-in-out infinite, skCard 10s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-1.5">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center relative"
                  style={{ animation: 'skAvatar 10s ease-in-out infinite' }}
                >
                  <span 
                    className="text-[6px] font-bold text-white absolute"
                    style={{ animation: 'skHideInitials 10s ease-in-out infinite' }}
                  >SK</span>
                  <span 
                    className="text-[7px] text-white absolute"
                    style={{ animation: 'skShowCheck 10s ease-in-out infinite' }}
                  >✓</span>
                </div>
                <div>
                  <div className="text-[6px] font-medium text-foreground/80">S. Kim</div>
                  <div className="text-[5px] relative h-3">
                    <span style={{ animation: 'skStatusText 10s ease-in-out infinite' }} className="text-slate-400 absolute">New inquiry</span>
                    <span style={{ animation: 'skMeetingText 10s ease-in-out infinite' }} className="text-cyan-400 absolute">Call scheduled</span>
                    <span style={{ animation: 'skWonText 10s ease-in-out infinite' }} className="text-emerald-400 absolute">$720K signed</span>
                  </div>
                </div>
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
    <style>{`
      @keyframes stepComplete1 {
        0%, 10% { opacity: 0.4; }
        15%, 100% { opacity: 1; }
      }
      @keyframes stepCheck1 {
        0%, 12% { opacity: 0; transform: scale(0); }
        18%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete2 {
        0%, 30% { opacity: 0.4; }
        35%, 100% { opacity: 1; }
      }
      @keyframes stepCheck2 {
        0%, 32% { opacity: 0; transform: scale(0); }
        38%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete3 {
        0%, 50% { opacity: 0.4; }
        55%, 100% { opacity: 1; }
      }
      @keyframes stepCheck3 {
        0%, 52% { opacity: 0; transform: scale(0); }
        58%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete4 {
        0%, 70% { opacity: 0.4; }
        75%, 100% { opacity: 1; }
      }
      @keyframes stepCheck4 {
        0%, 72% { opacity: 0; transform: scale(0); }
        78%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes progressFill {
        0% { width: 0; }
        80%, 100% { width: 100%; }
      }
    `}</style>
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-2">
      {/* Progress bar */}
      <div className="h-0.5 bg-muted/30 rounded-full mb-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full"
          style={{ animation: 'progressFill 6s ease-out infinite' }}
        />
      </div>
      
      {/* Vertical steps */}
      <div className="space-y-1">
        {/* Step 1 - Email */}
        <div 
          className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-primary/5 border border-primary/20"
          style={{ animation: 'stepComplete1 6s ease-out infinite' }}
        >
          <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
            <Mail className="w-2.5 h-2.5 text-primary" />
          </div>
          <span className="text-[6px] text-foreground/80 flex-1">Welcome Email</span>
          <span className="text-[5px] text-emerald-400" style={{ animation: 'stepCheck1 6s ease-out infinite' }}>✓</span>
        </div>
        
        {/* Step 2 - Wait */}
        <div 
          className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-amber-500/5 border border-amber-500/20"
          style={{ animation: 'stepComplete2 6s ease-out infinite' }}
        >
          <div className="w-4 h-4 rounded bg-amber-500/20 flex items-center justify-center">
            <Clock className="w-2.5 h-2.5 text-amber-400" />
          </div>
          <span className="text-[6px] text-foreground/80 flex-1">Wait 2 Days</span>
          <span className="text-[5px] text-emerald-400" style={{ animation: 'stepCheck2 6s ease-out infinite' }}>✓</span>
        </div>
        
        {/* Step 3 - SMS */}
        <div 
          className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-emerald-500/5 border border-emerald-500/20"
          style={{ animation: 'stepComplete3 6s ease-out infinite' }}
        >
          <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center">
            <MessageSquare className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <span className="text-[6px] text-foreground/80 flex-1">Follow-up SMS</span>
          <span className="text-[5px] text-emerald-400" style={{ animation: 'stepCheck3 6s ease-out infinite' }}>✓</span>
        </div>
        
        {/* Step 4 - Call */}
        <div 
          className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-pink-500/5 border border-pink-500/20"
          style={{ animation: 'stepComplete4 6s ease-out infinite' }}
        >
          <div className="w-4 h-4 rounded bg-pink-500/20 flex items-center justify-center">
            <Phone className="w-2.5 h-2.5 text-pink-400" />
          </div>
          <span className="text-[6px] text-foreground/80 flex-1">Schedule Call</span>
          <span className="text-[5px] text-emerald-400" style={{ animation: 'stepCheck4 6s ease-out infinite' }}>✓</span>
        </div>
      </div>
    </div>
  </div>
);

const AppointmentRemindersAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <style>{`
      @keyframes reminderNode1 {
        0%, 10% { opacity: 0.3; transform: scale(0.95); }
        15%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck1 {
        0%, 15% { opacity: 0; transform: scale(0); }
        20%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderNode2 {
        0%, 35% { opacity: 0.3; transform: scale(0.95); }
        40%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck2 {
        0%, 40% { opacity: 0; transform: scale(0); }
        45%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderNode3 {
        0%, 60% { opacity: 0.3; transform: scale(0.95); }
        65%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck3 {
        0%, 65% { opacity: 0; transform: scale(0); }
        70%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes timelineFill {
        0% { height: 0; }
        70%, 100% { height: 100%; }
      }
    `}</style>
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3">
      {/* Meeting header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
        <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Calendar className="w-4 h-4 text-primary" />
        </div>
        <div>
          <div className="text-[8px] font-semibold text-foreground">Meeting with John Davidson</div>
          <div className="text-[6px] text-muted-foreground">Tomorrow at 2:00 PM</div>
        </div>
      </div>
      
      {/* Timeline of reminders */}
      <div className="relative pl-4">
        {/* Timeline line */}
        <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-border/30">
          <div 
            className="w-full bg-gradient-to-b from-primary via-emerald-500 to-emerald-500"
            style={{ animation: 'timelineFill 6s ease-out infinite' }}
          />
        </div>
        
        {/* 24 hours before - Email */}
        <div 
          className="relative flex items-center gap-2 mb-2"
          style={{ animation: 'reminderNode1 6s ease-out infinite' }}
        >
          <div className="absolute -left-3 w-2 h-2 rounded-full bg-primary border-2 border-card" />
          <div className="w-32 flex items-center justify-between gap-1.5 px-2 py-1 bg-primary/10 rounded border border-primary/30">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-primary" />
              <span className="text-[6px] text-foreground/80">24h before</span>
            </div>
            <span 
              className="text-[6px] text-emerald-400"
              style={{ animation: 'reminderCheck1 6s ease-out infinite' }}
            >✓ Sent</span>
          </div>
        </div>
        
        {/* 2 hours before - SMS */}
        <div 
          className="relative flex items-center gap-2 mb-2"
          style={{ animation: 'reminderNode2 6s ease-out infinite' }}
        >
          <div className="absolute -left-3 w-2 h-2 rounded-full bg-emerald-500 border-2 border-card" />
          <div className="w-32 flex items-center justify-between gap-1.5 px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/30">
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span className="text-[6px] text-foreground/80">2h before</span>
            </div>
            <span 
              className="text-[6px] text-emerald-400"
              style={{ animation: 'reminderCheck2 6s ease-out infinite' }}
            >✓ Sent</span>
          </div>
        </div>
        
        {/* 15 minutes before - Final SMS */}
        <div 
          className="relative flex items-center gap-2"
          style={{ animation: 'reminderNode3 6s ease-out infinite' }}
        >
          <div className="absolute -left-3 w-2 h-2 rounded-full bg-emerald-500 border-2 border-card" />
          <div className="w-32 flex items-center justify-between gap-1.5 px-2 py-1 bg-emerald-500/10 rounded border border-emerald-500/30">
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span className="text-[6px] text-foreground/80">15m before</span>
            </div>
            <span 
              className="text-[6px] text-emerald-400"
              style={{ animation: 'reminderCheck3 6s ease-out infinite' }}
            >✓ Sent</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ReferralRequestsAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <style>{`
      @keyframes referralSend {
        0%, 10% { opacity: 0; transform: translateX(-10px); }
        20%, 100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes referralForm {
        0%, 30% { opacity: 0; transform: translateY(5px); }
        40%, 100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes referralSuccess {
        0%, 55% { opacity: 0; transform: scale(0.8); }
        65%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes referralCount {
        0%, 70% { opacity: 0; }
        80%, 100% { opacity: 1; }
      }
    `}</style>
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
            <Users className="w-3 h-3 text-pink-400" />
          </div>
          <span className="text-[8px] font-medium text-foreground">Referral Campaign</span>
        </div>
        <div 
          className="px-1.5 py-0.5 bg-emerald-500/20 rounded text-[6px] text-emerald-400"
          style={{ animation: 'referralCount 6s ease-out infinite' }}
        >
          +3 this week
        </div>
      </div>
      
      {/* Request sent */}
      <div 
        className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg border border-primary/30 mb-2"
        style={{ animation: 'referralSend 6s ease-out infinite' }}
      >
        <Mail className="w-4 h-4 text-primary" />
        <div className="flex-1">
          <div className="text-[7px] text-foreground/80">Request sent to John D.</div>
          <div className="text-[5px] text-muted-foreground">"Know anyone who could benefit?"</div>
        </div>
        <span className="text-[6px] text-primary">✓</span>
      </div>
      
      {/* Referral form submission */}
      <div 
        className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30"
        style={{ animation: 'referralForm 6s ease-out infinite' }}
      >
        <div className="w-4 h-4 rounded-full bg-emerald-500/30 flex items-center justify-center">
          <span className="text-[6px] font-bold text-emerald-400">S</span>
        </div>
        <div className="flex-1">
          <div className="text-[7px] text-foreground/80">Sarah Mitchell submitted</div>
          <div className="text-[5px] text-muted-foreground">Referred by John Davidson</div>
        </div>
        <div 
          className="px-1.5 py-0.5 bg-emerald-500/30 rounded text-[5px] text-emerald-400"
          style={{ animation: 'referralSuccess 6s ease-out infinite' }}
        >
          New Lead
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
              <div className="text-[6px] text-foreground/80">Hey! It's time for your annual review. Let's schedule a call!</div>
            </div>
            <div className="max-w-[60%] px-2 py-1 bg-muted/30 rounded-r-lg rounded-tl-lg animate-[smsSlide_4s_ease-out_infinite]" style={{ animationDelay: '1s' }}>
              <div className="text-[6px] text-foreground/60">Sounds great, I'm free next week!</div>
            </div>
          </div>
        </div>
        
        {/* Campaign info */}
        <div className="flex-1">
          <div className="text-[8px] font-medium text-foreground mb-2">Annual Review Reminder</div>
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
    <style>{`
      @keyframes aiTyping {
        0%, 100% { width: 0; }
        20%, 80% { width: 100%; }
      }
      @keyframes cursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @keyframes sendButtonPulse {
        0%, 70% { transform: scale(1); background: rgba(59, 130, 246, 0.3); }
        75% { transform: scale(1.1); background: rgba(59, 130, 246, 0.6); }
        80%, 100% { transform: scale(1); background: rgba(16, 185, 129, 0.4); }
      }
      @keyframes sendCheck {
        0%, 75% { opacity: 0; transform: scale(0); }
        80%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes sendArrow {
        0%, 75% { opacity: 1; }
        80%, 100% { opacity: 0; }
      }
      @keyframes platformNotify {
        0%, 80% { opacity: 0; transform: translateY(4px); }
        85%, 95% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-4px); }
      }
    `}</style>
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-3">
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-500 to-primary flex items-center justify-center">
          <span className="text-[6px]">✨</span>
        </div>
        <span className="text-[7px] font-medium text-foreground">AI Content Studio</span>
      </div>
      
      {/* AI Drafting Area */}
      <div className="bg-card/50 rounded-lg border border-border/50 p-2 mb-2">
        <div className="relative overflow-hidden">
          <div 
            className="text-[7px] text-foreground/80 whitespace-nowrap overflow-hidden"
            style={{ animation: 'aiTyping 6s ease-in-out infinite' }}
          >
            Planning for retirement? Here are 5 key strategies every pre-retiree should know...
          </div>
          <div 
            className="absolute right-0 top-0 w-0.5 h-3 bg-primary"
            style={{ animation: 'cursorBlink 0.8s step-end infinite' }}
          />
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          <div className="w-3 h-3 rounded bg-violet-500/20 flex items-center justify-center">
            <span className="text-[5px]">✨</span>
          </div>
          <span className="text-[5px] text-violet-400">AI Generated</span>
        </div>
      </div>
      
      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {/* LinkedIn */}
          <div className="relative px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20 flex items-center gap-1">
            <svg className="w-2 h-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-[5px] text-blue-400">LinkedIn</span>
            <div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ animation: 'platformNotify 6s ease-in-out infinite', animationDelay: '0s' }}
            >
              <span className="text-[4px] text-white">✓</span>
            </div>
          </div>
          
          {/* Facebook */}
          <div className="relative px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20 flex items-center gap-1">
            <svg className="w-2 h-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-[5px] text-blue-400">Facebook</span>
            <div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ animation: 'platformNotify 6s ease-in-out infinite', animationDelay: '0.1s' }}
            >
              <span className="text-[4px] text-white">✓</span>
            </div>
          </div>
          
          {/* Instagram */}
          <div className="relative px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20 flex items-center gap-1">
            <svg className="w-2 h-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="text-[5px] text-blue-400">Instagram</span>
            <div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ animation: 'platformNotify 6s ease-in-out infinite', animationDelay: '0.2s' }}
            >
              <span className="text-[4px] text-white">✓</span>
            </div>
          </div>
        </div>
        
        {/* Send Button */}
        <div 
          className="px-2 py-1 rounded-lg border border-primary/40 flex items-center gap-1 cursor-pointer"
          style={{ animation: 'sendButtonPulse 6s ease-in-out infinite' }}
        >
          <span className="text-[6px] font-medium text-primary">Post</span>
          <div className="relative w-2.5 h-2.5">
            <span 
              className="absolute inset-0 flex items-center justify-center text-[6px] text-primary"
              style={{ animation: 'sendArrow 6s ease-in-out infinite' }}
            >→</span>
            <span 
              className="absolute inset-0 flex items-center justify-center text-[6px] text-emerald-400"
              style={{ animation: 'sendCheck 6s ease-in-out infinite' }}
            >✓</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Analytics Animations
const DashboardAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <style>{`
      @keyframes lineReveal {
        0%, 5% { stroke-dashoffset: 200; }
        40%, 95% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 200; }
      }
      @keyframes dotPop {
        0%, 20% { opacity: 0; transform: scale(0); }
        30%, 90% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
      }
    `}</style>
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-medium text-foreground">Performance Overview</div>
        <div className="px-1.5 py-0.5 bg-amber-500/20 rounded text-[6px] text-amber-400">Past 6 Months</div>
      </div>
      
      {/* Chart area with two lines */}
      <div className="relative h-20 mb-2">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-border/20" />
          ))}
        </div>
        
        {/* SVG Line Chart */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          {/* Revenue line (amber) */}
          <path
            d="M 0 40 L 20 35 L 40 38 L 60 28 L 80 20 L 100 15"
            fill="none"
            stroke="hsl(45 93% 47%)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="200"
            style={{ animation: 'lineReveal 6s ease-in-out infinite' }}
          />
          {/* New Clients line (emerald) */}
          <path
            d="M 0 45 L 20 42 L 40 40 L 60 35 L 80 30 L 100 25"
            fill="none"
            stroke="hsl(160 84% 39%)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="200"
            style={{ animation: 'lineReveal 6s ease-in-out 0.3s infinite', strokeDashoffset: 200 }}
          />
        </svg>
        
        {/* X-axis labels */}
        <div className="absolute -bottom-3 left-0 right-0 flex justify-between text-[5px] text-muted-foreground">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex gap-3 pt-2 border-t border-border/20">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-0.5 bg-amber-500 rounded" />
          <span className="text-[6px] text-muted-foreground">Revenue</span>
          <span className="text-[7px] font-bold text-amber-400">$47.2K</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-0.5 bg-emerald-500 rounded" />
          <span className="text-[6px] text-muted-foreground">Clients</span>
          <span className="text-[7px] font-bold text-emerald-400">+12</span>
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
    <style>{`
      @keyframes attrSlideIn {
        0%, 2% { opacity: 0; transform: translateX(-20px); }
        8%, 85% { opacity: 1; transform: translateX(0); }
        92%, 100% { opacity: 0; transform: translateX(-20px); }
      }
      @keyframes attrCountUp {
        0%, 10% { opacity: 0; }
        15%, 85% { opacity: 1; }
        92%, 100% { opacity: 0; }
      }
      @keyframes attrCheckPop {
        0%, 12% { opacity: 0; transform: scale(0); }
        18%, 85% { opacity: 1; transform: scale(1); }
        92%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes attrTotalFade {
        0%, 50% { opacity: 0; }
        58%, 85% { opacity: 1; }
        92%, 100% { opacity: 0; }
      }
    `}</style>
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-medium text-foreground">Lead Source Attribution</div>
        <div className="px-1.5 py-0.5 bg-primary/20 rounded text-[6px] text-primary">This Quarter</div>
      </div>
      
      {/* Visual funnel-style sources */}
      <div className="space-y-1.5">
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-emerald-500/20 border-emerald-500/30"
          style={{ animation: 'attrSlideIn 6s ease-out infinite' }}
        >
          <Users className="w-3 h-3 text-emerald-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Client Referrals</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-emerald-400" style={{ animation: 'attrCountUp 6s ease-out 0.3s infinite' }}>12</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ animation: 'attrCheckPop 6s ease-out 0.4s infinite' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-primary/20 border-primary/30"
          style={{ animation: 'attrSlideIn 6s ease-out 0.5s infinite' }}
        >
          <Mail className="w-3 h-3 text-primary" />
          <span className="text-[7px] text-foreground/80 flex-1">Email Campaigns</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-primary" style={{ animation: 'attrCountUp 6s ease-out 0.8s infinite' }}>8</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ animation: 'attrCheckPop 6s ease-out 0.9s infinite' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-amber-500/20 border-amber-500/30"
          style={{ animation: 'attrSlideIn 6s ease-out 1s infinite' }}
        >
          <ClipboardCheck className="w-3 h-3 text-amber-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Website Forms</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-amber-400" style={{ animation: 'attrCountUp 6s ease-out 1.3s infinite' }}>6</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ animation: 'attrCheckPop 6s ease-out 1.4s infinite' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-pink-500/20 border-pink-500/30"
          style={{ animation: 'attrSlideIn 6s ease-out 1.5s infinite' }}
        >
          <Globe className="w-3 h-3 text-pink-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Social Media</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-pink-400" style={{ animation: 'attrCountUp 6s ease-out 1.8s infinite' }}>5</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ animation: 'attrCheckPop 6s ease-out 1.9s infinite' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
      </div>
      
      {/* Total */}
      <div 
        className="flex items-center justify-between mt-2 pt-2 border-t border-border/20"
        style={{ animation: 'attrTotalFade 6s ease-out infinite' }}
      >
        <span className="text-[6px] text-muted-foreground">Total New Leads</span>
        <span className="text-[9px] font-bold text-foreground">31 this quarter</span>
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

// Mobile App Animations

// Shared phone frame component for consistency
const PhoneFrame = ({ children, activeTab = 'inbox' }: { children: React.ReactNode; activeTab?: 'inbox' | 'contacts' | 'calendar' | 'notifications' }) => (
  <div className="relative w-[72px] h-[148px] bg-[#1a1a1a] rounded-[14px] border-2 border-[#2a2a2a] shadow-2xl overflow-hidden">
    {/* Dynamic Island */}
    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full z-20" />
    
    {/* Status bar */}
    <div className="h-5 bg-[#0a0a0a] flex items-end justify-between px-2 pb-0.5">
      <span className="text-[4px] text-white/60">9:41</span>
      <div className="flex items-center gap-0.5">
        <div className="w-2 h-1 border border-white/60 rounded-[1px]">
          <div className="w-1 h-full bg-emerald-400 rounded-[1px]" />
        </div>
      </div>
    </div>
    
    {/* App content */}
    <div className="h-[calc(100%-20px)] bg-[#0f0f0f] overflow-hidden relative">
      {children}
      
      {/* Bottom nav bar */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#1a1a1a] border-t border-white/10 flex items-center justify-around px-1.5">
        <Inbox className={`w-2.5 h-2.5 ${activeTab === 'inbox' ? 'text-primary' : 'text-white/40'}`} />
        <Users className={`w-2.5 h-2.5 ${activeTab === 'contacts' ? 'text-primary' : 'text-white/40'}`} />
        <Calendar className={`w-2.5 h-2.5 ${activeTab === 'calendar' ? 'text-primary' : 'text-white/40'}`} />
        <Bell className={`w-2.5 h-2.5 ${activeTab === 'notifications' ? 'text-primary' : 'text-white/40'}`} />
      </div>
    </div>
    
    {/* Home indicator */}
    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white/30 rounded-full" />
  </div>
);

// Animation 1: Push Notifications
const MobileNotificationsAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2">
    <PhoneFrame activeTab="notifications">
      <div className="px-1 py-1 pb-6">
        <div className="text-[5px] font-bold text-white mb-1.5">Notifications</div>
        
        {/* Notification stack */}
        <div className="space-y-1">
          <div 
            className="bg-primary/20 rounded p-1 border border-primary/30"
            style={{ animation: 'notifSlideDown 5s ease-out infinite' }}
          >
            <div className="flex items-start gap-1">
              <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-1.5 h-1.5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[4px] font-medium text-white truncate">New SMS</div>
                <div className="text-[3px] text-primary truncate">Thanks!</div>
              </div>
            </div>
          </div>
          
          <div 
            className="bg-emerald-500/20 rounded p-1 border border-emerald-500/30"
            style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '0.5s' }}
          >
            <div className="flex items-start gap-1">
              <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-1.5 h-1.5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[4px] font-medium text-white truncate">Meeting</div>
                <div className="text-[3px] text-emerald-400 truncate">Tomorrow</div>
              </div>
            </div>
          </div>
          
          <div 
            className="bg-amber-500/20 rounded p-1 border border-amber-500/30"
            style={{ animation: 'notifSlideDown 5s ease-out infinite', animationDelay: '1s' }}
          >
            <div className="flex items-start gap-1">
              <div className="w-3 h-3 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <Users className="w-1.5 h-1.5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[4px] font-medium text-white truncate">New Lead</div>
                <div className="text-[3px] text-amber-400 truncate">James K.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
    
    <style>{`
      @keyframes notifSlideDown {
        0%, 5% { opacity: 0; transform: translateY(-6px); }
        15%, 70% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(-6px); }
      }
    `}</style>
  </div>
);

// Animation 2: Quick Reply / Conversations
const MobileConversationsAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2">
    <PhoneFrame activeTab="inbox">
      <div className="px-1 py-1 pb-6 flex flex-col h-full">
        {/* Chat header */}
        <div className="flex items-center gap-1 mb-1.5 pb-1 border-b border-white/10">
          <div className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
            <span className="text-[4px] font-bold text-white">SK</span>
          </div>
          <div>
            <div className="text-[4px] font-medium text-white">Sarah Kim</div>
            <div className="text-[3px] text-emerald-400">Online</div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 space-y-0.5 overflow-hidden">
          <div 
            className="bg-muted/30 rounded px-1 py-0.5 max-w-[85%]"
            style={{ animation: 'msgSlide 6s ease-out infinite' }}
          >
            <div className="text-[4px] text-white/80">When can we meet?</div>
          </div>
          
          <div 
            className="bg-primary/30 rounded px-1 py-0.5 max-w-[85%] ml-auto"
            style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '0.8s' }}
          >
            <div className="text-[4px] text-white/80">Tomorrow at 2pm?</div>
          </div>
          
          <div 
            className="bg-muted/30 rounded px-1 py-0.5 max-w-[85%]"
            style={{ animation: 'msgSlide 6s ease-out infinite', animationDelay: '1.6s' }}
          >
            <div className="text-[4px] text-white/80">Perfect!</div>
          </div>
        </div>
        
        {/* Reply input */}
        <div 
          className="mt-0.5 flex items-center gap-0.5 bg-muted/20 rounded-full px-1 py-0.5"
          style={{ animation: 'replyType 6s ease-out infinite', animationDelay: '2.4s' }}
        >
          <div className="flex-1 text-[3px] text-white/40 overflow-hidden truncate">
            Sounds great!...
          </div>
          <Send className="w-2 h-2 text-primary" />
        </div>
      </div>
    </PhoneFrame>
    
    <style>{`
      @keyframes msgSlide {
        0%, 5% { opacity: 0; transform: translateY(4px); }
        12%, 75% { opacity: 1; transform: translateY(0); }
        85%, 100% { opacity: 0; transform: translateY(4px); }
      }
      @keyframes replyType {
        0%, 35% { opacity: 0; }
        45%, 75% { opacity: 1; }
        85%, 100% { opacity: 0; }
      }
    `}</style>
  </div>
);

// Animation 3: Pipeline View - Swipeable stages
const MobilePipelineAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2">
    <PhoneFrame activeTab="contacts">
      <div className="px-1 py-1 pb-6 h-full overflow-hidden">
        {/* Stage tabs */}
        <div className="flex gap-0.5 mb-1.5">
          <div 
            className="flex-1 text-center py-0.5 rounded text-[3px] font-medium"
            style={{ animation: 'stageActive1 6s ease-in-out infinite' }}
          >
            Leads
          </div>
          <div 
            className="flex-1 text-center py-0.5 rounded text-[3px] font-medium"
            style={{ animation: 'stageActive2 6s ease-in-out infinite' }}
          >
            Meeting
          </div>
          <div 
            className="flex-1 text-center py-0.5 rounded text-[3px] font-medium"
            style={{ animation: 'stageActive3 6s ease-in-out infinite' }}
          >
            Won
          </div>
        </div>
        
        {/* Swipeable content area */}
        <div className="relative h-[calc(100%-24px)] overflow-hidden">
          {/* Stage 1: Leads */}
          <div 
            className="absolute inset-0 space-y-0.5"
            style={{ animation: 'stageSwipe1 6s ease-in-out infinite' }}
          >
            <div className="bg-slate-800/60 rounded p-1 border border-slate-700/50">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-slate-600 flex items-center justify-center">
                  <span className="text-[4px] font-bold text-white">JK</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">James Kim</div>
                  <div className="text-[3px] text-slate-400">Website</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/60 rounded p-1 border border-slate-700/50">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-slate-600 flex items-center justify-center">
                  <span className="text-[4px] font-bold text-white">LP</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">Lisa Park</div>
                  <div className="text-[3px] text-slate-400">Referral</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stage 2: Meeting */}
          <div 
            className="absolute inset-0 space-y-0.5"
            style={{ animation: 'stageSwipe2 6s ease-in-out infinite' }}
          >
            <div className="bg-rose-500/20 rounded p-1 border border-rose-500/30">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-rose-500 flex items-center justify-center">
                  <span className="text-[4px] font-bold text-white">SD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">Sarah Davis</div>
                  <div className="text-[3px] text-rose-400">Today 2pm</div>
                </div>
              </div>
            </div>
            <div className="bg-rose-500/20 rounded p-1 border border-rose-500/30">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-rose-500 flex items-center justify-center">
                  <span className="text-[4px] font-bold text-white">TW</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">Tom Wilson</div>
                  <div className="text-[3px] text-rose-400">Tomorrow</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stage 3: Won */}
          <div 
            className="absolute inset-0 space-y-0.5"
            style={{ animation: 'stageSwipe3 6s ease-in-out infinite' }}
          >
            <div className="bg-emerald-500/20 rounded p-1 border border-emerald-500/30">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-[4px] text-white">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">Mike Chen</div>
                  <div className="text-[3px] text-emerald-400">$850K</div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-500/20 rounded p-1 border border-emerald-500/30">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-[4px] text-white">✓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[4px] font-medium text-white truncate">Amy Lee</div>
                  <div className="text-[3px] text-emerald-400">$1.2M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
    
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
    icon: Filter,
    title: "Lead Capture",
    color: "from-emerald-500 to-teal-500",
    features: [
      {
        icon: MousePointerClick,
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
        description: "Automate anything you can imagine with powerful workflows natively integrated with your entire business",
        animation: <WorkflowAnimation />
      },
      {
        icon: Clock,
        title: "Appointment Reminders",
        description: "Reduce no-shows with automated SMS and email reminders",
        animation: <AppointmentRemindersAnimation />
      },
      {
        icon: Users,
        title: "Referral Requests",
        description: "Generate more referrals with automated requests and easy submission forms",
        animation: <ReferralRequestsAnimation />
      }
    ]
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    color: "from-orange-500 to-red-500",
    features: [
      {
        icon: Send,
        title: "AI Powered Social Media Management",
        description: "Leverage AI to draft content and manage all platforms on one dashboard",
        animation: <SocialAnimation />
      },
      {
        icon: Mail,
        title: "Email Campaigns",
        description: "Newsletters, drip sequences, and broadcasts",
        animation: <EmailCampaignAnimation />
      },
      {
        icon: Smartphone,
        title: "SMS Campaigns",
        description: "Boost open rates with A2P compliant SMS marketing",
        animation: <SMSAnimation />
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
  },
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
      <span className="mt-3 text-[10px] lg:text-xs text-muted-foreground tracking-wide">
        One Platform
      </span>
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
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      
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
          <div className="flex gap-6 lg:gap-8 items-center">
            {/* Left Sidebar - Compact Category Icons */}
            <div className="w-24 lg:w-28 flex-shrink-0">
              {/* Category Icons - Vertical Stack */}
              <div className="space-y-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "w-full group relative flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-xl transition-all duration-300",
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
                        "relative w-11 h-11 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                        isActive 
                          ? `bg-gradient-to-br ${category.color} shadow-md` 
                          : "bg-muted/50 group-hover:bg-primary/20"
                      )}>
                        <category.icon className={cn(
                          "w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300",
                          isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                        )} />
                      </div>
                      
                      {/* Title */}
                      <span className={cn(
                        "text-[11px] lg:text-xs font-medium transition-colors text-center leading-tight",
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
                          {/* Content - Now on left */}
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
                          
                          {/* Animation area - Now on right */}
                          <div className="w-56 lg:w-72 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden border border-border/30">
                            <div className="transform scale-110 origin-center">
                              {feature.animation}
                            </div>
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
