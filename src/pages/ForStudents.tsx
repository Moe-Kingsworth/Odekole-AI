import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Brain, 
  Users, 
  MapPin, 
  Clock, 
  BookOpen, 
  Shield, 
  Calculator,
  Heart,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Target
} from 'lucide-react';

const ForStudents = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: 'AI-Powered Matching',
      description: 'Our advanced AI analyzes your preferences, budget, and university location to recommend perfect housing matches.',
      benefits: ['Personalized recommendations', 'Smart filtering', 'Compatibility scoring']
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: 'Strategic Locations',
      description: 'Find accommodations close to major universities across Nigeria with easy access to transport and amenities.',
      benefits: ['Near university campuses', 'Public transport access', 'Local amenities nearby']
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Roommate Matching',
      description: 'Connect with compatible roommates based on study habits, lifestyle preferences, and shared interests.',
      benefits: ['Compatibility assessment', 'Shared expenses', 'Built-in community']
    },
    {
      icon: <Calculator className="w-8 h-8 text-accent" />,
      title: 'Budget Planning',
      description: 'Transparent pricing with no hidden fees. Tools to help you budget effectively for accommodation costs.',
      benefits: ['Clear pricing', 'Budget calculators', 'Payment plans available']
    }
  ];

  const universities = [
    { name: 'University of Lagos (UNILAG)', location: 'Lagos', properties: 45 },
    { name: 'University of Ibadan (UI)', location: 'Ibadan', properties: 32 },
    { name: 'Ahmadu Bello University (ABU)', location: 'Zaria', properties: 28 },
    { name: 'University of Nigeria, Nsukka (UNN)', location: 'Enugu', properties: 24 },
    { name: 'Obafemi Awolowo University (OAU)', location: 'Ile-Ife', properties: 19 },
    { name: 'Lagos State University (LASU)', location: 'Lagos', properties: 38 }
  ];

  const testimonials = [
    {
      name: 'Adunni Okafor',
      university: 'UNILAG',
      course: 'Computer Science',
      rating: 5,
      comment: 'Odekole AI found me the perfect studio apartment near campus. The AI recommendations were spot on!'
    },
    {
      name: 'Ibrahim Mohammed',
      university: 'ABU Zaria',
      course: 'Engineering',
      rating: 5,
      comment: 'Great platform! Found affordable shared housing with compatible roommates. Highly recommended.'
    },
    {
      name: 'Chioma Nwankwo',
      university: 'UNN',
      course: 'Medicine',
      rating: 4,
      comment: 'The budget planning tools helped me find accommodation within my means. Very helpful!'
    }
  ];

  const tips = [
    {
      title: 'Start Early',
      description: 'Begin your accommodation search at least 3-4 months before the academic session starts.',
      icon: <Clock className="w-6 h-6 text-accent" />
    },
    {
      title: 'Visit in Person',
      description: 'Always visit properties in person before making any payments or commitments.',
      icon: <MapPin className="w-6 h-6 text-accent" />
    },
    {
      title: 'Budget Wisely',
      description: 'Factor in utilities, transport costs, and other expenses beyond just rent.',
      icon: <Calculator className="w-6 h-6 text-accent" />
    },
    {
      title: 'Safety First',
      description: 'Choose accommodations in safe neighborhoods with good security measures.',
      icon: <Shield className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                For Students
              </h1>
            </div>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Designed specifically for Nigerian students. Find affordable, safe, and comfortable accommodation near your university with AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Target className="w-5 h-5 mr-2" />
                Find My Perfect Room
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/20">
                <BookOpen className="w-5 h-5 mr-2" />
                Student Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Students Choose Odekole AI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges students face when looking for accommodation. 
            Our platform is built to make your search easier, smarter, and more affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Universities Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Universities We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((university, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{university.name}</h4>
                      <div className="flex items-center gap-1 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{university.location}</span>
                      </div>
                      <Badge variant="secondary">{university.properties} properties nearby</Badge>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Tips Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Student Housing Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{tip.title}</h4>
                      <p className="text-muted-foreground text-sm">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.course} • {testimonial.university}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Student Accommodation?</h3>
          <p className="opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of Nigerian students who have found their ideal housing through our AI-powered platform. 
            Start your search today and focus on what matters most - your studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Brain className="w-5 h-5 mr-2" />
              Get AI Recommendations
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/20">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Support
            </Button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ForStudents;