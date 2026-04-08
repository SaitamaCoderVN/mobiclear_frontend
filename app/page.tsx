import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import DemoSection from './components/sections/DemoSection';
import AIAgentSection from './components/sections/AIAgentSection';
import SecuritySection from './components/sections/SecuritySection';
import ComplianceSection from './components/sections/ComplianceSection';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <DemoSection />
        <AIAgentSection />
        <SecuritySection />
        <ComplianceSection />
      </main>
      <Footer />
    </div>
  );
}
