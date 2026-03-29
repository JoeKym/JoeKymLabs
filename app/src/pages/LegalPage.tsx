import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>('privacy');

  const PrivacyPolicy = () => (
    <div>
      <h2>1. Introduction</h2>
      <p>JoeKym Labs™ ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link to="/" className="text-indigo-600 hover:underline font-medium">joekymlabs.com</Link> or use any of our services.</p>
      
      <h2>2. Information We Collect</h2>
      <p><strong>Personal Information:</strong> Name, email address, phone number, billing information when you contact us, sign up for services, or make a purchase.</p>
      <p><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, referring/exit pages via analytics tools like Google Analytics.</p>
      <p><strong>Project Information:</strong> Project requirements, budget, timeline when requesting services.</p>

      <h2>3. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2 mt-4 text-slate-700">
        <li>Provide and improve our web design/development services</li>
        <li>Communicate about projects, updates, invoices</li>
        <li>Process payments and manage billing</li>
        <li>Send promotional materials (with opt-out)</li>
        <li>Analytics and site optimization</li>
        <li>Legal compliance and security</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>We share information only with:</p>
      <ul className="list-disc list-inside space-y-2 mt-4 text-slate-700">
        <li>Service providers (payment processors like Stripe, hosting like Vercel/Render)</li>
        <li>Legal authorities if required</li>
        <li>Business transfers (sale/merger)</li>
      </ul>
      <p>We do not sell your personal data to third parties.</p>

      <h2>5. Data Security</h2>
      <p>All data transmitted via HTTPS. Databases encrypted at rest (Supabase). Regular security audits. Access limited by role.</p>

      <h2>6. Your Rights</h2>
      <p>You can request access, correction, deletion of your data by emailing <a href="mailto:mail.jkyme@gmail.com" className="text-indigo-600 hover:underline">mail.jkyme@gmail.com</a>.</p>
    </div>
  );

  const TermsOfService = () => (
    <div>
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing JoeKym Labs™ website or services, you agree to these Terms of Service. If you do not agree, do not use our services.</p>
      
      <h2>2. Services</h2>
      <p>We provide web design, frontend development, and related consulting services. Project scope defined in written agreements/statements of work.</p>

      <h2>3. Payment Terms</h2>
      <p>50% deposit required to start. Balance due on project delivery/approval. Net 15 days. Late payments 1.5%/month. All fees in USD unless agreed otherwise.</p>

      <h2>4. Intellectual Property</h2>
      <p>You retain ownership of your content/pre-existing materials. We retain ownership of our tools/templates. Final deliverables become your property upon full payment.</p>

      <h2>5. Revisions & Cancellations</h2>
      <p>3 rounds of revisions included. Additional revisions $150/hr. Cancellation before 50% payment: deposit non-refundable. After 50%: full payment due.</p>

      <h2>6. Limitation of Liability</h2>
      <p>Our liability limited to fees paid. No consequential damages. Services provided "as is" without warranties beyond project agreement.</p>
    </div>
  );

  const CookiePolicy = () => (
    <div>
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device to remember preferences and track usage.</p>
      
      <h2>2. Cookies We Use</h2>
      <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
        <table className="w-full text-sm">
          <thead className="bg-white font-mono text-xs uppercase text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left border-b border-slate-200">Name</th>
              <th className="px-6 py-3 text-left border-b border-slate-200">Purpose</th>
              <th className="px-6 py-3 text-left border-b border-slate-200">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-6 py-4 font-mono text-slate-900">_ga, _gid</td>
              <td className="px-6 py-4">Google Analytics - site usage</td>
              <td className="px-6 py-4">2 years / Session</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-mono text-slate-900">sb-access-token</td>
              <td className="px-6 py-4">Supabase authentication</td>
              <td className="px-6 py-4">Session</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-mono text-slate-900">theme_pref</td>
              <td className="px-6 py-4">Dark/Light mode preference</td>
              <td className="px-6 py-4">1 year</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="mt-8">3. Managing Cookies</h2>
      <p>Browser settings control cookies. Note: disabling may break functionality. We respect Do Not Track signals.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 pb-20">
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 via-slate-900 to-slate-900 bg-clip-text text-transparent">
            JoeKym Labs™ Legal
          </h1>
          <p className="text-slate-600 font-mono text-sm uppercase tracking-wider">Updated January 2025</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-48 shrink-0 order-2 md:order-1">
            <nav className="flex flex-row md:flex-col gap-2 pb-4 md:pb-0 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('privacy')} 
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors text-left w-full ${activeTab === 'privacy' ? 'bg-indigo-600/10 text-indigo-600 border border-indigo-600/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveTab('terms')} 
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors text-left w-full ${activeTab === 'terms' ? 'bg-emerald-600/10 text-emerald-600 border border-emerald-600/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setActiveTab('cookies')} 
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors text-left w-full ${activeTab === 'cookies' ? 'bg-amber-600/10 text-amber-600 border border-amber-600/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                Cookie Policy
              </button>
            </nav>
          </aside>

          <div className="flex-1 order-1 md:order-2 prose prose-slate max-w-none">
            {activeTab === 'privacy' && <PrivacyPolicy />}
            {activeTab === 'terms' && <TermsOfService />}
            {activeTab === 'cookies' && <CookiePolicy />}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-600">
            Questions? Contact <a href="mailto:mail.jkyme@gmail.com" className="font-medium text-indigo-600 hover:underline">mail.jkyme@gmail.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}

