import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import type { User } from '@supabase/supabase-js';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('glass', 'py-3', 'border-b', 'border-border', 'shadow-lg');
          navRef.current.classList.remove('py-6');
        } else {
          navRef.current.classList.remove('glass', 'py-3', 'border-b', 'border-border', 'shadow-lg');
          navRef.current.classList.add('py-6');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
{ name: 'Studio', path: '/studio' },
    { name: 'Careers', path: '/careers' },
{ name: 'Pricing', path: '/pricing' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[200] px-6 lg:px-12 py-6 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-headings font-bold text-2xl tracking-tight text-foreground hover:text-primary transition-colors nav-link">
          JoeKym Labs<span className="text-primary">™</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
{navLinks.map((link) => {
            const iconSrc = `/nav/${link.name.toLowerCase()}.svg`;
            const hasIcon = link.name !== 'Support';
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-all duration-300 nav-link relative group"
              >
                {hasIcon && <img src={iconSrc} alt="" className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />}
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 -translate-x-1/2"></span>
              </Link>
            );
          })}
          <div className="ml-4 flex items-center gap-3">
{user ? (
              <Link to="/profile" className="p-2 bg-muted rounded-button btn-hover border border-border flex-shrink-0 hover:bg-accent transition-colors">
                <img src="/nav/profile.svg" alt="Profile" className="w-5 h-5" />
              </Link>
            ) : (
              <Link to="/auth" className="px-4 py-2 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded-button hover:bg-primary/5">
                Sign In
              </Link>
            )}
            <Link to="/contact" className="px-6 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-button shadow-green-glow hover:shadow-green-glow btn-hover">
              Start Project
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 size-9"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-background/95 backdrop-blur-md border-t border-border px-6 py-8 space-y-4">
{navLinks.map((link) => {
            const iconSrc = `/nav/${link.name.toLowerCase()}.svg`;
            const hasIcon = link.name !== 'Support';
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                {hasIcon && <img src={iconSrc} alt="" className="w-5 h-5 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />}
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-border space-y-2">
{user ? (
              <Link to="/profile" className="flex items-center gap-3 px-4 py-3 bg-muted font-bold rounded-button btn-hover">
                <img src="/nav/profile.svg" alt="Profile" className="w-5 h-5 flex-shrink-0" />
                Profile
              </Link>
            ) : (
              <Link to="/auth" className="block px-4 py-3 border border-primary/30 text-primary font-bold rounded-button hover:bg-primary/5">
                Sign In
              </Link>
            )}
            <Link to="/contact" className="block w-full px-4 py-3 bg-primary text-primary-foreground font-bold rounded-button shadow-green-glow text-center btn-hover">
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
