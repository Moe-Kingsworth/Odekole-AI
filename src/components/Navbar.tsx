import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, Heart, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              NaijaDigs<span className="text-accent">AI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Explore
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              For Students
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              List Property
            </a>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Heart className="w-4 h-4 mr-2" />
              Saved
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;