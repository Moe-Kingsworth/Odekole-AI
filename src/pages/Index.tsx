import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Brain } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Index = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  // Mock property data
  const properties = [
    {
      id: '1',
      title: 'Modern Student Studio near University of Lagos',
      location: 'Akoka, Lagos',
      price: 75000,
      rating: 4.8,
      reviews: 24,
      image: property1,
      amenities: ['wifi', 'kitchen', 'parking'],
      capacity: 1,
      isAIRecommended: true
    },
    {
      id: '2',
      title: 'Shared Apartment for Students - 3 Bedrooms',
      location: 'Yaba, Lagos',
      price: 120000,
      rating: 4.6,
      reviews: 18,
      image: property2,
      amenities: ['wifi', 'kitchen'],
      capacity: 3,
      isAIRecommended: false
    },
    {
      id: '3',
      title: 'Budget-Friendly Hostel Room',
      location: 'Surulere, Lagos',
      price: 45000,
      rating: 4.4,
      reviews: 32,
      image: property3,
      amenities: ['wifi'],
      capacity: 2,
      isAIRecommended: true
    },
    {
      id: '4',
      title: 'Premium Student Apartment with Study Area',
      location: 'Victoria Island, Lagos',
      price: 150000,
      rating: 4.9,
      reviews: 15,
      image: property1,
      amenities: ['wifi', 'kitchen', 'parking'],
      capacity: 2,
      isAIRecommended: false
    },
    {
      id: '5',
      title: 'Affordable Shared Housing for Students',
      location: 'Ikeja, Lagos',
      price: 85000,
      rating: 4.5,
      reviews: 28,
      image: property2,
      amenities: ['wifi', 'kitchen'],
      capacity: 4,
      isAIRecommended: true
    },
    {
      id: '6',
      title: 'Cozy Single Room near UNILAG',
      location: 'Bariga, Lagos',
      price: 55000,
      rating: 4.3,
      reviews: 41,
      image: property3,
      amenities: ['wifi'],
      capacity: 1,
      isAIRecommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* AI Insights Banner */}
        <div className="bg-gradient-accent rounded-2xl p-6 mb-8 text-white animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
                <p className="opacity-90">We found 3 perfect matches based on your preferences</p>
              </div>
            </div>
            <Button variant="ghost" className="text-white hover:bg-white/20 border border-white/30">
              View All AI Matches
            </Button>
          </div>
        </div>

        {/* Filter and View Controls */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Available Properties
            <span className="text-lg font-normal text-muted-foreground ml-2">
              ({properties.length} results)
            </span>
          </h2>
          
          <div className="flex items-center gap-4">
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            
            <div className="flex items-center border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0 animate-fade-in">
              <PropertyFilters />
            </div>
          )}
          
          {/* Properties Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {properties.map((property, index) => (
                <div 
                  key={property.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="px-8">
                Load More Properties
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                NaijaDigs<span className="text-accent">AI</span>
              </h3>
              <p className="opacity-90">
                Smart student housing for Nigeria's future leaders. Find your perfect accommodation with AI-powered recommendations.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Search Properties</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">AI Recommendations</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Roommate Finder</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Student Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Property Owners</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">List Property</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing Tools</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Property Management</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Safety</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-90">
            <p>&copy; 2024 NaijaDigsAI. Made with ❤️ for Nigerian students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;