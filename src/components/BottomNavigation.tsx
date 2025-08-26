import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, GraduationCap, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const navItems = [
    {
      icon: Home,
      label: 'Home',
      path: '/'
    },
    {
      icon: Search,
      label: 'Explore',
      path: '/properties'
    },
    {
      icon: GraduationCap,
      label: 'For Students',
      path: '/for-students'
    },
    {
      icon: Heart,
      label: 'Saved',
      path: '/saved'
    },
    {
      icon: User,
      label: 'Profile',
      path: '/profile'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center justify-center py-2 px-3 min-w-[60px] rounded-xl transition-all duration-200',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={cn('w-5 h-5 mb-1', isActive && 'scale-110')} />
                    <span className={cn(
                      'text-xs font-medium transition-all duration-200',
                      isActive ? 'scale-105' : 'scale-100'
                    )}>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;