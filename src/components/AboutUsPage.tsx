import React, { useEffect } from 'react';
import '../styles/AboutUsPage.css';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-page py-10">
      <div className="page-header">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
          About Us
        </h2>
      </div>

      {/* Company Story */}
      <div className="company-story-section">
        <div className="story-content">
          <h3 className="section-title">Our Story</h3>
          <p className="story-text">
            Founded in 2010, Aetos AI began with a simple mission: to bridge the gap between complex technology 
            and business value. What started as a small team of passionate developers has grown into a diverse 
            company of technology experts, strategists, and innovators.
          </p>
          <p className="story-text">
            Over the years, we've partnered with organizations of all sizes, from startups to 
            Fortune 500 companies, delivering solutions that drive meaningful business outcomes. Our journey 
            has been defined by continuous learning, adaptation, and a relentless pursuit of excellence.
          </p>
        </div>
        <div className="story-image">
          <div className="image-container">
            <div className="placeholder-image">
              <span>Company Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-section">
        <div className="mission-vision-card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 className="card-title">Our Mission</h3>
          <p className="card-text">
            To empower organizations through innovative technology solutions that transform operations, 
            enhance user experiences, and drive sustainable growth.
          </p>
        </div>

        <div className="mission-vision-card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 className="card-title">Our Vision</h3>
          <p className="card-text">
            To be the leading technology partner for forward-thinking organizations, known for our technical 
            excellence, impactful solutions, and exceptional client partnerships.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="core-values-section">
        <h3 className="section-title">Our Core Values</h3>
        <div className="values-container">
          <div className="value-card">
            <span className="value-number">01</span>
            <h4 className="value-title">Excellence</h4>
            <p className="value-description">
              We're committed to delivering the highest quality in everything we do, constantly pushing 
              boundaries and exceeding expectations.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">02</span>
            <h4 className="value-title">Collaboration</h4>
            <p className="value-description">
              We believe in the power of teams, fostering open communication and working closely with clients 
              to achieve shared success.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">03</span>
            <h4 className="value-title">Innovation</h4>
            <p className="value-description">
              We embrace change and continuously explore new technologies and approaches that create value 
              and solve complex problems.
            </p>
          </div>

          <div className="value-card">
            <span className="value-number">04</span>
            <h4 className="value-title">Integrity</h4>
            <p className="value-description">
              We operate with transparency, honesty, and accountability in all our interactions with clients, 
              partners, and each other.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3 className="section-title">Our Leadership Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo">
              <div className="photo-placeholder">
                <span>JD</span>
              </div>
            </div>
            <h4 className="member-name">John Doe</h4>
            <p className="member-title">Chief Executive Officer</p>
            <p className="member-bio">
              With over 20 years of experience in technology leadership, John has guided Aetos AI's strategic 
              vision since founding the company in 2010.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <div className="photo-placeholder">
                <span>JS</span>
              </div>
            </div>
            <h4 className="member-name">Jane Smith</h4>
            <p className="member-title">Chief Technology Officer</p>
            <p className="member-bio">
              Jane leads our technical strategy and innovation initiatives, bringing deep expertise in 
              cloud architecture, AI, and enterprise solutions.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <div className="photo-placeholder">
                <span>MB</span>
              </div>
            </div>
            <h4 className="member-name">Michael Brown</h4>
            <p className="member-title">Head of Client Success</p>
            <p className="member-bio">
              Michael ensures our clients receive exceptional service and that our solutions deliver 
              measurable business value and outcomes.
            </p>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <div className="photo-placeholder">
                <span>EJ</span>
              </div>
            </div>
            <h4 className="member-name">Emily Johnson</h4>
            <p className="member-title">Director of Engineering</p>
            <p className="member-bio">
              Emily oversees our development teams, implementing best practices and ensuring the highest 
              quality in our technical delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="company-stats">
        <div className="stat-item">
          <div className="stat-value">50+</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">3</div>
          <div className="stat-label">Global Offices</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">20+</div>
          <div className="stat-label">Industries Served</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">12+</div>
          <div className="stat-label">Years in Business</div>
        </div>
      </div>

      <div className="about-us-footer">
        <h3 className="cta-title">Ready to Work With Us?</h3>
        <p className="cta-text">
          Let's discuss how we can help achieve your business goals through innovative technology solutions.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>
          <Link to="/why-us" className="secondary-button">
            Why Choose Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 