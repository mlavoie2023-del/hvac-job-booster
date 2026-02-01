import HeroDashboard from "./HeroDashboard";

const TryIt = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden spotlight-section">
      {/* Extra ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(217_91%_60%/0.06),transparent)] pointer-events-none" />
      
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Try It Yourself
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
            Explore the dashboard and see how everything works together.
          </p>
        </div>

        {/* Dashboard Preview */}
        <HeroDashboard />
      </div>
    </section>
  );
};

export default TryIt;
