import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

// Section 1: Hero
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const loadTl = gsap.timeline();
      loadTl
        .fromTo(imageRef.current, 
          { opacity: 0, scale: 1.06 }, 
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        )
        .fromTo('.hero-label', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.5')
        .fromTo('.hero-title', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-body', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-cta', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, '-=0.3')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          scrub: 0.6,
        }
      });

      scrollTl
        .to(contentRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(imageRef.current, { scale: 1.08, x: '-4vw', ease: 'power2.in' }, 0.7)
        .to('.hero-scroll', { opacity: 0, ease: 'power2.in' }, 0.65);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden z-10">
      <div ref={imageRef} className="absolute inset-0">
        <img src="/images/hero_portrait.jpg" alt="Hero" className="w-full h-full object-cover object-[70%_30%] img-graded" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/40 via-[#07080A]/10 to-[#07080A]/85" />
      </div>
      <div ref={contentRef} className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
        <div className="max-w-xl">
          <p className="hero-label font-mono text-xs tracking-[0.2em] uppercase text-[#B8B2F7] mb-4">Web Design &amp; Development Studio</p>
          <h1 className="hero-title font-display font-bold text-5xl md:text-6xl lg:text-7xl text-[#F7F8FA] leading-[0.95] mb-6">JoeKym Labs™</h1>
          <p className="hero-body text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
            We craft clean, editorial interfaces and build them with performant code — for brands that value clarity over noise.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/work" className="hero-cta px-6 py-3 bg-[#B8B2F7] text-[#07080A] font-medium rounded-xl btn-hover">View selected work</a>
            <a href="#contact" className="hero-cta px-6 py-3 border border-[#F7F8FA]/20 text-[#F7F8FA] font-medium rounded-xl btn-hover hover:bg-[#F7F8FA]/5">Start a project</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll absolute bottom-8 right-6 lg:right-[6vw] flex items-center gap-3">
        <span className="text-xs text-[#A6ACB8]">Scroll to explore</span>
        <div className="w-8 h-px bg-[#A6ACB8]" />
      </div>
    </section>
  );
}

// Section 2: Selected Work
function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      scrollTl
        .fromTo(headingRef.current, { x: '-40vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.work-card-a', { x: '60vw', y: '-40vh', rotation: 6, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.work-card-b', { x: '60vw', y: '-20vh', rotation: -4, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, ease: 'none' }, 0.06)
        .fromTo('.work-card-c', { x: '60vw', y: '60vh', rotation: 3, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, ease: 'none' }, 0.12)
        .to(headingRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('.work-card', { x: '-55vw', opacity: 0, rotation: -2, ease: 'power2.in', stagger: 0.02 }, 0.7);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section-pinned bg-[#07080A] z-20">
      <div className="h-full flex px-6 lg:px-0">
        <div ref={headingRef} className="w-full lg:w-[32vw] h-full flex flex-col justify-center lg:px-[6vw]">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#F7F8FA] mb-4">Selected Work</h2>
          <p className="text-[#A6ACB8] text-sm md:text-base leading-relaxed mb-6 max-w-xs">A few recent builds—minimal UI, strong typography, and motion that respects the content.</p>
          <a href="/work" className="text-[#B8B2F7] text-sm font-medium hover:underline">Browse archive →</a>
        </div>
        <div ref={cardsRef} className="hidden lg:block flex-1 relative">
          <div className="work-card work-card-a absolute left-[2vw] top-[14vh] w-[26vw] h-[34vh] rounded-[22px] overflow-hidden card-shadow">
            <img src="/images/work_card_lumen.jpg" alt="Lumen Editorial" className="w-full h-full object-cover img-graded" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end"><h3 className="font-display font-semibold text-lg text-[#F7F8FA]">Lumen Editorial</h3><span className="font-mono text-xs text-[#A6ACB8] uppercase">Website</span></div>
          </div>
          <div className="work-card work-card-b absolute left-[32vw] top-[14vh] w-[26vw] h-[34vh] rounded-[22px] overflow-hidden card-shadow">
            <img src="/images/work_card_northwind.jpg" alt="Northwind Goods" className="w-full h-full object-cover img-graded" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end"><h3 className="font-display font-semibold text-lg text-[#F7F8FA]">Northwind Goods</h3><span className="font-mono text-xs text-[#A6ACB8] uppercase">E‑commerce</span></div>
          </div>
          <div className="work-card work-card-c absolute left-[2vw] top-[54vh] w-[56vw] h-[34vh] rounded-[22px] overflow-hidden card-shadow">
            <img src="/images/work_card_aurora.jpg" alt="Aurora Studio" className="w-full h-full object-cover img-graded" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end"><h3 className="font-display font-semibold text-lg text-[#F7F8FA]">Aurora Studio</h3><span className="font-mono text-xs text-[#A6ACB8] uppercase">Brand + Web</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 3: Capabilities
function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 } });
      scrollTl
        .fromTo(headingRef.current, { x: '-40vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.cap-card', { x: '60vw', y: '20vh', rotation: 10, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, ease: 'none', stagger: 0.06 }, 0)
        .to(headingRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('.cap-card', { x: '-55vw', opacity: 0, rotation: -4, ease: 'power2.in', stagger: 0.02 }, 0.7);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const capabilities = [
    { title: 'UI/UX Design', desc: 'Interfaces that feel obvious once you use them.', img: '/images/capability_design.jpg' },
    { title: 'Frontend Build', desc: 'React, accessibility, performance, animation.', img: '/images/capability_frontend.jpg' },
    { title: 'Brand Systems', desc: 'Type, color, and components that scale.', img: '/images/capability_brand.jpg' },
  ];

  return (
    <section ref={sectionRef} id="studio" className="section-pinned bg-[#07080A] z-30">
      <div className="h-full flex px-6 lg:px-0">
        <div ref={headingRef} className="w-full lg:w-[32vw] h-full flex flex-col justify-center lg:px-[6vw]">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#F7F8FA] mb-4">Capabilities</h2>
          <p className="text-[#A6ACB8] text-sm md:text-base leading-relaxed max-w-xs">Strategy, design, and frontend engineering—built to ship.</p>
        </div>
        <div className="hidden lg:flex flex-1 relative items-center justify-center">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="cap-card absolute w-[34vw] h-[56vh] rounded-[22px] overflow-hidden card-shadow" style={{ transform: `translate(${-2.2 * (2 - i)}vw, ${-2.2 * (2 - i)}vh) rotate(${-3 * (2 - i)}deg) scale(${0.96 + 0.02 * i})`, opacity: 0.55 + 0.23 * i, zIndex: i + 1 }}>
              <img src={cap.img} alt={cap.title} className="w-full h-full object-cover img-graded" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6"><h3 className="font-display font-semibold text-2xl text-[#F7F8FA] mb-2">{cap.title}</h3><p className="text-[#A6ACB8] text-sm">{cap.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 4: Process
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 } });
      scrollTl
        .fromTo(headingRef.current, { x: '-40vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo('.proc-card', { x: '60vw', y: '20vh', rotation: 10, opacity: 0 }, { x: 0, y: 0, rotation: 0, opacity: 1, ease: 'none', stagger: 0.06 }, 0)
        .to(headingRef.current, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .to('.proc-card', { x: '-55vw', opacity: 0, rotation: -4, ease: 'power2.in', stagger: 0.02 }, 0.7);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const processes = [
    { title: 'Discovery', desc: 'Goals, users, constraints, and a clear brief.', img: '/images/process_discovery.jpg' },
    { title: 'Design', desc: 'Wireframes, UI, motion, and content structure.', img: '/images/process_design.jpg' },
    { title: 'Build & Launch', desc: 'Clean code, testing, and a calm ship.', img: '/images/process_build.jpg' },
  ];

  return (
    <section ref={sectionRef} className="section-pinned bg-[#07080A] z-40">
      <div className="h-full flex px-6 lg:px-0">
        <div ref={headingRef} className="w-full lg:w-[32vw] h-full flex flex-col justify-center lg:px-[6vw]">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#F7F8FA] mb-4">Process</h2>
          <p className="text-[#A6ACB8] text-sm md:text-base leading-relaxed max-w-xs">A simple loop: understand, design, build, refine.</p>
        </div>
        <div className="hidden lg:flex flex-1 relative items-center justify-center">
          {processes.map((proc, i) => (
            <div key={proc.title} className="proc-card absolute w-[34vw] h-[56vh] rounded-[22px] overflow-hidden card-shadow" style={{ transform: `translate(${-2.2 * (2 - i)}vw, ${-2.2 * (2 - i)}vh) rotate(${-3 * (2 - i)}deg) scale(${0.96 + 0.02 * i})`, opacity: 0.55 + 0.23 * i, zIndex: i + 1 }}>
              <img src={proc.img} alt={proc.title} className="w-full h-full object-cover img-graded" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6"><h3 className="font-display font-semibold text-2xl text-[#F7F8FA] mb-2">{proc.title}</h3><p className="text-[#A6ACB8] text-sm">{proc.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Split Section Component
function SplitSection({ id, microLabel, title, body, cta, ctaLink = '#', image, imagePosition = 'left', zIndex = 50 }: { id?: string; microLabel: string; title: string; body: string; cta: string; ctaLink?: string; image: string; imagePosition?: 'left' | 'right'; zIndex?: number; }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 } });
      const imageFromX = imagePosition === 'left' ? '-70vw' : '70vw';
      const textFromX = imagePosition === 'left' ? '40vw' : '-40vw';
      const imageExitX = imagePosition === 'left' ? '-18vw' : '18vw';
      const textExitX = imagePosition === 'left' ? '18vw' : '-18vw';

      scrollTl
        .fromTo(imagePanelRef.current, { x: imageFromX, opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(textPanelRef.current, { x: textFromX, opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(textBlockRef.current, { y: '8vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.1)
        .to(imagePanelRef.current, { x: imageExitX, opacity: 0, ease: 'power2.in' }, 0.7)
        .to(textPanelRef.current, { x: textExitX, opacity: 0, ease: 'power2.in' }, 0.7);
    }, sectionRef);
    return () => ctx.revert();
  }, [imagePosition]);

  return (
    <section ref={sectionRef} id={id} className="section-pinned bg-[#07080A] flex flex-col lg:flex-row" style={{ zIndex }}>
      {imagePosition === 'left' && <div ref={imagePanelRef} className="w-full lg:w-[62vw] h-[50vh] lg:h-full"><img src={image} alt={title} className="w-full h-full object-cover img-graded" /></div>}
      <div ref={textPanelRef} className="w-full lg:w-[38vw] h-auto lg:h-full bg-[#07080A] flex items-center px-6 lg:px-[6vw] py-12 lg:py-0">
        <div ref={textBlockRef}>
          <p className="font-mono text-xs tracking-[0.08em] uppercase text-[#B8B2F7] mb-4">{microLabel}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#F7F8FA] leading-tight mb-6">{title}</h2>
          <p className="text-[#A6ACB8] text-sm md:text-base leading-relaxed mb-8 max-w-sm">{body}</p>
          <a href={ctaLink} className={`inline-block px-6 py-3 font-medium rounded-xl btn-hover ${['FEATURED PROJECT', 'COLLABORATION', 'CRAFT', 'COMMUNITY'].includes(microLabel.toUpperCase()) ? 'bg-[#B8B2F7] text-[#07080A]' : 'border border-[#F7F8FA]/20 text-[#F7F8FA] hover:bg-[#F7F8FA]/5'}`}>{cta}</a>
        </div>
      </div>
      {imagePosition === 'right' && <div ref={imagePanelRef} className="w-full lg:w-[62vw] h-[50vh] lg:h-full"><img src={image} alt={title} className="w-full h-full object-cover img-graded" /></div>}
    </section>
  );
}


// Section 12: Contact
function ContactSection() {
  const [user, setUser] = useState<User | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      user_id: user.id,
      name: formData.get('name'),
      email: formData.get('email'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    const { error } = await supabase.from('project_requests').insert([data]);
    setSubmitting(false);
    if (!error) setSuccess(true);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftColRef.current, { x: '-10vw', opacity: 0 }, { x: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 40%', scrub: 0.6 } });
      gsap.fromTo(rightColRef.current, { x: '10vw', y: '6vh', opacity: 0 }, { x: 0, y: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 40%', scrub: 0.6 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen bg-[#F4F6F9] z-[200]">
      <div className="flex flex-col lg:flex-row">
        <div ref={leftColRef} className="w-full lg:w-[45vw] px-6 lg:px-[6vw] py-16 lg:py-[10vh]">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#07080A] mb-4">Start a project</h2>
          <p className="text-[#4b5563] text-base leading-relaxed mb-10 max-w-md">Tell us what you're building. We'll reply within two business days.</p>
          <div className="space-y-6">
            <div><p className="font-mono text-xs tracking-[0.08em] uppercase text-[#6b7280] mb-1">Email</p><a href="mailto:hello@joekymlabs.com" className="text-[#07080A] font-medium hover:text-[#B8B2F7] transition-colors">hello@joekymlabs.com</a></div>
            <div><p className="font-mono text-xs tracking-[0.08em] uppercase text-[#6b7280] mb-1">Location</p><p className="text-[#07080A] font-medium">Remote / UTC±2</p></div>
            <div><p className="font-mono text-xs tracking-[0.08em] uppercase text-[#6b7280] mb-1">Availability</p><p className="text-[#07080A] font-medium">Currently accepting new work</p></div>
          </div>
        </div>
        <div ref={rightColRef} className="w-full lg:w-[55vw] px-6 lg:px-[6vw] py-16 lg:py-[10vh]">
          <div className="bg-white rounded-[22px] p-8 lg:p-10 card-shadow text-[#07080A]">
            {!user ? (
              <div className="text-center py-12">
                <h3 className="font-display font-semibold text-2xl mb-4">Ready to start?</h3>
                <p className="text-[#4b5563] mb-8">Please sign in to your JoeKym Labs account to submit a project request or subscribe.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/auth" className="px-6 py-3 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl btn-hover text-center">Sign In / Create Account</Link>
                </div>
              </div>
            ) : success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">✓</div>
                <h3 className="font-display font-semibold text-2xl mb-2">Request Sent!</h3>
                <p className="text-[#4b5563]">We've received your brief and will be in touch within 48 hours.</p>
                <button onClick={() => setSuccess(false)} className="mt-8 text-sm font-medium text-[#B8B2F7] hover:underline">Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="block font-mono text-[10px] tracking-widest uppercase text-[#6b7280] mb-2">Name</label><input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B8B2F7] outline-none" /></div>
                <div><label className="block font-mono text-[10px] tracking-widest uppercase text-[#6b7280] mb-2">Email</label><input type="email" name="email" required placeholder="your@email.com" defaultValue={user.email} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B8B2F7] outline-none" /></div>
                <div><label className="block font-mono text-[10px] tracking-widest uppercase text-[#6b7280] mb-2">Budget</label><select name="budget" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B8B2F7] outline-none"><option>Select a range</option><option>$5k - $10k</option><option>$10k - $25k</option><option>$25k - $50k</option><option>$50k+</option></select></div>
                <div><label className="block font-mono text-[10px] tracking-widest uppercase text-[#6b7280] mb-2">Message</label><textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#B8B2F7] outline-none resize-none" /></div>
                <button type="submit" disabled={submitting} className="w-full px-6 py-3 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl btn-hover disabled:opacity-50">{submitting ? 'Sending...' : 'Send request'}</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <footer className="px-6 lg:px-[6vw] py-8 border-t border-[#e5e7eb]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm text-[#6b7280] hover:text-[#07080A]">Work</a>
            <a href="#studio" className="text-sm text-[#6b7280] hover:text-[#07080A]">Studio</a>
            <a href="#notes" className="text-sm text-[#6b7280] hover:text-[#07080A]">Notes</a>
            <a href="#" className="text-sm text-[#6b7280] hover:text-[#07080A]">Privacy</a>
          </div>
          <p className="text-sm text-[#9ca3af]">© JoeKym Labs™. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default function LandingPage() {
  useEffect(() => {
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;
      const pinnedRanges = pinned.map(st => ({ start: st.start / maxScroll, end: (st.end ?? st.start) / maxScroll, center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll }));
      ScrollTrigger.create({ snap: { snapTo: (value: number) => { const inPinned = pinnedRanges.some(r => value >= r.start - 0.08 && value <= r.end + 0.08); if (!inPinned) return value; const target = pinnedRanges.reduce((closest, r) => Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest, pinnedRanges[0]?.center ?? 0); return target; }, duration: { min: 0.15, max: 0.35 }, delay: 0, ease: 'power2.out' } });
    };
    const timer = setTimeout(setupSnap, 500);
    return () => { 
      clearTimeout(timer); 
      ScrollTrigger.getAll().forEach(st => st.kill()); 
    };
  }, []);

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <WorkSection />
        <CapabilitiesSection />
        <ProcessSection />
        <SplitSection microLabel="Featured Project" title="Lumen Editorial" body="A publication-first experience with typography-led layouts, fast page transitions, and a reading mode that stays out of the way." cta="Read case study" image="/images/split_featured_camera.jpg" imagePosition="left" zIndex={50} />
        <SplitSection microLabel="Principles" title="Clarity beats decoration." body="We distill until every element feels inevitable. Then we add back only what supports the story." cta="Explore the studio" image="/images/split_principles_typewriter.jpg" imagePosition="right" zIndex={60} />
        <SplitSection microLabel="Collaboration" title="Built like a true partnership." body="Close communication, fast feedback loops, and decisions that don't require a committee." cta="See how we work" image="/images/split_collab_camera_hands.jpg" imagePosition="left" zIndex={70} />
        <SplitSection microLabel="Impact" title="Performance is a design feature." body="Lightweight assets, accessible markup, and motion that stays smooth on real devices." cta="View performance notes" image="/images/split_impact_camera_top.jpg" imagePosition="right" zIndex={80} />
        <SplitSection microLabel="Craft" title="Details are the experience." body="Spacing, type hierarchy, and micro-interactions that make the product feel finished." cta="Explore recent work" image="/images/split_craft_camera_side.jpg" imagePosition="left" zIndex={90} />
        <SplitSection id="notes" microLabel="Insights" title="Notes on design & code." body="Short, practical ideas about typography, layout, accessibility, and shipping better work." cta="Read the latest" image="/images/split_insights_camera_table.jpg" imagePosition="right" zIndex={100} />
        <SplitSection microLabel="Community" title="Let's build something precise." body="Available for select projects. If you value clarity and craft, we'll work well together." cta="Start a project" ctaLink="#contact" image="/images/split_community_camera_bw.jpg" imagePosition="left" zIndex={110} />
        <ContactSection />
      </main>
    </div>
  );
}
