import { Helmet } from 'react-helmet-async';
import { HelpCircle, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card } from '../components/ui/card';

const generalFaqs = [
  {
    question: 'How do I start a project with JoeKym Labs™?',
    answer: 'Visit our Contact page to submit an inquiry form. Include project details, budget, and timeline. We reply within 24 hours to schedule a discovery call and discuss your requirements.'
  },
  {
    question: 'What services does JoeKym Labs™ offer?',
    answer: 'We offer UI/UX Design, Frontend Engineering (React, Next.js, Tailwind), Backend & API Development (Node.js, Supabase, PostgreSQL), Brand Systems, and Consulting & Strategy services.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A simple landing page may take 1-2 weeks, while a full platform can take 2-3 months. We provide detailed timelines during our discovery phase.'
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes! We are a remote-first team and work with clients globally. We use modern collaboration tools to ensure smooth communication across time zones.'
  }
];

const pricingFaqs = [
  {
    question: 'Do you charge hourly or project-based?',
    answer: 'We work on project-based pricing with clear deliverables. This ensures transparency and no surprise costs. Each project is scoped and priced individually based on requirements.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can move from Starter to Growth or Enterprise anytime. We will adjust the pricing and scope accordingly as your needs evolve.'
  },
  {
    question: 'Are prices final in local currency?',
    answer: 'Converted rates are approximate for reference. Default billing is in KES (Kenyan Shillings), but we can accommodate other currencies for international clients.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, mobile money (M-Pesa), PayPal, and major credit cards. Payment terms are typically 50% upfront and 50% on completion.'
  }
];

const technicalFaqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, PostgreSQL, and cloud deployment on Vercel, Render, and AWS.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer maintenance packages and support retainers. This includes bug fixes, security updates, performance monitoring, and feature enhancements.'
  },
  {
    question: 'Will I own the source code?',
    answer: 'Absolutely. Upon project completion and final payment, you receive full ownership of all source code, designs, and assets. We use GitHub for transparent code sharing throughout development.'
  },
  {
    question: 'Do you offer hosting services?',
    answer: 'We can recommend and set up hosting on platforms like Vercel, Render, or AWS. For Enterprise clients, we also offer managed hosting solutions with 99.9% uptime SLA.'
  }
];

const supportFaqs = [
  {
    question: 'How do I get support for my project?',
    answer: 'Email support with details at mail.jkyme@gmail.com. We offer 48-hour response SLA for standard clients and 24-hour response for priority/Enterprise clients.'
  },
  {
    question: 'What if I have a technical issue after launch?',
    answer: 'Email us with details about the issue. For urgent matters, Enterprise clients have access to a dedicated support channel with faster response times.'
  },
  {
    question: 'How can I report a bug?',
    answer: 'You can report bugs via our Feedback page, email, or through your project management dashboard if you are an active client.'
  },
  {
    question: 'Do you provide training for my team?',
    answer: 'Yes, we offer documentation and training sessions for Enterprise clients to help your team manage and update the platform we build for you.'
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>FAQ | JoeKym Labs™ - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about JoeKym Labs™ services, pricing, and support." />
        <meta property="og:title" content="FAQ | JoeKym Labs™ - Frequently Asked Questions" />
        <meta property="og:description" content="Browse our comprehensive FAQ for answers about web development services, pricing, and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joekymlabs.com/faq" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to commonly asked questions about our services, process, and support.
          </p>
        </header>

        {/* Search hint */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <Search className="w-5 h-5" />
          <span>Browse categories below or visit our <a href="/support" className="text-primary hover:underline">Support Center</a></span>
        </div>

        {/* General FAQs */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
            General Questions
          </h2>
          <Card className="border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Pricing FAQs */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
            Pricing & Billing
          </h2>
          <Card className="border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`pricing-${index}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Technical FAQs */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
            Technical Questions
          </h2>
          <Card className="border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {technicalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`technical-${index}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Support FAQs */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
            Support & Maintenance
          </h2>
          <Card className="border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {supportFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`support-${index}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-card border border-border rounded-3xl p-8 md:p-12 animate-in fade-in zoom-in duration-1000">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can not find what you are looking for? Reach out to our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact Us
            </a>
            <a
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-bold rounded-2xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              Visit Support Center
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
