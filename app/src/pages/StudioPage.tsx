import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Scale, Zap, Lightbulb } from 'lucide-react';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/5 to-pink-900/10" />
          <img 
            src="/images/web-design-header.jpg" 
            alt="JoeKym Labs™ Studio"
            loading="eager"
            width="1920"
            height="1080"
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
            <Card className="backdrop-blur-xl bg-card/80 border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-6">
                <CardTitle className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
                  About Us
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                  JoeKym Labs™ is a precise web studio.  
                  We craft clean, editorial interfaces and build them with performant code — for brands that value clarity over noise.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-32 animate-fade-in delay-100">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-center mb-20 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-auto md:h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/web-development.jpg" alt="" loading="lazy" width="400" height="400" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<Scale className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-foreground group-hover:text-indigo-600 transition-colors">
                  Purpose
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-muted-foreground leading-relaxed">
                Building scalable digital experiences.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-auto md:h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/webdesign.jpg" alt="" loading="lazy" width="400" height="400" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                  Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-muted-foreground leading-relaxed">
                Transparency, iteration, clarity.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-auto md:h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/fullstack.png" alt="" loading="lazy" width="400" height="400" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
<Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                  Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-muted-foreground leading-relaxed">
                We work with you, not for you.
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer h-auto md:h-[400px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="/images/cloud-computing.png" alt="" loading="lazy" width="400" height="400" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="relative pb-6 pt-16">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl font-bold text-foreground group-hover:text-amber-600 transition-colors">
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pt-0 text-muted-foreground leading-relaxed">
                Results that scale with your vision.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Culture */}
        <section className="mb-32 animate-fade-in delay-200">
          <Card className="backdrop-blur-xl bg-card/80 border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Culture
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-center">
              We are a remote-first team, blending design precision with engineering performance.  
              Collaboration, creativity, and adaptability define our studio.
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-fade-in delay-300">
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to build something remarkable?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-primary-glow px-8 py-8 text-lg font-bold rounded-2xl h-auto min-h-[60px] transform hover:scale-105 transition-all duration-300"
              >
                <a href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild className="group text-lg px-8 py-6">
                <a href="/work">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
