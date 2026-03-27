import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { supabase } from '../lib/supabaseClient';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary_band: string;
  description: string;
  requirements: string[];
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      const { data } = await supabase.from('jobs').select('*').eq('status', 'active').order('created_at', { ascending: false });
      if (data) setJobs(data);
      setLoading(false);
    }
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA] font-sans">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">Join JoeKym Labs</h1>
          <p className="text-[#A6ACB8] text-lg max-w-2xl mx-auto leading-relaxed">
            We are a remote-first team building precise, high-performance digital products. Help us shape the future of the web.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
          {loading ? (
            <div className="text-center text-[#A6ACB8] animate-pulse">Querying HRIS API / Database...</div>
          ) : jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={job.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#F7F8FA]">{job.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-sm font-mono text-[#A6ACB8]">
                        <span className="bg-black/20 px-2 py-1 rounded">{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl hover:scale-105 transition-transform">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-sm text-[#A6ACB8] mb-4">{job.description}</p>
                  <div className="text-xs text-[#B8B2F7] font-mono">Salary Band: {job.salary_band}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 border border-dashed border-white/10 rounded-3xl text-[#A6ACB8]">
              <p>No active job requisitions at the moment. Please check back later.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}