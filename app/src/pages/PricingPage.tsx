import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { supabase } from '../lib/supabaseClient';
import { Check } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
  is_popular: boolean;
}

export default function PricingPage() {
  const [tiers, setTiers] = useState<PricingTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPricing() {
      const { data } = await supabase.from('pricing_tiers').select('*').order('price_value', { ascending: true });
      if (data) setTiers(data);
      setLoading(false);
    }
    fetchPricing();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Transparent Pricing</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No surprise retainers. Just clear, value-based pricing for high-performance engineering and design.
          </p>
        </header>

        {loading ? (
          <div className="text-center text-slate-600 animate-pulse">Loading rate card from finance database...</div>
        ) : tiers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div key={tier.id} className={`relative bg-white shadow-sm border ${tier.is_popular ? 'border-indigo-600' : 'border-slate-200'} rounded-3xl p-8 flex flex-col animate-in fade-in slide-in-from-bottom-4`} style={{ animationDelay: `${idx * 150}ms` }}>
                {tier.is_popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-slate-600 text-sm mb-6 h-10">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-slate-600 font-mono text-sm">/{tier.interval}</span>
                </div>
                <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-transform hover:scale-105 ${tier.is_popular ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Get Started
                </button>
                <div className="flex-1">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Includes</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 border border-dashed border-slate-200 rounded-3xl text-slate-600">
            <p>Pricing data not found. Please sync with the rate card database.</p>
          </div>
        )}
      </main>
    </div>
  );
}