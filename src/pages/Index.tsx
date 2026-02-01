import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import MobileApp from "@/components/landing/MobileApp";
import TryIt from "@/components/landing/TryIt";
import CustomBuilt from "@/components/landing/CustomBuilt";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global flowing gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 20% 20%, hsl(217 91% 60% / 0.08), transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 35%, hsl(270 80% 60% / 0.05), transparent 50%),
            radial-gradient(ellipse 70% 40% at 30% 55%, hsl(340 82% 52% / 0.04), transparent 50%),
            radial-gradient(ellipse 80% 50% at 70% 75%, hsl(190 90% 50% / 0.05), transparent 50%),
            radial-gradient(ellipse 60% 40% at 40% 90%, hsl(160 80% 45% / 0.04), transparent 50%)
          `,
        }}
      />
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          <Problem />
          <WhatYouGet />
          <MobileApp />
          <CustomBuilt />
          <WhoIsFor />
          <TryIt />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
