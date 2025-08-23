import { useState } from 'react';
import { appendAffiliateParams } from '../lib/affiliates';

function Assessment() {
  const [loading, setLoading] = useState(false);

  const handleAssessment = (type) => {
    setLoading(true);
    
    let url = type === 'single' 
      ? import.meta.env.VITE_PADDLE_ASSESSMENT_SINGLE_URL_LIVE
      : import.meta.env.VITE_PADDLE_ASSESSMENT_COUPLES_URL_LIVE;
    
    if (!url) {
      alert('Assessment checkout URL not configured. Please contact support.');
      setLoading(false);
      return;
    }
    
    // Append affiliate parameters to the checkout URL
    url = appendAffiliateParams(url);
    
    // Open Paddle checkout in new window
    window.open(url, '_blank');
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Assessment
        </h1>
        <p className="text-xl text-gray-600">
          Select the assessment that best fits your current situation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-colors">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👤</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Singles Assessment</h2>
            <div className="text-4xl font-bold text-purple-600 mb-6">$49</div>
            <p className="text-gray-600 mb-6">
              Perfect for individuals who want to understand their dating patterns, 
              attachment style, and relationship goals.
            </p>
            <button
              data-testid="start-singles"
              onClick={() => handleAssessment('single')}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Processing...' : 'Start Singles Assessment'}
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-colors">
          <div className="text-center">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💕</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Couples Assessment</h2>
            <div className="text-4xl font-bold text-pink-600 mb-6">$79</div>
            <p className="text-gray-600 mb-6">
              Ideal for couples who want to strengthen their relationship and improve communication.
            </p>
            <button
              onClick={() => handleAssessment('couples')}
              disabled={loading}
              className="w-full bg-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-pink-700 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Processing...' : 'Start Couples Assessment'}
            </button>
          </div>
        </div>
      </div>

      {/* Demo Results Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          See What You'll Get
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Preview your personalized Dating DNA report and download it as a professional PDF
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📊 Your Complete Assessment Report
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">✅ What's Included:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Your Dating Archetype</li>
                  <li>• Compatibility Score</li>
                  <li>• Key Insights & Patterns</li>
                  <li>• Personalized Recommendations</li>
                  <li>• Areas for Growth</li>
                  <li>• Action Plan</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-2">📱 How to Access:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Complete assessment in 15 min</li>
                  <li>• Instant results online</li>
                  <li>• Download as PDF</li>
                  <li>• Share with your coach</li>
                  <li>• Track your progress</li>
                  <li>• 7-day Grace AI trial</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                data-testid="submit-assessment"
                href="/results"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                🧬 View Sample Report
              </a>
              <button
                onClick={() => {
                  // Demo PDF generation
                  alert('After completing your assessment, you\'ll be able to download your personalized PDF report!');
                }}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                📄 Download Sample PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
