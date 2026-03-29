import React from 'react';
import { ShieldCheck, Users, Code, Zap, Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

export default function PhilosophyPage() {
    const principles = [
    {
      icon: ShieldCheck,
      title: 'Clarity First',
      description: `We believe great design eliminates confusion. Every pixel, every interaction serves a purpose. No fluff, no trends—just interfaces that work intuitively from first use.`
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: `We're not vendors, we're collaborators. Full transparency, no agency speak. Weekly check-ins, shared tools, and decisions made together. Your success is our success.`
    },
    {
      icon: Code,
      title: 'Craft Over Speed',
      description: `Fast code is forgettable. We write systems that scale, perform, and endure. Accessibility, SEO, Lighthouse 100s—the details matter more than deadlines.`
    },
    {
      icon: Zap,
      title: 'Performance Native',
      description: `95+ Lighthouse scores out of the gate. Lazy loading, optimized assets, Core Web Vitals obsession. Your site loads before your users expect it.`
    },
    {
      icon: Heart,
      title: 'Long-term Thinking',
      description: `We build for 3-5 years, not 3-5 months. Modular systems, easy handovers, future-proof stacks. When you outgrow us, you won't need to rebuild.`
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 pb-20">
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-24 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-indigo-600 via-slate-900 to-slate-900 bg-clip-text text-transparent">
            Our Philosophy
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            The principles that guide every project, decision, and line of code. This is how we build digital products that last.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="group bg-white/70 backdrop-blur-sm shadow-xl border border-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-200 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-[#8B84D7] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-display font-bold text-2xl mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{principle.title}</CardTitle>
                  <CardDescription className="text-lg text-slate-700 leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <blockquote className="italic font-medium text-2xl md:text-3xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            "Good design is obvious. Great design is transparent."
          </blockquote>
          <p className="font-mono text-sm text-slate-500 uppercase tracking-wider mb-8">
            — Joe Kym
          </p>
          <a 
            href="mailto:mail.jkyme@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-[#8B84D7] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg"
          >
            Work with us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}

