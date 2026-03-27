import Navigation from '../components/Navigation';

const projects = [
  { title: 'Lumen Editorial', category: 'Publishing', image: '/images/split_featured_camera.jpg' },
  { title: 'Northwind', category: 'E-commerce', image: '/images/work_card_northwind.jpg' },
  { title: 'Aurora Studio', category: 'Branding', image: '/images/work_card_aurora.jpg' },
  { title: 'Collab Kit', category: 'Tooling', image: '/images/split_collab_camera_hands.jpg' },
  { title: 'Craft Series', category: 'Identity', image: '/images/split_craft_camera_side.jpg' },
  { title: 'Impact Data', category: 'Interface', image: '/images/split_impact_camera_top.jpg' },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#07080A] selection:bg-[#B8B2F7] selection:text-[#07080A]">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-20 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8B2F7] mb-4">Portfolio</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-[0.9]">Selected projects.</h1>
          <p className="text-[#A6ACB8] text-lg leading-relaxed">
            A collection of digital products and brand identities we've built for ambitious clients who value craft and clarity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden mb-6 bg-[#12141a]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] contrast-[1.1]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-end px-2">
                <div>
                  <h3 className="font-display font-semibold text-2xl text-white group-hover:text-[#B8B2F7] transition-colors">{project.title}</h3>
                  <p className="text-[#A6ACB8] text-sm font-mono tracking-wider transition-colors">{project.category}</p>
                </div>
                <span className="text-white/20 group-hover:text-white transition-colors">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="px-6 lg:px-12 py-10 border-t border-white/5 text-center lowercase">
        <p className="text-sm text-[#A6ACB8]">© JoeKym Labs™ — {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
