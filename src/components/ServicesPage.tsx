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
          <h3 className="section-title">Next-generation AI Solutions</h3>
          <p className="overview-text">
            At Aetos AI, we offer next-generation AI solutions engineered to transcend traditional automation boundaries. 
            Our expertise spans across AI integration, workflow automation, chatbots, data analytics, and 
            predictive intelligence to deliver transformative solutions tailored to your unique business needs.
          </p>
          <p className="overview-text">
            We believe in a collaborative approach, working closely with you to understand your 
            challenges and develop AI strategies that drive measurable results and long-term success.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="service-categories">
        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
              <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
              <path d="M12 3c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"></path>
              <path d="M12 21c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
            </svg>
          </div>
          <h3 className="category-title">Software + AI Integration</h3>
          <p className="category-description">
            Seamlessly fuse intelligence into your existing systems. We integrate battle-tested AI engines with your CRM, booking platforms, and operational tools—automating complex workflows, predicting customer behavior, and unlocking hidden efficiencies. No rip-and-replace required, just future-proofed performance.
          </p>
          <ul className="service-list">
            <li>Seamless AI Integration</li>
            <li>Custom AI Solutions</li>
            <li>Continuous Support and Optimization</li>
            <li>Legacy System Enhancement</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
            </svg>
          </div>
          <h3 className="category-title">Workflow Automation</h3>
          <p className="category-description">
            Automate your 5-star reputation. Our system monitors every review (Google, TripAdvisor, social media), responds instantly with brand-aligned messages, and escalates critical issues—turning feedback into growth fuel while protecting your image 24/7.
          </p>
          <ul className="service-list">
            <li>Process Mapping and Analysis</li>
            <li>Custom Automation Development</li>
            <li>Seamless Integration</li>
            <li>Real-time Monitoring & Alerts</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
          </div>
          <h3 className="category-title">AI Chatbots & Virtual Assistants</h3>
          <p className="category-description">
            Deliver instant, intelligent, and personalized interactions across all customer touchpoints with our AI-powered chatbots and virtual assistants.
          </p>
          <ul className="service-list">
            <li>Natural Language Processing (NLP)</li>
            <li>Seamless Integration</li>
            <li>Customizable Workflows</li>
            <li>Multi-platform Support</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </svg>
          </div>
          <h3 className="category-title">AI-Powered Data Analytics</h3>
          <p className="category-description">
            Transform your raw data into actionable insights with our AI-driven analytics solutions, enabling smarter decisions and accelerated business growth.
          </p>
          <ul className="service-list">
            <li>Predictive Analytics</li>
            <li>Real-Time Data Processing</li>
            <li>Seamless Integration</li>
            <li>Advanced Visualization</li>
          </ul>
        </div>

        <div className="service-category">
          <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
              <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
              <path d="M12 3c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"></path>
              <path d="M12 21c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"></path>
            </svg>
          </div>
          <h3 className="category-title">Reputation Management</h3>
          <p className="category-description">
            Automate your 5-star reputation. Our system monitors every review (Google, TripAdvisor, social media), responds instantly with brand-aligned messages, and escalates critical issues—turning feedback into growth fuel while protecting your image 24/7.
          </p>
          <ul className="service-list">
            <li>Comprehensive Review Aggregation</li>
            <li>Predictive Sentiment Analytics</li>
            <li>Customizable Alert Systems</li>
            <li>Brand Protection & Crisis Management</li>
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
          <h3 className="category-title">Predictive Analytics Engine</h3>
          <p className="category-description">
            See tomorrow's opportunities today. Our AI analyzes your data to forecast trends, predict churn, and uncover hidden revenue pockets, turning raw numbers into actionable growth strategies.
          </p>
          <ul className="service-list">
            <li>Advanced Machine Learning Models</li>
            <li>Real-Time Data Processing</li>
            <li>Seamless Integration</li>
            <li>Custom Forecasting Models</li>
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
          <h3 className="category-title">Enterprise Solutions</h3>
          <p className="category-description">
            Scalable solutions designed for growing businesses with comprehensive IT support, proactive monitoring, and maintenance to ensure your systems run smoothly 24/7.
          </p>
          <ul className="service-list">
            <li>Proactive Monitoring and Maintenance</li>
            <li>Scalable Solutions for Growing Businesses</li>
            <li>Comprehensive IT Support</li>
            <li>Hardware and Software Management</li>
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