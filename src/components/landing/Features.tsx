import { 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  Smartphone,
  CalendarCheck,
  Star,
  Users,
  FileText,
  BarChart3,
  Settings
} from "lucide-react";

const aiEmployees = [
  {
    icon: Phone,
    title: "Reception Specialist",
    description: "Answers every call you miss and books quotes for you, 24/7.",
  },
  {
    icon: MessagesSquare,
    title: "Website Chat Specialist",
    description: "Turns website visitors into leads, 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Lead Nurture Specialist",
    description: "Automatically performs consistent follow up with every lead.",
  },
  {
    icon: Users,
    title: "Repeat Revenue Specialist",
    description: "Reaches out to past customers and converts them into repeat jobs automatically.",
  },
];

const crmTools = [
  {
    icon: FileText,
    title: "Easy Estimate",
    description: "Send estimates, invoices, and get paid faster.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Appointments",
    description: "Let homeowners book service calls or quote appointments directly on your calendar with automatic confirmations and reminders.",
  },
  {
    icon: Star,
    title: "Review Boost",
    description: "Automatically requests reviews and filters out negative reviews from your Google page.",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reports",
    description: "Track all of your data in one simple dashboard so you know what's working and what's not.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof aiEmployees[0]; index: number }) => (
  <div key={index} className="card-feature group">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
      <feature.icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
    <p className="mt-2 text-muted-foreground">{feature.description}</p>
  </div>
);

const CrmToolCard = ({ feature, index }: { feature: typeof crmTools[0]; index: number }) => (
  <div key={index} className="flex items-start gap-3 rounded-lg bg-background/50 p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
      <feature.icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{feature.title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="bg-secondary/50 py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Included in Your HVAC Software Install
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to capture, convert, and keep more customers
          </p>
        </div>

        {/* AI Employees Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            AI Employees
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Your always-on team that never misses a beat
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiEmployees.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* HVAC CRM Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            HVAC CRM
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Your all-in-one command center — right from your phone
          </p>
          
          {/* CRM Hero Card */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="card-elevated overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* CRM Main Feature */}
                <div className="flex flex-col items-center justify-center bg-primary/5 p-8 lg:w-1/3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <Smartphone className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-foreground">HVAC CRM App</h4>
                  <p className="mt-2 text-center text-muted-foreground">
                    Track your current jobs, leads, and conversations from an app on your phone.
                  </p>
                </div>
                
                {/* Tools Inside CRM */}
                <div className="flex-1 p-6 lg:p-8">
                  <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Built-in Tools
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {crmTools.map((feature, index) => (
                      <CrmToolCard key={index} feature={feature} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
