import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Navigation from '../components/Navigation';

interface UserProfile {
  full_name: string;
  username: string;
  avatar_url: string;
}

export default function UserPage() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPublicProfile();
  }, [username]);

  const fetchPublicProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, username, avatar_url')
        .eq('username', username)
        .single();

      if (error) throw error;
      setUserProfile(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-[#07080A] flex items-center justify-center font-mono text-sm text-white/40">Searching for @{username}...</div>;
  if (error) return <div className="min-h-screen bg-[#07080A] flex flex-col items-center justify-center px-6"><h1 className="text-4xl font-display font-bold mb-4 italic text-white/20">404</h1><p className="text-[#A6ACB8]">User @{username} not found.</p><a href="/" className="mt-8 text-[#B8B2F7] hover:underline">Return home</a></div>;

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#B8B2F7] to-[#8B84D7] rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-bold text-[#07080A]">
          {userProfile?.full_name?.charAt(0) || userProfile?.username?.charAt(0).toUpperCase()}
        </div>
        <h1 className="font-display font-bold text-5xl mb-3">{userProfile?.full_name}</h1>
        <p className="text-[#B8B2F7] font-mono tracking-widest text-sm uppercase mb-12">@{userProfile?.username}</p>
        
        <div className="w-16 h-px bg-white/10 mx-auto mb-12" />
        
        <div className="max-w-lg mx-auto bg-white/5 border border-white/10 p-12 rounded-[40px]">
          <p className="text-[#A6ACB8] leading-relaxed italic">
            "Community member & project requester. Building the future of digital craft with JoeKym Labs™."
          </p>
        </div>
      </main>
    </div>
  );
}
