import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Brightest spotlight zone */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(217_91%_60%/0.15),transparent)]" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Solo planner emphasis */}
          <p className="text-sm font-medium text-primary mb-4">
            For solo fee-only planners ready to scale
          </p>
          
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stop Losing Prospects.{" "}
            <span className="gradient-text">Start Closing More Clients.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-body">
            Let's build a system that runs your practice—so you can focus on planning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-primary px-8 py-4 text-lg">
              Schedule Your Strategy Call
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No staff required · No technical skills needed · Built in 3 weeks
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
