import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";

import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoIsFor from "@/components/landing/WhoIsFor";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <WhoIsFor />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;
