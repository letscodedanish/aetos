import React, { useEffect } from 'react';
import '../styles/SecurityPage.css';
import { Link } from 'react-router-dom';

const SecurityPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="security-page">
      <div className="security-page-header">
        <h2 className="text-black text-4xl md:text-5xl font-bold animate-fade-in">
          Security & Compliance
        </h2>
      </div>
      
      <p className="security-intro">
        At Aetose, we implement rigorous security measures to protect your data and applications. Our comprehensive 
        approach to security ensures that our systems meet the highest industry standards and compliance requirements.
      </p>
      
      <div className="security-sections">
        {/* Compliance Section */}
        <div className="security-section">
          <h3 className="security-section-title">Compliance & Certifications</h3>
          
          <div className="security-items">
            {/* SOC 2 */}
            <div className="security-item">
              <div className="security-item-header">
                <div className="security-icon-wrapper">
                  <div className="security-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <div className="security-title-container">
                  <h3 className="security-title">SOC 2</h3>
                  <div className="security-badge-container">
                    <div className="security-badge">
                      Compliant
                    </div>
                  </div>
                </div>
              </div>
              <div className="security-content">
                <p className="security-text">
                  Our platform adheres to SOC 2 standards, ensuring we maintain the highest levels of security and privacy 
                  controls. We undergo regular third-party audits to verify compliance with security, availability, 
                  and confidentiality principles established by the American Institute of CPAs (AICPA).
                </p>
              </div>
            </div>

            {/* HIPAA */}
            <div className="security-item">
              <div className="security-item-header">
                <div className="security-icon-wrapper">
                  <div className="security-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>
                <div className="security-title-container">
                  <h3 className="security-title">HIPAA</h3>
                  <div className="security-badge-container">
                    <div className="security-badge">
                      Compliant
                    </div>
                  </div>
                </div>
              </div>
              <div className="security-content">
                <p className="security-text">
                  We prioritize health information security and comply with HIPAA regulations. Our systems are designed 
                  to safeguard protected health information (PHI) through comprehensive access controls, encryption, 
                  audit logging, and secure data transfer mechanisms, providing reliable services to healthcare organizations.
                </p>
              </div>
            </div>

            {/* GDPR */}
            <div className="security-item">
              <div className="security-item-header">
                <div className="security-icon-wrapper">
                  <div className="security-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4l3 3"></path>
                    </svg>
                  </div>
                </div>
                <div className="security-title-container">
                  <h3 className="security-title">GDPR</h3>
                  <div className="security-badge-container">
                    <div className="security-badge">
                      Compliant
                    </div>
                  </div>
                </div>
              </div>
              <div className="security-content">
                <p className="security-text">
                  Our platform is fully compliant with the EU's General Data Protection Regulation (GDPR). We implement 
                  privacy by design principles, maintain data processing records, enable data subject rights, and ensure 
                  lawful data transfer mechanisms to protect the privacy rights of EU citizens.
                </p>
              </div>
            </div>

            {/* ISO 27001 */}
            <div className="security-item">
              <div className="security-item-header">
                <div className="security-icon-wrapper">
                  <div className="security-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.48-8.48l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </div>
                </div>
                <div className="security-title-container">
                  <h3 className="security-title">ISO 27001</h3>
                  <div className="security-badge-container">
                    <div className="security-badge">
                      Certified
                    </div>
                  </div>
                </div>
              </div>
              <div className="security-content">
                <p className="security-text">
                  Aetose maintains ISO 27001 certification, demonstrating our commitment to information security management. 
                  This certification verifies that we have implemented a systematic approach to managing sensitive information 
                  and ensuring business continuity through comprehensive risk management practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Principles Section */}
        <div className="security-section">
          <h3 className="security-section-title">Our Security Principles</h3>
          
          <div className="security-principles">
            <div className="security-principle">
              <div className="security-principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h4 className="security-principle-title">Infrastructure Security</h4>
              <p className="security-principle-text">
                Our infrastructure is built on secure cloud platforms with comprehensive access controls, network 
                segmentation, intrusion detection systems, and 24/7 monitoring to protect against unauthorized access.
              </p>
            </div>
            
            <div className="security-principle">
              <div className="security-principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 className="security-principle-title">Data Encryption</h4>
              <p className="security-principle-text">
                We implement end-to-end encryption for all data, both in transit and at rest, using industry-standard 
                encryption protocols to ensure that your sensitive information remains protected at all times.
              </p>
            </div>
            
            <div className="security-principle">
              <div className="security-principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4 className="security-principle-title">Authentication & Access</h4>
              <p className="security-principle-text">
                Our platform features robust authentication mechanisms including multi-factor authentication, role-based 
                access controls, and least privilege principles to prevent unauthorized access to sensitive resources.
              </p>
            </div>
            
            <div className="security-principle">
              <div className="security-principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h4 className="security-principle-title">Incident Response</h4>
              <p className="security-principle-text">
                We maintain a comprehensive incident response plan with trained security personnel ready to identify, 
                contain, and remediate security incidents quickly to minimize potential impact.
              </p>
            </div>
          </div>
        </div>

        {/* Security Process Section */}
        <div className="security-section">
          <h3 className="security-section-title">Our Security Process</h3>
          
          <div className="security-process">
            <div className="security-process-steps">
              <div className="security-process-step">
                <div className="security-step-number">1</div>
                <div className="security-step-content">
                  <h4 className="security-step-title">Threat Assessment</h4>
                  <p className="security-step-text">
                    We continuously monitor for emerging threats and vulnerabilities, performing regular risk assessments 
                    to identify potential security gaps in our systems and applications.
                  </p>
                </div>
              </div>
              
              <div className="security-process-step">
                <div className="security-step-number">2</div>
                <div className="security-step-content">
                  <h4 className="security-step-title">Security Testing</h4>
                  <p className="security-step-text">
                    Our applications undergo rigorous security testing including static code analysis, dynamic application 
                    scanning, and regular penetration tests performed by certified security professionals.
                  </p>
                </div>
              </div>
              
              <div className="security-process-step">
                <div className="security-step-number">3</div>
                <div className="security-step-content">
                  <h4 className="security-step-title">Continuous Monitoring</h4>
                  <p className="security-step-text">
                    We employ advanced monitoring tools and automated alerts to detect and respond to suspicious activities 
                    and potential security incidents in real-time across all our systems.
                  </p>
                </div>
              </div>
              
              <div className="security-process-step">
                <div className="security-step-number">4</div>
                <div className="security-step-content">
                  <h4 className="security-step-title">Regular Audits</h4>
                  <p className="security-step-text">
                    We conduct regular internal and external security audits to verify compliance with security policies, 
                    industry standards, and regulatory requirements, ensuring continued protection of your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Stats Section */}
        <div className="security-section">
          <h3 className="security-section-title">Security By The Numbers</h3>
          
          <div className="security-stats">
            <div className="security-stat">
              <div className="security-stat-number">99.9%</div>
              <div className="security-stat-text">Uptime Reliability</div>
            </div>
            
            <div className="security-stat">
              <div className="security-stat-number">24/7</div>
              <div className="security-stat-text">Security Monitoring</div>
            </div>
            
            <div className="security-stat">
              <div className="security-stat-number">100%</div>
              <div className="security-stat-text">Data Encryption</div>
            </div>
          </div>
        </div>
      </div>

      <div className="security-footer">
        <h3 className="security-footer-title">Ready to Secure Your Business?</h3>
        <p className="security-footer-text">
          At Aetose, we prioritize the security and privacy of your data. Our comprehensive security framework 
          ensures your information remains protected while enabling your business to leverage our powerful services.
          Contact us today to learn more about how we can help secure your operations.
        </p>
        <Link 
          to="/contact" 
          className="security-cta-button"
        >
          Contact Our Security Team
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SecurityPage; 