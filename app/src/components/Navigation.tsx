import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('bg-[#07080A]/85', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/5');
          navRef.current.classList.remove('py-6');
        } else {
          navRef.current.classList.remove('bg-[#07080A]/85', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/5');
          navRef.current.classList.add('py-6');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Studio', path: '/studio' },
    { name: 'Notes', path: '/notes' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[200] px-6 lg:px-12 py-6 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity">
          JoeKym Labs<span className="text-[#B8B2F7]">™</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[13px] font-medium tracking-wide uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/#contact" 
          className="hidden md:block px-6 py-3 bg-[#B8B2F7] text-[#07080A] text-[13px] font-bold uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-black/20"
        >
          Start a project
        </Link>
        
        {/* Mobile menu icon placeholder */}
        <button className="md:hidden text-white p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h16M4 16h16"/></svg>
        </button>
      </div>
    </nav>
  );
}
