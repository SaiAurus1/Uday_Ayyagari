import React from 'react';
import './Media.css';

const Media: React.FC = () => {
  const mediaItems = [
    {
      type: 'FEATURED PODCAST',
      title: 'The Future of Enterprise AI',
      description: 'Deep dive into AI implementation strategies and organizational transformation',
      date: 'Dec 2024',
      duration: '45 min',
      category: 'Tech Leadership Podcast'
    },
    {
      type: 'KEYNOTE',
      title: 'Digital Transformation Summit 2024',
      description: 'Keynote on scaling technology organizations',
      date: 'Dec 2024',
      category: 'Tech Conference Keynote'
    },
    {
      type: 'INTERVIEW',
      title: 'CTO Insights Series',
      description: 'Live "On-Air", the AI and RAG economy (RetrieveX)',
      date: 'Dec 2024',
      category: 'Industry Interview'
    },
    {
      type: 'PANEL',
      title: 'Innovation Leadership Panel',
      description: 'GCP Cloud Adoption in Enterprises (Panel)',
      date: 'Dec 2024',
      category: 'Panel Discussion'
    },
    {
      type: 'BLOG',
      title: 'Economic Significance of ERP Systems',
      description: 'The $30 Trillion Economy, on "Life Support"',
      date: 'Dec 2024',
      category: 'Blog'
    }
  ];

  return (
    <div className="media-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Media Presence & Speaking Engagements</h1>
          <p className="section-subtitle">
            Sharing insights on technology leadership and digital transformation across premier platforms
          </p>

          <div className="media-grid">
            {mediaItems.map((item, index) => (
              <div key={index} className="media-card">
                <div className="media-type">{item.type}</div>
                <h3 className="media-title">{item.title}</h3>
                <p className="media-description">{item.description}</p>
                <div className="media-meta">
                  <span className="media-date">{item.date}</span>
                  {item.duration && <span className="media-duration">{item.duration}</span>}
                </div>
                <div className="media-category">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
