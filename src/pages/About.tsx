import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Uday Ayyagari</h1>
          <p className="section-subtitle">
            Technology Executive & Digital Transformation Leader
          </p>

          <div className="about-content">
            <div className="about-text">
              <h2>Executive Profile</h2>
              <p>
                As a seasoned technology executive and digital transformation leader, Uday Ayyagari brings over two decades of experience in architecting enterprise solutions, leading high-performance teams, and driving strategic initiatives that deliver measurable business impact.
              </p>
              <p>
                With expertise spanning cloud architecture, AI/ML implementation, and organizational transformation, Uday has consistently delivered breakthrough results for Fortune 500 companies and emerging enterprises alike.
              </p>

              <h3>Core Competencies</h3>
              <div className="competencies-grid">
                <div className="competency-item">
                  <h4>Cloud Architecture</h4>
                  <p>Expert in designing and implementing scalable, secure, and cost-effective cloud solutions across AWS, Azure, and GCP platforms.</p>
                </div>
                <div className="competency-item">
                  <h4>AI & Machine Learning</h4>
                  <p>Pioneering AI/ML strategies that drive business transformation and create competitive advantages in the digital economy.</p>
                </div>
                <div className="competency-item">
                  <h4>Digital Strategy</h4>
                  <p>Developing comprehensive digital transformation roadmaps that align technology initiatives with business objectives.</p>
                </div>
                <div className="competency-item">
                  <h4>Team Leadership</h4>
                  <p>Building and leading high-performing engineering teams that deliver exceptional results in fast-paced environments.</p>
                </div>
              </div>

              <h3>Professional Journey</h3>
              <p>
                Uday's career spans leadership roles at some of the world's most innovative companies, where he has consistently delivered transformative results. His current role as CEO of aurus.ai represents the culmination of his vision for AI-driven business transformation.
              </p>
              <p>
                Throughout his career, Uday has been recognized for his ability to bridge the gap between complex technical solutions and tangible business outcomes, making him a sought-after advisor for organizations undergoing digital transformation.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$100M+</div>
                <div className="stat-label">Value Created</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Fortune 500 Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
