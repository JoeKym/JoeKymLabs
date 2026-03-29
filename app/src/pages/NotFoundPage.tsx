import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <Helmet>
        <title>404 | Page Not Found - JoeKym Labs™</title>
        <meta name="description" content="The page you are looking for does not exist. Return to JoeKym Labs™ homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[150px] md:text-[200px] font-black leading-none bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent opacity-20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Oops! The page you are looking for seems to have vanished into the digital void.
        </p>

        {/* Quick Links */}
        <Card className="mb-8 border-border/50">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg mb-4 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              You might be looking for:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <img src="/nav/home.svg" alt="Home" className="w-6 h-6 group-hover:invert transition-all" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link
                to="/services"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <img src="/nav/services.svg" alt="Services" className="w-6 h-6 group-hover:invert transition-all" />
                <span className="text-sm font-medium">Services</span>
              </Link>
              <Link
                to="/work"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <img src="/nav/work.svg" alt="Work" className="w-6 h-6 group-hover:invert transition-all" />
                <span className="text-sm font-medium">Work</span>
              </Link>
              <Link
                to="/contact"
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <img src="/nav/contact.svg" alt="Contact" className="w-6 h-6 group-hover:invert transition-all" />
                <span className="text-sm font-medium">Contact</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-bold">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-bold">
            <Link to="/support">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Get Support
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <p className="text-sm text-muted-foreground mt-8">
          If you believe this is an error, please{' '}
          <Link to="/contact" className="text-primary hover:underline">
            contact us
          </Link>
          {' '}and we will help you find what you need.
        </p>
      </div>
    </div>
  );
}
