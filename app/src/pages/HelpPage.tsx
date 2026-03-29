import { Helmet } from 'react-helmet-async';
import { HelpCircle, BookOpen, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const helpTopics = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics of working with JoeKym Labs™ and how to kickoff your project.',
    link: '/support',
  },
  {
    icon: MessageSquare,
    title: 'FAQs',
    description: 'Find answers to commonly asked questions about our services and process.',
    link: '/support',
  },
  {
    icon: Mail,
    title: 'Contact Support',
    description: 'Reach out to our team for personalized assistance with your project.',
    link: '/contact',
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Help | JoeKym Labs™ - Support & Documentation</title>
        <meta name="description" content="Get help with JoeKym Labs™ services. Browse FAQs, documentation, and support resources." />
        <meta property="og:title" content="Help | JoeKym Labs™ - Support & Documentation" />
        <meta property="og:description" content="Find help and support resources for JoeKym Labs™ web development services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joekymlabs.com/help" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers, get support, and learn how to make the most of JoeKym Labs™ services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {helpTopics.map((topic, index) => (
            <a
              key={topic.title}
              href={topic.link}
              className="group block animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <section className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Still need help?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Our support team is here to assist you. Reach out and we will get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:shadow-lg hover:scale-105 transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </a>
        </section>
      </main>
    </div>
  );
}
