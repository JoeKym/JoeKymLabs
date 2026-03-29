import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ArrowRight, MapPin, Briefcase, Clock, BookOpen, Zap, Gift, Users } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary_band: string;
  description: string;
  requirements?: string[];
}

// Static test jobs for rich content/testing (4 jobs, alternate images)
const staticJobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary_band: '$120k - $160k',
    description: 'Build performant, accessible interfaces with React, Tailwind, and shadcn/ui. Work on high-traffic editorial sites and complex web apps.',
    requirements: ['React/Next.js 4+ years', 'Tailwind CSS mastery', 'Accessibility (WCAG)', 'TypeScript']
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    salary_band: '$80k - $120k',
    description: 'Design editorial layouts, scalable design systems, and motion design. Collaborate with engineering on pixel-perfect implementations.',
    requirements: ['Figma/Sketch expert', 'Design systems experience', 'Motion design (Framer)', 'Typography obsession']
  },
  {
    id: '3',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary_band: '$130k - $170k',
    description: 'Build secure APIs, manage Supabase/Postgres, and scale infrastructure for client platforms. Focus on performance and reliability.',
    requirements: ['Node.js/Supabase 4+ years', 'PostgreSQL optimization', 'Authentication flows', 'API design']
  },
  {
    id: '4',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    salary_band: '$140k - $180k',
    description: 'Own product roadmap, client discovery, and cross-functional delivery. Shape digital products from brief to launch.',
    requirements: ['3+ years PM experience', 'Web/app discovery', 'Stakeholder management', 'Analytics tools']
  }
];

const jobImages = [
  '/images/frontend-dev.jpg',
  '/images/webdesign.jpg',
  '/images/backend.jpg',
  '/images/cloud-computing.png',
  '/images/frontend.jpg',
  '/images/fullstack.png'
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayJobs, setDisplayJobs] = useState<Job[]>(staticJobs);

  useEffect(() => {
    async function fetchJobs() {
      const { data } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });
      setLoading(false);
      if (data && data.length > 0) {
        setJobs(data);
        setDisplayJobs(data.slice(0, 4)); // Show up to 4 dynamic
      } else {
        setDisplayJobs(staticJobs); // Fallback to static
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero: Join Us */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/web-design-header.jpg" 
            alt="Careers at JoeKym Labs" 
            className="w-full h-full object-cover object-[30%_20%] img-graded animate-in zoom-in duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/20 to-card/90" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-[6vw] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-headings font-bold text-5xl md:text-7xl mb-6 leading-tight text-gradient">
            Careers at JoeKym Labs<span className="text-primary">™</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed mb-8">
            We’re a remote-first team building precise, high-performance digital products. Help us shape the future of the web.
          </p>
          <Link 
            to="#positions"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-[12px] shadow-primary-glow hover:shadow-primary-glow btn-hover text-lg"
          >
            View Open Positions <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-[6vw]">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-headings font-bold text-4xl md:text-6xl mb-6">Why Work With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Join a team that values craft, autonomy, and impact.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Remote-first', desc: 'Work from anywhere with full flexibility' },
              { icon: Zap, title: 'Cutting-edge', desc: 'Modern stack, latest tools and techniques' },
              { icon: BookOpen, title: 'Growth', desc: 'Learning budget + mentorship opportunities' },
              { icon: Clock, title: 'Collaborative', desc: 'Async-first but people-first culture' }
            ].map((item, i) => (
              <div key={item.title} className="group p-8 rounded-3xl bg-card border border-border hover:bg-background transition-all card-shadow animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i*100}ms`}}>
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-headings font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-[6vw]">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-headings font-bold text-4xl md:text-6xl mb-6">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {loading ? 'Loading positions...' : jobs.length > 0 ? `${jobs.length} active roles` : 'Showing featured opportunities'}
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {displayJobs.map((job, idx) => (
              <div 
                key={job.id} 
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{animationDelay: `${idx*150}ms`}}
              >
                <div className={`md:flex ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8 p-8 lg:p-12`}>
                  {/* Alternating Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-80 bg-gradient-to-br from-muted/20 to-border rounded-2xl overflow-hidden">
                    <img 
                      src={jobImages[idx % jobImages.length]} 
                      alt={job.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 img-graded" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <div>
                      <h3 className="font-headings font-bold text-3xl md:text-4xl leading-tight">{job.title}</h3>
                      <div className="flex items-center flex-wrap gap-4 mt-4 text-sm font-mono text-muted-foreground">
                        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground">{job.description}</p>
                    
                    {job.requirements && (
                      <div className="space-y-2">
                        <p className="font-bold text-primary flex items-center gap-2">
                          Key Requirements
                        </p>
                        <ul className="space-y-1 ml-4">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                      <div className="text-sm font-mono text-primary">
                        Salary Band: <span className="font-bold">{job.salary_band}</span>
                      </div>
                      <Link 
                        to="/contact" 
                        className="flex-1 sm:flex-none px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl text-center shadow-primary-glow hover:shadow-primary-glow btn-hover"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
              <p className="text-muted-foreground">Querying positions...</p>
            </div>
          )}
        </div>
      </section>

      {/* Life at JoeKym Labs */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-[6vw] text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <blockquote className="font-headings font-semibold text-3xl md:text-4xl italic leading-relaxed mb-8">
            “We sweat the small stuff so users don’t have to.”
          </blockquote>
          <p className="text-muted-foreground text-xl">— Life at JoeKym Labs. Collaborative, creative, performance-driven.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-[6vw]">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-headings font-bold text-4xl md:text-6xl mb-6">Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Everything you need to do your best work.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: '🌍', title: 'Remote-first', desc: 'Work from anywhere, anytime' },
              { emoji: '⏰', title: 'Flexible hours', desc: 'Set your own schedule' },
              { emoji: '📚', title: 'Learning budget', desc: '$5k/year for courses & books' },
              { emoji: '⚡', title: 'Modern tooling', desc: 'Best-in-class stack & hardware' },
              { emoji: '🚀', title: 'Career growth', desc: 'Clear paths and mentorship' },
              { emoji: '💰', title: 'Competitive comp', desc: 'Salary + equity + bonuses' },
              { emoji: '🏖️', title: 'Unlimited PTO', desc: 'Take time when you need it' },
              { emoji: '🏥', title: 'Health coverage', desc: 'Full medical, dental, vision' }
            ].map((benefit, i) => (
              <div key={benefit.title} className="group text-center p-8 rounded-3xl bg-card hover:bg-background border border-border transition-all card-shadow animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i*100}ms`}}>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{benefit.emoji}</div>
                <h3 className="font-bold text-2xl mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-[6vw]">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-headings font-bold text-4xl md:text-6xl mb-6">Application Process</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Simple, transparent, human.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Apply online', desc: 'Submit your resume + portfolio. Takes 3 minutes.' },
              { step: '2', title: 'Interview', desc: '30min chat about your experience + live problem solving.' },
              { step: '3', title: 'Offer & Onboard', desc: 'Reference checks, offer, paperwork. Start within 2 weeks.' }
            ].map((proc, i) => (
              <div key={proc.title} className="group text-center p-12 rounded-3xl bg-background border border-border hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i*150}ms`}}>
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-3xl flex items-center justify-center mx-auto mb-8 font-bold text-2xl shadow-primary-glow group-hover:scale-110 transition-all">
                  {proc.step}
                </div>
                <h3 className="font-headings font-bold text-2xl mb-6">{proc.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-t from-card via-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-[6vw] text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-headings font-bold text-5xl md:text-7xl mb-8 text-gradient">Ready to build?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our team and help craft the next generation of digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-6 bg-primary text-primary-foreground font-bold text-xl rounded-[16px] shadow-primary-glow hover:shadow-primary-glow btn-hover"
            >
              Start Application
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-6 border-2 border-border font-bold text-xl rounded-[16px] btn-hover hover:bg-muted transition-all"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t border-border text-center bg-card">
        <p className="font-mono text-muted-foreground text-sm">© 2026 JoeKym Labs™ | Building with precision</p>
      </footer>
    </div>
  );
}
