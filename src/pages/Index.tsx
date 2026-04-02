import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import EngineRoom from "@/components/EngineRoom";
import CaseStudyTicker from "@/components/CaseStudyTicker";
import ROICalculator from "@/components/ROICalculator";
import LiveStatusFeed from "@/components/LiveStatusFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <GridBackground />
      <Hero />
      <CaseStudyTicker />
      <Comparison />
      <Services />
      <EngineRoom />
      <ROICalculator />
      <Footer />
      <LiveStatusFeed />
    </div>
  );
};

export default Index;
