import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FounderCredibility from "@/components/landing/FounderCredibility";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import Differentiation from "@/components/landing/Differentiation";
import WhoIsFor from "@/components/landing/WhoIsFor";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FounderCredibility />
        <Problem />
        <HowItWorks />
        <WhatYouGet />
        <Differentiation />
        <WhoIsFor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
