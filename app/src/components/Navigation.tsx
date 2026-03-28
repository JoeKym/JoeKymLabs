import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('bg-slate-50/85', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-slate-200');
          navRef.current.classList.remove('py-6');
        } else {
          navRef.current.classList.remove('bg-slate-50/85', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-slate-200');
          navRef.current.classList.add('py-6');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Studio', path: '/studio' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[200] px-6 lg:px-12 py-6 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
          JoeKym Labs<span className="text-primary">™</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[13px] font-medium tracking-wide uppercase text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link 
              to="/profile" 
              className="px-6 py-3 bg-slate-100 text-slate-900 text-[13px] font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-all border border-slate-200"
            >
              Profile
            </Link>
          ) : (
            <Link 
              to="/auth" 
              className="px-6 py-3 border border-primary/40 text-primary text-[13px] font-bold uppercase tracking-wider rounded-xl hover:bg-primary/5 transition-all"
            >
              Sign In
            </Link>
          )}

          <Link 
            to="/contact" 
            className="hidden md:block px-6 py-3 bg-primary text-primary-foreground text-[13px] font-bold uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
          >
            Start a project
          </Link>
        </div>
        
        {/* Mobile menu icon placeholder */}
        <button className="md:hidden text-slate-900 p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h16M4 16h16"/></svg>
        </button>
      </div>
    </nav>
  );
}
