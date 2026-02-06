import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-24 lg:py-32">

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stop Chasing Admin.{" "}
            <span className="gradient-text">Start Scaling Your Practice.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-body">
            I build you a custom system that handles follow-up, onboarding, and marketing so you can focus on financial planning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-primary px-8 py-4 text-lg">
              Book a Discovery Call
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No staff required · No technical skills needed · Built in 2 weeks
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
