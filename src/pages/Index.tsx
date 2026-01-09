import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoIsFor from "@/components/landing/WhoIsFor";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <WhoIsFor />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
