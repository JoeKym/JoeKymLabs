import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';
import StudioPage from './pages/StudioPage';
import NotesPage from './pages/NotesPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import UserPage from './pages/UserPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import SupportPage from './pages/SupportPage';
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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-display font-bold text-4xl mb-4 text-slate-900">JoeKym Labs App</h1>
      <p className="text-slate-600 max-w-md mb-8">
        This is the functional part of JoeKym Labs. We are currently building out new tools and interactive features.
      </p>
      <a href="/" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl btn-hover">
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/pricing" element={<PricingPage />} />
<Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
