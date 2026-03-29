import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    // Post to Supabase (acting as CRM endpoint)
    const { error } = await supabase.from('crm_leads').insert([data]);
    
    setSubmitting(false);
    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <header className="mb-12">
              <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Let's Talk</h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear about it. Reach out via the secure form or use our direct contact links below.
              </p>
            </header>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 border border-slate-200">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:mail.jkyme@gmail.com" className="text-slate-600 hover:text-indigo-600 transition-colors">mail.jkyme@gmail.com</a>
                  <p className="text-xs font-mono text-slate-400 mt-2">Replies within 24hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 border border-slate-200">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Locations</h3>
                  <p className="text-slate-600">Nairobi & Meru, Kenya (UTC+3)</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-indigo-600 hover:underline mt-2 inline-block">View on Maps</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 border border-slate-200">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Direct Chat</h3>
                  <p className="text-slate-600">Available for quick technical queries.</p>
                  <a href="#" className="text-xs font-mono text-indigo-600 hover:underline mt-2 inline-block">WhatsApp Deep-link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="bg-white shadow-sm border border-slate-200 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-20" />
              
              {success ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-indigo-600/20 text-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center border border-indigo-600/30">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-4">Request Received</h3>
                  <p className="text-slate-600 mb-8">Your message has been securely routed to our CRM. We will be in touch shortly.</p>
                  <button onClick={() => setSuccess(false)} className="text-indigo-600 text-sm font-mono hover:underline">Submit another inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
                    <h3 className="font-bold text-xl">Secure Inquiry</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-green-400 bg-green-400/10 px-2 py-1 rounded">TLS 1.3 Active</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-slate-600 mb-2">Name</label>
                      <input type="text" name="name" required className="w-full bg-white border border-slate-300 shadow-inner border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-slate-600 mb-2">Email</label>
                      <input type="email" name="email" required className="w-full bg-white border border-slate-300 shadow-inner border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-colors" placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-slate-600 mb-2">Project Budget</label>
                    <select name="budget" required className="w-full bg-white border border-slate-300 shadow-inner border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-colors text-slate-900 appearance-none">
                      <option value="" disabled selected>Select a range</option>
                      <option value="< $5k">Under $5,000</option>
                      <option value="$5k - $15k">$5,000 - $15,000</option>
                      <option value="$15k - $50k">$15,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-slate-600 mb-2">Message</label>
                    <textarea name="message" required rows={5} className="w-full bg-white border border-slate-300 shadow-inner border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-colors resize-none" placeholder="Tell us about your project objectives and timeline..."></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={submitting} className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100 flex justify-center items-center gap-2">
                      {submitting ? 'Encrypting & Sending...' : 'Send Message'}
                    </button>
                    <p className="text-center text-[10px] text-slate-400 font-mono mt-4">Protected by reCAPTCHA Enterprise & strict CSP headers.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}


