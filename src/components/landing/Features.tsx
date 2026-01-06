import { 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  LayoutDashboard,
  CalendarCheck,
  Star,
  Users,
  FileText,
  BarChart3,
  Settings
} from "lucide-react";

const features = [
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
  {
    icon: LayoutDashboard,
    title: "HVAC CRM",
    description: "Track your current jobs, leads, and conversations from an app on your phone.",
  },
  {
    icon: FileText,
    title: "Easy Estimate",
    description: "Send estimates, invoices, and get paid faster.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Appointments",
    description: "Lets leads book quote appointments on your calendar with automatic confirmations and reminders.",
  },
  {
    icon: Star,
    title: "Review Boost",
    description: "Automatically requests reviews and filters out negative reviews from your Google page.",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reports",
    description: "Track all of your data in one simple dashboard in your CRM so you know what's working and what's not.",
  },
  {
    icon: Settings,
    title: "Ongoing Improvements and Maintenance",
    description: "We keep your system running smoothly and improve it over time as your business grows.",
  },
];

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

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
