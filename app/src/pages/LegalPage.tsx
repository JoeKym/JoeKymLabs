import React, { useState } from 'react';
import Navigation from '../components/Navigation';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>('privacy');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Legal & Compliance</h1>
          <p className="text-slate-600 font-mono text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-48 shrink-0">
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
              <button onClick={() => setActiveTab('privacy')} className={`text-left px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'privacy' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Privacy Policy</button>
              <button onClick={() => setActiveTab('terms')} className={`text-left px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'terms' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Terms of Service</button>
              <button onClick={() => setActiveTab('cookies')} className={`text-left px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'cookies' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Cookie Policy</button>
            </nav>
          </aside>

          <div className="flex-1 prose prose-invert prose-p:text-slate-600 prose-h2:font-display prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-indigo-600 animate-in fade-in duration-500">
            {activeTab === 'privacy' && (
              <div>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you create an account, fill out a form, or communicate with us. The types of information we may collect include your name, email address, postal address, credit card information, and other contact or identifying information.</p>
                
                <h2>2. How We Use Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, such as to process transactions, authenticate users, and provide customer support. We also use the information to communicate with you about products, services, offers, promotions, and events.</p>
                
                <h2>3. Information Sharing</h2>
                <p>We do not share your personal information with third parties except as described in this privacy policy or in connection with our services (e.g., payment processors, hosting providers) who are bound by strict confidentiality agreements.</p>
                
                <h2>4. Data Security</h2>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. All data is encrypted at rest and in transit using industry-standard protocols.</p>
              </div>
            )}
            
            {activeTab === 'terms' && (
              <div>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
                
                <h2>2. Intellectual Property</h2>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of JoeKym Labs and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
                
                <h2>3. User Responsibilities</h2>
                <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
                
                <h2>4. Limitation of Liability</h2>
                <p>In no event shall JoeKym Labs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div>
                <h2>1. What are Cookies?</h2>
                <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
                
                <h2>2. How We Use Cookies</h2>
                <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies to enable certain functions of the Service, to provide analytics, and to store your preferences.</p>
                
                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-white shadow-sm border border-slate-200 font-mono text-xs uppercase text-slate-600">
                      <tr>
                        <th className="px-6 py-3 border-b border-slate-200">Name</th>
                        <th className="px-6 py-3 border-b border-slate-200">Purpose</th>
                        <th className="px-6 py-3 border-b border-slate-200">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-6 py-4 font-mono text-slate-900">sb-access-token</td>
                        <td className="px-6 py-4">Authentication state for Supabase</td>
                        <td className="px-6 py-4">Session</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-slate-900">_ga</td>
                        <td className="px-6 py-4">Google Analytics tracking</td>
                        <td className="px-6 py-4">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-slate-900">theme_pref</td>
                        <td className="px-6 py-4">UI theme preference</td>
                        <td className="px-6 py-4">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}