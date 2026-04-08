import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import SocialProofSection from "./components/sections/SocialProofSection";
import DemoSection from "./components/sections/DemoSection";
import AIAgentSection from "./components/sections/AIAgentSection";
import SecuritySection from "./components/sections/SecuritySection";
import ComplianceSection from "./components/sections/ComplianceSection";
import FAQSection from "./components/sections/FAQSection";
import PricingCTASection from "./components/sections/PricingCTASection";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content - accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1 w-full">
        <HeroSection />
        <SocialProofSection />
        <DemoSection />
        <AIAgentSection />
        <SecuritySection />
        <ComplianceSection />
        <FAQSection />
        <PricingCTASection />
      </main>
      <Footer />
    </div>
  );
}
