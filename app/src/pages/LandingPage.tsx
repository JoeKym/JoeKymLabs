l// FULL COMPLETE CONTENT FROM ORIGINAL READ + CLEAN END

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { User } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';

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
          <a href={ctaLink} className={`inline-block px-6 py-3 font-medium rounded-button transition-all btn-hover ${isPrimaryCTA ? 'bg-primary text-primary-foreground shadow-green-glow hover:shadow-green-glow/75' : 'border border-border text-foreground hover:bg-muted'}`}>{cta}</a>
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

// LandingPage - CLEAN RETURN CALLING ALL SECTIONS
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
              <a href="https://linkedin.com/in/joekym07" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm73.4 304V248.6h-63.6V336H64V224h66.4V231h1.6c9.2-17.3 31.9-35.6 65.5-35.6 70 0 83.1 46.2 83.1 106.6V336h-66.5zM256 336V224h63.7v112h66.5V224h63.7v112h66.5V224h63.6V336z"/></svg>
              </a>
              <a href="https://github.com/joekym07" aria-label="GitHub" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4 .07 .55-.17 .55-.38 0-.19-.01-.82-.01-1.49-2.01 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53 .63-.01 1.08 .58 1.23 .82 .72 1.21 1.87 .87 2.33 .66 .07-.52 .28-.87 .51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87 .31-1.59 .82-2.15-.08-.2-.36-1.02 .08-2.12 0 0 .67-.21 2.2 .82 .64-.18 1.32-.27 2-.27 .68 0 1.36 .09 2 .27 1.53-1.04 2.2-.82 2.2-.82 .44 1.1 .16 1.92 .08 2.12 .51 .56 .82 1.27 .82 2.15 0 3.07-1.87 3.75-3.65 3.95 .29 .25 .54 .73 .54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21 .15 .46 .55 .38A8.012 8.012 0 0 1 16 8c0-4.42-3.58-8-8-8z"/></svg>
              </a>
              <a href="https://twitter.com/joekym07" aria-label="Twitter" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.01-.423A6.485 6.485 0 0 0 16 3.517a6.464 6.464 0 0 1-1.888 .518 3.282 3.282 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.085 .795A3.279 3.279 0 0 0 9.733 2.617a3.29 3.29 0 0 0-5.577 2.994c0 .256.03 .504.08 .747A9.42 9.42 0 0 1 1.577 3.723 3.282 3.282 0 0 0 3.012 8.46a3.26 3.26 0 0 1-1.487 .045 3.301 3.301 0 0 0 3.068 2.283A6.507 6.507 0 0 1 .156 13.427a9.104 9.104 0 0 0 2.786 1.028 3.295 3.295 0 0 1-.865 .115 3.301 3.301 0 0 0 3.071 2.287z"/></svg>
              </a>
              <a href="https://behance.net/joekym07" aria-label="Behance" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M7.216 2.55a.5 .5 0 0 1 .5 .5v4.495h4.495a.5 .5 0 1 1 0 1H7.716V14.5a.5 .5 0 0 1-.5 .5h-3.5a.5 .5 0 0 1-.5-.5V8.545H.5a.5 .5 0 0 1 0-1H3.216V3.05a.5 .5 0 0 1 .5-.5h3.5zM14.497 3.448l-1.895 9.055H9.794l1.767-9.055h2.936z"/></svg>
              </a>
              <a href="https://dribbble.com/joekym07" aria-label="Dribbble" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M2.754 6.437a2.244 2.244 0 0 1 2.24 2.243 2.244 2.244 0 0 1-2.24 2.243A2.244 2.244 0 0 1 2.754 8.68zm3.732-1.63a.537 .537 0 0 0-.537 .536v2.29a.537 .537 0 0 0 .537 .536.537 .537 0 0 0 .537-.536V5.343a.537 .537 0 0 0-.537-.536zm4.729 3.047c.012 .261.018 .524.018 .788 0 .77-.142 1.515-.402 2.227a2.184 2.184 0 0 1-1.873 1.092 2.184 2.184 0 0 1-1.872-1.092 3.24 3.24 0 0 1-.402-2.227c0-.264 .006-.527 .018-.788-.927 .184-1.631 .61-2.112 1.225-.482 .614-.724 1.347-.724 2.181a2.184 2.184 0 0 0 1.872 1.092 2.184 2.184 0 0 0 1.873-1.092c.171-.59 .261-.975 .261-1.225v-.272c0-.255-.09-.434-.261-.524-.171-.09-.498-.184-.927-.184h-.626V7.332c.261 0 .498 .09 .683 .27 .184 .184 .277 .524 .277 .927v.272c0 .255-.09 .317-.261 .317h-.341c-.171 0-.261-.062-.261-.317v-.272c0-.403-.093-.749-.277-.927-.184-.184-.422-.27-.683-.27v-1.031h.626c.429 0 .756 .094 .927 .277.171 .183 .261 .369 .261 .524v.272c0 .25 0 .272 .261 .272h.341c.171 0 .261-.022 .261-.272v-.272c0-.403-.093-.743-.277-.927-.184-.184-.422-.27-.683-.27v-1.03h.626c.429 0 .756 .094 .927 .277s.261 .369 .261 .524v.272c0 .255-.09 .317-.261 .317h-.341c-.171 0-.261-.062-.261-.317v-.272c0-.403-.093-.749-.277-.927-.184-.184-.422-.27-.683-.27zm10.652-.955c-.171-.183-.422-.277-.683-.277h-.626v1.03c-.261 0-.498-.09-.683 .27-.184 .184-.277 .524-.277 .927v.272c0 .255 .09 .317 .261 .317h.341c.171 0 .261-.062 .261-.317v-.272c0-.403 .093-.743 .277-.927 .184-.184 .422-.27 .683-.27v1.031h.683c.261 0 .512 .094 .683 .277 .171 .183 .261 .369 .261 .524v.272c0 .255-.09 .317-.261 .317h-.341c-.171 0-.261-.062-.261-.317v-.272c0-.403-.093-.749-.277-.927-.184-.184-.422-.27-.683-.27v-1.031h.626c.261 0 .512 .094 .683 .277z"/></svg>
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
