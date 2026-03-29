import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Check, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '../lib/utils';



interface PricingTier {
  name: string;
  kesPrice: string;
  usdPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    kesPrice: '120,000',
    usdPrice: '899',
    description: 'Perfect for small businesses and landing pages.',
    features: ['3–5 pages', 'Responsive design', 'Basic SEO', 'Email support'],
    cta: 'Choose Plan'
  },
  {
    name: 'Growth',
    kesPrice: '330,000',
    usdPrice: '2,499',
    description: 'For scaling startups needing full platforms.',
    features: ['10+ pages', 'Authentication flows', 'API integrations', 'Priority support'],
    popular: true,
    cta: 'Choose Plan'
  },
  {
    name: 'Enterprise',
    kesPrice: 'Custom',
    usdPrice: 'Custom',
    description: 'For complex systems with SLA support.',
    features: ['Unlimited pages', 'Advanced integrations', 'Dedicated support channel', '99.9% uptime SLA'],
    cta: 'Request Quote'
  }
];

const faq = [
  {
    question: 'Do you charge hourly or project-based?',
    answer: 'We work on project-based pricing with clear deliverables.'
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes, you can move from Starter to Growth or Enterprise anytime.'
  },
  {
    question: 'Are prices final in local currency?',
    answer: 'Converted rates are approximate. Default billing is in KES.'
  }
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<string>('KES');
  const [symbol, setSymbol] = useState('KSh');
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        setLoading(true);
        // Get user country
        const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const geoData = await geoRes.json();
        const userCountry = geoData.country || 'KE';
        setCountry(userCountry);

        let targetCurrency = 'KES';
        // Map country to currency (extend as needed)
        const currencyMap: Record<string, string> = {
          'US': 'USD',
          'KE': 'KES',
          'GB': 'GBP',
          'DE': 'EUR',
          'FR': 'EUR',
          'IT': 'EUR',
          'ES': 'EUR',
        };
        targetCurrency = currencyMap[userCountry] || 'KES';

        // Get exchange rate from KES
        const rateRes = await fetch(`https://api.exchangerate-api.com/v4/latest/KES`);
        const rateData = await rateRes.json();
        const kesToTarget = rateData.rates[targetCurrency] || 1;
        setRate(kesToTarget);
        setCurrency(targetCurrency as any);

        // Set symbol
        const symbols: Record<string, string> = {
          'KES': 'KSh',
          'USD': '$',
          'GBP': '£',
          'EUR': '€',
        };
        setSymbol(symbols[targetCurrency] || 'KSh');
      } catch (error) {
        console.error('Currency detection failed:', error);
        // Fallback to KES
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const formatPrice = (kes: string, usdFallback: string) => {
    if (currency === 'KES') {
      return `${symbol} ${kes}/project`;
    }
    if (kes === 'Custom') {
      return `${symbol} Custom Quote (${currency})`;
    }
    const kesNum = parseInt(kes.replace(/,/g, ''));
    const converted = Math.round(kesNum / rate).toLocaleString();
    return `${symbol} ${converted}/project (~${symbol}${usdFallback} USD*)`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 pb-20">
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Hero */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-10 duration-1000">
          <h1 className="font-headings font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent text-5xl md:text-7xl mb-6">
            Transparent Pricing
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              No hidden fees. No surprise retainers.
            </p>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Just clear, value-based pricing for high-performance engineering and design.
            </p>
          </div>
          {loading ? (
            <div className="mt-12 flex items-center justify-center gap-3 text-slate-500 animate-pulse">
              <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
              Detecting location for local pricing...
              <span className="ml-2">{country && `${country} (${symbol})`}</span>
            </div>
          ) : (
            <div className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-500 bg-slate-100/50 px-6 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              Showing prices for {country} ({symbol})
            </div>
          )}
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={cn(
                'relative group overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000',
                tier.popular && 'border-primary/50 shadow-primary/10 lg:scale-[1.05] border-4 shadow-2xl',
                { 'delay-150': index === 1, 'delay-300': index === 2 }
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  {tier.description}
                </CardDescription>
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {formatPrice(tier.kesPrice, tier.usdPrice)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-8 space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 group-hover:text-slate-900 transition-colors">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    'w-full font-bold uppercase tracking-wider text-sm rounded-2xl shadow-primary-glow transition-all group-hover:scale-[1.02]',
                    tier.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary'
                      : 'border-2 border-slate-200 bg-white text-slate-900 hover:border-primary hover:bg-primary/5'
                  )}
                >
                  <Link to={tier.cta === 'Request Quote' ? '/contact' : '/contact'}>
                    {tier.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="font-headings font-bold text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                <AccordionTrigger className="px-8 py-8 text-left hover:no-underline h-auto">
                  <h3 className="font-semibold text-xl text-slate-900">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-slate-600 text-lg leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headings font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Ready to start?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Choose the plan that fits or get a custom quote.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg font-bold h-16 rounded-2xl shadow-primary-glow hover:shadow-primary-glow/75 bg-gradient-to-r from-primary to-accent">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg font-bold h-16 rounded-2xl border-2 border-slate-200 hover:bg-primary/5">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 italic pt-8 border-t border-slate-200 max-w-2xl mx-auto">
            *Converted rates are approximate. Default billing in KES.
          </p>
        </div>
      </main>
    </div>
  );
}

