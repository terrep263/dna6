import React from 'react';
import { Link } from 'react-router-dom';

function AttachmentTheory() {
  const relatedArticles = [
    { title: 'Communication Skills for Couples', path: '/education/communication-skills', readTime: '7 min' },
    { title: 'Building Trust in Relationships', path: '/education/building-trust', readTime: '6 min' },
    { title: 'Healing from Past Relationships', path: '/education/healing-from-past', readTime: '9 min' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6">
            <Link to="/education" className="text-purple-600 hover:text-purple-700 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Education Hub
            </Link>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Dating Basics
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Attachment Theory Explained: How Your Childhood Shapes Your Relationships
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>📚 5 min read</span>
              <span className="mx-2">•</span>
              <span>🔬 Research-backed</span>
              <span className="mx-2">•</span>
              <span>⭐ 4.8/5 rating</span>
              <span className="mx-2">•</span>
              <span>Updated: Dec 2024</span>
            </div>
            <p className="text-xl text-gray-600">
              Understanding attachment theory can revolutionize how you approach dating and relationships. Learn how your early experiences influence your romantic patterns and how to build healthier connections.
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2>What is Attachment Theory?</h2>
            <p>
              Attachment theory, developed by psychologist John Bowlby in the 1950s, explains how the bonds we form with our primary caregivers in early childhood shape our relationships throughout life. These early experiences create internal working models that influence how we approach intimacy, trust, and emotional connection.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
              <h3 className="text-blue-900 font-semibold mb-2">💡 Key Insight</h3>
              <p className="text-blue-800">
                Your attachment style isn't fixed - it can change through self-awareness, therapy, and healthy relationships. Understanding your patterns is the first step toward transformation.
              </p>
            </div>

            <h2>The Four Attachment Styles</h2>
            
            <h3>1. Secure Attachment (The Healthy Foundation)</h3>
            <p>
              People with secure attachment feel comfortable with intimacy and independence. They trust easily, communicate openly, and handle conflict constructively. They make up about 50-60% of the population.
            </p>
            <ul>
              <li>Comfortable with emotional closeness</li>
              <li>Trust others and themselves</li>
              <li>Handle rejection and conflict well</li>
              <li>Set healthy boundaries</li>
            </ul>

            <h3>2. Anxious-Preoccupied Attachment (The Worrier)</h3>
            <p>
              Anxious individuals crave intimacy but fear abandonment. They often worry about their partner's feelings and may become clingy or demanding in relationships.
            </p>
            <ul>
              <li>Intense fear of abandonment</li>
              <li>Need constant reassurance</li>
              <li>May become clingy or needy</li>
              <li>Overthink relationship dynamics</li>
            </ul>

            <h3>3. Avoidant-Dismissive Attachment (The Independent)</h3>
            <p>
              Avoidant people value independence over intimacy. They may seem emotionally distant and struggle to open up or commit to relationships.
            </p>
            <ul>
              <li>Value independence over closeness</li>
              <li>Difficulty expressing emotions</li>
              <li>May seem emotionally distant</li>
              <li>Struggle with commitment</li>
            </ul>

            <h3>4. Fearful-Avoidant Attachment (The Conflicted)</h3>
            <p>
              Fearful individuals want close relationships but fear getting hurt. They may push people away while simultaneously craving connection.
            </p>
            <ul>
              <li>Desire intimacy but fear rejection</li>
              <li>Push-pull behavior in relationships</li>
              <li>Difficulty trusting others</li>
              <li>May sabotage good relationships</li>
            </ul>

            <h2>How This Affects Your Dating Life</h2>
            <p>
              Your attachment style influences everything from who you're attracted to, how you communicate, to how you handle breakups. Understanding your patterns can help you:
            </p>
            <ul>
              <li>Recognize unhealthy relationship dynamics</li>
              <li>Choose partners who complement your style</li>
              <li>Communicate more effectively</li>
              <li>Build healthier relationship habits</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
              <h3 className="text-green-900 font-semibold mb-2">🌱 Growth Opportunity</h3>
              <p className="text-green-800">
                If you identify with anxious or avoidant patterns, remember that change is possible. Many people successfully develop more secure attachment through self-work and healthy relationships.
              </p>
            </div>

            <h2>Practical Steps to Improve Your Attachment Style</h2>
            
            <h3>For Anxious Attachment:</h3>
            <ul>
              <li>Practice self-soothing techniques</li>
              <li>Develop hobbies and interests outside relationships</li>
              <li>Learn to communicate needs without being demanding</li>
              <li>Build self-confidence through personal achievements</li>
            </ul>

            <h3>For Avoidant Attachment:</h3>
            <ul>
              <li>Practice emotional expression in safe environments</li>
              <li>Gradually increase intimacy in relationships</li>
              <li>Challenge negative beliefs about relationships</li>
              <li>Seek therapy to work through past trauma</li>
            </ul>

            <h2>How MyDatingDNA Can Help</h2>
            <p>
              Our assessment identifies your attachment patterns and provides personalized strategies for growth. You'll receive:
            </p>
            <ul>
              <li>Detailed analysis of your attachment style</li>
              <li>Specific strategies for your unique patterns</li>
              <li>Compatibility insights for better partner selection</li>
              <li>Ongoing support from Grace, your AI coach</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6">
              <h3 className="text-purple-900 font-semibold mb-2">🧬 Ready to Discover Your Patterns?</h3>
              <p className="text-purple-800">
                Take our Dating DNA assessment to get personalized insights about your attachment style and relationship patterns.
              </p>
              <Link
                to="/assessment"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block mt-4"
              >
                Take Your Assessment Now
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="space-y-4">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
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
        </div>
      </div>
    </div>
  );
}

export default AttachmentTheory;
