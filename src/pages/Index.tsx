import GlassHeader from '@/components/GlassHeader';
import HeroSection from '@/components/HeroSection';
import FloatingStats from '@/components/FloatingStats';
import BentoGrid from '@/components/BentoGrid';
import SolutionsSection from '@/components/SolutionsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlassHeader />
      <HeroSection />
      <FloatingStats />
      <BentoGrid />
      <SolutionsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
