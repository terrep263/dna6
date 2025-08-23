import React from 'react';

function ArticleRenderer({ content }) {
  if (!content || !content.sections) {
    return <div>No content available</div>;
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}`;
        return (
          <HeadingTag key={index} className="font-bold text-gray-900 mb-4 mt-8 first:mt-0">
            {section.text}
          </HeadingTag>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {section.text}
          </p>
        );
      
      case 'callout':
        const calloutStyles = {
          info: 'bg-blue-50 border-blue-400 text-blue-900',
          warning: 'bg-yellow-50 border-yellow-400 text-yellow-900',
          success: 'bg-green-50 border-green-400 text-green-900',
          tip: 'bg-purple-50 border-purple-400 text-purple-900'
        };
        
        return (
          <div key={index} className={`border-l-4 p-6 my-6 rounded-r-lg ${calloutStyles[section.style] || calloutStyles.info}`}>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <p>{section.content}</p>
          </div>
        );
      
      case 'list':
        if (section.style === 'numbered') {
          return (
            <div key={index} className="mb-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {itemIndex + 1}. {item.title}
                  </h4>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        } else {
          return (
            <ul key={index} className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
      
      case 'image':
        return (
          <div key={index} className="my-6 text-center">
            <img 
              src={section.src} 
              alt={section.alt || ''} 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            {section.caption && (
              <p className="text-sm text-gray-500 mt-2 italic">{section.caption}</p>
            )}
          </div>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-purple-500 pl-6 my-6 italic text-gray-700 text-lg">
            "{section.text}"
            {section.author && (
              <footer className="text-sm text-gray-500 mt-2">— {section.author}</footer>
            )}
          </blockquote>
        );
      
      case 'divider':
        return <hr key={index} className="my-8 border-gray-200" />;
      
      default:
        return <div key={index}>Unsupported content type: {section.type}</div>;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {content.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}

export default ArticleRenderer;
