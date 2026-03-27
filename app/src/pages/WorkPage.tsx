import React from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  { title: "JoeKym Portfolio", url: "https://joekymportfolio.onrender.com", type: "Portfolio", tech: "React, GSAP, Render" },
  { title: "Renegade Immortal", url: "https://renegadeimmortal.onrender.com", type: "Web App", tech: "React, Lovable, Render" },
  { title: "Task Tuned", url: "https://tasktuned.onrender.com", type: "Productivity", tech: "TypeScript, Vite" },
  { title: "Satoshi BTC Tracker", url: "https://satoshibtctracker.onrender.com", type: "Crypto/Finance", tech: "API Integration, React" },
  { title: "Math Arsenal", url: "https://matharsenal.onrender.com", type: "Education", tech: "React" },
  { title: "3D Bee Website", url: "https://threedbeewebsie.onrender.com", type: "3D / WebGL", tech: "Three.js, React Three Fiber" },
  { title: "For You My Love", url: "https://foryoumylove.onrender.com", type: "Personal", tech: "Frontend" },
  { title: "TechFolio", url: "https://techfolio.lovable.app", type: "Portfolio", tech: "Lovable" },
  { title: "Lifeform 3D", url: "https://lifeform3js.oneapp.dev/", type: "3D Experience", tech: "Three.js, OneApp" }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-600 mb-4">Archive</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Selected Work</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            A comprehensive list of recent deployments, prototypes, and production builds spanning frontend architecture, 3D web experiences, and full-stack applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-white shadow-sm border border-slate-200 rounded-3xl p-8 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="px-3 py-1 bg-indigo-600/10 text-indigo-600 text-[10px] font-mono uppercase tracking-wider rounded-lg">
                  {project.type}
                </div>
                <ExternalLink size={20} className="text-slate-600 group-hover:text-slate-900 transition-colors" />
              </div>
              
              <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-mono">
                {project.tech}
              </p>
              
              <div className="flex items-center text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                Visit Live Site <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
