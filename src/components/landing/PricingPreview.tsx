import { Link } from "react-router-dom";

const PricingPreview = () => {
  return (
    <section className="relative py-20 lg:py-28 spotlight-section">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Solo-planner pricing</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body">
            One flat monthly fee. No per-user charges. No surprise costs. Designed for one-person firms.
          </p>

          <div className="mt-10 rounded-2xl border border-primary/30 bg-card p-8 lg:p-10 shadow-glow">
            <p className="text-5xl lg:text-6xl font-bold text-foreground">
              $497<span className="text-2xl text-muted-foreground">/month</span>
            </p>
            <p className="mt-2 text-lg text-body">
              for your complete system
            </p>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-body">
                One-time implementation:{" "}
                <span className="font-semibold text-foreground">$1,997</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                or prepay 3 months and skip the setup fee entirely
              </p>
            </div>

            <Link
              to="/pricing"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              See Full Pricing
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No long-term contracts. Cancel anytime after 90 days. Built for solo practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
