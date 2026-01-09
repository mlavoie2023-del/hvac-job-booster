import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Wrench, Calendar, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Conversation messages for the AI mockup
const conversationMessages = [
  { 
    type: 'ai', 
    text: "Hi, thanks for calling Smith HVAC! I can help you schedule service or answer questions. What can I help with today?" 
  },
  { 
    type: 'customer', 
    text: "Yeah, my AC stopped blowing cold air this morning..." 
  },
  { 
    type: 'ai', 
    text: "I'm sorry to hear that! I can get a technician out today at 2pm or tomorrow morning. Which works better for you?" 
  },
];

// Trial badge data
const trialBadges = [
  { 
    icon: Wrench, 
    title: "7-Day Custom Build", 
    description: "Built specifically for your HVAC business",
    gradient: "from-primary to-accent"
  },
  { 
    icon: Calendar, 
    title: "14-Day Free Trial", 
    description: "Test with real calls before you pay",
    gradient: "from-accent to-success"
  },
  { 
    icon: ShieldCheck, 
    title: "Cancel Anytime", 
    description: "No contracts, no commitments",
    gradient: "from-success to-primary"
  },
];

// Speaking indicator component
const SpeakingIndicator = () => (
  <div className="flex items-center gap-2 px-4 py-3">
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <span 
          key={i} 
          className="w-1 bg-primary/60 rounded-full animate-typing-dot"
          style={{ 
            animationDelay: `${i * 0.15}s`,
            height: `${8 + (i % 2) * 6}px`
          }}
        />
      ))}
    </div>
    <span className="text-xs text-muted-foreground">AI is speaking...</span>
  </div>
);

// Chat message component
const ChatMessage = ({ 
  type, 
  text, 
  delay 
}: { 
  type: string; 
  text: string; 
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  const isAI = type === 'ai';
  
  return (
    <div 
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} animate-message-in`}
    >
      <div 
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
          isAI 
            ? 'bg-primary/10 text-foreground rounded-bl-sm' 
            : 'bg-muted text-foreground rounded-br-sm'
        }`}
      >
        {isAI && (
          <span className="mb-1 block text-xs font-medium text-primary">AI Assistant</span>
        )}
        {text}
      </div>
    </div>
  );
};

// Conversation mockup component
const ConversationMockup = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    // Show speaking indicator after all messages
    const timer = setTimeout(() => setShowTyping(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl animate-glow-pulse" />
      
      {/* Phone mockup */}
      <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border/50 bg-muted/50 px-4 py-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/20">
              <Phone className="h-5 w-5 text-success" />
            </div>
            {/* Pulsing indicator */}
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Incoming Call</p>
            <p className="text-xs text-muted-foreground">AI Answering...</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 p-4 min-h-[280px]">
          {conversationMessages.map((msg, index) => (
            <ChatMessage 
              key={index} 
              type={msg.type} 
              text={msg.text} 
              delay={index * 800}
            />
          ))}
          {showTyping && <SpeakingIndicator />}
        </div>
      </div>
    </div>
  );
};

// Trial badge component
const TrialBadge = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  delay 
}: { 
  icon: typeof Wrench; 
  title: string; 
  description: string;
  gradient: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-foreground">
              Free HVAC Software Install · 7-Day Build + 14-Day Trial · Cancel Anytime
            </span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Stop Losing HVAC Jobs to{" "}
            <span className="gradient-text">Missed Calls</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We install AI software that answers every call, follows up with every lead, and books more jobs — built for your HVAC business.
          </p>

          {/* CTAs */}
          <div 
            className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative group">
              {/* Glow effect behind button */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button variant="hero" size="xl" className="relative w-full sm:w-auto" asChild>
                <Link to="/book">
                  Get My Free HVAC Software Install
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#features">See How It Works</a>
            </Button>
          </div>

          {/* Trust Line */}
          <p 
            className={`mt-6 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            No contracts · Cancel anytime · Built for HVAC only
          </p>
        </div>

        {/* Two-Column Visual: Conversation + Trial Badges */}
        <div 
          className={`mx-auto mt-16 max-w-5xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left: Conversation Mockup */}
            <div className="order-1">
              <ConversationMockup />
            </div>

            {/* Right: Trial Badges */}
            <div className="order-2 flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Try it completely risk-free:
              </h3>
              {trialBadges.map((badge, index) => (
                <TrialBadge 
                  key={index} 
                  {...badge} 
                  delay={600 + index * 150} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
