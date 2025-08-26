import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, X, MapPin, Users, Wifi, Car, Utensils, Brain } from 'lucide-react';

const PropertyFilters = () => {
  const [priceRange, setPriceRange] = React.useState([50000, 200000]);
  const [selectedAmenities, setSelectedAmenities] = React.useState<string[]>([]);

  const amenities = [
    { id: 'wifi', label: 'Wi-Fi', icon: <Wifi className="w-4 h-4" /> },
    { id: 'parking', label: 'Parking', icon: <Car className="w-4 h-4" /> },
    { id: 'kitchen', label: 'Kitchen', icon: <Utensils className="w-4 h-4" /> },
    { id: 'laundry', label: 'Laundry', icon: <Users className="w-4 h-4" /> },
  ];

  const locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano'];

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  return (
    <div className="space-y-6">
      {/* AI Smart Filters */}
      <Card className="bg-gradient-accent text-white border-0 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="w-5 h-5" />
            AI Smart Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 border border-white/30">
            Perfect for Computer Science Students
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 border border-white/30">
            Close to University of Lagos
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 border border-white/30">
            Budget-Friendly Options
          </Button>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center justify-between">
            Price Range
            <span className="text-sm font-normal text-muted-foreground">
              ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500000}
            min={30000}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>₦30k</span>
            <span>₦500k+</span>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {locations.map((location) => (
              <Button 
                key={location}
                variant="outline" 
                className="w-full justify-start hover:bg-primary hover:text-white"
              >
                {location}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity) => (
              <Button
                key={amenity.id}
                variant={selectedAmenities.includes(amenity.id) ? "default" : "outline"}
                onClick={() => toggleAmenity(amenity.id)}
                className="justify-start"
              >
                {amenity.icon}
                <span className="ml-2">{amenity.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Applied Filters */}
      {selectedAmenities.length > 0 && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Applied Filters
              <Button variant="ghost" size="sm" onClick={() => setSelectedAmenities([])}>
                Clear All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedAmenities.map((amenityId) => {
                const amenity = amenities.find(a => a.id === amenityId);
                return (
                  <Badge key={amenityId} variant="secondary" className="flex items-center gap-1">
                    {amenity?.label}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => toggleAmenity(amenityId)}
                    />
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PropertyFilters;