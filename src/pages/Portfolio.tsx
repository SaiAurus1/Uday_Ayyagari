import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      number: '01',
      category: 'DIGITAL TRANSFORMATION',
      title: 'Enterprise AI Platform Implementation',
      description: 'Led the complete digital transformation of a Fortune 500 manufacturing company, implementing an AI-driven platform that revolutionized their operations, supply chain, and customer experience.',
      metrics: [
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Efficiency Gain', value: '60%' },
        { label: 'Annual Savings', value: '$50M' }
      ],
      technologies: ['Machine Learning', 'Cloud Architecture', 'Data Analytics', 'IoT Integration'],
      image: '🏭'
    },
    {
      number: '02',
      category: 'CLOUD TRANSFORMATION',
      title: 'Multi-Cloud Architecture Migration',
      description: 'Architected and executed a comprehensive cloud migration strategy for a global financial services firm, implementing a resilient multi-cloud infrastructure that enhanced security, scalability, and performance.',
      metrics: [
        { label: 'Uptime Achieved', value: '99.99%' },
        { label: 'Performance Boost', value: '70%' },
        { label: 'Infrastructure Savings', value: '$25M' }
      ],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'DevOps'],
      image: '☁️'
    },
    {
      number: '03',
      category: 'SCALING STRATEGY',
      title: 'Rapid Startup Scaling Solution',
      description: 'Designed and implemented a scalable technology architecture that enabled a fintech startup to grow from zero to 100 million users in just 18 months while maintaining optimal performance and security.',
      metrics: [
        { label: 'Users Onboarded', value: '100M' },
        { label: 'Timeline', value: '18 Months' },
        { label: 'Valuation Growth', value: '500%' }
      ],
      technologies: ['Microservices', 'Real-time Analytics', 'Auto-scaling', 'Security'],
      image: '🚀'
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Success Stories</h1>
          <p className="section-subtitle">
            Transformative projects that delivered exceptional business value
          </p>

          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-header">
                  <div className="portfolio-number">{item.number}</div>
                  <div className="portfolio-category">{item.category}</div>
                </div>
                
                <div className="portfolio-image">{item.image}</div>
                
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                
                <div className="portfolio-metrics">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="portfolio-technologies">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <button className="btn btn-secondary view-case-btn">View Full Case Study</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
