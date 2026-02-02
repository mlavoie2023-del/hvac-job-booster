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
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'hsl(0 0% 4%)' }}>
      {/* Global flowing gradient background - scrolls with page */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 30% at 50% 5%, hsl(217 91% 60% / 0.1), transparent 40%),
            radial-gradient(ellipse 80% 40% at 15% 25%, hsl(270 80% 60% / 0.06), transparent 50%),
            radial-gradient(ellipse 70% 35% at 85% 40%, hsl(340 82% 52% / 0.05), transparent 50%),
            radial-gradient(ellipse 90% 40% at 50% 55%, hsl(217 91% 60% / 0.06), transparent 45%),
            radial-gradient(ellipse 80% 35% at 20% 70%, hsl(190 90% 50% / 0.06), transparent 50%),
            radial-gradient(ellipse 70% 40% at 80% 85%, hsl(160 80% 45% / 0.05), transparent 50%),
            radial-gradient(ellipse 100% 30% at 50% 100%, hsl(217 91% 60% / 0.08), transparent 40%)
          `,
          minHeight: '100%',
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
