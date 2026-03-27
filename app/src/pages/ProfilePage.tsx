import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';

interface Profile {
  full_name: string;
  username: string;
  email: string;
  avatar_url: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, username, email, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (err: any) {
      console.error('Error fetching profile:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setMessage(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: profile?.full_name,
          username: profile?.username,
        })
        .eq('id', user.id);

      if (error) throw error;
      setMessage('Profile updated successfully!');
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-[#07080A] flex items-center justify-center"><p className="text-white/50 font-mono text-sm">Loading profile...</p></div>;

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="font-display font-bold text-4xl mb-2">Account Settings</h1>
          <p className="text-[#A6ACB8]">Manage your public presence and personal information.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleUpdate} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={profile?.full_name || ''}
                    onChange={(e) => setProfile(p => p ? { ...p, full_name: e.target.value } : null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Username</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                    <input 
                      type="text" 
                      value={profile?.username || ''}
                      onChange={(e) => setProfile(p => p ? { ...p, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '') } : null)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Email (Read-only)</label>
                <input 
                  type="email" 
                  disabled 
                  value={profile?.email || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/30 cursor-not-allowed"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={updating}
                  className="px-8 py-3 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {updating ? 'Saving...' : 'Save Changes'}
                </button>
                {message && <span className="ml-6 text-sm font-medium text-[#B8B2F7]">{message}</span>}
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Sharing</h3>
              <p className="text-[#A6ACB8] text-sm mb-4">Your public profile is available at:</p>
              <code className="block bg-[#07080A] p-3 rounded-lg text-xs break-all text-[#B8B2F7]">
                {window.location.origin}/user/{profile?.username}
              </code>
              <Link 
                to={`/user/${profile?.username}`}
                className="mt-4 inline-block text-sm text-[#F7F8FA] hover:text-[#B8B2F7] transition-colors"
              >
                View Public Profile →
              </Link>
            </div>

            <button 
              onClick={() => supabase.auth.signOut()}
              className="w-full py-3 border border-red-500/20 text-red-400 font-medium rounded-xl hover:bg-red-500/5 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
