import React, { useEffect } from 'react';
import '../styles/IndustriesPage.css';
import { Link } from 'react-router-dom';

const IndustriesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="industries-page">
      <div className="industries-page-header">
        <h2 className="text-black text-4xl md:text-5xl font-bold animate-fade-in">
          Industries We Serve
        </h2>
      </div>
      
      <p className="industries-intro">
        At Aetos AI, we provide tailored technology solutions across diverse industries, leveraging our expertise to address 
        sector-specific challenges and drive innovation. Our deep industry knowledge enables us to deliver customized solutions 
        that help businesses achieve their strategic objectives and stay ahead in rapidly evolving markets.
      </p>
      
      <div className="industries-grid">
        {/* Healthcare */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Healthcare & Life Sciences</h3>
            <p className="industry-subtitle">Digital Transformation</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              We help healthcare providers, pharmaceutical companies, and life science organizations leverage technology to improve 
              patient care, accelerate research, and streamline operations while maintaining the highest standards of data security 
              and regulatory compliance.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">HIPAA-compliant systems & applications</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Telemedicine & remote patient monitoring</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Clinical data analytics & AI solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Finance */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Finance & Banking</h3>
            <p className="industry-subtitle">Secure Innovation</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              Our financial technology solutions help banks, investment firms, and insurance companies modernize their systems, 
              enhance customer experiences, and navigate complex regulatory requirements while maintaining robust security and 
              compliance protocols.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Secure payment processing systems</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Fraud detection & prevention</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Regulatory compliance solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Retail */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Retail & E-Commerce</h3>
            <p className="industry-subtitle">Customer Experience</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              We empower retailers and e-commerce businesses with innovative solutions that enhance omnichannel experiences, optimize 
              supply chain operations, and leverage data analytics to drive personalized marketing and boost customer engagement.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Omnichannel retail platforms</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Inventory & supply chain management</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Personalized customer experiences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Manufacturing & Industry 4.0</h3>
            <p className="industry-subtitle">Operational Excellence</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              Our Industry 4.0 solutions help manufacturers digitize operations, implement IoT and automation technologies, and 
              harness data analytics to improve productivity, quality, and operational efficiency while reducing costs and downtime.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">IoT-enabled production monitoring</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Predictive maintenance systems</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Supply chain optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Technology & SaaS</h3>
            <p className="industry-subtitle">Accelerated Growth</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              We partner with technology companies and SaaS providers to accelerate product development, optimize cloud architecture, 
              implement DevOps practices, and establish robust security frameworks that support rapid innovation and growth.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Scalable cloud architecture</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">DevOps & CI/CD implementation</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">API strategy & integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy & Utilities */}
        <div className="industry-card">
          <div className="industry-card-header">
            <h3 className="industry-title">Energy & Utilities</h3>
            <p className="industry-subtitle">Sustainable Innovation</p>
            <div className="industry-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
          </div>
          <div className="industry-content">
            <p className="industry-description">
              We enable energy and utility companies to modernize infrastructure, optimize resource management, and implement 
              smart technologies that enhance operational efficiency, support sustainability goals, and improve service delivery.
            </p>
            <div className="industry-features">
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Smart grid management systems</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Energy consumption analytics</div>
              </div>
              <div className="industry-feature">
                <div className="industry-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="industry-feature-text">Renewable energy integration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="case-studies-section">
        <h3 className="case-studies-title">Success Stories</h3>
        
        <div className="case-studies-grid">
          <div className="case-study">
            <div className="case-study-header">
              <div className="case-study-industry">Healthcare</div>
              <h4 className="case-study-title">Medical Records Modernization</h4>
            </div>
            <div className="case-study-content">
              <p className="case-study-text">
                We helped a leading healthcare provider transition from legacy systems to a modern, HIPAA-compliant electronic 
                health records platform, improving data accessibility while maintaining the highest security standards.
              </p>
              <div className="case-study-results">
                <div className="case-study-result">
                  <div className="case-study-result-number">65%</div>
                  <div className="case-study-result-label">Faster Access</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">40%</div>
                  <div className="case-study-result-label">Cost Reduction</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">99.9%</div>
                  <div className="case-study-result-label">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study">
            <div className="case-study-header">
              <div className="case-study-industry">Finance</div>
              <h4 className="case-study-title">Fraud Detection System</h4>
            </div>
            <div className="case-study-content">
              <p className="case-study-text">
                We developed an AI-powered fraud detection system for a financial institution that analyzes transaction patterns 
                in real-time, significantly reducing fraudulent activities while minimizing false positives.
              </p>
              <div className="case-study-results">
                <div className="case-study-result">
                  <div className="case-study-result-number">87%</div>
                  <div className="case-study-result-label">Fraud Reduction</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">92%</div>
                  <div className="case-study-result-label">Detection Rate</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">5ms</div>
                  <div className="case-study-result-label">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study">
            <div className="case-study-header">
              <div className="case-study-industry">Manufacturing</div>
              <h4 className="case-study-title">IoT Predictive Maintenance</h4>
            </div>
            <div className="case-study-content">
              <p className="case-study-text">
                We implemented an IoT-based predictive maintenance solution for a global manufacturer, leveraging sensor data 
                and machine learning to predict equipment failures before they occur and optimize maintenance schedules.
              </p>
              <div className="case-study-results">
                <div className="case-study-result">
                  <div className="case-study-result-number">73%</div>
                  <div className="case-study-result-label">Downtime Reduction</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">32%</div>
                  <div className="case-study-result-label">Maintenance Savings</div>
                </div>
                <div className="case-study-result">
                  <div className="case-study-result-number">18%</div>
                  <div className="case-study-result-label">Productivity Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="industries-contact">
        <h3 className="industries-contact-title">Ready to Transform Your Industry?</h3>
        <p className="industries-contact-text">
          Partner with Aetos AI to leverage our industry expertise and innovative technology solutions tailored to your 
          specific challenges. Let's collaborate to drive efficiency, enhance customer experiences, and accelerate your 
          digital transformation journey.
        </p>
        <Link 
          to="/contact" 
          className="industries-cta-button"
        >
          Discuss Your Industry Needs
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default IndustriesPage; 