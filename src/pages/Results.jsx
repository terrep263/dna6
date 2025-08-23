import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PDFService from '../lib/pdfService';

function Results() {
  const location = useLocation();
  const [assessmentData, setAssessmentData] = useState(null);
  const [userName, setUserName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // In a real app, this would come from the assessment completion
    // For now, we'll use sample data
    const sampleData = {
      archetype: 'The Romantic',
      compatibilityScore: 87,
      insights: [
        'You have a strong emotional connection pattern',
        'You value deep conversations and meaningful interactions',
        'You tend to be attracted to emotionally available partners',
        'Your communication style is warm and empathetic'
      ],
      recommendations: [
        'Focus on building emotional intimacy gradually',
        'Practice setting healthy boundaries',
        'Look for partners who appreciate emotional depth',
        'Consider dating apps that emphasize personality over looks'
      ],
      strengths: [
        'Emotional intelligence',
        'Empathy and understanding',
        'Commitment to growth',
        'Authentic communication'
      ],
      areasForGrowth: [
        'Setting boundaries',
        'Managing expectations',
        'Balancing giving and receiving',
        'Recognizing red flags early'
      ]
    };

    setAssessmentData(sampleData);
    
    // Get user name from localStorage or prompt
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    } else {
      const name = prompt('Please enter your name for your personalized report:');
      if (name) {
        setUserName(name);
        localStorage.setItem('userName', name);
      }
    }
  }, []);

  const handleDownloadPDF = async () => {
    if (!assessmentData) return;
    
    setIsGenerating(true);
    try {
      const pdfDoc = await PDFService.generateAssessmentReport(assessmentData, userName);
      await PDFService.downloadReport(pdfDoc, `${userName}-dating-dna-report.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating your PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadHTML = async () => {
    setIsGenerating(true);
    try {
      const success = await PDFService.generatePDFFromHTML('results-content', `${userName}-dating-dna-report.pdf`);
      if (!success) {
        alert('There was an error generating your PDF. Please try again.');
      }
    } catch (error) {
      console.error('Error generating PDF from HTML:', error);
      alert('There was an error generating your PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!assessmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-testid="report-summary">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Dating DNA Results</h1>
              <p className="text-gray-600 mt-2">Discover what your assessment reveals about your dating patterns</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    📄 Download PDF
                  </>
                )}
              </button>
              <button
                onClick={handleDownloadHTML}
                disabled={isGenerating}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    🖥️ Export HTML
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div id="results-content" className="bg-white rounded-2xl shadow-lg p-8">
          {/* Archetype Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🧬</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{assessmentData.archetype}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your unique dating archetype reveals your core relationship patterns and preferences
            </p>
          </div>

          {/* Compatibility Score */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Compatibility Score</h3>
            <div className="text-6xl font-bold text-purple-600 mb-4">{assessmentData.compatibilityScore}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${assessmentData.compatibilityScore}%` }}
              ></div>
            </div>
            <p className="text-gray-600">
              {assessmentData.compatibilityScore >= 80 ? 'Excellent compatibility potential!' :
               assessmentData.compatibilityScore >= 60 ? 'Good compatibility with room for growth' :
               'Focus on personal growth to improve compatibility'}
            </p>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">💡</span>
                Key Insights
              </h3>
              <div className="space-y-4">
                {assessmentData.insights.map((insight, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-pink-600 mr-3">🎯</span>
                Your Strengths
              </h3>
              <div className="space-y-4">
                {assessmentData.strengths.map((strength, index) => (
                  <div key={index} className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                    <p className="text-gray-700">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-green-600 mr-3">📋</span>
              Personalized Recommendations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {assessmentData.recommendations.map((rec, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <span className="text-green-600 text-2xl mr-3">✓</span>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Growth */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">🌱</span>
              Areas for Growth
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {assessmentData.areasForGrowth.map((area, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl mr-3">💪</span>
                    <p className="text-gray-700">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Dating Life?</h3>
            <p className="text-purple-100 mb-6">
              Start your 7-day trial with Grace, your AI dating coach, and unlock premium features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/trial"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Trial with Grace
              </Link>
              <Link
                to="/subscribe"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
