import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';
import { 
  MapPin, Link as LinkIcon, Calendar, Github, Twitter, 
  ShieldCheck, Award, Users, Heart, Grid, Activity, MessageSquare
} from 'lucide-react';

interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  avatar_url: string;
  created_at?: string;
  bio?: string;
  location?: string;
  website?: string;
  github?: string;
  twitter?: string;
  followers_count?: number;
  following_count?: number;
  reputation_points?: number;
}

interface UserProject {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  likes_count: number;
  created_at: string;
}

interface UserActivity {
  id: string;
  activity_type: string;
  target_name: string;
  content: string;
  created_at: string;
}

export default function UserPage() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [projects, setProjects] = useState<UserProject[]>([]);
  const [activities, setActivities] = useState<UserActivity[]>([]);
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

      // 1. Fetch Profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, full_name, username, avatar_url, updated_at, bio, location, website, github, twitter, followers_count, following_count, reputation_points')
        .ilike('username', handle)
        .single();

      if (profileError) throw profileError;
      setUserProfile({
        ...profileData,
        created_at: profileData.updated_at
      });

      // 2. Fetch Projects
      const { data: projectsData } = await supabase
        .from('user_projects')
        .select('*')
        .eq('user_id', profileData.id)
        .order('created_at', { ascending: false });
        
      if (projectsData) setProjects(projectsData);

      // 3. Fetch Activities
      const { data: activitiesData } = await supabase
        .from('user_activities')
        .select('*')
        .eq('user_id', profileData.id)
        .order('created_at', { ascending: false });

      if (activitiesData) setActivities(activitiesData);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-slate-50 flex items-center justify-center font-mono text-sm text-slate-400">Searching for @{username}...</div>;
  if (error) return <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6"><h1 className="text-4xl font-display font-bold mb-4 italic text-slate-300">404</h1><p className="text-slate-600">User @{username} not found.</p><a href="/" className="mt-8 text-indigo-600 hover:underline">Return home</a></div>;

  const totalLikes = projects.reduce((acc, p) => acc + (p.likes_count || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900 font-sans pb-20">
      <Navigation />
      
      {/* Cover Photo Area */}
      <div className="h-48 md:h-64 lg:h-80 w-full bg-gradient-to-br from-indigo-600/20 via-[#8B84D7]/10 to-slate-50 relative overflow-hidden mt-[88px]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-10">
        
        {/* Profile Header & Identity */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end mb-8">
          {/* Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#07080A] bg-gradient-to-br from-indigo-600 to-[#8B84D7] flex items-center justify-center text-5xl font-bold text-white shadow-2xl shrink-0 overflow-hidden">
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
                <ShieldCheck size={24} className="text-indigo-600" />
              </div>
              <p className="text-indigo-600 font-mono text-sm">@{userProfile?.username}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:scale-105 transition-transform">
                Follow
              </button>
              <button className="p-2.5 bg-white shadow-sm border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors">
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
              <p className="text-slate-900 leading-relaxed mb-4">
                {userProfile?.bio || "No bio provided."}
              </p>
              
              <div className="space-y-3 text-sm text-slate-600">
                {userProfile?.location && (
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="shrink-0" />
                    <span>{userProfile.location}</span>
                  </div>
                )}
                {userProfile?.website && (
                  <div className="flex items-center gap-3">
                    <LinkIcon size={16} className="shrink-0" />
                    <a href={userProfile.website.startsWith('http') ? userProfile.website : `https://${userProfile.website}`} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                      {userProfile.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="shrink-0" />
                  <span>Joined {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'recently'}</span>
                </div>
              </div>
            </div>

            {/* Social Connections (Followers/Following) */}
            <div className="flex items-center gap-6 pb-6 border-b border-slate-200">
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900">{userProfile?.followers_count || 0}</span>
                <span className="text-xs text-slate-600 font-mono uppercase tracking-wider">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900">{userProfile?.following_count || 0}</span>
                <span className="text-xs text-slate-600 font-mono uppercase tracking-wider">Following</span>
              </div>
            </div>

            {/* Badges / Roles */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-slate-600 uppercase tracking-wider">Roles & Badges</h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-sm border border-slate-200 text-slate-600 rounded-lg text-xs font-medium border border-slate-200">
                  <Users size={14} />
                  Community Member
                </div>
              </div>
            </div>

            {/* Connected Accounts */}
            {(userProfile?.github || userProfile?.twitter) && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-600 uppercase tracking-wider">Links</h3>
                <div className="flex gap-3">
                  {userProfile.github && (
                    <a href={`https://github.com/${userProfile.github}`} target="_blank" rel="noreferrer" className="p-3 bg-white shadow-sm border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900">
                      <Github size={20} />
                    </a>
                  )}
                  {userProfile.twitter && (
                    <a href={`https://twitter.com/${userProfile.twitter}`} target="_blank" rel="noreferrer" className="p-3 bg-white shadow-sm border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 hover:text-[#1DA1F2]">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (Activity & Content) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Engagement Metrics Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-slate-900 mb-1">{projects.length}</div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-slate-900 mb-1">{activities.length}</div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Contributions</div>
              </div>
              <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-indigo-600 mb-1">{totalLikes}</div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Likes Received</div>
              </div>
              <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-slate-900 mb-1">{userProfile?.reputation_points || 0}</div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-wider">Rep Points</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-200">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`pb-4 text-sm font-medium flex items-center gap-2 transition-colors relative ${activeTab === 'projects' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Grid size={16} />
                Highlights
                {activeTab === 'projects' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
              </button>
              <button 
                onClick={() => setActiveTab('activity')}
                className={`pb-4 text-sm font-medium flex items-center gap-2 transition-colors relative ${activeTab === 'activity' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <Activity size={16} />
                Recent Activity
                {activeTab === 'activity' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-4">
              {activeTab === 'projects' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <div key={project.id} className="group bg-white shadow-sm border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all">
                        <div className="h-32 bg-white border border-slate-300 shadow-inner w-full relative overflow-hidden">
                          {project.image_url ? (
                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                            {(project.tags || []).map(tag => (
                              <span key={tag} className="px-2 py-1 bg-slate-100 backdrop-blur-md rounded text-[10px] font-mono uppercase text-slate-900">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                          <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.description}</p>
                          <div className="flex items-center justify-between text-xs text-slate-600">
                            <span className="flex items-center gap-1"><Heart size={14} className="hover:text-red-400 cursor-pointer transition-colors" /> {project.likes_count}</span>
                            <span>{new Date(project.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="sm:col-span-2 p-8 border border-dashed border-slate-200 rounded-2xl text-center text-slate-600">
                      <Grid size={24} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No projects yet.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {activities.length > 0 ? (
                    activities.map((activity) => (
                      <div key={activity.id} className="flex gap-4 p-4 bg-white shadow-sm border border-slate-200 rounded-2xl">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          activity.activity_type === 'like' ? 'bg-red-500/10 text-red-400' : 'bg-indigo-600/10 text-indigo-600'
                        }`}>
                          {activity.activity_type === 'like' ? <Heart size={16} /> : <MessageSquare size={16} />}
                        </div>
                        <div>
                          <p className="text-sm text-slate-900">
                            <span className="font-semibold">@{userProfile?.username}</span>{' '}
                            {activity.activity_type === 'like' ? 'liked' : 'commented on'}{' '}
                            <span className="text-indigo-600 cursor-pointer">{activity.target_name}</span>
                          </p>
                          {activity.content && (
                            <p className="text-sm text-slate-600 mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl italic">"{activity.content}"</p>
                          )}
                          <p className="text-xs text-slate-600 mt-2 font-mono">
                            {new Date(activity.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 border border-dashed border-slate-200 rounded-2xl text-center text-slate-600">
                      <Activity size={24} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No recent activity.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
