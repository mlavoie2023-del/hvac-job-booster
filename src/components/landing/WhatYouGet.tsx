import { useState, useRef, useEffect } from "react";
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

// Animation duration in ms for each animation - tuned to when each animation actually finishes
const ANIMATION_DURATIONS: { [key: string]: number } = {
  // CRM animations
  "Unified Inbox": 3500,           // 3 rows slide in by 2.1s + buffer
  "Contact Management": 4000,      // Last element at 3.1s + buffer
  "Pipelines": 8000,               // 10s animation - S.Kim reaches Won at 75%
  
  // Lead Capture - shorter animations
  "Landing Pages": 4000,           // Cursor animation 3s
  "Forms": 5000,                   // Typing animation 4s
  "Calendar Scheduling": 5000,     // Calendar select + confirm 4s
  
  // Automation - 6s animations
  "Workflows": 5500,               // Progress fill + steps complete by 85%
  "Appointment Reminders": 5500,   // Timeline fill + checks by 78%
  "Referral Requests": 5000,       // Success appears at 70%
  
  // Marketing - 8s animations  
  "AI Powered Social Media Management": 6000, // Post fades in at 70%
  "Email Campaigns": 6500,         // Sent counter at 80%
  "SMS Campaigns": 6500,           // Delivery stats at 85%
  
  // Analytics - mixed durations
  "Dashboard": 5000,               // 6s lines reveal
  "Reports": 5000,                 // 4s pie animation
  "Campaign Attribution": 6000,    // Total fades at 90% of 8s
  
  // Payments & Documents - 8s animations
  "Invoicing & Subscriptions": 6000, // Sent badge at 75%
  "Documents": 6000,               // Sent badge at 75%
  "E-Signatures": 4500,            // 3s signature draw
  
  // Mobile - 5-6s animations
  "Push Notifications": 4000,      // 5s notification slide
  "Conversations": 5000,           // 6s message sequence
  "Pipeline View": 5000,           // 6s stage swipe
};

const getAnimationDuration = (featureTitle: string): number => {
  return ANIMATION_DURATIONS[featureTitle] || 5000; // default 5s
};

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
          15% { opacity: 1; transform: translateX(0); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  </div>
);

const ContactAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3">
    <style>{`
      @keyframes contactFadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes contactTagPop {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>
    <div className="w-full bg-card/50 rounded-lg border border-border/50 p-3">
      {/* Header with avatar */}
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center"
          style={{ opacity: 0, animation: 'contactFadeIn 0.5s ease-out 0.2s forwards' }}
        >
          <span className="text-sm font-bold text-primary">JD</span>
        </div>
        <div>
          <div 
            className="text-[10px] font-medium text-foreground"
            style={{ opacity: 0, animation: 'contactFadeIn 0.4s ease-out 0.5s forwards' }}
          >
            John Davidson
          </div>
          <div 
            className="text-[8px] text-muted-foreground"
            style={{ opacity: 0, animation: 'contactFadeIn 0.4s ease-out 0.7s forwards' }}
          >
            Pre-Retiree • Age 58
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex gap-1.5 mb-3">
        <div 
          className="px-2 py-0.5 bg-emerald-500/20 rounded text-[7px] text-emerald-400"
          style={{ opacity: 0, animation: 'contactTagPop 0.4s ease-out 1.2s forwards' }}
        >
          Active Client
        </div>
        <div 
          className="px-2 py-0.5 bg-primary/20 rounded text-[7px] text-primary"
          style={{ opacity: 0, animation: 'contactTagPop 0.4s ease-out 1.5s forwards' }}
        >
          $1.2M AUM
        </div>
      </div>
      
      {/* Notes section */}
      <div 
        className="bg-muted/30 rounded p-2 border border-border/30"
        style={{ opacity: 0, animation: 'contactFadeIn 0.5s ease-out 2s forwards' }}
      >
        <div className="text-[7px] text-muted-foreground mb-1.5 font-medium">Financial Goals</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <div 
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              style={{ opacity: 0, animation: 'contactTagPop 0.3s ease-out 2.5s forwards' }}
            />
            <span 
              className="text-[7px] text-foreground/70"
              style={{ opacity: 0, animation: 'contactFadeIn 0.4s ease-out 2.6s forwards' }}
            >
              Retire at 62 with $80K/year
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              style={{ opacity: 0, animation: 'contactTagPop 0.3s ease-out 3s forwards' }}
            />
            <span 
              className="text-[7px] text-foreground/70"
              style={{ opacity: 0, animation: 'contactFadeIn 0.4s ease-out 3.1s forwards' }}
            >
              Estate planning for 2 children
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PipelineAnimation = () => {
  return (
    <div className="relative h-40 flex items-center justify-center p-2">
      <style>{`
        /* J. Davidson: Meeting -> Won (stacks below M. Chen at position 1) */
        @keyframes jdMove {
          0%, 10% { left: calc(33.33% + 4px); top: 0; }
          25%, 100% { left: calc(66.66% + 8px); top: 34px; }
        }
        @keyframes jdToGreen {
          0%, 20% { background: linear-gradient(135deg, #3b82f6, #2563eb); }
          25%, 100% { background: #10b981; }
        }
        @keyframes jdCardToGreen {
          0%, 20% { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.4); }
          25%, 100% { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        }
        @keyframes jdShowCheck {
          0%, 20% { opacity: 0; transform: scale(0); }
          25%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes jdHideInitials {
          0%, 20% { opacity: 1; }
          25%, 100% { opacity: 0; }
        }
        @keyframes jdStatusText {
          0%, 20% { opacity: 1; }
          25%, 100% { opacity: 0; }
        }
        @keyframes jdWonText {
          0%, 20% { opacity: 0; }
          25%, 100% { opacity: 1; }
        }

        /* S. Kim: Lead -> Meeting -> Won (stacks below J. Davidson at position 2) */
        @keyframes skMove {
          0%, 30% { left: 0; top: 0; }
          45%, 60% { left: calc(33.33% + 4px); top: 0; }
          75%, 100% { left: calc(66.66% + 8px); top: 68px; }
        }
        @keyframes skAvatar {
          0%, 40% { background: linear-gradient(135deg, #94a3b8, #64748b); }
          45%, 70% { background: linear-gradient(135deg, #3b82f6, #2563eb); }
          75%, 100% { background: #10b981; }
        }
        @keyframes skCard {
          0%, 40% { background: rgba(15, 23, 42, 0.6); border-color: rgba(148, 163, 184, 0.3); }
          45%, 70% { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.4); }
          75%, 100% { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        }
        @keyframes skShowCheck {
          0%, 70% { opacity: 0; transform: scale(0); }
          75%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes skHideInitials {
          0%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes skStatusText {
          0%, 40% { opacity: 1; }
          45%, 100% { opacity: 0; }
        }
        @keyframes skMeetingText {
          0%, 40% { opacity: 0; }
          45%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes skWonText {
          0%, 70% { opacity: 0; }
          75%, 100% { opacity: 1; }
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
            
            {/* Animated cursor - starts farther away */}
            <div 
              className="absolute"
              style={{
                animation: 'landingCursorMove 3s ease-in-out forwards',
              }}
            >
              <MousePointer className="w-3 h-3 text-foreground fill-foreground/30" />
            </div>
          </div>
          
          <style>{`
            @keyframes landingCursorMove {
              0% { 
                opacity: 0;
                right: -80px;
                top: -50px;
              }
              15% {
                opacity: 1;
                right: -80px;
                top: -50px;
              }
              55% {
                opacity: 1;
                right: -1px;
                top: 1px;
              }
              65% {
                transform: scale(0.85);
              }
              75% {
                transform: scale(1);
              }
              100% {
                opacity: 1;
                right: -1px;
                top: 1px;
                transform: scale(1);
              }
            }
          `}</style>
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
    <style>{`
      @keyframes formTyping {
        0% { max-width: 0; }
        60% { max-width: 200px; }
        100% { max-width: 200px; }
      }
      @keyframes formCursorBlink {
        0%, 60% { opacity: 1; }
        61%, 100% { opacity: 0; }
      }
      @keyframes formSubmitClick {
        0%, 65% { transform: scale(1); background: rgba(16, 185, 129, 0.8); }
        70% { transform: scale(0.95); background: rgba(16, 185, 129, 1); }
        75%, 100% { transform: scale(1); background: rgba(16, 185, 129, 1); }
      }
      @keyframes formSubmitText {
        0%, 70% { opacity: 1; }
        75%, 100% { opacity: 0; }
      }
      @keyframes formSuccessText {
        0%, 72% { opacity: 0; transform: scale(0.8); }
        80%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes formSuccessCheck {
        0%, 75% { opacity: 0; transform: scale(0); }
        85%, 100% { opacity: 1; transform: scale(1); }
      }
    `}</style>
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
              className="text-[6px] text-foreground/80 whitespace-nowrap overflow-hidden"
              style={{ maxWidth: 0, animation: 'formTyping 5s ease-out forwards' }}
            >
              I want to start investing for retirement
            </span>
            <span 
              className="inline-block w-0.5 h-2 bg-primary flex-shrink-0"
              style={{ animation: 'formCursorBlink 0.8s step-end infinite, formCursorBlink 5s ease-out forwards' }}
            />
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
      
      {/* Submit button with click animation */}
      <div 
        className="mt-2 h-4 rounded flex items-center justify-center gap-1 relative"
        style={{ animation: 'formSubmitClick 5s ease-out forwards' }}
      >
        <span 
          className="text-[6px] font-medium text-white absolute"
          style={{ animation: 'formSubmitText 5s ease-out forwards' }}
        >
          Submit
        </span>
        <div 
          className="flex items-center gap-1 absolute"
          style={{ opacity: 0, animation: 'formSuccessText 5s ease-out forwards' }}
        >
          <svg 
            className="w-2.5 h-2.5 text-white" 
            viewBox="0 0 12 12" 
            fill="none"
            style={{ opacity: 0, animation: 'formSuccessCheck 5s ease-out forwards' }}
          >
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[6px] font-medium text-white">Success!</span>
        </div>
      </div>
    </div>
  </div>
);

const CalendarAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2">
    <style>{`
      @keyframes calFadeIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes calHeaderFade {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes calDaysFade {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes calSelectPulse {
        0%, 40% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.1); }
        60%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes calConfirmSlide {
        0%, 55% { opacity: 0; transform: translateX(10px); }
        70%, 100% { opacity: 1; transform: translateX(0); }
      }
    `}</style>
    <div className="flex gap-3 w-full">
      {/* Calendar */}
      <div 
        className="flex-1 bg-card/50 rounded-lg border border-border/50 p-3"
        style={{ opacity: 0, animation: 'calFadeIn 0.4s ease-out 0.2s forwards' }}
      >
        <div 
          className="text-[9px] font-semibold text-foreground mb-2 text-center"
          style={{ opacity: 0, animation: 'calHeaderFade 0.3s ease-out 0.5s forwards' }}
        >
          February 2026
        </div>
        <div 
          className="grid grid-cols-7 gap-1 text-center mb-2"
          style={{ opacity: 0, animation: 'calDaysFade 0.3s ease-out 0.8s forwards' }}
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="text-[6px] text-muted-foreground font-medium">{d}</div>
          ))}
        </div>
        <div 
          className="grid grid-cols-7 gap-1"
          style={{ opacity: 0, animation: 'calDaysFade 0.4s ease-out 1s forwards' }}
        >
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
                    ? "bg-emerald-500 text-white" 
                    : hasAppointment 
                      ? "bg-primary/40 text-primary-foreground" 
                      : "text-foreground/60"
                )}
                style={isSelected ? { opacity: 0, animation: 'calSelectPulse 5s ease-out forwards' } : undefined}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Confirmation message */}
      <div className="w-28 flex flex-col justify-center">
        <div 
          className="bg-card/50 rounded-lg border border-emerald-500/30 p-2.5"
          style={{ opacity: 0, animation: 'calConfirmSlide 5s ease-out forwards' }}
        >
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
        20% { opacity: 1; }
        100% { opacity: 1; }
      }
      @keyframes stepCheck1 {
        0%, 15% { opacity: 0; transform: scale(0); }
        25% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete2 {
        0%, 30% { opacity: 0.4; }
        40% { opacity: 1; }
        100% { opacity: 1; }
      }
      @keyframes stepCheck2 {
        0%, 35% { opacity: 0; transform: scale(0); }
        45% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete3 {
        0%, 50% { opacity: 0.4; }
        60% { opacity: 1; }
        100% { opacity: 1; }
      }
      @keyframes stepCheck3 {
        0%, 55% { opacity: 0; transform: scale(0); }
        65% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes stepComplete4 {
        0%, 70% { opacity: 0.4; }
        80% { opacity: 1; }
        100% { opacity: 1; }
      }
      @keyframes stepCheck4 {
        0%, 75% { opacity: 0; transform: scale(0); }
        85% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes progressFill {
        0% { width: 0; }
        90% { width: 100%; }
        100% { width: 100%; }
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
        20% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck1 {
        0%, 18% { opacity: 0; transform: scale(0); }
        28% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderNode2 {
        0%, 35% { opacity: 0.3; transform: scale(0.95); }
        45% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck2 {
        0%, 43% { opacity: 0; transform: scale(0); }
        53% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderNode3 {
        0%, 60% { opacity: 0.3; transform: scale(0.95); }
        70% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes reminderCheck3 {
        0%, 68% { opacity: 0; transform: scale(0); }
        78% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes timelineFill {
        0% { height: 0; }
        80% { height: 100%; }
        100% { height: 100%; }
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
        25% { opacity: 1; transform: translateX(0); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes referralForm {
        0%, 30% { opacity: 0; transform: translateY(5px); }
        50% { opacity: 1; transform: translateY(0); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes referralSuccess {
        0%, 55% { opacity: 0; transform: scale(0.8); }
        70% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes referralCount {
        0%, 70% { opacity: 0; }
        85% { opacity: 1; }
        100% { opacity: 1; }
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
  <div className="relative h-40 flex items-center justify-center p-2 overflow-visible">
    <style>{`
      @keyframes emailTypeLine1 {
        0% { width: 0; }
        20% { width: 100%; }
        100% { width: 100%; }
      }
      @keyframes emailTypeLine2 {
        0%, 20% { width: 0; }
        40% { width: 85%; }
        100% { width: 85%; }
      }
      @keyframes emailTypeLine3 {
        0%, 40% { width: 0; }
        55% { width: 70%; }
        100% { width: 70%; }
      }
      @keyframes emailSendBtn {
        0%, 55% { opacity: 0.5; transform: scale(1); }
        60% { opacity: 1; transform: scale(1); }
        65% { transform: scale(0.95); }
        70% { transform: scale(1); background: hsl(160 84% 39%); }
        100% { transform: scale(1); background: hsl(160 84% 39%); }
      }
      @keyframes emailFly {
        0%, 70% { opacity: 0; transform: translateX(0) translateY(0) scale(1); }
        75% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        100% { opacity: 0; transform: translateX(var(--fly-x)) translateY(var(--fly-y)) scale(0.3); }
      }
      @keyframes contactReceive {
        0%, 80% { opacity: 0.4; border-color: rgba(255,255,255,0.1); }
        90%, 100% { opacity: 1; border-color: hsl(160 84% 39% / 0.5); }
      }
      @keyframes checkAppear {
        0%, 85% { opacity: 0; transform: scale(0); }
        95%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes sentCounter {
        0%, 70% { opacity: 0; }
        80%, 100% { opacity: 1; }
      }
    `}</style>
    
    <div className="w-full flex gap-2">
      {/* Email composer - more compact */}
      <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-1.5">
        <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-border/30">
          <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <Mail className="w-2 h-2 text-orange-400" />
          </div>
          <div className="text-[6px] font-medium text-foreground">New Campaign</div>
        </div>
        
        {/* Subject line */}
        <div className="mb-1.5">
          <div className="text-[5px] text-muted-foreground mb-0.5">Subject:</div>
          <div className="h-3 bg-muted/20 rounded px-1 flex items-center overflow-hidden">
            <div 
              className="text-[5px] text-foreground whitespace-nowrap overflow-hidden"
              style={{ animation: 'emailTypeLine1 8s ease-out forwards' }}
            >
              March Newsletter - Tips
            </div>
          </div>
        </div>
        
        {/* Email body typing */}
        <div className="space-y-0.5 mb-1.5">
          <div 
            className="h-1 bg-primary/30 rounded"
            style={{ width: 0, animation: 'emailTypeLine1 8s ease-out forwards' }}
          />
          <div 
            className="h-1 bg-primary/20 rounded"
            style={{ width: 0, animation: 'emailTypeLine2 8s ease-out forwards' }}
          />
          <div 
            className="h-1 bg-primary/20 rounded"
            style={{ width: 0, animation: 'emailTypeLine3 8s ease-out forwards' }}
          />
        </div>
        
        {/* Send button */}
        <div 
          className="w-full h-4 bg-primary/30 rounded flex items-center justify-center gap-1"
          style={{ animation: 'emailSendBtn 8s ease-out forwards' }}
        >
          <Send className="w-2 h-2 text-primary-foreground" />
          <span className="text-[5px] font-medium text-primary-foreground">Send to All</span>
        </div>
      </div>
      
      {/* Contact list receiving - more compact */}
      <div className="w-20 space-y-1">
        <div className="text-[5px] text-muted-foreground">Recipients</div>
        
        {/* Flying emails */}
        <div className="absolute left-[48%] top-1/2 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i}
              className="absolute w-2.5 h-2 bg-orange-400/80 rounded-sm"
              style={{ 
                '--fly-x': `${30 + i * 4}px`,
                '--fly-y': `${-20 + i * 14}px`,
                animation: `emailFly 8s ease-out ${i * 0.05}s forwards`
              } as React.CSSProperties}
            >
              <Mail className="w-full h-full text-orange-900" />
            </div>
          ))}
        </div>
        
        {/* Contact cards - 3 contacts to save space */}
        {[
          { initials: 'JD', name: 'John D.' },
          { initials: 'SK', name: 'Sarah K.' },
          { initials: 'MC', name: 'Mike C.' },
        ].map((contact, i) => (
          <div 
            key={i}
            className="flex items-center gap-1 p-0.5 bg-card/40 rounded border border-border/30 relative"
            style={{ animation: `contactReceive 8s ease-out ${i * 0.1}s forwards` }}
          >
            <div className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-[4px] font-bold text-primary">{contact.initials}</span>
            </div>
            <span className="text-[5px] text-foreground/80">{contact.name}</span>
            <div 
              className="absolute right-0.5 w-2 h-2 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ opacity: 0, animation: `checkAppear 8s ease-out ${i * 0.1}s forwards` }}
            >
              <svg className="w-1 h-1 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
        
        {/* Sent counter */}
        <div 
          className="text-center p-0.5 bg-emerald-500/10 rounded border border-emerald-500/30"
          style={{ opacity: 0, animation: 'sentCounter 8s ease-out forwards' }}
        >
          <div className="text-[4px] text-emerald-400">Sent</div>
          <div className="text-[7px] font-bold text-emerald-400">1,247</div>
        </div>
      </div>
    </div>
  </div>
);

const SMSAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2 overflow-visible">
    <style>{`
      @keyframes smsTypeLive {
        0% { width: 0; }
        45% { width: 100%; }
        100% { width: 100%; }
      }
      @keyframes smsCursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @keyframes smsCursorHide {
        0%, 45% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      @keyframes smsSendBtn {
        0%, 48% { opacity: 0.5; transform: scale(1); background: rgba(59, 130, 246, 0.3); }
        52% { opacity: 1; transform: scale(1); background: rgba(59, 130, 246, 0.5); }
        56% { transform: scale(0.95); background: hsl(160 84% 39%); }
        60%, 100% { transform: scale(1); background: hsl(160 84% 39%); }
      }
      @keyframes smsSendText {
        0%, 55% { opacity: 1; }
        60%, 100% { opacity: 0; }
      }
      @keyframes smsSentText {
        0%, 58% { opacity: 0; transform: scale(0.8); }
        65%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes smsFly {
        0%, 60% { opacity: 0; transform: translateX(0) translateY(0) scale(1); }
        65% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        100% { opacity: 0; transform: translateX(var(--fly-x)) translateY(var(--fly-y)) scale(0.3); }
      }
      @keyframes smsContactReceive {
        0%, 70% { opacity: 0.4; border-color: rgba(255,255,255,0.1); }
        80%, 100% { opacity: 1; border-color: hsl(160 84% 39% / 0.5); }
      }
      @keyframes smsCheckAppear {
        0%, 75% { opacity: 0; transform: scale(0); }
        85%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes smsSentCounter {
        0%, 80% { opacity: 0; }
        90%, 100% { opacity: 1; }
      }
    `}</style>
    
    <div className="w-full flex gap-2">
      {/* SMS composer - Phone mockup */}
      <div className="w-24 bg-card/80 rounded-xl border border-border/50 p-1.5">
        <div className="h-1 w-6 mx-auto bg-muted/40 rounded mb-1.5" />
        
        {/* Message being typed character by character */}
        <div className="mb-1.5">
          <div className="ml-auto px-1.5 py-1 bg-orange-500/20 rounded-l-lg rounded-tr-lg">
            <div className="relative">
              <div 
                className="text-[5px] text-foreground/80 leading-tight whitespace-nowrap overflow-hidden"
                style={{ width: 0, animation: 'smsTypeLive 6.5s ease-out forwards' }}
              >
                Hey! It's time for your annual review. Let's schedule a call!
              </div>
              {/* Blinking cursor */}
              <span 
                className="absolute top-0 right-0 w-0.5 h-2.5 bg-primary"
                style={{ animation: 'smsCursorBlink 0.6s step-end infinite, smsCursorHide 6.5s ease-out forwards' }}
              />
            </div>
          </div>
        </div>
        
        {/* Send button with click animation */}
        <div 
          className="w-full h-3.5 rounded flex items-center justify-center gap-0.5 relative"
          style={{ animation: 'smsSendBtn 6.5s ease-out forwards' }}
        >
          <div 
            className="flex items-center gap-0.5 absolute"
            style={{ animation: 'smsSendText 6.5s ease-out forwards' }}
          >
            <Send className="w-1.5 h-1.5 text-primary-foreground" />
            <span className="text-[4px] font-medium text-primary-foreground">Send All</span>
          </div>
          <div 
            className="flex items-center gap-0.5 absolute"
            style={{ opacity: 0, animation: 'smsSentText 6.5s ease-out forwards' }}
          >
            <svg className="w-1.5 h-1.5 text-white" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[4px] font-medium text-white">Sent!</span>
          </div>
        </div>
      </div>
      
      {/* Contact list receiving - compact */}
      <div className="flex-1 space-y-0.5">
        <div className="text-[5px] text-muted-foreground">Broadcast to:</div>
        
        {/* Flying SMS icons */}
        <div className="absolute left-[32%] top-1/2 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/80 rounded-sm flex items-center justify-center"
              style={{ 
                '--fly-x': `${35 + i * 6}px`,
                '--fly-y': `${-18 + i * 16}px`,
                animation: `smsFly 6.5s ease-out ${i * 0.05}s forwards`
              } as React.CSSProperties}
            >
              <MessageSquare className="w-1 h-1 text-emerald-900" />
            </div>
          ))}
        </div>
        
        {/* Contact cards - 3 contacts */}
        {[
          { initials: 'JD', name: 'John D.' },
          { initials: 'SK', name: 'Sarah K.' },
          { initials: 'MC', name: 'Mike C.' },
        ].map((contact, i) => (
          <div 
            key={i}
            className="flex items-center gap-1 p-0.5 bg-card/40 rounded border border-border/30 relative"
            style={{ animation: `smsContactReceive 6.5s ease-out ${i * 0.1}s forwards` }}
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="text-[4px] font-bold text-emerald-400">{contact.initials}</span>
            </div>
            <span className="text-[5px] text-foreground/80">{contact.name}</span>
            <div 
              className="absolute right-0.5 w-2 h-2 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ opacity: 0, animation: `smsCheckAppear 6.5s ease-out ${i * 0.1}s forwards` }}
            >
              <svg className="w-1 h-1 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
        
        {/* Delivery stats */}
        <div 
          className="flex gap-1 mt-0.5"
          style={{ opacity: 0, animation: 'smsSentCounter 6.5s ease-out forwards' }}
        >
          <div className="flex-1 text-center p-0.5 bg-emerald-500/10 rounded border border-emerald-500/30">
            <div className="text-[4px] text-emerald-400">Delivered</div>
            <div className="text-[6px] font-bold text-emerald-400">98%</div>
          </div>
          <div className="flex-1 text-center p-0.5 bg-primary/10 rounded border border-primary/30">
            <div className="text-[4px] text-primary">A2P</div>
            <div className="text-[6px] font-bold text-primary">✓</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-3 overflow-hidden">
    <style>{`
      @keyframes socialAiTyping {
        0% { width: 0; }
        25% { width: 100%; }
        100% { width: 100%; }
      }
      @keyframes socialCursorBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      @keyframes socialPostClick {
        0%, 35% { transform: scale(1); background: rgba(59, 130, 246, 0.3); }
        40% { transform: scale(0.95); background: rgba(59, 130, 246, 0.6); }
        45%, 100% { transform: scale(1); background: rgba(16, 185, 129, 0.4); }
      }
      @keyframes socialCheckAppear {
        0%, 40% { opacity: 0; transform: scale(0); }
        50%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes socialArrowHide {
        0%, 40% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      @keyframes socialDraftFadeOut {
        0%, 50% { opacity: 1; transform: translateY(0); }
        60%, 100% { opacity: 0; transform: translateY(-10px); }
      }
      @keyframes socialPostFadeIn {
        0%, 55% { opacity: 0; transform: translateY(10px); }
        70%, 100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>
    
    {/* Draft view - fades out */}
    <div 
      className="absolute inset-3 w-[calc(100%-24px)] bg-card/30 rounded-lg border border-border/30 p-3"
      style={{ animation: 'socialDraftFadeOut 8s ease-in-out forwards' }}
    >
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
            style={{ animation: 'socialAiTyping 8s ease-in-out forwards' }}
          >
            Planning for retirement? Here are 5 key strategies...
          </div>
          <div 
            className="absolute right-0 top-0 w-0.5 h-3 bg-primary"
            style={{ animation: 'socialCursorBlink 0.8s step-end infinite' }}
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
          <div className="px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20 flex items-center gap-1">
            <svg className="w-2 h-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-[5px] text-blue-400">LinkedIn</span>
          </div>
        </div>
        
        {/* Post Button */}
        <div 
          className="px-2 py-1 rounded-lg border border-primary/40 flex items-center gap-1"
          style={{ animation: 'socialPostClick 8s ease-in-out forwards' }}
        >
          <span className="text-[6px] font-medium text-primary">Post</span>
          <div className="relative w-2.5 h-2.5">
            <span 
              className="absolute inset-0 flex items-center justify-center text-[6px] text-primary"
              style={{ animation: 'socialArrowHide 8s ease-in-out forwards' }}
            >→</span>
            <span 
              className="absolute inset-0 flex items-center justify-center text-[6px] text-emerald-400"
              style={{ animation: 'socialCheckAppear 8s ease-in-out forwards' }}
            >✓</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* LinkedIn Post Preview - fades in as final state */}
    <div 
      className="absolute inset-3 w-[calc(100%-24px)] bg-card/50 rounded-lg border border-border/50 p-2"
      style={{ opacity: 0, animation: 'socialPostFadeIn 8s ease-in-out forwards' }}
    >
      {/* LinkedIn Header */}
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-border/30">
        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-[7px] font-semibold text-foreground">Your Financial Planning</div>
          <div className="flex items-center gap-1">
            <span className="text-[5px] text-muted-foreground">Just now • 🌐</span>
            <span className="text-[5px] text-emerald-400">• Posted</span>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="text-[6px] text-foreground/80 leading-relaxed mb-2">
        Planning for retirement? Here are 5 key strategies every pre-retiree should know...
      </div>
      
      {/* Engagement Stats */}
      <div className="flex items-center gap-3 pt-2 border-t border-border/30">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-[4px]">👍</span>
            </div>
            <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-[4px]">❤️</span>
            </div>
          </div>
          <span className="text-[5px] text-muted-foreground">24</span>
        </div>
        <span className="text-[5px] text-muted-foreground">5 comments</span>
        <span className="text-[5px] text-muted-foreground">3 reposts</span>
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
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes dotPop {
        0%, 20% { opacity: 0; transform: scale(0); }
        40% { opacity: 1; transform: scale(1); }
        100% { opacity: 1; transform: scale(1); }
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
      @keyframes attrHeaderFade {
        0% { opacity: 0; }
        10%, 100% { opacity: 1; }
      }
      @keyframes attrSlideIn1 {
        0% { opacity: 0; transform: translateX(-20px); }
        20%, 100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes attrSlideIn2 {
        0%, 15% { opacity: 0; transform: translateX(-20px); }
        35%, 100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes attrSlideIn3 {
        0%, 30% { opacity: 0; transform: translateX(-20px); }
        50%, 100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes attrSlideIn4 {
        0%, 45% { opacity: 0; transform: translateX(-20px); }
        65%, 100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes attrCountUp1 {
        0%, 20% { opacity: 0; }
        30%, 100% { opacity: 1; }
      }
      @keyframes attrCountUp2 {
        0%, 35% { opacity: 0; }
        45%, 100% { opacity: 1; }
      }
      @keyframes attrCountUp3 {
        0%, 50% { opacity: 0; }
        60%, 100% { opacity: 1; }
      }
      @keyframes attrCountUp4 {
        0%, 65% { opacity: 0; }
        75%, 100% { opacity: 1; }
      }
      @keyframes attrCheckPop1 {
        0%, 25% { opacity: 0; transform: scale(0); }
        35%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes attrCheckPop2 {
        0%, 40% { opacity: 0; transform: scale(0); }
        50%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes attrCheckPop3 {
        0%, 55% { opacity: 0; transform: scale(0); }
        65%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes attrCheckPop4 {
        0%, 70% { opacity: 0; transform: scale(0); }
        80%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes attrTotalFade {
        0%, 75% { opacity: 0; }
        90%, 100% { opacity: 1; }
      }
    `}</style>
    <div className="w-full bg-card/30 rounded-lg border border-border/30 p-3">
      <div 
        className="flex items-center justify-between mb-2"
        style={{ opacity: 0, animation: 'attrHeaderFade 8s ease-out forwards' }}
      >
        <div className="text-[8px] font-medium text-foreground">Lead Source Attribution</div>
        <div className="px-1.5 py-0.5 bg-primary/20 rounded text-[6px] text-primary">This Quarter</div>
      </div>
      
      {/* Visual funnel-style sources */}
      <div className="space-y-1.5">
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-emerald-500/20 border-emerald-500/30"
          style={{ opacity: 0, animation: 'attrSlideIn1 8s ease-out forwards' }}
        >
          <Users className="w-3 h-3 text-emerald-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Client Referrals</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-emerald-400" style={{ opacity: 0, animation: 'attrCountUp1 8s ease-out forwards' }}>12</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ opacity: 0, animation: 'attrCheckPop1 8s ease-out forwards' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-primary/20 border-primary/30"
          style={{ opacity: 0, animation: 'attrSlideIn2 8s ease-out forwards' }}
        >
          <Mail className="w-3 h-3 text-primary" />
          <span className="text-[7px] text-foreground/80 flex-1">Email Campaigns</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-primary" style={{ opacity: 0, animation: 'attrCountUp2 8s ease-out forwards' }}>8</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ opacity: 0, animation: 'attrCheckPop2 8s ease-out forwards' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-amber-500/20 border-amber-500/30"
          style={{ opacity: 0, animation: 'attrSlideIn3 8s ease-out forwards' }}
        >
          <ClipboardCheck className="w-3 h-3 text-amber-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Website Forms</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-amber-400" style={{ opacity: 0, animation: 'attrCountUp3 8s ease-out forwards' }}>6</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ opacity: 0, animation: 'attrCheckPop3 8s ease-out forwards' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-pink-500/20 border-pink-500/30"
          style={{ opacity: 0, animation: 'attrSlideIn4 8s ease-out forwards' }}
        >
          <Globe className="w-3 h-3 text-pink-400" />
          <span className="text-[7px] text-foreground/80 flex-1">Social Media</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-pink-400" style={{ opacity: 0, animation: 'attrCountUp4 8s ease-out forwards' }}>5</span>
            <span className="text-[6px] text-muted-foreground">leads</span>
          </div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 flex items-center justify-center" style={{ opacity: 0, animation: 'attrCheckPop4 8s ease-out forwards' }}>
            <span className="text-[5px] text-emerald-400">✓</span>
          </div>
        </div>
      </div>
      
      {/* Total */}
      <div 
        className="flex items-center justify-between mt-2 pt-2 border-t border-border/20"
        style={{ opacity: 0, animation: 'attrTotalFade 8s ease-out forwards' }}
      >
        <span className="text-[6px] text-muted-foreground">Total New Leads</span>
        <span className="text-[9px] font-bold text-foreground">31 this quarter</span>
      </div>
    </div>
  </div>
);

// Payments & Documents Animations
const InvoiceAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2 overflow-hidden">
    <style>{`
      @keyframes invoiceHeaderFade {
        0% { opacity: 0; }
        10%, 100% { opacity: 1; }
      }
      @keyframes invoiceLine1 {
        0%, 10% { opacity: 0; width: 0; }
        25%, 100% { opacity: 1; width: 100%; }
      }
      @keyframes invoiceLine2 {
        0%, 25% { opacity: 0; width: 0; }
        40%, 100% { opacity: 1; width: 100%; }
      }
      @keyframes invoiceTotal {
        0%, 40% { opacity: 0; }
        50%, 100% { opacity: 1; }
      }
      @keyframes invoiceSendBtn {
        0%, 50% { opacity: 0.5; transform: scale(1); }
        55% { opacity: 1; }
        60% { transform: scale(0.95); }
        65% { transform: scale(1); background: hsl(160 84% 39%); }
        100% { background: hsl(160 84% 39%); }
      }
      @keyframes invoiceSendIcon {
        0%, 55% { opacity: 1; }
        65%, 100% { opacity: 0; }
      }
      @keyframes invoiceCheckIcon {
        0%, 60% { opacity: 0; transform: scale(0); }
        70%, 100% { opacity: 1; transform: scale(1); }
      }
      @keyframes invoiceSentBadge {
        0%, 65% { opacity: 0; transform: translateY(5px); }
        75%, 100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes invoiceFlyOut {
        0%, 70% { opacity: 0; transform: translateX(0) translateY(0); }
        75% { opacity: 1; transform: translateX(0) translateY(0); }
        100% { opacity: 0; transform: translateX(60px) translateY(-20px); }
      }
    `}</style>
    
    <div className="w-full flex gap-2">
      {/* Invoice being created */}
      <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-2">
        {/* Header */}
        <div 
          className="flex items-center justify-between mb-2 pb-1.5 border-b border-border/30"
          style={{ opacity: 0, animation: 'invoiceHeaderFade 8s ease-out forwards' }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-violet-500/20 flex items-center justify-center">
              <Receipt className="w-2.5 h-2.5 text-violet-400" />
            </div>
            <div>
              <div className="text-[6px] font-medium text-foreground">New Invoice</div>
              <div className="text-[5px] text-muted-foreground">To: John Davidson</div>
            </div>
          </div>
        </div>
        
        {/* Line items appearing */}
        <div className="space-y-1 mb-2">
          <div 
            className="flex justify-between text-[5px] overflow-hidden"
            style={{ opacity: 0, animation: 'invoiceLine1 8s ease-out forwards' }}
          >
            <span className="text-muted-foreground">Financial Planning</span>
            <span className="text-foreground font-medium">$2,500</span>
          </div>
          <div 
            className="flex justify-between text-[5px] overflow-hidden"
            style={{ opacity: 0, animation: 'invoiceLine2 8s ease-out forwards' }}
          >
            <span className="text-muted-foreground">Tax Consultation</span>
            <span className="text-foreground font-medium">$500</span>
          </div>
        </div>
        
        {/* Total */}
        <div 
          className="border-t border-border/30 pt-1 flex justify-between mb-2"
          style={{ opacity: 0, animation: 'invoiceTotal 8s ease-out forwards' }}
        >
          <span className="text-[6px] font-medium text-foreground">Total</span>
          <span className="text-[7px] font-bold text-violet-400">$3,000</span>
        </div>
        
        {/* Send button */}
        <div 
          className="w-full h-4 bg-primary/30 rounded flex items-center justify-center gap-1 relative"
          style={{ animation: 'invoiceSendBtn 8s ease-out forwards' }}
        >
          <div className="relative w-3 h-3">
            <Send 
              className="w-2 h-2 text-primary-foreground absolute inset-0 m-auto"
              style={{ animation: 'invoiceSendIcon 8s ease-out forwards' }}
            />
            <svg 
              className="w-2 h-2 text-white absolute inset-0 m-auto" 
              viewBox="0 0 12 12" 
              fill="none"
              style={{ opacity: 0, animation: 'invoiceCheckIcon 8s ease-out forwards' }}
            >
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[5px] font-medium text-primary-foreground">Send Invoice</span>
        </div>
        
        {/* Flying invoice icon */}
        <div 
          className="absolute left-[40%] top-[40%] pointer-events-none"
          style={{ opacity: 0, animation: 'invoiceFlyOut 8s ease-out forwards' }}
        >
          <div className="w-4 h-5 bg-violet-400/80 rounded-sm flex items-center justify-center">
            <Receipt className="w-2.5 h-2.5 text-violet-900" />
          </div>
        </div>
      </div>
      
      {/* Right side - Sent confirmation + stats */}
      <div className="w-20 space-y-1.5">
        {/* Sent confirmation */}
        <div 
          className="bg-emerald-500/10 rounded-lg border border-emerald-500/30 p-2 text-center"
          style={{ opacity: 0, animation: 'invoiceSentBadge 8s ease-out forwards' }}
        >
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <svg className="w-2.5 h-2.5 text-emerald-400" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[6px] font-bold text-emerald-400">Sent!</span>
          </div>
          <div className="text-[5px] text-emerald-400/70">Invoice #1247</div>
        </div>
        
        {/* Monthly revenue */}
        <div 
          className="bg-violet-500/10 rounded-lg border border-violet-500/30 p-1.5"
          style={{ opacity: 0, animation: 'invoiceSentBadge 8s ease-out 0.2s forwards' }}
        >
          <div className="text-[4px] text-violet-400/70">Monthly</div>
          <div className="text-[8px] font-bold text-violet-400">$12.4K</div>
        </div>
        
        {/* Paid rate */}
        <div 
          className="bg-emerald-500/10 rounded-lg border border-emerald-500/30 p-1.5"
          style={{ opacity: 0, animation: 'invoiceSentBadge 8s ease-out 0.4s forwards' }}
        >
          <div className="text-[4px] text-emerald-400/70">Paid</div>
          <div className="text-[8px] font-bold text-emerald-400">98%</div>
        </div>
      </div>
    </div>
  </div>
);

const DocumentAnimation = () => (
  <div className="relative h-40 flex items-center justify-center p-2 overflow-hidden">
    <style>{`
      @keyframes docTemplatesFade {
        0% { opacity: 0; }
        10%, 100% { opacity: 1; }
      }
      @keyframes docTemplate1 {
        0%, 5% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); }
        15%, 100% { opacity: 1; border-color: rgba(255,255,255,0.1); transform: scale(1); }
      }
      @keyframes docTemplate2 {
        0%, 10% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); }
        20%, 100% { opacity: 1; border-color: rgba(255,255,255,0.1); transform: scale(1); }
      }
      @keyframes docTemplateSelect {
        0%, 20% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); box-shadow: none; }
        30% { opacity: 1; border-color: hsl(160 84% 39% / 0.6); transform: scale(1.05); box-shadow: 0 0 15px hsl(160 84% 39% / 0.3); }
        40%, 100% { opacity: 1; border-color: hsl(160 84% 39% / 0.6); transform: scale(1); box-shadow: 0 0 10px hsl(160 84% 39% / 0.2); }
      }
      @keyframes docCursorMove {
        0% { opacity: 0; right: 50px; top: -20px; }
        15% { opacity: 1; right: 50px; top: -20px; }
        30% { opacity: 1; right: 5px; top: 20px; }
        35% { transform: scale(0.9); }
        40%, 100% { opacity: 1; right: 5px; top: 20px; transform: scale(1); }
      }
      @keyframes docSendBtn {
        0%, 45% { opacity: 0.5; }
        50% { opacity: 1; }
        55% { transform: scale(0.95); }
        60% { transform: scale(1); background: hsl(160 84% 39%); }
        100% { background: hsl(160 84% 39%); }
      }
      @keyframes docFlyOut {
        0%, 60% { opacity: 0; transform: translateX(0) translateY(0); }
        65% { opacity: 1; transform: translateX(0) translateY(0); }
        100% { opacity: 0; transform: translateX(50px) translateY(-15px); }
      }
      @keyframes docSentBadge {
        0%, 70% { opacity: 0; transform: scale(0.8); }
        80%, 100% { opacity: 1; transform: scale(1); }
      }
    `}</style>
    
    <div className="w-full flex gap-2">
      {/* Template selection area */}
      <div className="flex-1">
        <div 
          className="text-[6px] font-medium text-foreground mb-2"
          style={{ opacity: 0, animation: 'docTemplatesFade 8s ease-out forwards' }}
        >
          Select Template
        </div>
        
        {/* Template cards */}
        <div className="space-y-1.5 relative">
          {/* Template 1 */}
          <div 
            className="flex items-center gap-2 p-1.5 bg-card/40 rounded-lg border border-border/30"
            style={{ animation: 'docTemplate1 8s ease-out forwards' }}
          >
            <div className="w-5 h-5 rounded bg-amber-500/20 flex items-center justify-center">
              <FileText className="w-3 h-3 text-amber-400" />
            </div>
            <div>
              <div className="text-[5px] font-medium text-foreground">Quarterly Review</div>
              <div className="text-[4px] text-muted-foreground">PDF • 4 pages</div>
            </div>
          </div>
          
          {/* Template 2 - Selected */}
          <div 
            className="flex items-center gap-2 p-1.5 bg-card/40 rounded-lg border border-border/30 relative"
            style={{ animation: 'docTemplateSelect 8s ease-out forwards' }}
          >
            <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
              <ClipboardCheck className="w-3 h-3 text-emerald-400" />
            </div>
            <div>
              <div className="text-[5px] font-medium text-foreground">Onboarding Packet</div>
              <div className="text-[4px] text-muted-foreground">PDF • 8 pages</div>
            </div>
            {/* Selection checkmark */}
            <div 
              className="absolute right-1.5 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center"
              style={{ opacity: 0, animation: 'docSentBadge 8s ease-out forwards', animationDelay: '-4.5s' }}
            >
              <svg className="w-2 h-2 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Cursor */}
            <div 
              className="absolute pointer-events-none"
              style={{ animation: 'docCursorMove 8s ease-out forwards' }}
            >
              <MousePointer className="w-3 h-3 text-foreground fill-foreground/30" />
            </div>
          </div>
          
          {/* Template 3 */}
          <div 
            className="flex items-center gap-2 p-1.5 bg-card/40 rounded-lg border border-border/30"
            style={{ animation: 'docTemplate2 8s ease-out forwards' }}
          >
            <div className="w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center">
              <FileSignature className="w-3 h-3 text-violet-400" />
            </div>
            <div>
              <div className="text-[5px] font-medium text-foreground">Planning Agreement</div>
              <div className="text-[4px] text-muted-foreground">PDF • 6 pages</div>
            </div>
          </div>
        </div>
        
        {/* Send button */}
        <div 
          className="w-full h-4 mt-2 bg-primary/30 rounded flex items-center justify-center gap-1"
          style={{ animation: 'docSendBtn 8s ease-out forwards' }}
        >
          <Send className="w-2 h-2 text-primary-foreground" />
          <span className="text-[5px] font-medium text-primary-foreground">Send to Client</span>
        </div>
        
        {/* Flying document */}
        <div 
          className="absolute left-[45%] top-[35%] pointer-events-none"
          style={{ opacity: 0, animation: 'docFlyOut 8s ease-out forwards' }}
        >
          <div className="w-4 h-5 bg-emerald-400/80 rounded-sm flex items-center justify-center">
            <FileText className="w-2.5 h-2.5 text-emerald-900" />
          </div>
        </div>
      </div>
      
      {/* Right side - Sent confirmation */}
      <div className="w-20 flex flex-col justify-center">
        <div 
          className="bg-emerald-500/10 rounded-lg border border-emerald-500/30 p-2 text-center"
          style={{ opacity: 0, animation: 'docSentBadge 8s ease-out forwards' }}
        >
          <div className="flex items-center justify-center gap-1 mb-1">
            <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[7px] font-bold text-emerald-400">Sent!</span>
          </div>
          <div className="text-[5px] text-emerald-400/70 mb-1">Onboarding Packet</div>
          <div className="text-[4px] text-muted-foreground">To: John Davidson</div>
        </div>
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
        20% { opacity: 1; transform: translateY(0); }
        100% { opacity: 1; transform: translateY(0); }
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
        20% { opacity: 1; transform: translateY(0); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes replyType {
        0%, 35% { opacity: 0; }
        55% { opacity: 1; }
        100% { opacity: 1; }
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
        35% { background: transparent; color: hsl(0 0% 60%); }
        100% { background: transparent; color: hsl(0 0% 60%); }
      }
      @keyframes stageActive2 {
        0%, 33% { background: transparent; color: hsl(0 0% 60%); }
        38%, 63% { background: hsl(217 91% 60% / 0.3); color: white; }
        68% { background: transparent; color: hsl(0 0% 60%); }
        100% { background: transparent; color: hsl(0 0% 60%); }
      }
      @keyframes stageActive3 {
        0%, 66% { background: transparent; color: hsl(0 0% 60%); }
        71% { background: hsl(217 91% 60% / 0.3); color: white; }
        100% { background: hsl(217 91% 60% / 0.3); color: white; }
      }
      @keyframes stageSwipe1 {
        0% { opacity: 1; transform: translateX(0); }
        30% { opacity: 1; transform: translateX(0); }
        35% { opacity: 0; transform: translateX(-100%); }
        100% { opacity: 0; transform: translateX(-100%); }
      }
      @keyframes stageSwipe2 {
        0%, 33% { opacity: 0; transform: translateX(100%); }
        38% { opacity: 1; transform: translateX(0); }
        63% { opacity: 1; transform: translateX(0); }
        68% { opacity: 0; transform: translateX(-100%); }
        100% { opacity: 0; transform: translateX(-100%); }
      }
      @keyframes stageSwipe3 {
        0%, 66% { opacity: 0; transform: translateX(100%); }
        71% { opacity: 1; transform: translateX(0); }
        100% { opacity: 1; transform: translateX(0); }
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
  const [mobileCategoryIndex, setMobileCategoryIndex] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track if section is in view to start animations
  const [isInView, setIsInView] = useState(false);
  
  // Sequential animation tracking
  const [desktopAnimatingIndex, setDesktopAnimatingIndex] = useState(0);
  const [mobileAnimatingIndex, setMobileAnimatingIndex] = useState(0);
  const CATEGORY_SWITCH_BUFFER = 2000; // Extra time before switching categories
  
  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Get category IDs for cycling
  const categoryIds = categories.map(c => c.id);
  
  // Intersection Observer to detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, [isInView]);
  
  // Reset and sequence desktop animations when category changes, then auto-advance to next category
  useEffect(() => {
    // Only start animations when section is in view
    if (!isInView) return;
    
    setDesktopAnimatingIndex(0);
    
    const currentCategoryData = categories.find(c => c.id === activeCategory);
    if (!currentCategoryData) return;
    
    const features = currentCategoryData.features;
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    // Calculate cumulative delays based on each animation's actual duration
    let cumulativeDelay = 0;
    
    for (let i = 0; i < features.length; i++) {
      const duration = getAnimationDuration(features[i].title);
      
      if (i > 0) {
        // Schedule this feature to start after previous ones complete
        const delay = cumulativeDelay;
        timers.push(setTimeout(() => setDesktopAnimatingIndex(i), delay));
      }
      
      cumulativeDelay += duration;
    }
    
    // After all features in this category complete, switch to next category (with buffer)
    const nextCategoryTimer = setTimeout(() => {
      const currentIndex = categoryIds.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categoryIds.length;
      setActiveCategory(categoryIds[nextIndex]);
    }, cumulativeDelay + CATEGORY_SWITCH_BUFFER);
    
    timers.push(nextCategoryTimer);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [activeCategory, isInView]);

  // Reset and sequence mobile animations when category changes, then auto-advance to next category
  useEffect(() => {
    // Only start animations when section is in view
    if (!isInView) return;
    
    setMobileAnimatingIndex(0);
    
    const currentCategoryData = categories[mobileCategoryIndex];
    if (!currentCategoryData) return;
    
    const features = currentCategoryData.features;
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    // Calculate cumulative delays based on each animation's actual duration
    let cumulativeDelay = 0;
    
    for (let i = 0; i < features.length; i++) {
      const duration = getAnimationDuration(features[i].title);
      
      if (i > 0) {
        // Schedule this feature to start after previous ones complete
        const delay = cumulativeDelay;
        timers.push(setTimeout(() => setMobileAnimatingIndex(i), delay));
      }
      
      cumulativeDelay += duration;
    }
    
    // After all features in this category complete, switch to next category (with buffer)
    const nextCategoryTimer = setTimeout(() => {
      setMobileCategoryIndex(prev => (prev + 1) % categories.length);
    }, cumulativeDelay + CATEGORY_SWITCH_BUFFER);
    
    timers.push(nextCategoryTimer);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [mobileCategoryIndex, isInView]);

  // Auto-scroll tabs when category changes
  useEffect(() => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTab = container.children[mobileCategoryIndex] as HTMLElement;
      if (activeTab) {
        const containerWidth = container.offsetWidth;
        const tabLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;
        const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [mobileCategoryIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && mobileCategoryIndex < categories.length - 1) {
      setMobileCategoryIndex(prev => prev + 1);
    }
    if (isRightSwipe && mobileCategoryIndex > 0) {
      setMobileCategoryIndex(prev => prev - 1);
    }
  };

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <section ref={sectionRef} id="features" className="relative py-20 lg:py-28 overflow-hidden">
      
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            We'll Handle the Rest
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
                <div key={activeCategory} className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 lg:p-8">
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
                  
                  {/* Features - Vertical Stack with sequential animations */}
                  <div className="space-y-4">
                    {activeData.features.map((feature, index) => {
                      const isWaiting = index > desktopAnimatingIndex;
                      const isAnimating = index === desktopAnimatingIndex;
                      const isComplete = index < desktopAnimatingIndex;
                      
                      return (
                        <div 
                          key={`${activeCategory}-${feature.title}`}
                          className={cn(
                            "group relative bg-background/50 rounded-xl border border-border/50 p-5 lg:p-6 transition-all duration-500",
                            isWaiting && "opacity-40 grayscale",
                            (isAnimating || isComplete) && "opacity-100 grayscale-0",
                            isAnimating && "ring-2 ring-primary/30 shadow-[0_0_30px_-10px_hsl(217_91%_60%/0.3)]"
                          )}
                        >
                          <div className="flex gap-6 items-start">
                            {/* Content - Now on left */}
                            <div className="flex-1 py-2">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={cn(
                                  "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br transition-all duration-500",
                                  activeData.color,
                                  isWaiting && "opacity-50"
                                )}>
                                  <feature.icon className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="font-bold text-foreground text-lg lg:text-xl">{feature.title}</h4>
                              </div>
                              <p className="text-body leading-relaxed text-base">{feature.description}</p>
                            </div>
                            
                            {/* Animation area - only plays when it's this feature's turn */}
                            <div className="w-56 lg:w-72 flex-shrink-0 bg-muted/30 rounded-xl overflow-hidden border border-border/30">
                              {!isWaiting ? (
                                <div 
                                  key={`anim-${activeCategory}-${index}-${desktopAnimatingIndex >= index}`}
                                  className="transform scale-110 origin-center animation-play-once"
                                >
                                  {feature.animation}
                                </div>
                              ) : (
                                <div className="h-40 flex items-center justify-center">
                                  <div className="text-muted-foreground/30 text-xs">Waiting...</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Category Tabs with Stacked Features */}
        <div className="md:hidden">
          {/* Horizontal scrollable category tabs */}
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-2 pb-3 px-1 scrollbar-hide mb-6"
          >
            {categories.map((category, index) => {
              const isActive = mobileCategoryIndex === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setMobileCategoryIndex(index)}
                  className={cn(
                    "flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300",
                    isActive 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium whitespace-nowrap">{category.title}</span>
                </button>
              );
            })}
          </div>
          
          {/* Stacked Features Container with swipe support */}
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left swipe indicator */}
            {mobileCategoryIndex > 0 && (
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <ChevronLeft className="w-4 h-4 text-muted-foreground/60 animate-pulse" />
              </div>
            )}
            
            {/* Right swipe indicator */}
            {mobileCategoryIndex < categories.length - 1 && (
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 animate-pulse" />
              </div>
            )}
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${mobileCategoryIndex * 100}%)` }}
              >
                {categories.map((category, catIndex) => {
                  const isActiveCategory = mobileCategoryIndex === catIndex;
                  return (
                    <div key={`${category.id}-${mobileCategoryIndex}`} className="w-full flex-shrink-0 px-1">
                      <div className="space-y-2">
                        {category.features.map((feature, featureIndex) => {
                          const isWaiting = isActiveCategory && featureIndex > mobileAnimatingIndex;
                          const isAnimating = isActiveCategory && featureIndex === mobileAnimatingIndex;
                          const isComplete = isActiveCategory && featureIndex < mobileAnimatingIndex;
                          
                          return (
                            <div 
                              key={`mobile-${category.id}-${feature.title}`}
                              className={cn(
                                "bg-card border border-border rounded-lg p-2.5 transition-all duration-500",
                                isActiveCategory && isWaiting && "opacity-40 grayscale",
                                isActiveCategory && (isAnimating || isComplete) && "opacity-100 grayscale-0",
                                isAnimating && "ring-1 ring-primary/30"
                              )}
                            >
                              {/* Animation - scaled down for mobile, only plays when it's this feature's turn */}
                              <div className="mb-2 bg-muted/20 rounded-md overflow-hidden h-24">
                                {!isWaiting ? (
                                  <div 
                                    key={`anim-mobile-${category.id}-${featureIndex}-${mobileAnimatingIndex >= featureIndex}`}
                                    className="transform scale-[0.6] origin-top-left w-[166.67%] h-[166.67%] animation-play-once"
                                  >
                                    {feature.animation}
                                  </div>
                                ) : (
                                  <div className="h-full flex items-center justify-center">
                                    <div className="text-muted-foreground/20 text-[10px]">Waiting...</div>
                                  </div>
                                )}
                              </div>
                              
                              {/* Content - compact */}
                              <div className="flex items-center gap-2 mb-1">
                                <div className={cn(
                                  "w-6 h-6 rounded flex items-center justify-center bg-gradient-to-br flex-shrink-0 transition-opacity duration-500",
                                  category.color,
                                  isWaiting && "opacity-50"
                                )}>
                                  <feature.icon className="w-3 h-3 text-white" />
                                </div>
                                <h3 className="font-semibold text-sm text-foreground leading-tight">
                                  {feature.title}
                                </h3>
                              </div>
                              <p className="text-xs text-body leading-snug line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Swipe hint text */}
          <p className="text-center text-xs text-muted-foreground mt-4 mb-2">
            Swipe to explore • {mobileCategoryIndex + 1} of {categories.length}
          </p>

          {/* 6 category dot indicators */}
          <div className="flex justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setMobileCategoryIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  mobileCategoryIndex === index 
                    ? `w-8 bg-gradient-to-r ${category.color}` 
                    : "w-2.5 bg-muted hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to ${category.title}`}
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
      
      {/* CSS to make animations play once and freeze at final state */}
      <style>{`
        .animation-play-once * {
          animation-iteration-count: 1 !important;
          animation-fill-mode: forwards !important;
        }
      `}</style>
    </section>
  );
};

export default WhatYouGet;
