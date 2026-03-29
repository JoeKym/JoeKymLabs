import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Cookie, Scale, ChevronRight, Mail, ExternalLink } from 'lucide-react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>('privacy');

  const PrivacyPolicy = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="bg-gradient-to-br from-indigo-600/5 to-transparent border border-indigo-600/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">1. Introduction</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          JoeKym Labs™ ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use any of our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-3">
          <span className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm font-mono">02</span>
          Information We Collect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Personal Info</h3>
            <p className="text-sm text-muted-foreground">Name, email, phone, billing information when you contact us or make a purchase.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Usage Data</h3>
            <p className="text-sm text-muted-foreground">IP address, browser type, pages visited via analytics tools.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Project Info</h3>
            <p className="text-sm text-muted-foreground">Requirements, budget, timeline when requesting services.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-3">
          <span className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm font-mono">03</span>
          How We Use Your Information
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Provide and improve our web services',
            'Communicate about projects and updates',
            'Process payments and manage billing',
            'Send promotional materials (with opt-out)',
            'Analytics and site optimization',
            'Legal compliance and security'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-3">
          <span className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-sm font-mono">04</span>
          Data Security
        </h2>
        <div className="flex flex-wrap gap-3">
          {['HTTPS Encryption', 'Database Encryption', 'Security Audits', 'Role-Based Access'].map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg font-mono">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="flex items-start gap-4 p-6 bg-gradient-to-r from-muted to-transparent border border-border rounded-2xl">
        <Mail className="w-5 h-5 text-primary mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground mb-1">Your Rights</h3>
          <p className="text-muted-foreground text-sm">
            Request access, correction, or deletion of your data by emailing{' '}
            <a href="mailto:mail.jkyme@gmail.com" className="text-primary hover:underline font-medium">mail.jkyme@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );

  const TermsOfService = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="bg-gradient-to-br from-emerald-600/5 to-transparent border border-emerald-600/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center">
            <Scale className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">1. Acceptance of Terms</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          By accessing JoeKym Labs™ website or services, you agree to these Terms of Service. If you do not agree, please do not use our services.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Services</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We provide web design, frontend development, and related consulting services. Project scope is defined in written agreements.
          </p>
        </section>

        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Payment Terms</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            50% deposit required to start. Balance due on delivery. Net 15 days. Late payments incur 1.5%/month.
          </p>
        </section>

        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            You retain ownership of your content. Final deliverables become your property upon full payment.
          </p>
        </section>

        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-3">Revisions</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            3 rounds of revisions included. Additional revisions billed at $150/hour.
          </p>
        </section>
      </div>

      <section className="bg-muted/50 border border-border rounded-2xl p-6">
        <h2 className="font-display font-bold text-lg text-foreground mb-3">Limitation of Liability</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Our liability is limited to fees paid for services. No consequential damages. Services provided "as is" without warranties beyond project agreement.
        </p>
      </section>
    </div>
  );

  const CookiePolicy = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="bg-gradient-to-br from-amber-600/5 to-transparent border border-amber-600/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-600/10 rounded-xl flex items-center justify-center">
            <Cookie className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="font-display font-bold text-xl text-foreground">What Are Cookies?</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Cookies are small text files stored on your device to remember preferences and track usage.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display font-bold text-xl text-foreground">Cookies We Use</h2>
        <div className="overflow-hidden border border-border rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left font-mono text-xs uppercase text-muted-foreground">Name</th>
                <th className="px-6 py-4 text-left font-mono text-xs uppercase text-muted-foreground">Purpose</th>
                <th className="px-6 py-4 text-left font-mono text-xs uppercase text-muted-foreground">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-6 py-4 font-mono text-foreground">_ga, _gid</td>
                <td className="px-6 py-4 text-muted-foreground">Google Analytics - site usage</td>
                <td className="px-6 py-4 text-muted-foreground">2 years / Session</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono text-foreground">sb-access-token</td>
                <td className="px-6 py-4 text-muted-foreground">Supabase authentication</td>
                <td className="px-6 py-4 text-muted-foreground">Session</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-mono text-foreground">theme_pref</td>
                <td className="px-6 py-4 text-muted-foreground">Dark/Light mode preference</td>
                <td className="px-6 py-4 text-muted-foreground">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl">
        <ExternalLink className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground mb-1">Managing Cookies</h3>
          <p className="text-muted-foreground text-sm">
            Browser settings control cookies. Disabling may break functionality. We respect Do Not Track signals.
          </p>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Legal Center
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparency and trust are core to our business. Review our policies below.
          </p>
          <p className="text-muted-foreground/60 font-mono text-xs uppercase tracking-widest mt-6">
            Last Updated: March 2025
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const colors: Record<string, { active: string; hover: string }> = {
              indigo: { active: 'bg-indigo-600/10 text-indigo-600 border-indigo-600/30', hover: 'hover:bg-indigo-600/5 hover:text-indigo-600' },
              emerald: { active: 'bg-emerald-600/10 text-emerald-600 border-emerald-600/30', hover: 'hover:bg-emerald-600/5 hover:text-emerald-600' },
              amber: { active: 'bg-amber-600/10 text-amber-600 border-amber-600/30', hover: 'hover:bg-amber-600/5 hover:text-amber-600' },
            };
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all border ${
                  isActive 
                    ? `${colors[tab.color].active} shadow-lg` 
                    : `bg-card border-border text-muted-foreground ${colors[tab.color].hover}`
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-xl">
          {activeTab === 'privacy' && <PrivacyPolicy />}
          {activeTab === 'terms' && <TermsOfService />}
          {activeTab === 'cookies' && <CookiePolicy />}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Questions about our policies?{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
              Get in touch <ExternalLink size={14} />
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

