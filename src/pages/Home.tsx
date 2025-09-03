import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span>VISIONARY</span><br />
                <span>TECHNOLOGY</span><br />
                <span className="highlight">LEADER</span>
              </h1>
              <p className="hero-subtitle">
                Transforming businesses through innovative technology solutions and strategic digital leadership
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">Explore My Journey</Link>
                <Link to="/portfolio" className="btn btn-secondary">View Portfolio</Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-photo-container">
                <img 
                  src="/images/uday-ayyagari-executive.jpg" 
                  alt="Uday Ayyagari - Technology Executive" 
                  className="profile-photo"
                />
                <p className="photo-caption">Currently serving as CEO, aurus.ai</p>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Executive Profile Section */}
      <section className="section">
        <div className="container">
          <div className="executive-profile">
            <div className="profile-header">
              <h2>Uday Ayyagari - Technology Executive</h2>
              <p className="current-role">Currently serving as CEO, aurus.ai</p>
            </div>
            
            <div className="profile-content">
              <h3>Executive Profile</h3>
              <h4>Driving Digital Transformation & Innovation Excellence</h4>
              <p>
                As a seasoned technology executive and digital transformation leader, Uday Ayyagari brings over two decades of experience in architecting enterprise solutions, leading high-performance teams, and driving strategic initiatives that deliver measurable business impact.
              </p>
              <p>
                With expertise spanning cloud architecture, AI/ML implementation, and organizational transformation, Uday has consistently delivered breakthrough results for Fortune 500 companies and emerging enterprises alike.
              </p>
            </div>

            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>Cloud Architecture</h4>
              </div>
              <div className="expertise-item">
                <h4>AI & Machine Learning</h4>
              </div>
              <div className="expertise-item">
                <h4>Digital Strategy</h4>
              </div>
              <div className="expertise-item">
                <h4>Team Leadership</h4>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$100M+</div>
                <div className="stat-label">Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
