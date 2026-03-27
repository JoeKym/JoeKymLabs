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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-600 mb-4">Offerings</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Our Services</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            We build digital experiences that drive measurable outcomes. Stop wrestling with bloated tech stacks and let us deliver clarity and performance.
          </p>
        </header>

        {loading ? (
          <div className="text-slate-600 font-mono text-sm animate-pulse">Loading services from database...</div>
        ) : services.length > 0 ? (
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className="bg-white shadow-sm border border-slate-200 rounded-3xl p-8 lg:p-12 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 150}ms` }}>
                <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-sm font-mono text-indigo-600 uppercase tracking-wider mb-4">Pain Points Solved</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8 ml-4">
                      {service.pain_points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                    <h3 className="text-sm font-mono text-indigo-600 uppercase tracking-wider mb-4">Methodology</h3>
                    <p className="text-slate-600 leading-relaxed">{service.methodology}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-indigo-600 uppercase tracking-wider mb-4">Deliverables</h3>
                    <ul className="space-y-3 mb-8">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-900 bg-slate-50 border border-slate-200 p-3 rounded-xl border border-slate-200">
                          <div className="w-2 h-2 rounded-full bg-indigo-600" /> {del}
                        </li>
                      ))}
                    </ul>
                    <div className="p-6 bg-indigo-600/10 rounded-2xl border border-indigo-600/20">
                      <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">Quantified Benefit</h3>
                      <p className="text-lg font-medium">{service.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 border border-dashed border-slate-200 rounded-3xl text-slate-600">
            <p>No services found in the database. Add entries to the 'services' table.</p>
          </div>
        )}
      </main>
    </div>
  );
}