import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { User } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';

// Section 1: Hero
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden z-10 flex flex-col justify-center">
      <div className="absolute inset-0">
        <img src="/images/wedev-hero.jpg" alt="JoeKym Labs Hero - Modern Web Development" className="w-full h-full object-cover object-[70%_30%] img-graded animate-in zoom-in duration-1000 ease-out" />


        <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/10 to-card/85" />
      </div>
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">Award-Winning Web Development Studio</p>
          <h1 className="font-headings font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6">JoeKym Labs™</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Building scalable, high-performance web applications with React, Next.js, Tailwind CSS, and modern best practices. From startups to enterprises, we deliver pixel-perfect digital experiences.
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
            <img src="/images/web-development.jpg" alt="E-Commerce Platform" className="w-full h-full object-cover img-graded group-hover:scale-105 transition-transform duration-700" />

            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent/0" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
              <h3 className="font-headings font-semibold text-lg text-foreground">E-Commerce Platform</h3>
              <span className="font-mono text-xs text-muted-foreground uppercase">Next.js • Tailwind</span>
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

// Capabilities Section
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

// Process Section
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
          Ready for a high-performance web application that scales? We build React/Next.js apps that convert and retain users.
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
</xai:function_call.






<xai:function_call name="edit_file">
<parameter name="path">app/src/pages/LandingPage.tsx
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
</xai:function_call.






<xai:function_call name="edit_file">
<parameter name="path">app/TODO.md
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

              <a href="https://linkedin.com/in/joekym07" aria-label="LinkedIn icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>
              </a>
              <a href="https://github.com/JoeKym" aria-label="GitHub icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </a>
              <a href="https://twitter.com/JoeKym07" aria-label="Twitter icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/></svg>
              </a>
              <a href="https://instagram.com/ky.money223" aria-label="Instagram icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://facebook.com/ky.money223" aria-label="Facebook icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/></svg>
              </a>
              <a href="https://wa.me/254117412271" aria-label="WhatsApp icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>

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
