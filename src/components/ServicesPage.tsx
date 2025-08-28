import React, { useEffect } from 'react';
import '../styles/ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page py-10">
      <div className="page-header">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
          Our Services
        </h2>
      </div>

      {/* Services Overview */}
      <div className="services-overview">
        <div className="overview-content">
          <h3 className="section-title">Expert Solutions for Modern Challenges</h3>
          <p className="overview-text">
            At Aetos AI, we offer comprehensive technology services designed to transform your business. 
            Our expertise spans across software development, cloud infrastructure, cybersecurity, and 
            digital transformation to deliver end-to-end solutions tailored to your unique needs.
          </p>
          <p className="overview-text">
            We believe in a collaborative approach, working closely with you to understand your 
            challenges and develop strategies that drive measurable results and long-term success.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="service-categories">
        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 className="category-title">Software Development</h3>
          <p className="category-description">
            Custom-built applications and software solutions that address your specific business challenges
            and opportunities.
          </p>
          <ul className="service-list">
            <li>Custom Web Applications</li>
            <li>Mobile App Development</li>
            <li>API Development & Integration</li>
            <li>Legacy System Modernization</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h3 className="category-title">Cloud Services</h3>
          <p className="category-description">
            Scalable, secure, and optimized cloud infrastructure solutions to power your business operations.
          </p>
          <ul className="service-list">
            <li>Cloud Migration & Strategy</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>Cloud-Native Development</li>
            <li>Managed Cloud Services</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <path d="M2 10h20"></path>
            </svg>
          </div>
          <h3 className="category-title">DevOps & Automation</h3>
          <p className="category-description">
            Streamlined development workflows and automated processes to increase efficiency and productivity.
          </p>
          <ul className="service-list">
            <li>CI/CD Pipeline Implementation</li>
            <li>Containerization & Orchestration</li>
            <li>Infrastructure Automation</li>
            <li>Monitoring & Observability</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="category-title">Cybersecurity</h3>
          <p className="category-description">
            Comprehensive security solutions to protect your data, systems, and reputation from evolving threats.
          </p>
          <ul className="service-list">
            <li>Security Assessment & Auditing</li>
            <li>Compliance Implementation (SOC 2, HIPAA)</li>
            <li>Security Architecture Design</li>
            <li>Incident Response Planning</li>
          </ul>
        </div>
      </div>

      {/* Service Process */}
      <div className="service-process">
        <h3 className="section-title">Our Approach</h3>
        <div className="services-process-steps">
          <div className="services-process-step">
            <div className="services-step-number">01</div>
            <h4 className="services-step-title">Discovery</h4>
            <p className="services-step-description">
              We begin by understanding your business goals, challenges, and requirements through 
              in-depth consultations.
            </p>
          </div>

          <div className="services-process-step">
            <div className="services-step-number">02</div>
            <h4 className="services-step-title">Strategy</h4>
            <p className="services-step-description">
              Based on our findings, we develop a comprehensive strategy and roadmap aligned 
              with your objectives.
            </p>
          </div>

          <div className="services-process-step">
            <div className="services-step-number">03</div>
            <h4 className="services-step-title">Implementation</h4>
            <p className="services-step-description">
              Our experienced teams execute the strategy with a focus on quality, efficiency, 
              and regular communication.
            </p>
          </div>

          <div className="services-process-step">
            <div className="services-step-number">04</div>
            <h4 className="services-step-title">Optimization</h4>
            <p className="services-step-description">
              We continuously monitor, evaluate, and refine our solutions to ensure optimal 
              performance and results.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="technology-stack">
        <h3 className="section-title">Our Technology Stack</h3>
        <div className="tech-showcase">
          <div className="tech-column">
            <div className="tech-category-header">
              <div className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h4 className="tech-category-name">Front End</h4>
            </div>
            <div className="tech-items">
              <span className="tech-item">React</span>
              <span className="tech-item">Angular</span>
              <span className="tech-item">Vue.js</span>
              <span className="tech-item">Next.js</span>
              <span className="tech-item">TypeScript</span>
            </div>
          </div>

          <div className="tech-column">
            <div className="tech-category-header">
              <div className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="tech-category-name">Back End</h4>
            </div>
            <div className="tech-items">
              <span className="tech-item">Node.js</span>
              <span className="tech-item">.NET Core</span>
              <span className="tech-item">Java Spring</span>
              <span className="tech-item">Python Django/Flask</span>
              <span className="tech-item">Go</span>
            </div>
          </div>

          <div className="tech-column">
            <div className="tech-category-header">
              <div className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 className="tech-category-name">Cloud & DevOps</h4>
            </div>
            <div className="tech-items">
              <span className="tech-item">AWS</span>
              <span className="tech-item">Azure</span>
              <span className="tech-item">GCP</span>
              <span className="tech-item">Docker</span>
              <span className="tech-item">Kubernetes</span>
            </div>
          </div>

          <div className="tech-column">
            <div className="tech-category-header">
              <div className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h4 className="tech-category-name">Data & Analytics</h4>
            </div>
            <div className="tech-items">
              <span className="tech-item">SQL & NoSQL</span>
              <span className="tech-item">Elasticsearch</span>
              <span className="tech-item">Kafka</span>
              <span className="tech-item">Grafana</span>
              <span className="tech-item">Power BI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Preview */}
      <div className="case-studies">
        <h3 className="section-title">Success Stories</h3>
        <div className="case-study-cards">
          <div className="case-study-card">
            <div className="cs-tag">FINTECH</div>
            <h4 className="cs-title">Payment Processing Platform</h4>
            <p className="cs-description">
              Developed a scalable, secure payment processing system that reduced transaction times 
              by 40% and increased throughput by 3x.
            </p>
            <a href="#case-study-1" className="cs-link">Read More →</a>
          </div>

          <div className="case-study-card">
            <div className="cs-tag">HEALTHCARE</div>
            <h4 className="cs-title">Telehealth Solution</h4>
            <p className="cs-description">
              Built a HIPAA-compliant telehealth platform that enabled a healthcare provider to 
              serve 200% more patients during the pandemic.
            </p>
            <a href="#case-study-2" className="cs-link">Read More →</a>
          </div>

          <div className="case-study-card">
            <div className="cs-tag">RETAIL</div>
            <h4 className="cs-title">E-commerce Transformation</h4>
            <p className="cs-description">
              Modernized legacy systems and implemented a microservices architecture that increased 
              site reliability and reduced operating costs by 30%.
            </p>
            <a href="#case-study-3" className="cs-link">Read More →</a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <h3 className="cta-title">Ready to Transform Your Business?</h3>
        <p className="cta-text">
          Let's discuss how our services can address your unique challenges and opportunities.
        </p>
        <div className="cta-buttons">
          <Link 
            to="/contact" 
            className="primary-button"
          >
            Get in Touch
          </Link>
          <Link to="/why-us" className="secondary-button">
            Why Choose Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;