import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were missing at least 5-10 calls a week while on jobs. Now every single one gets answered and followed up. Booked $12K in extra work the first month.",
    name: "Mike R.",
    title: "HVAC Owner",
    location: "Dallas, TX",
    metric: "47% more calls answered",
  },
  {
    quote: "I used to spend my evenings calling leads back. Now the system handles it and I just show up to quoted jobs. My wife is happy I'm home for dinner.",
    name: "James T.",
    title: "Owner/Technician",
    location: "Phoenix, AZ",
    metric: "Response time under 2 minutes",
  },
  {
    quote: "The automated review requests alone have gotten us 28 new Google reviews in 60 days. We're now the highest-rated HVAC company in our area.",
    name: "Sarah K.",
    title: "Operations Manager",
    location: "Atlanta, GA",
    metric: "28 new reviews in 60 days",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            What HVAC Owners Are Saying
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-feature flex flex-col">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-foreground">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Badge */}
              <div className="mt-4 inline-flex self-start rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="mt-4 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title} · {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
