import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/header.jpg)'}}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                STOP Wasting Time on Dead-End Dates
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto text-purple-100 font-semibold">
              Finally Discover Why Your Dating Life Keeps Repeating The Same Frustrating Patterns (And How to Break Free in Just 15 Minutes)
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-purple-200">
              Are you tired of swiping endlessly, going on promising first dates that fizzle out, and wondering why you keep attracting the wrong people?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/assessment"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                DISCOVER YOUR DATING DNA NOW - $49
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
                Learn More
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-purple-200">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Here's What Most People Don't Realize About Dating...
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Every failed relationship, every disappointing date, every "it's not you, it's me" conversation follows the same hidden blueprint. Your Dating DNA determines:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="text-left p-6 rounded-2xl bg-red-50 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">✗ Who you're unconsciously attracted to</h3>
              <p className="text-gray-700">(and why it's often wrong for you)</p>
            </div>
            
            <div className="text-left p-6 rounded-2xl bg-red-50 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">✗ How you sabotage promising connections</h3>
              <p className="text-gray-700">without even knowing it</p>
            </div>
            
            <div className="text-left p-6 rounded-2xl bg-red-50 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">✗ Why you keep making the same relationship mistakes</h3>
              <p className="text-gray-700">over and over</p>
            </div>
            
            <div className="text-left p-6 rounded-2xl bg-red-50 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">✗ What red flags you ignore</h3>
              <p className="text-gray-700">and green flags you miss completely</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900">
              <strong>The problem isn't finding "the one" – it's understanding yourself first.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Introducing My Dating DNA: The Scientific Assessment That Reveals Your Hidden Relationship Patterns
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Based on 20+ years of relationship psychology research and proven behavioral science, My Dating DNA is the first assessment that decodes your unique romantic blueprint in just 15 minutes.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              <strong>No more guessing. No more trial and error. No more heartbreak.</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Core Dating Archetype</h3>
              <p className="text-gray-600">One of 8 scientifically-backed personality profiles that explains your romantic behavior</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Attraction Triggers</h3>
              <p className="text-gray-600">The specific traits that draw you in (and why some lead to disaster)</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Self-Sabotage Patterns</h3>
              <p className="text-gray-600">How you unconsciously push away good partners</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Compatibility Blueprint</h3>
              <p className="text-gray-600">Exactly what type of person complements your dating style</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Custom Action Plan</h3>
              <p className="text-gray-600">Specific steps to transform your dating life starting today</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600">Complete your assessment and get results in just 15 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're single or in a relationship, we have the perfect assessment for you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Singles Assessment</h3>
                  <div className="text-3xl font-bold text-purple-600">$49</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for individuals ready to understand their dating patterns, attachment style, and relationship goals.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Personality compatibility analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dating strategy recommendations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  7-day Grace AI coaching trial
                </li>
              </ul>
              <Link
                to="/assessment"
                className="block w-full bg-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Singles Assessment
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-pink-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💕</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Couples Assessment</h3>
                  <div className="text-3xl font-bold text-pink-600">$79</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal for couples who want to strengthen their relationship and improve communication.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Relationship compatibility score
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Communication improvement tips
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Joint coaching sessions with Grace
                </li>
              </ul>
              <Link
                to="/assessment"
                className="block w-full bg-pink-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Start Couples Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to better relationships in just 4 simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Assessment</h3>
              <p className="text-gray-600">Complete your personalized assessment in just 15 minutes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Results</h3>
              <p className="text-gray-600">Receive detailed insights about your dating patterns and compatibility.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meet Grace</h3>
              <p className="text-gray-600">Start your 7-day trial with Grace, your AI dating coach.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transform</h3>
              <p className="text-gray-600">Continue with monthly coaching to unlock premium features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            "I Went From Serial Dating Disasters to Meeting My Soulmate in 3 Months"
          </h2>
          <div className="bg-gray-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 italic mb-6">
              "I thought I was just unlucky in love. Turns out, I had a 'Rescuer' dating pattern – always attracted to people who needed fixing. My Dating DNA results were scary accurate. Within weeks of following my custom plan, I started noticing completely different types of people. I met David 2 months later, and we're engaged!"
            </p>
            <p className="text-lg font-semibold text-gray-900">
              – Sarah M., Teacher, Age 32
            </p>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              This Isn't Another Generic Dating Quiz
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              My Dating DNA is built on real science:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Attachment Theory Research</h3>
              <p className="text-sm text-gray-600">from Johns Hopkins University</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Behavioral Psychology</h3>
              <p className="text-sm text-gray-600">from Stanford's relationship studies</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Neurochemistry of Attraction</h3>
              <p className="text-sm text-gray-600">based on Helen Fisher's work</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-sm text-gray-600">used by top relationship therapists</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900">
              <strong>Over 10,000 singles have used these insights to transform their dating lives.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Stop Repeating the Same Dating Mistakes?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get your complete My Dating DNA Assessment for just $49 today.
          </p>
          <div className="bg-white bg-opacity-10 p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">What You Get Instantly:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left text-purple-100">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                15-minute scientific assessment
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                Detailed 12-page personalized report
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                Your Dating Archetype breakdown
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                Custom compatibility guide
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                30-day action plan with specific steps
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                Bonus: Dating App Profile Optimization Tips ($97 value)
              </div>
            </div>
          </div>
          <Link
            to="/assessment"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            DISCOVER YOUR DATING DNA NOW - $49
          </Link>
          <p className="text-sm text-purple-200 mt-4">
            ⚡ Instant access - results in 15 minutes | 🔒 Completely confidential and secure | 💰 60-day money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
