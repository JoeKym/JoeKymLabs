import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { supabase } from '../lib/supabaseClient';

export default function FeedbackPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      rating: rating,
      type: formData.get('type'),
      message: formData.get('message'),
    };

    // Submit feedback to Supabase
    const { error } = await supabase.from('feedback').insert([data]);

    setSubmitting(false);
    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setRating(0);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Feedback | JoeKym Labs™ - Share Your Thoughts</title>
        <meta name="description" content="Share your feedback with JoeKym Labs™. Help us improve our web development services." />
        <meta property="og:title" content="Feedback | JoeKym Labs™ - Share Your Thoughts" />
        <meta property="og:description" content="We value your feedback. Share your experience with JoeKym Labs™ services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joekymlabs.com/feedback" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Feedback
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your feedback helps us improve. Share your thoughts, suggestions, or report issues.
          </p>
        </header>

        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <CardContent className="p-8 md:p-12">
            {success ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">Thank You!</h2>
                <p className="text-muted-foreground">
                  Your feedback has been received. We appreciate your input!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-1 transition-colors ${rating >= star ? 'text-yellow-500' : 'text-muted-foreground hover:text-yellow-400'}`}
                      >
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                    <span className="ml-3 text-sm text-muted-foreground">
                      {rating > 0 ? `${rating} out of 5 stars` : 'Click to rate'}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-2">
                    Feedback Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a type...</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="compliment">Compliment</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us what you think..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full font-bold"
                >
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
