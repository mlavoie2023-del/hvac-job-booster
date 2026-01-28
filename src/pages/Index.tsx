import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import WhoIsFor from "@/components/landing/WhoIsFor";
import WhatYouGet from "@/components/landing/WhatYouGet";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiation from "@/components/landing/Differentiation";
import Results from "@/components/landing/Results";
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
        <Problem />
        <WhoIsFor />
        <WhatYouGet />
        <HowItWorks />
        <Differentiation />
        <Results />
        <FounderCredibility />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
