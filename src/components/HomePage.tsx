import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <HeroSection />
    <div className="home-page">

      <section className="home-section services-overview-section">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive technology solutions tailored to your needs</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
                <path d="M12 3c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"></path>
                <path d="M12 21c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="service-title">Software + AI Integration</h3>
            <p className="service-description">
              Seamlessly fuse intelligence into your existing systems with battle-tested AI engines integrated into your CRM, booking platforms, and operational tools.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
              </svg>
            </div>
            <h3 className="service-title">Workflow Automation</h3>
            <p className="service-description">
              Automate your 5-star reputation with intelligent monitoring, instant responses, and critical issue escalation across all review platforms.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="service-title">AI Chatbots & Virtual Assistants</h3>
            <p className="service-description">
              Deliver instant, intelligent, and personalized interactions across all customer touchpoints with our AI-powered conversational solutions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              </svg>
            </div>
            <h3 className="service-title">AI-Powered Data Analytics</h3>
            <p className="service-description">
              Transform your raw data into actionable insights with our AI-driven analytics solutions, enabling smarter decisions and accelerated business growth.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="service-title">Predictive Analytics Engine</h3>
            <p className="service-description">
              See tomorrow's opportunities today with AI that analyzes your data to forecast trends, predict churn, and uncover hidden revenue pockets.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
                <path d="M12 3c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"></path>
                <path d="M12 21c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="service-title">Reputation Management</h3>
            <p className="service-description">
              Automate your 5-star reputation with comprehensive review aggregation, predictive sentiment analytics, and customizable alert systems.
            </p>
          </div>
        </div>
        
        <div className="section-footer">
          <Link to="/services" className="view-all-button">
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>

      <section className="home-section home-industries-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Industries We Serve</h2>
          <p className="home-section-subtitle">Tailored solutions for diverse sectors</p>
        </div>

        <div className="home-industries-grid">
          <div className="home-industry-item">
            <div className="home-industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="home-industry-name">Healthcare</h3>
          </div>
          
          <div className="home-industry-item">
            <div className="home-industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="home-industry-name">Finance</h3>
          </div>
          
          <div className="home-industry-item">
            <div className="home-industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h3 className="home-industry-name">Retail</h3>
          </div>
          
          <div className="home-industry-item">
            <div className="home-industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="home-industry-name">Manufacturing</h3>
          </div>
        </div>
        
        <div className="home-section-footer">
          <Link to="/industries" className="home-view-all-button">
            See All Industries
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-section why-us-section">
        <div className="why-us-container">
          <div className="why-us-content">
            <h2 className="why-us-title">Why Choose Aetos AI?</h2>
            <div className="why-us-features">
              <div className="why-us-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="feature-text">Expert team with proven track record</div>
              </div>
              <div className="why-us-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="feature-text">Focus on security and compliance</div>
              </div>
              <div className="why-us-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="feature-text">Innovative approach to problem-solving</div>
              </div>
              <div className="why-us-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="feature-text">Commitment to client success</div>
              </div>
            </div>
            <Link to="/why-us" className="learn-more-button">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          <div className="why-us-stats">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Successful Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-section home-cta-section">
        <div className="home-cta-container">
          <h2 className="home-cta-title">Ready to Transform Your Business?</h2>
          <p className="home-cta-text">
            Partner with Aetos AI to leverage cutting-edge technology solutions tailored to your specific challenges.
          </p>
          <Link to="/contact" className="home-cta-button">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage; 