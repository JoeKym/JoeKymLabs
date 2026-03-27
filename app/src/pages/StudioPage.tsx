import Navigation from '../components/Navigation';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-indigo-900">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-24 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-indigo-600 mb-4">About Us</p>
          <h1 className="font-display font-bold text-5xl md:text-8xl text-slate-900 mb-8 leading-[0.85]">Design is how it works.</h1>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed">
            JoeKym Labs is a precise web studio. We don't just make things look good; we make them perform at a high level.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-slate-200 pt-16">
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">Purpose</h2>
            <p className="text-slate-600 leading-relaxed">
              We help founders and brands build digital products that feel inevitable. If it doesn't solve a problem or evoke an emotion, it doesn't belong.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">Principles</h2>
            <p className="text-slate-600 leading-relaxed">
              Clarity over decoration. Performance as a design feature. Motion that respects the user. Typography that leads the way.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-4">Partnership</h2>
            <p className="text-slate-600 leading-relaxed">
              We work in small, highly-concentrated teams. You'll deal directly with the people building your product, every single day.
            </p>
          </div>
        </section>

        <div className="relative aspect-video rounded-[32px] overflow-hidden bg-slate-100">
          <img src="/images/split_principles_typewriter.jpg" alt="Studio" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display font-bold text-3xl md:text-4xl text-slate-900 text-center px-10">Minimalism isn't the absence of things. <br/> It's the presence of what matters.</p>
          </div>
        </div>
      </div>

      <footer className="px-6 lg:px-12 py-10 border-t border-slate-200 text-center lowercase">
        <p className="text-sm text-slate-600">© JoeKym Labs™ — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
