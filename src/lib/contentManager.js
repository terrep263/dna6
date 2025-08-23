// Content Management System - Mimics Headless CMS functionality
// Can easily be replaced with Contentful, Strapi, or Sanity later

const contentDatabase = {
  articles: {
    'attachment-theory': {
      id: 'attachment-theory',
      slug: 'attachment-theory',
      title: 'Attachment Theory Explained: How Your Childhood Shapes Your Relationships',
      excerpt: 'Understanding attachment theory can revolutionize how you approach dating and relationships. Learn how your early experiences influence your romantic patterns.',
      category: 'dating-basics',
      readTime: 5,
      rating: 4.8,
      publishedAt: '2024-12-01',
      updatedAt: '2024-12-01',
      author: 'Dr. Sarah Johnson',
      tags: ['attachment theory', 'psychology', 'relationships', 'dating patterns'],
      featured: true,
      content: {
        sections: [
          {
            type: 'heading',
            level: 2,
            text: 'What is Attachment Theory?'
          },
          {
            type: 'paragraph',
            text: 'Attachment theory, developed by psychologist John Bowlby in the 1950s, explains how the bonds we form with our primary caregivers in early childhood shape our relationships throughout life.'
          },
          {
            type: 'callout',
            style: 'info',
            title: '💡 Key Insight',
            content: 'Your attachment style isn\'t fixed - it can change through self-awareness, therapy, and healthy relationships.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'The Four Attachment Styles'
          },
          {
            type: 'list',
            style: 'numbered',
            items: [
              {
                title: 'Secure Attachment (The Healthy Foundation)',
                description: 'People with secure attachment feel comfortable with intimacy and independence.',
                details: [
                  'Comfortable with emotional closeness',
                  'Trust others and themselves',
                  'Handle rejection and conflict well',
                  'Set healthy boundaries'
                ]
              },
              {
                title: 'Anxious-Preoccupied Attachment (The Worrier)',
                description: 'Anxious individuals crave intimacy but fear abandonment.',
                details: [
                  'Intense fear of abandonment',
                  'Need constant reassurance',
                  'May become clingy or needy',
                  'Overthink relationship dynamics'
                ]
              }
            ]
          }
        ]
      },
      relatedArticles: ['communication-skills', 'building-trust', 'healing-from-past'],
      seo: {
        metaTitle: 'Attachment Theory in Dating: How Childhood Shapes Relationships',
        metaDescription: 'Learn how attachment theory influences your dating patterns and discover strategies to build healthier relationships.',
        keywords: 'attachment theory, dating psychology, relationship patterns, secure attachment'
      }
    },
    'communication-skills': {
      id: 'communication-skills',
      slug: 'communication-skills',
      title: 'Communication Skills for Couples: Building Stronger Connections',
      excerpt: 'Master the art of effective communication in relationships. Learn practical techniques to express your needs and understand your partner better.',
      category: 'dating-basics',
      readTime: 7,
      rating: 4.7,
      publishedAt: '2024-12-02',
      updatedAt: '2024-12-02',
      author: 'Dr. Michael Chen',
      tags: ['communication', 'relationships', 'couples', 'conflict resolution'],
      featured: false,
      content: {
        sections: [
          {
            type: 'heading',
            level: 2,
            text: 'Why Communication Matters in Relationships'
          },
          {
            type: 'paragraph',
            text: 'Effective communication is the foundation of any healthy relationship. It\'s not just about talking—it\'s about understanding and being understood.'
          }
        ]
      },
      relatedArticles: ['attachment-theory', 'conflict-resolution', 'emotional-intelligence'],
      seo: {
        metaTitle: 'Communication Skills for Couples: Build Stronger Relationships',
        metaDescription: 'Improve your relationship with proven communication techniques. Learn to express needs and resolve conflicts effectively.',
        keywords: 'communication skills, couples therapy, relationship advice, conflict resolution'
      }
    }
  },
  
  categories: {
    'dating-basics': {
      id: 'dating-basics',
      name: 'Dating Basics',
      description: 'Essential knowledge for building healthy relationships',
      icon: '💕',
      color: 'from-pink-500 to-rose-500',
      articleCount: 12
    },
    'relationship-science': {
      id: 'relationship-science',
      name: 'Relationship Science',
      description: 'Evidence-based insights from psychology and neuroscience',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      articleCount: 8
    },
    'personal-growth': {
      id: 'personal-growth',
      name: 'Personal Growth',
      description: 'Develop yourself to attract better relationships',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500',
      articleCount: 10
    },
    'tools-resources': {
      id: 'tools-resources',
      name: 'Tools & Resources',
      description: 'Practical guides and actionable resources',
      icon: '🛠️',
      color: 'from-blue-500 to-cyan-500',
      articleCount: 6
    }
  }
};

export class ContentManager {
  // Get all articles
  static getAllArticles() {
    return Object.values(contentDatabase.articles);
  }

  // Get article by slug
  static getArticleBySlug(slug) {
    return contentDatabase.articles[slug] || null;
  }

  // Get articles by category
  static getArticlesByCategory(categoryId) {
    return Object.values(contentDatabase.articles).filter(
      article => article.category === categoryId
    );
  }

  // Get featured articles
  static getFeaturedArticles() {
    return Object.values(contentDatabase.articles).filter(
      article => article.featured
    );
  }

  // Get all categories
  static getAllCategories() {
    return Object.values(contentDatabase.categories);
  }

  // Get category by ID
  static getCategoryById(categoryId) {
    return contentDatabase.categories[categoryId] || null;
  }

  // Search articles
  static searchArticles(query) {
    const searchTerm = query.toLowerCase();
    return Object.values(contentDatabase.articles).filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Get related articles
  static getRelatedArticles(articleSlug, limit = 3) {
    const article = this.getArticleBySlug(articleSlug);
    if (!article || !article.relatedArticles) return [];
    
    return article.relatedArticles
      .slice(0, limit)
      .map(slug => this.getArticleBySlug(slug))
      .filter(Boolean);
  }

  // Get articles by tag
  static getArticlesByTag(tag) {
    const searchTerm = tag.toLowerCase();
    return Object.values(contentDatabase.articles).filter(article =>
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Get popular articles (by rating)
  static getPopularArticles(limit = 5) {
    return Object.values(contentDatabase.articles)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  // Get recent articles
  static getRecentArticles(limit = 5) {
    return Object.values(contentDatabase.articles)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit);
  }

  // Get article count by category
  static getArticleCountByCategory(categoryId) {
    return this.getArticlesByCategory(categoryId).length;
  }

  // Get reading time estimate
  static getReadingTimeEstimate(content) {
    const wordsPerMinute = 200;
    const wordCount = content.sections.reduce((count, section) => {
      if (section.type === 'paragraph') {
        return count + section.text.split(' ').length;
      }
      return count;
    }, 0);
    
    return Math.ceil(wordCount / wordsPerMinute);
  }
}

// Export for easy replacement with real CMS
export default ContentManager;
