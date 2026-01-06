import { Settings2 } from "lucide-react";

const Solution = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4">
            <Settings2 className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We Fix This With One Simple System
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            We install an AI-powered software system designed specifically for HVAC companies. It answers calls, follows up automatically, books quotes, and keeps everything organized — so no lead falls through the cracks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
