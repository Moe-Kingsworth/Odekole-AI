import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, Heart, MessageCircle, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Odekole<span className="text-accent">AI</span>
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

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/20">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-center pb-4 border-b">
                  <h1 className="text-2xl font-bold text-foreground">
                    Odekole<span className="text-accent">AI</span>
                  </h1>
                </div>
                
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted">
                    Explore
                  </a>
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted">
                    For Students
                  </a>
                  <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted">
                    List Property
                  </a>
                </div>

                {/* Mobile User Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button variant="ghost" className="justify-start">
                    <Heart className="w-4 h-4 mr-3" />
                    Saved Properties
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <MessageCircle className="w-4 h-4 mr-3" />
                    Messages
                  </Button>
                  <Button className="w-full mt-4">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;