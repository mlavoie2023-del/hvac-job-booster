import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import MobileApp from "@/components/landing/MobileApp";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CustomBuilt from "@/components/landing/CustomBuilt";

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
        <DashboardPreview />
        <WhatYouGet />
        <MobileApp />
        <CustomBuilt />
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
