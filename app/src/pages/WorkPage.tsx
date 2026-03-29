import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const projects = [
  {
    title: "JoeKym Labs™ Main",
    url: "https://joekymlabs.onrender.com",
    category: "Render Hosted",
    description: "Primary portfolio and services showcase for JoeKym Labs™, featuring interactive demos, case studies, and contact forms. Live production site with optimized performance.",
    tech: "React, Tailwind, Vite, Render"
  },
  {
    title: "JoeKym Portfolio",
    url: "https://joekymportfolio.onrender.com",
    category: "Render Hosted",
    description: "Personal portfolio highlighting frontend expertise with smooth animations, responsive design, and GSAP-powered interactions.",
    tech: "React, GSAP, Tailwind"
  },
  {
    title: "Renegade Immortal",
    url: "https://renegadeimmortal.onrender.com",
    category: "Render Hosted",
    description: "Immersive web application inspired by cultivation novels, with dynamic UI and storytelling elements.",
    tech: "React, Custom UI, Render"
  },
  {
    title: "Task Tuned",
    url: "https://tasktuned.onrender.com",
    category: "Render Hosted",
    description: "Productivity platform for task management and workflow optimization, built for seamless user experience.",
    tech: "TypeScript, Vite, React"
  },
  {
    title: "Satoshi BTC Tracker",
    url: "https://satoshibtctracker.onrender.com",
    category: "Render Hosted",
    description: "Real-time Bitcoin price tracker with historical charts and Satoshi Nakamoto-themed design.",
    tech: "React, Web APIs, Charts"
  },
  {
    title: "Math Arsenal",
    url: "https://matharsenal.onrender.com",
    category: "Render Hosted",
    description: "Educational toolset for mathematics learning, featuring calculators, solvers, and interactive problems.",
    tech: "React, Math.js"
  },
  {
    title: "3D Bee Website",
    url: "https://threedbeewebsite.onrender.com",
    category: "Render Hosted",
    description: "3D animated website with bee-themed interactions using WebGL and particle systems.",
    tech: "Three.js, React Three Fiber"
  },
  {
    title: "For You My Love",
    url: "https://foryoumylove.onrender.com",
    category: "Render Hosted",
    description: "Personal heartfelt landing page with romantic design and smooth transitions.",
    tech: "HTML/CSS/JS, Vanilla"
  },
  {
    title: "TechFolio",
    url: "https://techfolio.lovable.app",
    category: "Lovable Built",
    description: "Tech-focused portfolio generated with Lovable AI, showcasing modern developer tools.",
    tech: "Lovable, React"
  },
  {
    title: "Renegade Immortal (Lovable)",
    url: "https://renegadeimmortal.lovable.app",
    category: "Lovable Built",
    description: "AI-assisted build of Renegade Immortal app, demonstrating rapid prototyping capabilities.",
    tech: "Lovable, React"
  },
  {
    title: "JoeKym Labs™ (Lovable)",
    url: "https://joekymlabs.lovable.app",
    category: "Lovable Built",
    description: "Lovable-powered version of JoeKym Labs™ site, highlighting AI code generation.",
    tech: "Lovable, Tailwind"
  },
  {
    title: "Lifeform 3JS",
    url: "https://lifeform3js.oneapp.dev/",
    category: "OneProgramming",
    description: "Interactive 3D lifeform simulation using Three.js, hosted on OneApp platform.",
    tech: "Three.js, GLSL Shaders"
  },
  {
    title: "Kimi Project 1",
    url: "https://76rdosdggihko.ok.kimi.link",
    category: "Kimi",
    description: "Experimental project hosted on Kimi platform, focusing on innovative web features.",
    tech: "Next.js, Kimi Hosting"
  },
  {
    title: "Kimi Project 2",
    url: "https://a6o3guvca753o.ok.kimi.link",
    category: "Kimi",
    description: "Second Kimi-hosted site with advanced routing and performance optimizations.",
    tech: "React, Vercel-like"
  }
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredProjects = projects.filter(p => activeTab === "all" || p.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Work | JoeKym Labs™ - Selected Projects</title>
        <meta name="description" content="Explore our portfolio of scalable web applications, from startups to enterprises. React, Next.js, and modern web development projects." />
        <meta property="og:title" content="Work | JoeKym Labs™ - Selected Projects" />
        <meta property="og:description" content="Explore our portfolio of scalable web applications and modern web development projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joekymlabs.com/work" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground font-sans">
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-600 mb-4">Archive</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Selected Work</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            A comprehensive list of recent deployments, prototypes, and production builds spanning frontend architecture, 3D web experiences, and full-stack applications.
          </p>
        </header>

        <div className="space-y-12">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="[&>div]:data-[state=active]:bg-background">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-14">
              <TabsTrigger value="all" className="data-[state=active]:shadow-md data-[state=active]:bg-accent data-[state=active]:text-foreground">All ({projects.length})</TabsTrigger>
              <TabsTrigger value="Render Hosted" className="data-[state=active]:shadow-md data-[state=active]:bg-accent data-[state=active]:text-foreground">Render Hosted</TabsTrigger>
              <TabsTrigger value="Lovable Built" className="data-[state=active]:shadow-md data-[state=active]:bg-accent data-[state=active]:text-foreground">Lovable</TabsTrigger>
              <TabsTrigger value="OneProgramming" className="data-[state=active]:shadow-md data-[state=active]:bg-accent data-[state=active]:text-foreground">OneApp</TabsTrigger>
              <TabsTrigger value="Kimi" className="data-[state=active]:shadow-md data-[state=active]:bg-accent data-[state=active]:text-foreground">Kimi</TabsTrigger>
            </TabsList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {filteredProjects.map((project, idx) => (
                <Card key={project.url} className="group border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden h-fit hover:border-primary/50 bg-card">
                  <a href={project.url} target="_blank" rel="noreferrer" className="block p-6 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                        {project.category}
                      </div>
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-all opacity-70 group-hover:opacity-100 ml-auto" />
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <p className="text-xs bg-muted/50 px-2.5 py-1 rounded-full inline-block font-mono mb-6">
                      {project.tech}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">Live Demo</span>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </a>
                </Card>
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground text-lg">No projects in this category yet.</p>
              </div>
            )}
          </Tabs>
        </div>
      </main>
    </div>
    </>
  );
}
