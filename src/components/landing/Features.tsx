import { 
  Phone, 
  MessageSquare, 
  MessagesSquare, 
  LayoutDashboard,
  CalendarCheck,
  Star,
  Users
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "24/7 AI Receptionist",
    description: "Answers missed calls and books quotes around the clock",
  },
  {
    icon: MessageSquare,
    title: "AI Follow-Up",
    description: "Consistently texts and emails every lead automatically",
  },
  {
    icon: MessagesSquare,
    title: "Website Chat",
    description: "Turns website visitors into real conversations",
  },
  {
    icon: LayoutDashboard,
    title: "HVAC CRM",
    description: "Track leads, jobs, and conversations in one place",
  },
  {
    icon: CalendarCheck,
    title: "Instant Quote Booking",
    description: "Confirmations and reminders sent automatically",
  },
  {
    icon: Star,
    title: "Automated Reviews",
    description: "Grow your Google rating on autopilot",
  },
  {
    icon: Users,
    title: "Customer Reactivation",
    description: "Bring past customers back for repeat business",
  },
];

const Features = () => {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
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
