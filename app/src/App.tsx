import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';

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
      <Routes>
        {/* Marketing/Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Interactive App Backend/Dashboard Placeholder */}
        <Route path="/app" element={<MainApp />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
