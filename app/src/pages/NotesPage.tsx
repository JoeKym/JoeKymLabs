import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { supabase } from '../lib/supabaseClient';

interface Note {
  id: string;
  title: string;
  category: string;
  created_at: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      const { data } = await supabase.from('blog_posts').select('id, title, category, created_at').order('created_at', { ascending: false });
      if (data) setNotes(data);
      setLoading(false);
    }
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-indigo-900">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-20 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-600 mb-4">Insights</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Notes.</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Occasional thoughts on design, engineering, and the business of building products.
          </p>
        </header>

        {loading ? (
          <div className="text-slate-600 font-mono text-sm animate-pulse">Fetching latest articles...</div>
        ) : notes.length > 0 ? (
          <div className="space-y-0">
            {notes.map((note, i) => (
              <div key={note.id} className="group border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between py-10 hover:bg-slate-50 transition-colors cursor-pointer px-4 -mx-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <span className="font-mono text-xs text-[#6b7280]">{new Date(note.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="px-3 py-1 bg-white shadow-sm border border-slate-200 rounded-full text-[10px] uppercase tracking-widest text-indigo-600">{note.category}</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 group-hover:translate-x-2 transition-transform">{note.title}</h2>
                <span className="hidden md:block text-2xl text-slate-300">→</span>
              </div>
            ))}
            <div className="border-t border-slate-200" />
          </div>
        ) : (
          <div className="text-center p-12 border border-dashed border-slate-200 rounded-3xl text-slate-600">
            <p>No blog posts found. Check back later for new insights.</p>
          </div>
        )}
      </div>

      <footer className="px-6 lg:px-12 py-10 border-t border-slate-200 text-center lowercase">
        <p className="text-sm text-slate-600">© JoeKym Labs™ — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
