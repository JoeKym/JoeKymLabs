import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';
import StudioPage from './pages/StudioPage';
import NotesPage from './pages/NotesPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import UserPage from './pages/UserPage';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Placeholder for future App features
function MainApp() {
  return (
    <div className="min-h-screen bg-[#07080A] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-display font-bold text-4xl mb-4 text-[#F7F8FA]">JoeKym Labs App</h1>
      <p className="text-[#A6ACB8] max-w-md mb-8">
        This is the functional part of JoeKym Labs. We are currently building out new tools and interactive features.
      </p>
      <a href="/" className="px-6 py-3 bg-[#B8B2F7] text-[#07080A] font-medium rounded-xl btn-hover">
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
