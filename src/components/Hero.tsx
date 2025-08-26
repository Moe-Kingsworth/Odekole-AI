import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Users, Brain } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Nigerian cityscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-hover/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block">Odekole</span>
              <span className="text-accent font-normal text-4xl md:text-5xl flex items-center justify-center gap-3">
                <Brain className="w-12 h-12" />
                AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Smart student housing for Nigeria's future leaders. AI-powered recommendations for affordable, quality accommodation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-hover max-w-3xl mx-auto animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location
                </label>
                <Input 
                  placeholder="Lagos, Abuja, Port Harcourt..." 
                  className="border-2 border-border/50 focus:border-primary h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  Students
                </label>
                <Input 
                  placeholder="1-4 students" 
                  className="border-2 border-border/50 focus:border-primary h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Budget</label>
                <Input 
                  placeholder="₦50,000/month" 
                  className="border-2 border-border/50 focus:border-primary h-12"
                />
              </div>
            </div>
            
            <Button size="lg" className="w-full h-14 text-lg font-semibold bg-gradient-hero hover:bg-primary-hover transition-all duration-300 transform hover:scale-[1.02]">
              <Search className="w-5 h-5 mr-2" />
              Find My Perfect Digs
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Recommendations</h3>
              <p className="text-sm opacity-80">Smart matching based on your preferences, budget, and university location</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Locations</h3>
              <p className="text-sm opacity-80">Close to universities, with easy access to transport and amenities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Student Community</h3>
              <p className="text-sm opacity-80">Connect with fellow students and find compatible roommates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;