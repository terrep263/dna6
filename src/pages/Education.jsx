import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  const categories = [
    {
      title: 'Dating Basics',
      description: 'Essential knowledge for building healthy relationships',
      icon: '💕',
      color: 'from-pink-500 to-rose-500',
      articles: [
        { title: 'Attachment Theory Explained', path: '/education/attachment-theory', readTime: '5 min' },
        { title: 'Communication Skills for Couples', path: '/education/communication-skills', readTime: '7 min' },
        { title: 'Red Flags vs Green Flags', path: '/education/red-flags-green-flags', readTime: '6 min' },
        { title: 'First Date Success Guide', path: '/education/first-date-tips', readTime: '8 min' }
      ]
    },
    {
      title: 'Relationship Science',
      description: 'Evidence-based insights from psychology and neuroscience',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      articles: [
        { title: 'The Neurochemistry of Love', path: '/education/neurochemistry-of-love', readTime: '10 min' },
        { title: 'What Makes Couples Compatible', path: '/education/compatibility-factors', readTime: '8 min' },
        { title: 'Conflict Resolution Strategies', path: '/education/conflict-resolution', readTime: '9 min' },
        { title: 'Long-Distance Relationship Tips', path: '/education/long-distance-relationships', readTime: '7 min' }
      ]
    },
    {
      title: 'Personal Growth',
      description: 'Develop yourself to attract better relationships',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500',
      articles: [
        { title: 'Building Self-Confidence', path: '/education/self-confidence', readTime: '6 min' },
        { title: 'Setting Healthy Boundaries', path: '/education/boundaries-setting', readTime: '8 min' },
        { title: 'Emotional Intelligence in Dating', path: '/education/emotional-intelligence', readTime: '7 min' },
        { title: 'Healing from Past Relationships', path: '/education/healing-from-past', readTime: '9 min' }
      ]
    },
    {
      title: 'Tools & Resources',
      description: 'Practical guides and actionable resources',
      icon: '🛠️',
      color: 'from-blue-500 to-cyan-500',
      articles: [
        { title: 'Dating App Profile Guide', path: '/education/dating-app-guides', readTime: '5 min' },
        { title: 'Conversation Starters', path: '/education/conversation-starters', readTime: '4 min' },
        { title: 'Creative Date Ideas', path: '/education/date-ideas', readTime: '6 min' },
        { title: 'Relationship Health Checklist', path: '/education/relationship-checklists', readTime: '3 min' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Dating & Relationship Education
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Evidence-based insights, practical tips, and expert guidance to transform your dating life and build lasting relationships
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Take Your Assessment
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Get Weekly Tips
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Science Behind Successful Relationships
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Discover the psychological and biological factors that determine relationship success, based on 20+ years of research from leading universities.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>📚 15 min read</span>
                <span className="mx-2">•</span>
                <span>🔬 Research-backed</span>
                <span className="mx-2">•</span>
                <span>⭐ 4.9/5 rating</span>
              </div>
              <Link
                to="/education/science-behind-relationships"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Read Full Article
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-white">🧬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 mb-4">Get your personalized dating DNA report</p>
              <Link
                to="/assessment"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Explore Our Educational Content
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-white/90">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.articles.map((article, articleIndex) => (
                    <Link
                      key={articleIndex}
                      to={article.path}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {article.title}
                        </h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {article.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to={`/education/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
                  >
                    View all {category.title} articles
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Get Weekly Dating & Relationship Tips
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 10,000+ people receiving expert advice, research insights, and practical strategies every week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
