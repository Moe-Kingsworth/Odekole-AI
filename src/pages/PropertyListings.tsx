import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Grid, List, Brain, Search, MapPin, SlidersHorizontal } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const PropertyListings = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended property data for listings page
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
    },
    {
      id: '7',
      title: 'Executive Studio Apartment - Furnished',
      location: 'Lekki, Lagos',
      price: 180000,
      rating: 4.7,
      reviews: 12,
      image: property1,
      amenities: ['wifi', 'kitchen', 'parking'],
      capacity: 1,
      isAIRecommended: true
    },
    {
      id: '8',
      title: 'Student Co-living Space with Workspace',
      location: 'Maryland, Lagos',
      price: 95000,
      rating: 4.6,
      reviews: 22,
      image: property2,
      amenities: ['wifi', 'kitchen'],
      capacity: 2,
      isAIRecommended: false
    }
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-hero py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Property Listings
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Discover the perfect accommodation for your student journey
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 max-w-2xl mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-0 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button size="lg" className="h-12 px-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* AI Insights Banner */}
        <div className="bg-gradient-accent rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
                <p className="opacity-90">We found {properties.filter(p => p.isAIRecommended).length} perfect matches based on your preferences</p>
              </div>
            </div>
            <Button variant="ghost" className="text-white hover:bg-white/20 border border-white/30">
              View AI Matches
            </Button>
          </div>
        </div>

        {/* Filter and View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Available Properties
            <span className="text-lg font-normal text-muted-foreground ml-2">
              ({filteredProperties.length} results)
            </span>
          </h2>
          
          <div className="flex items-center gap-4">
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
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
            <div className="w-80 flex-shrink-0">
              <PropertyFilters />
            </div>
          )}
          
          {/* Properties Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProperties.map((property, index) => (
                  <div 
                    key={property.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or browse all properties.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
            
            {/* Load More */}
            {filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="px-8">
                  Load More Properties
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PropertyListings;