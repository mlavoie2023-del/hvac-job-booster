import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import MobileApp from "@/components/landing/MobileApp";
import TechStackComparison from "@/components/landing/TechStackComparison";
import HowItWorks from "@/components/landing/HowItWorks";

import FounderCredibility from "@/components/landing/FounderCredibility";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStackComparison />
        <WhatYouGet />
        <MobileApp />
        <HowItWorks />
        <FounderCredibility />
        <Problem />
        <WhoIsFor />
        
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
