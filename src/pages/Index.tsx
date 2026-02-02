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
    <>
      {/* Base background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'hsl(0 0% 4%)',
        }}
      />
      {/* Smooth blue gradient accents */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% -20%, hsl(217 91% 60% / 0.12), transparent 60%),
            radial-gradient(ellipse 100% 50% at 50% 120%, hsl(217 91% 60% / 0.08), transparent 50%),
            radial-gradient(ellipse 80% 80% at -10% 50%, hsl(217 91% 60% / 0.06), transparent 50%),
            radial-gradient(ellipse 80% 80% at 110% 50%, hsl(217 91% 60% / 0.06), transparent 50%)
          `,
        }}
      />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main>
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
    </>
  );
};

export default Index;
