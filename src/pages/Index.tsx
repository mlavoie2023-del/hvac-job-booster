import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import TechStackComparison from "@/components/landing/TechStackComparison";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiation from "@/components/landing/Differentiation";
import FounderCredibility from "@/components/landing/FounderCredibility";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import CompetitorComparison from "@/components/landing/CompetitorComparison";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStackComparison />
        <WhatYouGet />
        <HowItWorks />
        <FounderCredibility />
        <Problem />
        <WhoIsFor />
        <Differentiation />
        <CompetitorComparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
