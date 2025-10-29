import React from 'react';
import Navigation from '@/components/Navigation';
import RoboticsHero from '@/components/RoboticsHero';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import HighlightsSection from '@/components/HighlightsSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <RoboticsHero />
        </div>
        <AboutSection />
        <VisionSection />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
