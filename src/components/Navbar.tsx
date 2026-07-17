import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { label: 'Find digs', to: '/properties' },
  { label: 'For students', to: '/for-students' },
  { label: 'List a place', to: '/list' },
  { label: 'How it works', to: '/how' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-ink text-paper">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <Link to="/" className="font-display font-bold text-xl tracking-tight">
          ode<span className="text-zest">kole</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/signup"
            className="bg-zest text-zest-ink px-5 py-2.5 rounded-full font-bold text-sm hover:brightness-95 transition"
          >
            Sign up free
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-paper/20 text-paper"
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ink text-paper border-l border-paper/10 w-[85%] sm:w-[360px]">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-xl">
                ode<span className="text-zest">kole</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full border border-paper/20 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-3 rounded-lg text-lg font-display hover:bg-ink-2"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center bg-zest text-zest-ink px-5 py-3 rounded-full font-bold"
            >
              Sign up free
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
