// FULL COMPLETE CONTENT FROM ORIGINAL READ + CLEAN END

import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { User } from '@supabase/supabase-js';
import NavigationFixed from '../components/Navigation-fixed';

// HeroSection (exact original)
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden z-10 flex flex-col justify-center">
      <div className="absolute inset-0">
        <img src="/images/wedev-hero.jpg" alt="JoeKym Labs Hero - Modern Web Development" className="w-full h-full object-cover object-[70%_30%] img-graded animate-in zoom-in duration-1000 ease-out" />


        <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/10 to-card/85" />
      </div>
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <div className="max-w-xl">
<span className="font-mono text-xs tracking-[0.2em] text-primary mb-4">Award-winning web development studio</span>
          <h1 className="font-headings font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6">JoeKym Labs™</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Building scalable, high-performance web applications with React, Next.js, Tailwind CSS, and modern best practices. From startups to enterprises, we deliver pixel-perfect digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-[12px] btn-hover shadow-primary-glow hover:shadow-primary-glow/75">View selected work</Link>
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

// WorkSection (exact)
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
            <img src="/images/web-development.jpg" alt="E-Commerce Platform" className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />

            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent/0" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
              <h3 className="font-headings font-semibold text-lg text-foreground">E-Commerce Platform</h3>
<span className="font-mono text-xs text-muted-foreground">Next.js • Tailwind</span>
            </div>
          </div>
          <div className="group relative w-full aspect-[4/3] rounded-card overflow-hidden card-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <img src="/images/frontend-dev.jpg" alt="SaaS Dashboard" className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />

            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent/0" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
              <h3 className="font-headings font-semibold text-lg text-foreground">SaaS Dashboard</h3>
              <span className="font-mono text-xs text-muted-foreground uppercase">React • TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CapabilitiesSection (exact)
function CapabilitiesSection() {
  const capabilities = [
    { title: 'UI/UX Design', desc: 'Pixel-perfect interfaces with Figma prototypes and user-centric design for seamless web experiences.', img: '/images/webdesign.jpg' },
    { title: 'Frontend Development', desc: 'React, Next.js, TypeScript, Tailwind – fast, accessible, animated UIs.', img: '/images/frontend-dev.jpg' },
    { title: 'Full-Stack Solutions', desc: 'End-to-end web apps with Supabase backend, API integrations, and deployment.', img: '/images/fullstack.png' },
  ];

  return (
    <section id="studio" className="relative bg-card py-24 z-30">
      <div className="flex flex-col px-6 lg:px-[6vw]">
        <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Our Capabilities</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">Full-cycle web development: design, frontend, full-stack – engineered for scale and performance.</p>
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

// ProcessSection (exact)
function ProcessSection() {
  const processes = [
    { title: 'Discovery', desc: 'User research, goals, wireframes, and technical planning for your web project.', img: '/images/web-design-header.jpg' },
    { title: 'Design', desc: 'Figma prototypes, responsive UI design, and interactive components.', img: '/images/webdesign.jpg' },
    { title: 'Development & Launch', desc: 'React/Next.js build, optimization, testing, and smooth deployment.', img: '/images/web-development.jpg' },
  ];

  return (
    <section className="relative bg-card py-24 z-40">
      <div className="flex flex-col px-6 lg:px-[6vw]">
        <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headings font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">Proven methodology for building robust, scalable web applications from concept to launch.</p>
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

// SplitSection (exact)
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
          <a href={ctaLink} className={`inline-block px-6 py-3 font-medium rounded-button transition-all btn-hover ${isPrimaryCTA ? 'bg-primary text-primary-foreground shadow-primary-glow hover:shadow-primary-glow/75' : 'border border-border text-foreground hover:bg-muted'}`}>{cta}</a>
        </div>
      </div>
      {imagePosition === 'right' && <div className="w-full lg:w-[50vw] h-[40vh] lg:h-auto"><img src={image} alt={title} className="w-full h-full object-cover img-graded" /></div>}
    </section>
  );
}

// ContactSection (exact, moved useState/useEffect here)
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
          Ready for a high-performance web application that scales? We build React/Next.js apps that convert and retain users.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:mail.jkyme@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-button btn-hover shadow-primary-glow hover:shadow-primary-glow/75 text-lg">
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

// LandingPage - CLEAN RETURN CALLING ALL SECTIONS
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <SplitSection 
        id="collab"
        microLabel="Collaboration" 
        title="Direct partnership for web success" 
        body="We collaborate closely with your team – transparent communication, agile iterations, and shared ownership to deliver exceptional web solutions." 
        cta="Learn our approach" 
        ctaLink="#studio"
        image="/images/frontend.jpg" 
        imagePosition="right" 
        zIndex={10} 
      />
      <WorkSection />
      <SplitSection 
        microLabel="Craft" 
        title="Performance & Detail Obsessed" 
        body="We optimize every line of code, every animation, every load time. Lighthouse scores that make you proud and users who stay." 
        cta="Our capabilities" 
        ctaLink="#studio"
        image="/images/frontend-dev.jpg" 
        imagePosition="left" 
        zIndex={30} 
      />
      <CapabilitiesSection />
      <ProcessSection />
      <SplitSection 
        microLabel="Featured Project" 
        title="FinTech Dashboard" 
        body="React + TypeScript SaaS dashboard with real-time data, advanced charts, and enterprise-grade security. 99+ Lighthouse score." 
        cta="View case study" 
        ctaLink="/work"
        image="/images/frontend-dev.jpg" 
        imagePosition="right" 
        zIndex={50} 
      />
      <ContactSection />
    </>
  );
}
