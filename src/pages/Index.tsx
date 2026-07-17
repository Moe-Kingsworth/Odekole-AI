import Navbar from '@/components/Navbar';
import MarqueeBand from '@/components/MarqueeBand';
import Hero from '@/components/Hero';
import CityChips from '@/components/CityChips';
import PropertyGrid from '@/components/PropertyGrid';
import FeaturesBento from '@/components/FeaturesBento';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-paper text-ink pb-20">
      <Navbar />
      <MarqueeBand />
      <Hero />
      <CityChips />
      <PropertyGrid heading="Fresh matches for you" limit={6} />
      <FeaturesBento />
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Index;
