import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { supabase } from '../lib/supabaseClient';

interface Service {
  id: string;
  title: string;
  pain_points: string[];
  methodology: string;
  deliverables: string[];
  benefits: string;
  price_range: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const { data } = await supabase.from('services').select('*').order('created_at', { ascending: true });
      if (data) setServices(data);
      setLoading(false);
    }
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA] font-sans">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8B2F7] mb-4">Offerings</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Our Services</h1>
          <p className="text-[#A6ACB8] text-lg max-w-2xl leading-relaxed">
            We build digital experiences that drive measurable outcomes. Stop wrestling with bloated tech stacks and let us deliver clarity and performance.
          </p>
        </header>

        {loading ? (
          <div className="text-[#A6ACB8] font-mono text-sm animate-pulse">Loading services from database...</div>
        ) : services.length > 0 ? (
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 150}ms` }}>
                <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-sm font-mono text-[#B8B2F7] uppercase tracking-wider mb-4">Pain Points Solved</h3>
                    <ul className="list-disc list-inside text-[#A6ACB8] space-y-2 mb-8 ml-4">
                      {service.pain_points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                    <h3 className="text-sm font-mono text-[#B8B2F7] uppercase tracking-wider mb-4">Methodology</h3>
                    <p className="text-[#A6ACB8] leading-relaxed">{service.methodology}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-[#B8B2F7] uppercase tracking-wider mb-4">Deliverables</h3>
                    <ul className="space-y-3 mb-8">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#F7F8FA] bg-black/20 p-3 rounded-xl border border-white/5">
                          <div className="w-2 h-2 rounded-full bg-[#B8B2F7]" /> {del}
                        </li>
                      ))}
                    </ul>
                    <div className="p-6 bg-[#B8B2F7]/10 rounded-2xl border border-[#B8B2F7]/20">
                      <h3 className="text-sm font-bold text-[#B8B2F7] uppercase tracking-wider mb-2">Quantified Benefit</h3>
                      <p className="text-lg font-medium">{service.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 border border-dashed border-white/10 rounded-3xl text-[#A6ACB8]">
            <p>No services found in the database. Add entries to the 'services' table.</p>
          </div>
        )}
      </main>
    </div>
  );
}