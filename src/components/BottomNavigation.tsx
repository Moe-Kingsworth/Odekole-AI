import { NavLink } from 'react-router-dom';
import { Home, Search, GraduationCap, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Explore', path: '/properties' },
  { icon: GraduationCap, label: 'Students', path: '/for-students' },
  { icon: Heart, label: 'Saved', path: '/saved' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-ink text-paper border-t border-paper/10 md:hidden">
      <div className="flex items-center justify-around py-2 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center py-2 px-3 min-w-[56px] rounded-xl transition-all',
                  isActive ? 'text-zest' : 'text-paper/60 hover:text-paper'
                )
              }
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
