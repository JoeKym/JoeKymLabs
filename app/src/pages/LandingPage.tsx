import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';

// Section 1: Hero
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden z-10 flex flex-col justify-center">
      <div className="absolute inset-0">
        <img src="/images/hero_portrait.jpg" alt="JoeKym Labs Hero" className="w-full h-full object-cover object-[70%_30%] img-graded animate-in zoom-in duration-1000 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/10 to-card/85" />
      </div>
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">Web Design & Development Studio</p>
          <h1 className="font-headings font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6">JoeKym Labs™</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            We craft clean, editorial interfaces and build them with performant code — for brands that value clarity over noise.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-[12px] btn-hover shadow-green-glow hover:shadow-green-glow/75">View selected work</Link>
            <a href="#contact" className="px-6 py-3 border border-border text-foreground font-medium rounded-[12px] btn-hover hover:bg-muted transition-all">Start a project</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-6 lg:right-[6vw] flex items-center gap-3 animate-in fade-in duration-1000 delay-700 fill-mode-both">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-8 h-px bg-border" />
      </div>
    </section>
  );
}

// Section 2: Selected Work
function WorkSection() {
  return (
    <section id="work" className="relative bg-card py-24 z-20">
      <div className="flex flex-col lg:flex-row px-6 lg:px-[6vw] gap-12">
        <div className="w-full lg:w-[32vw] flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000">
          <h2 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-xs">A few recent builds—minimal UI, strong typography, and motion that respects the content.</p>
          <Link to="/work" className="text-primary text-sm font-medium hover:underline nav-link">Browse archive →</Link>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative w-full aspect-[4/3] rounded-card overflow-hidden card-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <img src="/images/work_card_lumen.jpg" alt="Lumen Editorial" className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent/0" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <h3 className="font-headings font-semibold text-lg text-foreground">Lumen Editorial</h3>
              <span className="font-mono text-xs text-muted-foreground uppercase">Website</span>
            </div>
          </div>
          <div className="group relative w-full aspect-[4/3] rounded-card overflow-hidden card-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <img src="/images/work_card_northwind.jpg" alt="Northwind Goods" className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent/0" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <h3 className="font-headings font-semibold text-lg text-foreground">Northwind Goods</h3>
              <span className="font-mono text-xs text-muted-foreground uppercase">E-commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
    { title: 'UI/UX Design', desc: 'Interfaces that feel obvious once you use them.', img: '/images/capability_design.jpg' },
    { title: 'Frontend Build', desc: 'React, accessibility, performance, animation.', img: '/images/capability_frontend.jpg' },
    { title: 'Brand Systems', desc: 'Type, color, and components that scale.', img: '/images/capability_brand.jpg' },
  ];

  return (
    <section id="studio" className="relative bg-card py-24 z-30">
      <div className="flex flex-col px-6 lg:px-[6vw]">
        <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Capabilities</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">Strategy, design, and frontend engineering—built to ship.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="group relative w-full aspect-[3/4] rounded-card overflow-hidden card-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${i * 150}ms` }}>
              <img src={cap.img} alt={cap.title} className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent/0" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-headings font-semibold text-2xl text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const processes = [
    { title: 'Discovery', desc: 'Goals, users, constraints, and a clear brief.', img: '/images/process_discovery.jpg' },
    { title: 'Design', desc: 'Wireframes, UI, motion, and content structure.', img: '/images/process_design.jpg' },
    { title: 'Build & Launch', desc: 'Clean code, testing, and a calm ship.', img: '/images/process_build.jpg' },
  ];

  return (
    <section className="relative bg-card py-24 z-40">
      <div className="flex flex-col px-6 lg:px-[6vw]">
        <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Process</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">A simple loop: understand, design, build, refine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processes.map((proc, i) => (
            <div key={proc.title} className="group relative w-full aspect-[3/4] rounded-card overflow-hidden card-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${i * 150}ms` }}>
              <img src={proc.img} alt={proc.title} className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent/0" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-headings font-semibold text-2xl text-foreground mb-2">{proc.title}</h3>
                <p className="text-muted-foreground text-sm">{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Split Section Component
function SplitSection({ id, microLabel, title, body, cta, ctaLink = '#', image, imagePosition = 'left', zIndex = 50 }: { id?: string; microLabel: string; title: string; body: string; cta: string; ctaLink?: string; image: string; imagePosition?: 'left' | 'right'; zIndex?: number; }) {
  const isPrimaryCTA = ['FEATURED PROJECT', 'COLLABORATION', 'CRAFT', 'COMMUNITY'].includes(microLabel.toUpperCase());
  return (
    <section id={id} className="relative bg-card flex flex-col lg:flex-row py-12 lg:py-0 min-h-[70vh]" style={{ zIndex }}>
      {imagePosition === 'left' && <div className="w-full lg:w-[50vw] h-[40vh] lg:h-auto"><img src={image} alt={title} className="w-full h-full object-cover img-graded" /></div>}
      <div className="w-full lg:w-[50vw] bg-card flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-24">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-primary mb-4">{microLabel}</p>
          <h2 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">{title}</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md">{body}</p>
          <a href={ctaLink} className={`inline-block px-6 py-3 font-medium rounded-button transition-all btn-hover ${isPrimaryCTA ? 'bg-primary text-primary-foreground shadow-green-glow hover:shadow-green-glow/75' : 'border border-border text-foreground hover:bg-muted'}`}>{cta}</a>
        </div>
      </div>
      {imagePosition === 'right' && <div className="w-full lg:w-[50vw] h-[40vh] lg:h-auto"><img src={image} alt={title} className="w-full h-full object-cover img-graded" /></div>}
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <section id="contact" className="relative bg-card py-32 z-50">
      <div className="max-w-4xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h2 className="font-headings font-bold text-5xl md:text-7xl text-foreground mb-8 text-gradient">Let's build.</h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you need a full digital platform, a complex web application, or a seamless marketing site — we're ready to start.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:mail.jkyme@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-button btn-hover shadow-green-glow hover:shadow-green-glow/75 text-lg">
            Start a project
          </a>
          {!user && (
            <Link to="/auth" className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-bold rounded-button btn-hover hover:bg-muted text-lg">
              Client Login
            </Link>
          )}
          {user && (
            <Link to="/profile" className="w-full sm:w-auto px-8 py-4 border border-border text-foreground font-bold rounded-button btn-hover hover:bg-muted text-lg">
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground dark:selection:bg-accent dark:selection:text-accent-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SplitSection 
        id="collab"
        microLabel="Collaboration" 
        title="We work with you, not for you." 
        body="True partnership requires transparency. We strip away agency jargon and focus on direct communication, iterative delivery, and shared goals." 
        cta="Our philosophy" 
        image="/images/split_collab_camera_hands.jpg" 
        imagePosition="right" 
        zIndex={10} 
      />
      <WorkSection />
      <SplitSection 
        microLabel="Craft" 
        title="Details make the design." 
        body="It’s the micro-interactions, the typographic scale, the performance optimization. We sweat the small stuff so your users don't have to." 
        cta="View capabilities" 
        ctaLink="#studio"
        image="/images/split_craft_camera_side.jpg" 
        imagePosition="left" 
        zIndex={30} 
      />
      <CapabilitiesSection />
      <ProcessSection />
      <SplitSection 
        microLabel="Featured Project" 
        title="Lumen Editorial" 
        body="A high-performance editorial layout focused on typography and white space, built for a new era of digital publishing." 
        cta="Read case study" 
        ctaLink="/work"
        image="/images/split_featured_camera.jpg" 
        imagePosition="right" 
        zIndex={50} 
      />
      <ContactSection />
      <footer className="px-6 lg:px-12 py-24 border-t border-border text-center uppercase relative z-50 bg-card">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-muted-foreground text-sm mb-12">© 2026 JoeKym Labs™ | Building scalable digital experiences</p>
          <nav className="flex flex-wrap justify-center gap-6 mb-12">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Home</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Services</Link>
            <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Work</Link>
            <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Careers</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Contact</Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Legal</Link>
            <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors nav-link">Support</Link>
          </nav>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-muted-foreground">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs uppercase mb-1">📍 Nairobi, Kenya</p>
              <p className="font-mono text-xs">✉ mail.jkyme@gmail.com</p>
            </div>
            <div className="flex gap-4 text-lg">
              <a href="https://linkedin.com/in/joekym07" aria-label="LinkedIn" className="hover:text-primary transition-colors">⬈</a>
              <a href="https://github.com/JoeKym" aria-label="GitHub" className="hover:text-primary transition-colors">⛓</a>
              <a href="https://twitter.com/JoeKym07" aria-label="Twitter" className="hover:text-primary transition-colors">➶</a>
              <a href="https://instagram.com/ky.money223" aria-label="Instagram" className="hover:text-primary transition-colors">📷</a>
              <a href="https://facebook.com/ky.money223" aria-label="Facebook" className="hover:text-primary transition-colors">📘</a>
              <a href="https://wa.me/254117412271" aria-label="WhatsApp" className="hover:text-primary transition-colors">💬</a>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline btn-hover">
              Start your project today <span>→</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
