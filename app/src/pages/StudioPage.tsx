import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Scale, Zap, Lightbulb } from 'lucide-react';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/5 to-pink-900/10" />
          <img 
            src="/images/web-design-header.jpg" 
            alt="JoeKym Labs Studio" 
            className="w-full h-[60vh] lg:h-[70vh] object-cover opacity-70 hover:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-6 lg:left-12 right-6 lg:right-12 text-white">
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-6 drop-shadow-2xl animate-slide-in-right">
              # Studio
            </h1>
            <blockquote className="font-light text-2xl md:text-3xl lg:text-4xl leading-relaxed italic max-w-3xl drop-shadow-xl animate-slide-in-left delay-200">
              Minimalism isn’t the absence of things.<br className="hidden md:block" />
              <span className="font-semibold text-indigo-300">It’s the presence of what matters.</span>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        {/* About Us */}
        <section className="text-center mb-32 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-white/80 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-6">
                <CardTitle className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  About Us
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xl md:text-2xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  JoeKym Labs™ is a precise web studio.  
                  We craft clean, editorial interfaces and build them with performant code — for brands that value clarity over noise.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-32 animate-fade-in delay-100">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 text-center mb-20 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/web-development.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<Scale className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Purpose
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-slate-700 leading-relaxed">
                Building scalable digital experiences.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/webdesign.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-slate-700 leading-relaxed">
                Transparency, iteration, clarity.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/fullstack.png" alt="" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-slate-700 leading-relaxed">
                We work with you, not for you.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/cloud-computing.png" alt="" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-slate-700 leading-relaxed">
                Results that scale with your vision.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Culture */}
        <section className="mb-32 animate-fade-in delay-200">
          <Card className="backdrop-blur-xl bg-white/80 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Culture
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center">
              We are a remote-first team, blending design precision with engineering performance.  
              Collaboration, creativity, and adaptability define our studio.
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-fade-in delay-300">
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Ready to build something remarkable?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-green-glow px-8 py-8 text-lg font-bold rounded-2xl h-auto min-h-[60px] transform hover:scale-105 transition-all duration-300"
              >
                <a href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-2 border-slate-200 bg-white/50 hover:bg-white hover:border-indigo-300 px-8 py-8 text-lg font-bold rounded-2xl h-auto min-h-[60px] transform hover:scale-105 transition-all duration-300"
              >
                <a href="/work">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-16 border-t border-slate-200 bg-gradient-to-t from-slate-50 to-transparent text-center">
        <p className="text-lg font-medium text-slate-900 mb-8">
          © JoeKym Labs™ — {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a href="https://linkedin.com/in/joekym07" className="p-3 hover:bg-indigo-100 hover:-translate-y-1 rounded-2xl transition-all duration-300 group" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 text-slate-700 group-hover:text-indigo-600"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>
          </a>
          <a href="https://github.com/JoeKym" className="p-3 hover:bg-gray-100 hover:-translate-y-1 rounded-2xl transition-all duration-300 group" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7 text-slate-700 group-hover:text-gray-800"><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </a>
          {/* Add other social icons similarly */}
        </div>
      </footer>

    </div>
  );
}
