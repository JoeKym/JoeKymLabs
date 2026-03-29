import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
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
import PhilosophyPage from './pages/PhilosophyPage';
import HelpPage from './pages/HelpPage';
import FeedbackPage from './pages/FeedbackPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
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
            <Route path="/" element={<Layout><LandingPage /></Layout>} />
            <Route path="/work" element={<Layout><WorkPage /></Layout>} />
            <Route path="/studio" element={<Layout><StudioPage /></Layout>} />
            <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
            <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/support" element={<Layout><SupportPage /></Layout>} />
            <Route path="/philosophy" element={<Layout><PhilosophyPage /></Layout>} />
            <Route path="/help" element={<Layout><HelpPage /></Layout>} />
            <Route path="/feedback" element={<Layout><FeedbackPage /></Layout>} />
            <Route path="/faq" element={<Layout><FaqPage /></Layout>} />
            <Route path="/legal" element={<Layout><LegalPage /></Layout>} />
            <Route path="/auth" element={<Layout><AuthPage /></Layout>} />
            <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
            <Route path="/user/:username" element={<Layout><UserPage /></Layout>} />
            <Route path="/notes" element={<Layout><NotesPage /></Layout>} />
            <Route path="/app" element={<Layout><MainApp /></Layout>} />
            <Route path="/blank" element={<Layout><div>Blank successful build - no console errors</div></Layout>} />
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </Router>
      </HelmetProvider>
  );
}

export default App;
