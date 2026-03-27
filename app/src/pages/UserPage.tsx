import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';
import { 
  MapPin, Link as LinkIcon, Calendar, Github, Twitter, 
  ShieldCheck, Award, Users, Heart, Grid, Activity, MessageSquare
} from 'lucide-react';

interface UserProfile {
  full_name: string;
  username: string;
  avatar_url: string;
  created_at?: string;
}

export default function UserPage() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'activity'>('projects');

  useEffect(() => {
    fetchPublicProfile();
  }, [username]);

  const fetchPublicProfile = async () => {
    try {
      const raw = typeof username === 'string' ? username : '';
      const handle = decodeURIComponent(raw).toLowerCase().replace(/[^a-z0-9_]/g, '');
      if (!handle) {
        throw new Error('invalid-username');
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, username, avatar_url, updated_at')
        .ilike('username', handle)
        .single();

      if (error) throw error;
      setUserProfile({
        ...data,
        created_at: data.updated_at
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-[#07080A] flex items-center justify-center font-mono text-sm text-white/40">Searching for @{username}...</div>;
  if (error) return <div className="min-h-screen bg-[#07080A] flex flex-col items-center justify-center px-6"><h1 className="text-4xl font-display font-bold mb-4 italic text-white/20">404</h1><p className="text-[#A6ACB8]">User @{username} not found.</p><a href="/" className="mt-8 text-[#B8B2F7] hover:underline">Return home</a></div>;

  const mockStats = {
    followers: 142,
    following: 28,
    projects: 3,
    likes: 849
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA] font-sans pb-20">
      <Navigation />
      
      {/* Cover Photo Area */}
      <div className="h-48 md:h-64 lg:h-80 w-full bg-gradient-to-br from-[#B8B2F7]/20 via-[#8B84D7]/10 to-[#07080A] relative overflow-hidden mt-[88px]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-10">
        
        {/* Profile Header & Identity */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end mb-8">
          {/* Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#07080A] bg-gradient-to-br from-[#B8B2F7] to-[#8B84D7] flex items-center justify-center text-5xl font-bold text-[#07080A] shadow-2xl shrink-0 overflow-hidden">
            {userProfile?.avatar_url ? (
              <img src={userProfile.avatar_url} alt={userProfile.username} className="w-full h-full object-cover" />
            ) : (
              userProfile?.full_name?.charAt(0) || userProfile?.username?.charAt(0).toUpperCase()
            )}
          </div>

          {/* Name & Actions */}
          <div className="flex-1 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="font-display font-bold text-3xl md:text-4xl">{userProfile?.full_name}</h1>
                <ShieldCheck size={24} className="text-[#B8B2F7]" />
              </div>
              <p className="text-[#B8B2F7] font-mono text-sm">@{userProfile?.username}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl hover:scale-105 transition-transform">
                Follow
              </button>
              <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Bio, Meta, Connections) */}
          <div className="space-y-8">
            
            {/* Bio & Tagline */}
            <div>
              <p className="text-[#F7F8FA] leading-relaxed mb-4">
                Creative developer and digital craftsman. Passionate about building seamless, minimal interfaces with modern web technologies.
              </p>
              
              <div className="space-y-3 text-sm text-[#A6ACB8]">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <LinkIcon size={16} className="shrink-0" />
                  <a href="#" className="text-[#B8B2F7] hover:underline">joekymlabs.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="shrink-0" />
                  <span>Joined {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'recently'}</span>
                </div>
              </div>
            </div>

            {/* Social Connections (Followers/Following) */}
            <div className="flex items-center gap-6 pb-6 border-b border-white/10">
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">{mockStats.followers}</span>
                <span className="text-xs text-[#A6ACB8] font-mono uppercase tracking-wider">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">{mockStats.following}</span>
                <span className="text-xs text-[#A6ACB8] font-mono uppercase tracking-wider">Following</span>
              </div>
            </div>

            {/* Badges / Roles */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-white/70 uppercase tracking-wider">Roles & Badges</h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B8B2F7]/10 text-[#B8B2F7] rounded-lg text-xs font-medium border border-[#B8B2F7]/20">
                  <Award size={14} />
                  Pro Member
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-[#A6ACB8] rounded-lg text-xs font-medium border border-white/10">
                  <Users size={14} />
                  Community Pioneer
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-white/70 uppercase tracking-wider">Links</h3>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-[#A6ACB8] hover:text-white">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-[#A6ACB8] hover:text-[#1DA1F2]">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (Activity & Content) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Engagement Metrics Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-white mb-1">{mockStats.projects}</div>
                <div className="text-[10px] text-[#A6ACB8] font-mono uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-white mb-1">12</div>
                <div className="text-[10px] text-[#A6ACB8] font-mono uppercase tracking-wider">Contributions</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-[#B8B2F7] mb-1">{mockStats.likes}</div>
                <div className="text-[10px] text-[#A6ACB8] font-mono uppercase tracking-wider">Likes Received</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-white mb-1">1,204</div>
                <div className="text-[10px] text-[#A6ACB8] font-mono uppercase tracking-wider">Rep Points</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-white/10">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`pb-4 text-sm font-medium flex items-center gap-2 transition-colors relative ${activeTab === 'projects' ? 'text-white' : 'text-[#A6ACB8] hover:text-white'}`}
              >
                <Grid size={16} />
                Highlights
                {activeTab === 'projects' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8B2F7]" />}
              </button>
              <button 
                onClick={() => setActiveTab('activity')}
                className={`pb-4 text-sm font-medium flex items-center gap-2 transition-colors relative ${activeTab === 'activity' ? 'text-white' : 'text-[#A6ACB8] hover:text-white'}`}
              >
                <Activity size={16} />
                Recent Activity
                {activeTab === 'activity' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8B2F7]" />}
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-4">
              {activeTab === 'projects' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Mock Project Cards */}
                  {[1, 2].map((i) => (
                    <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                      <div className="h-32 bg-black/40 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono uppercase text-white">Web</span>
                          <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono uppercase text-white">Design</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-[#B8B2F7] transition-colors">Lumen Editorial {i}</h3>
                        <p className="text-sm text-[#A6ACB8] line-clamp-2 mb-4">A high-performance editorial layout focused on typography and white space.</p>
                        <div className="flex items-center justify-between text-xs text-[#A6ACB8]">
                          <span className="flex items-center gap-1"><Heart size={14} className="hover:text-red-400 cursor-pointer transition-colors" /> 24</span>
                          <span>2 days ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="sm:col-span-2 p-8 border border-dashed border-white/10 rounded-2xl text-center text-[#A6ACB8] hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer">
                    <Grid size={24} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">View all projects</p>
                  </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Mock Activity Timeline */}
                  <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#B8B2F7]/10 text-[#B8B2F7] flex items-center justify-center shrink-0">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-[#F7F8FA]"><span className="font-semibold">@{userProfile?.username}</span> commented on <span className="text-[#B8B2F7] cursor-pointer">Aurora Studio Redesign</span></p>
                      <p className="text-sm text-[#A6ACB8] mt-1 p-3 bg-black/20 rounded-xl italic">"Absolutely love the minimal approach here. The motion design feels very natural."</p>
                      <p className="text-xs text-[#A6ACB8] mt-2 font-mono">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                      <Heart size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-[#F7F8FA]"><span className="font-semibold">@{userProfile?.username}</span> liked <span className="text-[#B8B2F7] cursor-pointer">Northwind Goods</span></p>
                      <p className="text-xs text-[#A6ACB8] mt-2 font-mono">1 day ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
