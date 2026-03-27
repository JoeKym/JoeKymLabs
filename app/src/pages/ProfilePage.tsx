import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';
import { 
  User, Shield, Activity, Settings, Link as LinkIcon, 
  CreditCard, LogOut, Camera, Bell, Lock, HelpCircle, 
  Mail, Phone, Github, Twitter, Globe, Calendar
} from 'lucide-react';

interface Profile {
  full_name: string;
  username: string;
  email: string;
  avatar_url: string;
  created_at?: string;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  twitter?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/auth');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, username, email, avatar_url, bio, phone, location, website, github, twitter')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile({
        ...data,
        created_at: user.created_at
      });
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
          bio: profile?.bio,
          phone: profile?.phone,
          location: profile?.location,
          website: profile?.website,
          github: profile?.github,
          twitter: profile?.twitter,
        })
        .eq('id', user.id);

      if (error) throw error;
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setUpdating(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) return <div className="min-h-screen bg-[#07080A] flex items-center justify-center"><p className="text-white/50 font-mono text-sm">Loading profile...</p></div>;

  const tabs = [
    { id: 'general', label: 'General', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'preferences', label: 'Preferences', icon: Settings },
    { id: 'connections', label: 'Connections', icon: LinkIcon },
    { id: 'billing', label: 'Billing & Support', icon: CreditCard },
  ];

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA] font-sans">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            {/* User Mini Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8B2F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#B8B2F7] to-[#8B84D7] rounded-full flex items-center justify-center text-2xl font-bold text-[#07080A]">
                  {profile?.full_name?.charAt(0) || profile?.username?.charAt(0).toUpperCase()}
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-[#07080A] border border-white/10 rounded-full text-white hover:text-[#B8B2F7] transition-colors">
                  <Camera size={14} />
                </button>
              </div>
              <h2 className="font-display font-bold text-lg mb-1 truncate">{profile?.full_name}</h2>
              <p className="text-[#A6ACB8] text-sm font-mono truncate">@{profile?.username}</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id 
                        ? 'bg-[#B8B2F7]/10 text-[#B8B2F7]' 
                        : 'text-[#A6ACB8] hover:bg-white/5 hover:text-[#F7F8FA]'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-white/10">
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-3xl">
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Basic Identity</h1>
                  <p className="text-[#A6ACB8]">Manage your personal information and public profile.</p>
                </header>

                {/* Public Link Card */}
                <div className="bg-gradient-to-r from-[#B8B2F7]/10 to-transparent border border-[#B8B2F7]/20 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      <Globe size={16} className="text-[#B8B2F7]" />
                      Public Profile
                    </h3>
                    <p className="text-sm text-[#A6ACB8]">Your portfolio is live and shareable.</p>
                  </div>
                  <Link 
                    to={`/user/${profile?.username}`}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-colors whitespace-nowrap"
                  >
                    View Public Page
                  </Link>
                </div>

                <form onSubmit={handleUpdate} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <h3 className="font-display font-semibold text-lg">Personal Details</h3>
                    <div className="flex items-center gap-2 text-xs text-[#A6ACB8] font-mono bg-black/20 px-3 py-1.5 rounded-lg">
                      <Calendar size={12} />
                      Joined {formatDate(profile?.created_at)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Full Name</label>
                      <input 
                        type="text" 
                        value={profile?.full_name || ''}
                        onChange={(e) => setProfile(p => p ? { ...p, full_name: e.target.value } : null)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all"
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
                          className="w-full bg-black/20 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Email Address</label>
                      <input 
                        type="email" 
                        disabled 
                        value={profile?.email || ''}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white/40 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Phone (Optional)</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input 
                          type="text" 
                          value={profile?.phone || ''}
                          onChange={(e) => setProfile(p => p ? { ...p, phone: e.target.value } : null)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Location</label>
                      <input 
                        type="text" 
                        value={profile?.location || ''}
                        onChange={(e) => setProfile(p => p ? { ...p, location: e.target.value } : null)}
                        placeholder="San Francisco, CA"
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Website</label>
                      <div className="relative">
                        <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input 
                          type="text" 
                          value={profile?.website || ''}
                          onChange={(e) => setProfile(p => p ? { ...p, website: e.target.value } : null)}
                          placeholder="https://yourwebsite.com"
                          className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Bio / About</label>
                    <textarea 
                      rows={4}
                      value={profile?.bio || ''}
                      onChange={(e) => setProfile(p => p ? { ...p, bio: e.target.value } : null)}
                      placeholder="Tell us a little about yourself..."
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] focus:ring-1 focus:ring-[#B8B2F7]/50 outline-none transition-all resize-none placeholder:text-white/20"
                    />
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button 
                      type="submit" 
                      disabled={updating}
                      className="px-8 py-3 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
                    >
                      {updating ? 'Saving...' : 'Save Changes'}
                    </button>
                    {message && (
                      <span className={`text-sm font-medium ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Security</h1>
                  <p className="text-[#A6ACB8]">Manage your password and secure your account.</p>
                </header>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Change Password</h3>
                    <p className="text-sm text-[#A6ACB8] mb-4">Ensure your account is using a long, random password to stay secure.</p>
                    <div className="space-y-4 max-w-md">
                      <input type="password" placeholder="Current Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none" />
                      <input type="password" placeholder="New Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none" />
                      <input type="password" placeholder="Confirm New Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white outline-none" />
                      <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors">Update Password</button>
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1">Two-Factor Authentication</h3>
                        <p className="text-sm text-[#A6ACB8]">Add an extra layer of security to your account.</p>
                      </div>
                      <div className="px-3 py-1 bg-white/5 text-[#A6ACB8] text-xs font-mono rounded-lg border border-white/10">Disabled</div>
                    </div>
                    <button className="px-6 py-2.5 bg-[#B8B2F7]/10 text-[#B8B2F7] hover:bg-[#B8B2F7]/20 font-medium rounded-xl transition-colors">Enable 2FA</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Activity Overview</h1>
                  <p className="text-[#A6ACB8]">Your recent interactions and platform statistics.</p>
                </header>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-[#B8B2F7] mb-1">0</div>
                    <div className="text-xs text-[#A6ACB8] font-mono uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-[#B8B2F7] mb-1">0</div>
                    <div className="text-xs text-[#A6ACB8] font-mono uppercase tracking-wider">Comments</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-[#B8B2F7] mb-1">0</div>
                    <div className="text-xs text-[#A6ACB8] font-mono uppercase tracking-wider">Saved</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center py-16">
                  <Activity size={48} className="mx-auto text-white/10 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No recent activity</h3>
                  <p className="text-[#A6ACB8]">When you interact with the platform, your activity will show up here.</p>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Preferences</h1>
                  <p className="text-[#A6ACB8]">Customize your experience and notifications.</p>
                </header>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2"><Bell size={18} /> Notifications</h3>
                    <div className="space-y-4">
                      {['Email updates about product features', 'Project status notifications', 'Marketing and promotional emails'].map((item, i) => (
                        <label key={i} className="flex items-center justify-between cursor-pointer group">
                          <span className="text-[#A6ACB8] group-hover:text-white transition-colors">{item}</span>
                          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${i === 1 ? 'bg-[#B8B2F7]' : 'bg-white/10'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${i === 1 ? 'translate-x-6' : 'translate-x-0'}`} />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div>
                    <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2"><Lock size={18} /> Privacy</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer group">
                        <div>
                          <span className="block text-white mb-1">Public Profile</span>
                          <span className="text-sm text-[#A6ACB8]">Allow anyone to view your profile page</span>
                        </div>
                        <div className="w-12 h-6 rounded-full p-1 transition-colors bg-[#B8B2F7]">
                          <div className="w-4 h-4 rounded-full bg-white transition-transform translate-x-6" />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'connections' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Connections</h1>
                  <p className="text-[#A6ACB8]">Link your social accounts and manage third-party access.</p>
                </header>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 gap-4">
                    <div className="flex items-center gap-4">
                      <Github size={24} />
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-xs text-[#A6ACB8]">Add your username</div>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                      <input 
                        type="text" 
                        value={profile?.github || ''}
                        onChange={(e) => {
                          setProfile(p => p ? { ...p, github: e.target.value } : null);
                        }}
                        onBlur={handleUpdate}
                        placeholder="username"
                        className="w-full sm:w-48 bg-black/40 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-sm text-[#F7F8FA] focus:border-[#B8B2F7] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 gap-4">
                    <div className="flex items-center gap-4">
                      <Twitter size={24} className="text-sky-400" />
                      <div>
                        <div className="font-medium">Twitter / X</div>
                        <div className="text-xs text-[#A6ACB8]">Add your username</div>
                      </div>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                      <input 
                        type="text" 
                        value={profile?.twitter || ''}
                        onChange={(e) => {
                          setProfile(p => p ? { ...p, twitter: e.target.value } : null);
                        }}
                        onBlur={handleUpdate}
                        placeholder="username"
                        className="w-full sm:w-48 bg-black/40 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-sm text-[#F7F8FA] focus:border-[#B8B2F7] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header>
                  <h1 className="font-display font-bold text-3xl mb-2">Support & Account</h1>
                  <p className="text-[#A6ACB8]">Manage your membership and get help.</p>
                </header>

                <div className="bg-gradient-to-br from-[#B8B2F7]/20 to-transparent border border-[#B8B2F7]/30 rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-[#B8B2F7] text-[#07080A] text-xs font-bold uppercase tracking-wider rounded-lg mb-4">Current Plan</div>
                    <h3 className="font-display font-bold text-2xl mb-2">Community Member</h3>
                    <p className="text-[#A6ACB8] mb-6 max-w-md">You are currently on the free community tier. Upgrade to access premium design assets and private project boards.</p>
                    <button className="px-6 py-3 bg-white text-[#07080A] font-bold rounded-xl hover:scale-105 transition-transform">View Plans</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-white/10 rounded-xl text-[#B8B2F7]"><HelpCircle size={24} /></div>
                    <div>
                      <div className="font-medium mb-1">Help Center</div>
                      <div className="text-xs text-[#A6ACB8]">Read guides and FAQs</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-white/10 rounded-xl text-[#B8B2F7]"><Mail size={24} /></div>
                    <div>
                      <div className="font-medium mb-1">Contact Support</div>
                      <div className="text-xs text-[#A6ACB8]">Get 1-on-1 assistance</div>
                    </div>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
