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
<p className="text-sm text-slate-600 mb-4">© JoeKym Labs™ — {new Date().getFullYear()}</p>
            <div className="flex justify-center gap-4 text-lg">
              <a href="https://linkedin.com/in/joekym07" aria-label="LinkedIn icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>
              </a>
              <a href="https://github.com/JoeKym" aria-label="GitHub icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </a>
              <a href="https://twitter.com/JoeKym07" aria-label="Twitter icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/></svg>
              </a>
              <a href="https://instagram.com/ky.money223" aria-label="Instagram icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://facebook.com/ky.money223" aria-label="Facebook icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/></svg>
              </a>
              <a href="https://wa.me/254117412271" aria-label="WhatsApp icon" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 flex-shrink-0"><path fill="currentColor" d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>
            </div>
      </footer>
    </div>
  );
}
