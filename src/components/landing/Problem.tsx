import { UserSearch, FileSignature, Mail, ClipboardList, Calendar, Receipt } from "lucide-react";

const painPoints = [
  { text: "Following up with leads", icon: UserSearch },
  { text: "Chasing down signatures", icon: FileSignature },
  { text: "Sending reminder emails", icon: Mail },
  { text: "Manually onboarding clients", icon: ClipboardList },
  { text: "Scheduling meetings", icon: Calendar },
  { text: "Tracking invoices", icon: Receipt },
];

const Problem = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center leading-tight">
            Running a solo practice means <span className="gradient-text">wearing every hat</span>
          </h2>

          {/* Pain points as a flowing list */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {painPoints.map((pain, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 p-6 rounded-xl border border-border/40 bg-card/30"
              >
                <pain.icon className="h-6 w-6 text-muted-foreground shrink-0" />
                <span className="text-foreground text-lg font-medium">{pain.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
