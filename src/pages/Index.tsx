import { Link } from "react-router-dom";
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Scissors,
  Star
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const features = [
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Clients book 24/7 from your website, Instagram, or Google — no more phone tag.",
  },
  {
    icon: MessageSquare,
    title: "Automated Reminders",
    description: "Reduce no-shows with automatic text & email reminders before every appointment.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Track preferences, visit history, formulas, and notes — all in one place.",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    description: "Accept payments, sell packages, and send invoices without the headache.",
  },
  {
    icon: BarChart3,
    title: "Marketing & Reviews",
    description: "Automated follow-ups that drive Google reviews and bring clients back.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your entire salon from your phone — schedule, messages, and payments.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your salon, your workflow, and what's slowing you down.",
  },
  {
    number: "02",
    title: "Custom Build",
    description: "I build your entire system — booking, reminders, payments, marketing — in under 2 weeks.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description: "You go live with a full walkthrough and ongoing support whenever you need it.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          </div>
          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
                <Scissors className="h-4 w-4" />
                Built for Independent Salon Owners
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                One System to Run Your{" "}
                <span className="gradient-text">Entire Salon</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-body">
                The done-for-you platform that handles booking, reminders, payments, and marketing — so you can focus on your clients, not admin work.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book" className="btn-primary px-8 py-4 text-lg">
                  Book a Free Discovery Call
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No contracts · No technical skills needed · Built in 2 weeks
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-border">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">2 Weeks</p>
                <p className="text-sm text-muted-foreground mt-1">To Full Launch</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Done For You</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">White-Glove Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 lg:py-28">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Everything Your Salon Needs,{" "}
                <span className="gradient-text">In One Place</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
                Stop juggling 5 different apps. Get one unified system built specifically for your salon.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
                  <p className="mt-2 text-sm text-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 lg:py-28 bg-muted/50">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Up and Running in{" "}
                <span className="gradient-text">3 Simple Steps</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
                You don't lift a finger. I handle everything from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-body">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 lg:py-28">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Why Salon Owners{" "}
                <span className="gradient-text">Choose Us</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "No DIY — your system is fully built for you",
                "Integrates with tools you already use",
                "Automations running from day one",
                "Direct access to me for support, always",
                "No long-term contracts — month to month",
                "Training included so you're never lost",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Ready to{" "}
                <span className="gradient-text">Simplify Your Salon?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-body">
                Book a free call and I'll show you exactly how your custom system will save you hours every week.
              </p>
              <div className="mt-10">
                <Link to="/book" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
                  Book a Discovery Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                No contracts · No technical skills needed · Built in 2 weeks
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
