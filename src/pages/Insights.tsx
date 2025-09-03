import React, { useState } from 'react';
import './Insights.css';

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const insights = [
    {
      category: 'AI & MACHINE LEARNING',
      title: 'The Strategic Imperative of AI Adoption',
      description: 'How organizations can successfully navigate the complexities of AI implementation while maximizing ROI and minimizing risk.',
      readTime: '8 min read',
      date: 'Dec 15, 2024',
      image: '🤖'
    },
    {
      category: 'LEADERSHIP',
      title: 'Building Resilient Technology Teams',
      description: 'Essential strategies for developing high-performing engineering teams that can adapt and thrive in rapidly changing environments.',
      readTime: '6 min read',
      date: 'Dec 10, 2024',
      image: '👥'
    },
    {
      category: 'DIGITAL STRATEGY',
      title: 'Cloud-First Architecture Principles',
      description: 'A comprehensive guide to designing scalable, secure, and cost-effective cloud architectures for enterprise applications.',
      readTime: '12 min read',
      date: 'Dec 5, 2024',
      image: '☁️'
    },
    {
      category: 'INNOVATION',
      title: 'Fostering Innovation in Enterprise Environments',
      description: 'How large organizations can maintain startup agility while leveraging enterprise resources to drive breakthrough innovation.',
      readTime: '10 min read',
      date: 'Nov 28, 2024',
      image: '💡'
    }
  ];

  const filters = ['All', 'AI & ML', 'Leadership', 'Strategy', 'Innovation'];

  const filteredInsights = activeFilter === 'All' 
    ? insights 
    : insights.filter(insight => 
        insight.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        (activeFilter === 'AI & ML' && insight.category.includes('AI & MACHINE LEARNING')) ||
        (activeFilter === 'Strategy' && insight.category.includes('DIGITAL STRATEGY'))
      );

  return (
    <div className="insights-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Thought Leadership</h1>
          <p className="section-subtitle">
            Insights and perspectives on technology trends, leadership, and digital innovation
          </p>

          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="insights-grid">
            {filteredInsights.map((insight, index) => (
              <div key={index} className="insight-card">
                <div className="insight-image">{insight.image}</div>
                <div className="insight-content">
                  <div className="insight-category">{insight.category}</div>
                  <h3 className="insight-title">{insight.title}</h3>
                  <p className="insight-description">{insight.description}</p>
                  <div className="insight-meta">
                    <span className="insight-read-time">{insight.readTime}</span>
                    <span className="insight-date">{insight.date}</span>
                  </div>
                  <button className="btn btn-secondary read-more-btn">Read Full Article</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
