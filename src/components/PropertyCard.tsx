import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Users, Wifi, Car, Utensils, Star } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  capacity: number;
  isAIRecommended?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  rating,
  reviews,
  image,
  amenities,
  capacity,
  isAIRecommended = false
}) => {
  const amenityIcons: { [key: string]: React.ReactNode } = {
    wifi: <Wifi className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    kitchen: <Utensils className="w-4 h-4" />
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] border-0 animate-fade-in">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* AI Recommendation Badge */}
        {isAIRecommended && (
          <Badge className="absolute top-3 left-3 bg-accent text-white font-medium">
            AI Recommended
          </Badge>
        )}
        
        {/* Heart Icon */}
        <Button 
          size="sm" 
          variant="secondary"
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white border-0 shadow-soft"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Location */}
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">({reviews} reviews)</span>
          </div>

          {/* Capacity and Amenities */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              Up to {capacity} students
            </div>
            <div className="flex gap-2">
              {amenities.slice(0, 3).map((amenity) => (
                <div key={amenity} className="text-muted-foreground" title={amenity}>
                  {amenityIcons[amenity.toLowerCase()] || <div className="w-4 h-4" />}
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div>
              <span className="text-2xl font-bold text-primary">
                ₦{price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <Button className="bg-primary hover:bg-primary-hover">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;