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
      {/* Global flowing gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `
            hsl(0 0% 4%)
          `,
        }}
      />
      {/* Colorful accent gradients */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, hsl(217 91% 60% / 0.15), transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 20%, hsl(270 80% 60% / 0.1), transparent 50%),
            radial-gradient(ellipse 50% 50% at 100% 30%, hsl(340 82% 52% / 0.08), transparent 50%),
            radial-gradient(ellipse 70% 40% at 20% 60%, hsl(190 90% 50% / 0.08), transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 70%, hsl(160 80% 45% / 0.08), transparent 50%),
            radial-gradient(ellipse 80% 40% at 50% 100%, hsl(217 91% 60% / 0.12), transparent 50%)
          `,
        }}
      />
      {/* Subtle noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
