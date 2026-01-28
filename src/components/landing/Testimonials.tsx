const testimonials = [
  {
    quote:
      "As a solo planner, I was losing 5-7 prospects every month who said 'not now.' Three months in, I've closed 4 clients from automated follow-up alone. Already paid for itself.",
    name: "[Name]",
    title: "CFP® - Solo Fee-Only Planner",
    location: "Austin",
  },
  {
    quote:
      "My onboarding used to take 10 hours of my time per client. Now it runs automatically and clients say it's the most professional experience they've had. Game-changer for a one-person firm.",
    name: "[Name]",
    title: "CFP® - Solo Hourly Planner",
    location: "Denver",
  },
  {
    quote:
      "I finally have a systematic way to ask for referrals without it feeling awkward. Getting 2-3 per month now. Perfect for solo planners who hate 'selling.'",
    name: "[Name]",
    title: "CFP® - Solo Virtual Planner",
    location: "Boston",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-3">From solo planners like you</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built For Planners Like You
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-dark flex flex-col">
              {/* Quote */}
              <blockquote className="flex-1 text-body">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.location}
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
