import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

interface Service {
  title: string;
  desc: string;
  items: string[];
  img: string;
}

const services: Service[] = [
  {
    title: 'UI/UX Design',
    desc: 'Interfaces that feel obvious once you use them.',
    items: [
      'Wireframes & prototypes',
      'Editorial layouts',
      'Accessibility-first design'
    ],
    img: '/images/webdesign.jpg'
  },
  {
    title: 'Frontend Engineering',
    desc: 'React, accessibility, performance, animation.',
    items: [
      'Modern frameworks (React, Vite, Tailwind)',
      'Performance optimization',
      'Interactive experiences'
    ],
    img: '/images/frontend.jpg'
  },
  {
    title: 'Backend & APIs',
    desc: 'Scalable systems for real-world use.',
    items: [
      'Node.js & Supabase',
      'PostgreSQL & cloud integration',
      'Secure authentication flows'
    ],
    img: '/images/backend.jpg'
  },
  {
    title: 'Brand Systems',
    desc: 'Type, color, and components that scale.',
    items: [
      'Design systems',
      'Component libraries',
      'Consistent branding'
    ],
    img: '/images/fullstack.png'
  },
  {
    title: 'Consulting & Strategy',
    desc: 'Growth hacking, deployment sequencing, technical audits.',
    items: [
      'Launch planning',
      'Tech stack audits',
      'Startup scaling'
    ],
    img: '/images/cloud-computing.png'
  }
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 bg-slate-50 min-h-[70vh] text-slate-900 font-sans">
      <header className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 text-center md:text-left">
        <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Our Services
        </h1>
        <p className="text-slate-600 text-xl max-w-3xl mx-auto md:mx-0 leading-relaxed">
          We build digital experiences that drive measurable outcomes.{' '}
          <br className="hidden md:block" />
          Clarity, performance, and scalability at every stage.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group bg-white/80 backdrop-blur-sm shadow-xl border border-slate-200/50 rounded-3xl p-8 lg:p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <img 
              src={service.img}
              alt={service.title}
              className="w-full h-64 md:h-72 object-cover rounded-3xl mb-8 group-hover:scale-105 transition-transform duration-500 shadow-2xl"
            />
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 group-hover:text-indigo-600 transition-colors">{service.title}</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
            <ul className="space-y-4">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl border border-indigo-100/50 group-hover:border-indigo-200 transition-all hover:bg-indigo-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 flex-shrink-0 shadow-md" />
                  <span className="font-medium text-slate-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link
            to="/contact"
            className="group px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 flex-1 text-center"
          >
            Start a Project
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/work"
            className="px-10 py-6 border-2 border-slate-300 text-slate-900 font-bold text-xl rounded-3xl hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-500 flex-1 text-center"
          >
            View Selected Work
          </Link>
        </div>
      </div>
    </main>
  );
}

