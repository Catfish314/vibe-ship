import CodeRain from "@/components/CodeRain";
import FloatingShapes from "@/components/FloatingShapes";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import VibeTerminal from "@/components/VibeTerminal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CodeRain />
      <FloatingShapes />
      <Hero />
      <Methodology />
      <TechStack />
      <Portfolio />
      <VibeTerminal />
      <Footer />
    </div>
  );
};

export default Index;
