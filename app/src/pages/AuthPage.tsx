import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) throw loginError;
        navigate('/profile');
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: `${window.location.origin}/auth`,
          },
        });
        if (signUpError) throw signUpError;
        setError('Check your email for the confirmation link!');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F7F8FA]">
      <Navigation />
      <main className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-md">
          <h1 className="font-display font-bold text-3xl mb-2">{isLogin ? 'Welcome Back' : 'Join JoeKym Labs'}</h1>
          <p className="text-[#A6ACB8] text-sm mb-8">
            {isLogin ? "Sign in to manage your requests and profile." : "Create an account to start your journey with us."}
          </p>

          <form onSubmit={handleAuth} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div>
              <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A6ACB8] mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F8FA] focus:border-[#B8B2F7] outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-sm text-red-400 font-medium">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#B8B2F7] text-[#07080A] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
            >
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#A6ACB8] text-sm hover:text-[#B8B2F7] transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
