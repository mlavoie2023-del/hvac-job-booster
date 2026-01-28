const DashboardVisualization = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-15 sm:opacity-20 blur-[1px]">
      {/* Radial glow backdrop */}
      <div 
        className="absolute w-[700px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.15), transparent 70%)"
        }}
      />
      
      {/* Dashboard container */}
      <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-between px-8 gap-8">
        
        {/* Left side: Contact Cards sliding in */}
        <div className="flex flex-col gap-3 w-48">
          <ContactCard delay={0} name="Sarah M." />
          <ContactCard delay={1.5} name="James K." />
          <ContactCard delay={3} name="Emily R." />
          <ContactCard delay={4.5} name="Michael T." />
        </div>

        {/* Center: Task List with auto-completing items */}
        <div className="flex flex-col gap-2 w-56">
          <TaskItem delay={0.5} label="Send welcome email" />
          <TaskItem delay={2} label="Schedule intro call" />
          <TaskItem delay={3.5} label="Prepare onboarding docs" />
          <TaskItem delay={5} label="Set follow-up reminder" />
          <TaskItem delay={6.5} label="Request referral" />
        </div>

        {/* Right side: Pipeline/Kanban columns */}
        <div className="flex gap-3 h-64">
          <PipelineColumn 
            label="Lead" 
            cards={[
              { delay: 0, moveOut: 4 },
              { delay: 2, moveOut: 6 },
            ]} 
          />
          <PipelineColumn 
            label="Prospect" 
            cards={[
              { delay: 4, moveOut: 8 },
              { delay: 6, moveOut: 10 },
            ]} 
          />
          <PipelineColumn 
            label="Client" 
            cards={[
              { delay: 8, moveOut: null },
              { delay: 10, moveOut: null },
            ]} 
          />
        </div>

        {/* Pulsing notification dots scattered around */}
        <NotificationDot className="absolute top-12 left-1/4" delay={1} />
        <NotificationDot className="absolute top-20 right-1/3" delay={2.5} />
        <NotificationDot className="absolute bottom-16 left-1/3" delay={4} />
        <NotificationDot className="absolute bottom-24 right-1/4" delay={5.5} />
      </div>
    </div>
  );
};

// Contact card component with slide-in animation
const ContactCard = ({ delay, name }: { delay: number; name: string }) => {
  return (
    <div 
      className="flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-lg px-3 py-2 animate-slide-in-contact"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '6s',
      }}
    >
      {/* Avatar placeholder */}
      <div className="w-6 h-6 rounded-full bg-primary/40" />
      {/* Name placeholder */}
      <div className="flex flex-col gap-1">
        <div className="text-xs text-primary/80 font-medium">{name}</div>
        <div className="w-12 h-1.5 bg-primary/20 rounded" />
      </div>
    </div>
  );
};

// Task item with checkbox that animates to checked
const TaskItem = ({ delay, label }: { delay: number; label: string }) => {
  return (
    <div 
      className="flex items-center gap-2 animate-task-complete"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '8s',
      }}
    >
      {/* Checkbox */}
      <div className="relative w-4 h-4 border border-primary/40 rounded bg-primary/10">
        <svg 
          className="absolute inset-0 w-4 h-4 text-primary animate-check-draw"
          style={{ animationDelay: `${delay + 1}s` }}
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path 
            d="M3 8L6.5 11.5L13 5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Label */}
      <span className="text-xs text-primary/60">{label}</span>
    </div>
  );
};

// Pipeline column with floating cards
const PipelineColumn = ({ 
  label, 
  cards 
}: { 
  label: string; 
  cards: { delay: number; moveOut: number | null }[];
}) => {
  return (
    <div className="flex flex-col gap-2 w-20">
      {/* Column header */}
      <div className="text-[10px] text-primary/50 font-medium text-center border-b border-primary/20 pb-1">
        {label}
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-2 flex-1 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-8 bg-primary/15 border border-primary/25 rounded animate-pipeline-card"
            style={{ 
              animationDelay: `${card.delay}s`,
              animationDuration: card.moveOut ? `${card.moveOut - card.delay}s` : '12s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Pulsing notification dot
const NotificationDot = ({ className, delay }: { className: string; delay: number }) => {
  return (
    <div 
      className={`w-2 h-2 rounded-full bg-primary animate-glow-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default DashboardVisualization;
