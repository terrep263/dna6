import React from "react";
import { Link } from "react-router-dom";

function SampleReport() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sample Dating DNA Report
          </h1>
          <p className="text-xl text-gray-600">
            This is exactly what you will receive after completing your assessment
          </p>
          <div className="mt-6">
            <Link
              to="/assessment"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mr-4"
            >
              Start Your Assessment - $49
            </Link>
            <Link
              to="/assessment"
              className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Couples Assessment - $79
            </Link>
          </div>
        </div>

        {/* Report Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Personal Summary */}
          <div className="border-b-2 border-purple-200 pb-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
               Your Dating DNA Profile
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Your Archetype</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Secure Connector</strong> - You naturally build deep, meaningful relationships 
                  and have a balanced approach to dating that prioritizes both emotional connection and personal growth.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>What This Means:</strong> You are likely to attract partners who value 
                    authenticity and are ready for commitment, but you may need to be more selective 
                    about who you invest your energy in.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Overall Compatibility Score</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-pink-600 mb-2">87%</div>
                  <p className="text-gray-600">High compatibility potential</p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>This score reflects your readiness for healthy relationships and ability to attract compatible partners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Four Strands Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Four Strands of Your Dating DNA
            </h2>
            
            {/* Social Energy */}
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                 Social Energy: <span className="ml-2 text-blue-600">Ambivert (65% Extrovert)</span>
              </h3>
              <p className="text-gray-700 mb-4">
                You thrive in social situations but also need meaningful one-on-one connections. 
                You are energized by group activities but can become drained by superficial interactions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">What Energizes You:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Deep conversations with close friends</li>
                    <li> Small group activities (3-6 people)</li>
                    <li> Meaningful social events</li>
                    <li> One-on-one quality time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">What Drains You:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Large crowds and parties</li>
                    <li> Superficial small talk</li>
                    <li> Constant social obligations</li>
                    <li> Being "on" for extended periods</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Dating Strategy:</strong> Look for partners who understand your need for both 
                  social connection and quiet intimacy. Avoid those who expect you to be constantly social 
                  or who do not respect your need for meaningful conversations.
                </p>
              </div>
            </div>

            {/* Attraction Style */}
            <div className="bg-pink-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-pink-800 mb-3 flex items-center">
                 Attraction Style: <span className="ml-2 text-pink-600">Emotional Connector</span>
              </h3>
              <p className="text-gray-700 mb-4">
                You are drawn to emotional depth and intellectual connection. Physical attraction 
                develops through emotional intimacy, and you value partners who can engage in 
                meaningful conversations and share your values.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">What Attracts You:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Emotional intelligence and empathy</li>
                    <li> Shared values and life goals</li>
                    <li> Intellectual curiosity</li>
                    <li> Authenticity and vulnerability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Red Flags to Watch For:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Emotional unavailability</li>
                    <li> Lack of intellectual depth</li>
                    <li> Inconsistent communication</li>
                    <li> Values misalignment</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-pink-100 rounded-lg">
                <p className="text-sm text-pink-800">
                  <strong>Dating Strategy:</strong> Focus on building emotional connection first. 
                  Do not rush physical intimacy - let it develop naturally through shared experiences 
                  and meaningful conversations.
                </p>
              </div>
            </div>

            {/* Decision Filter */}
            <div className="bg-green-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                 Decision Filter: <span className="ml-2 text-green-600">Values-Based</span>
              </h3>
              <p className="text-gray-700 mb-4">
                You make relationship decisions based on shared values, long-term compatibility, 
                and emotional connection. You are thoughtful about commitment and prefer to 
                take time to evaluate potential partners.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Your Decision Process:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Evaluate long-term compatibility</li>
                    <li> Assess shared values and goals</li>
                    <li> Consider emotional connection</li>
                    <li> Think about future potential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Common Pitfalls:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Overthinking and analysis paralysis</li>
                    <li> Ignoring red flags due to potential</li>
                    <li> Moving too slowly for some partners</li>
                    <li> Being too idealistic</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Dating Strategy:</strong> Trust your instincts but do not overanalyze. 
                  Set clear boundaries and communicate your values early. Be patient with your 
                  decision-making process while staying open to unexpected connections.
                </p>
              </div>
            </div>

            {/* Relationship Pace */}
            <div className="bg-purple-50 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                 Relationship Pace: <span className="ml-2 text-purple-600">Steady Builder</span>
              </h3>
              <p className="text-gray-700 mb-4">
                You prefer to build relationships gradually, taking time to establish trust 
                and emotional connection. You are comfortable with commitment but want to 
                ensure it is built on a solid foundation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Your Natural Pace:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> 2-3 months before exclusivity</li>
                    <li> 6-12 months before moving in</li>
                    <li> 1-2 years before engagement</li>
                    <li> Gradual emotional investment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Pace Compatibility:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li> Best with: Steady Builders, Patient Planners</li>
                    <li> Challenging with: Fast Movers, Impulsive Types</li>
                    <li> Adaptable with: Flexible Pacers</li>
                    <li> Avoid: Pressure to rush commitment</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Dating Strategy:</strong> Communicate your pace preferences early. 
                  Look for partners who respect your need to build slowly. Do not compromise 
                  your comfort level for someone who wants to move too fast.
                </p>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
               Your Personalized Action Plan
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Immediate Actions (Next 30 Days):</h4>
                <ul className="text-gray-700 space-y-2">
                  <li> Practice setting boundaries in early conversations</li>
                  <li> Focus on quality over quantity in dating</li>
                  <li> Develop your emotional intelligence skills</li>
                  <li> Create a list of your non-negotiables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-3">Long-term Growth (3-6 Months):</h4>
                <ul className="text-gray-700 space-y-2">
                  <li> Build confidence in your decision-making</li>
                  <li> Develop better communication skills</li>
                  <li> Learn to recognize healthy vs. unhealthy patterns</li>
                  <li> Practice vulnerability in safe relationships</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compatibility Insights */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
               Key Insights for Your Dating Success
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Your Superpower:</h4>
                <p className="text-gray-700">
                  You have a natural ability to create deep, meaningful connections. Your emotional 
                  intelligence and values-based approach make you highly attractive to quality partners.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Growth Opportunity:</h4>
                <p className="text-gray-700">
                  Learn to trust your instincts more quickly and avoid overthinking. Your analytical 
                  nature is valuable, but do not let it prevent you from taking healthy risks in love.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Dating Strategy:</h3>
                <p className="text-gray-700">
                  Focus on partners who appreciate your depth and are willing to build relationships 
                  at your pace. Look for emotional availability and shared values from the start.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Your Complete Report?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              This is just a sample. Your personalized report will include specific insights 
              based on your unique answers and detailed recommendations for your dating journey.
            </p>
            <div className="space-x-4">
              <Link
                to="/assessment"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Singles Assessment - $49
              </Link>
              <Link
                to="/assessment"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start Couples Assessment - $79
              </Link>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Complete your assessment in 15 minutes  Get instant results  Download as PDF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleReport;
