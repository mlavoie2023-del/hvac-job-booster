import { Zap, Phone, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";

const benefits = [
  { icon: Phone, text: "Every call answered, 24/7" },
  { icon: Calendar, text: "Quotes booked automatically" },
  { icon: TrendingUp, text: "Leads followed up instantly" },
  { icon: CheckCircle2, text: "No more abandoned leads" },
];

const Solution = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              We Fix This With One Simple System
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
              We install an AI-powered software system designed specifically for HVAC companies — so you never miss another opportunity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
