import Navigation from '../components/Navigation';

const notes = [
  { date: 'Oct 24, 2023', title: 'Why variable fonts are the future of the web.', category: 'Typography' },
  { date: 'Sep 12, 2023', title: 'The hidden cost of large JavaScript frameworks.', category: 'Engineering' },
  { date: 'Aug 05, 2023', title: 'How to build accessible GSAP animations.', category: 'Motion' },
  { date: 'Jul 20, 2023', title: 'Why we switched to Vite for all client projects.', category: 'Tools' },
];

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-[#07080A] selection:bg-[#B8B2F7] selection:text-[#07080A]">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-20 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8B2F7] mb-4">Insights</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">Notes.</h1>
          <p className="text-[#A6ACB8] text-lg leading-relaxed">
            Occasional thoughts on design, engineering, and the business of building products.
          </p>
        </header>

        <div className="space-y-0">
          {notes.map((note, i) => (
            <div key={i} className="group border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between py-10 hover:bg-white/[0.02] transition-colors cursor-pointer px-4 -mx-4">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="font-mono text-xs text-[#6b7280]">{note.date}</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-[#B8B2F7]">{note.category}</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:translate-x-2 transition-transform">{note.title}</h2>
              <span className="hidden md:block text-2xl text-white/20">→</span>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

      <footer className="px-6 lg:px-12 py-10 border-t border-white/5 text-center lowercase">
        <p className="text-sm text-[#A6ACB8]">© JoeKym Labs™ — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
