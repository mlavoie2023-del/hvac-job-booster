import { Check, X, Target, TrendingUp, Users, Clock } from "lucide-react";

const idealClient = [
  {
    icon: Users,
    text: "Solo fee-only planner with no partners or staff",
  },
  {
    icon: TrendingUp, 
    text: "Ready to grow but not ready to hire",
  },
  {
    icon: Target,
    text: "Focused on financial planning, not chasing leads",
  },
  {
    icon: Clock,
    text: "Tired of losing nights to admin work",
  },
];

const notForList = [
  "Large RIAs with existing teams",
  "Commission-based advisors", 
  "Planners happy staying small",
];

const WhoIsFor = () => {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Built For <span className="gradient-text">Solo</span> Fee-Only Planners
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
              I work exclusively with one-person planning firms. No RIAs. No teams. 
              Just solo practitioners who want to scale without sacrificing their sanity.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* This is for you - takes more space */}
            <div className="lg:col-span-3 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                You're in the right place if...
              </h3>
              <div className="space-y-4">
                {idealClient.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-body font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for you - smaller sidebar */}
            <div className="lg:col-span-2 rounded-xl border border-border/40 bg-card/30 p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <X className="h-4 w-4" />
                Not the right fit
              </h3>
              <div className="space-y-3">
                {notForList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Small reassurance */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Not sure if this is for you? <a href="/book" className="text-primary hover:underline">Let's chat</a> and find out.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a 
              href="/book" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
