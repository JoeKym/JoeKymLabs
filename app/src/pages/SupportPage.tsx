import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageCircle, 
  FileText, 
  Activity, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

export default function SupportPage() {
  const faqs = [
    {
      q: 'How do I start a project with JoeKym Labs?',
      a: 'Visit /contact to submit an inquiry form. Include project details, budget, and timeline. We reply within 24hrs to schedule discovery call.'
    },
    {
      q: 'What are your billing and payment methods?',
      a: 'Invoices sent via email. We accept bank transfer, M-Pesa (+254), Stripe for international. 50% upfront, 50% on delivery. Contact for details.'
    },
    {
      q: 'What is your typical project timeline?',
      a: 'Discovery/design: 1-2 weeks. Build: 4-8 weeks. Depends on scope. Agile sprints with weekly check-ins.'
    },
    {
      q: 'Do you offer hosting and deployment?',
      a: 'Yes, Vercel/Netlify for frontend, Supabase/PlanetScale for DB. We handle initial deploy and handover.'
    },
    {
      q: 'What tech stack do you use?',
      a: 'React/Next.js, Tailwind, shadcn/ui, Supabase. Tailored to project needs.'
    },
    {
      q: 'How do I reset my account password?',
      a: 'Go to /auth, use "Forgot Password". Check email for reset link. Contact support if issues.'
    },
    {
      q: 'Can I see your GitHub repositories?',
      a: "Yes, visit https://github.com/JoeKym for open-source work and examples."
    },
    {
      q: 'What if I have a technical issue after launch?',
      a: 'Email support with details. 48hr response SLA for standard, 24hr for priority clients.'
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-indigo-600 to-primary bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Quick answers, direct contact, and resources to get you moving.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Help / FAQs */}
          <Card className="bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-left-8 duration-1000">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-600/30">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">Quick Help</CardTitle>
                  <CardDescription>Common questions answered</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="px-8 py-6 hover:no-underline -mb-px border-b border-slate-100 last:border-b-0">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8 text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
            <Card className="bg-white shadow-sm border border-slate-200 rounded-3xl p-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600/10 text-green-600 rounded-2xl flex items-center justify-center border border-green-600/30">
                    <Mail size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">Contact Support</CardTitle>
                    <CardDescription>Fastest way to get help</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="mailto:mail.jkyme@gmail.com" className="block w-full p-4 bg-indigo-600/5 border border-indigo-600/20 rounded-2xl text-indigo-800 font-medium hover:bg-indigo-600/10 transition-all">
                  ✉ mail.jkyme@gmail.com
                </a>
                <a href="https://wa.me/254117412271" className="block w-full p-4 bg-green-600/5 border border-green-600/20 rounded-2xl text-green-800 font-medium hover:bg-green-600/10 transition-all flex items-center gap-2">
                  📱 +254 117412271 (WhatsApp)
                </a>
                <Link to="/contact" className="w-full block text-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl shadow-primary-glow hover:shadow-primary-glow/75 btn-hover">
                  Submit Support Ticket →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Documentation */}
          <Card className="bg-white shadow-sm border border-slate-200 rounded-3xl col-span-1 md:col-span-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center border border-blue-600/30">
                  <FileText size={20} />
                </div>
                <CardTitle>Documentation & Guides</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-slate-600">Setup guides and API references.</p>
              <div className="space-y-2">
                <a href="https://github.com/JoeKym" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-600 hover:underline font-medium">
                  GitHub Repos <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="flex items-center gap-2 text-indigo-600 hover:underline font-medium">
                  Services Overview
                </Link>
                <a href="/legal" className="flex items-center gap-2 text-indigo-600 hover:underline font-medium">
                  Legal & Privacy
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          <Card className="bg-white shadow-sm border border-slate-200 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600/10 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-600/30">
                  <Activity size={20} />
                </div>
                <CardTitle>System Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-emerald-600 font-medium">
              <span className="inline-flex items-center gap-2 bg-emerald-600/10 px-3 py-1 rounded-full text-xs font-mono uppercase">
                All systems operational
              </span>
              <p className="text-slate-600 mt-3 text-xs">No known issues. Uptime: 99.9%</p>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="bg-white shadow-sm border border-slate-200 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600/10 text-purple-600 rounded-xl flex items-center justify-center border border-purple-600/30">
                  <Users size={20} />
                </div>
                <CardTitle>Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <a href="https://twitter.com/JoeKym07" className="flex items-center gap-2 text-purple-600 hover:underline">Twitter</a>
              <a href="https://github.com/JoeKym" className="flex items-center gap-2 text-purple-600 hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/joekym07" className="flex items-center gap-2 text-purple-600 hover:underline">LinkedIn</a>
            </CardContent>
          </Card>

          {/* Escalation */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600 border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-900">Priority Support</CardTitle>
              <CardDescription>For enterprise clients: 4hr response, dedicated channel. Contact for SLA details.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:mail.jkyme@gmail.com?subject=Priority%20Support" className="flex-1 bg-amber-600/90 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all">
                  Request Priority Access
                </a>
                <Link to="/pricing" className="flex-1 bg-white border border-amber-600 text-amber-700 font-bold py-4 px-6 rounded-2xl text-center hover:bg-amber-50 transition-all">
                  View Plans
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
