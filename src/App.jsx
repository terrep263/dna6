import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrialStatus, isSubscribed } from './lib/access';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Thanks from './pages/Thanks';
import Trial from './pages/Trial';
import DayPage from './pages/DayPage';
import Subscribe from './pages/Subscribe';
import Premium from './pages/Premium';
import Results from './pages/Results';
import Education from './pages/Education';
import AttachmentTheory from './pages/education/AttachmentTheory';

function App() {
  const [trialStatus, setTrialStatus] = useState({ isTrial: false, day: 0, msRemaining: 0, ended: false });
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateStatus = () => {
      setTrialStatus(getTrialStatus());
      setSubscribed(isSubscribed());
    };

    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar trialStatus={trialStatus} subscribed={subscribed} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/trial" element={<Trial trialStatus={trialStatus} />} />
            <Route path="/day/:n" element={<DayPage trialStatus={trialStatus} />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/premium" element={<Premium subscribed={subscribed} />} />
            <Route path="/results" element={<Results />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/attachment-theory" element={<AttachmentTheory />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
