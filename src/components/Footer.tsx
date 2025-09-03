import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>UDAY AYYAGARI</h3>
            <p>Visionary Technology Leader</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/insights">Insights</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-nav">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:contact@uday.info">Email</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Uday Ayyagari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
