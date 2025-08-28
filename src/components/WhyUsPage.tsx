import React, { useEffect } from 'react';
import '../styles/WhyUsPage.css';

const WhyUsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="why-us-page py-10">
      <div className="page-header">
        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
          Why Us?
        </h2>
      </div>

      {/* Metrics Section */}
      <div className="metrics-section">
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-value">97%</div>
            <div className="metric-label">Client Satisfaction</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">150+</div>
            <div className="metric-label">Projects Delivered</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">12+</div>
            <div className="metric-label">Years Experience</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">24/7</div>
            <div className="metric-label">Support</div>
          </div>
        </div>
      </div>

      <div className="why-us-cards">
        {/* Innovation */}
        <div className="why-us-card">
          <div className="why-us-card-header">
            <div className="why-us-icon-wrapper">
              <div className="why-us-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <h3 className="why-us-title">Innovation-Driven</h3>
          </div>
          <div className="why-us-content">
            <p className="why-us-text">
              We're at the forefront of technology, constantly exploring new solutions and methodologies. 
              Our team embraces challenges as opportunities to innovate and create impact through 
              cutting-edge development practices.
            </p>
          </div>
        </div>

        {/* Speed */}
        <div className="why-us-card">
          <div className="why-us-card-header">
            <div className="why-us-icon-wrapper">
              <div className="why-us-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4"></path>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                  <polyline points="17 8 12 3 7 8"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="why-us-title">Speed & Efficiency</h3>
          </div>
          <div className="why-us-content">
            <p className="why-us-text">
              We understand that time is valuable. Our optimized development process delivers high-quality 
              solutions efficiently, allowing you to go to market faster without compromising on quality 
              or performance.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="why-us-card">
          <div className="why-us-card-header">
            <div className="why-us-icon-wrapper">
              <div className="why-us-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
            <h3 className="why-us-title">Deep Technical Expertise</h3>
          </div>
          <div className="why-us-content">
            <p className="why-us-text">
              Our team comprises industry veterans with specialized knowledge across diverse technologies. 
              From cloud architecture to machine learning, we bring the right expertise to address your unique 
              technical challenges.
            </p>
          </div>
        </div>

        {/* Client-Focused */}
        <div className="why-us-card">
          <div className="why-us-card-header">
            <div className="why-us-icon-wrapper">
              <div className="why-us-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <h3 className="why-us-title">Client-Focused Approach</h3>
          </div>
          <div className="why-us-content">
            <p className="why-us-text">
              We put your needs first. Through active listening and collaboration, we develop a deep 
              understanding of your business objectives to deliver solutions that drive tangible results 
              and exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="process-section">
        <h2 className="section-title">Our Process</h2>
        <p className="why-us-section-subtitle">A streamlined approach to delivering exceptional results</p>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                We begin by understanding your business, objectives, and challenges through collaborative 
                workshops and in-depth discussions to ensure perfect alignment.
              </p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">Strategy & Planning</h3>
              <p className="step-description">
                Our team develops a comprehensive roadmap, defining the scope, technology stack, architecture, 
                and delivery timeline tailored to your specific requirements.
              </p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">Design & Development</h3>
              <p className="step-description">
                Using agile methodologies, we bring your solution to life with iterative development cycles, 
                regular check-ins, and continuous improvement based on feedback.
              </p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3 className="step-title">Testing & Quality Assurance</h3>
              <p className="step-description">
                Our rigorous QA process ensures your solution meets the highest standards of performance, 
                security, and user experience before deployment.
              </p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">05</div>
            <div className="step-content">
              <h3 className="step-title">Deployment & Support</h3>
              <p className="step-description">
                We handle seamless deployment and provide ongoing maintenance and support to ensure your 
                solution continues to perform optimally and evolves with your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-expertise-section">
        <h2 className="tech-section-title">Our Technology Expertise</h2>
        <p className="tech-section-subtitle">Comprehensive solutions across the entire technology spectrum</p>
        
        <div className="tech-cards">
          {/* DevOps */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
            <h3 className="tech-title">DevOps</h3>
            <p className="tech-description">
              Streamline your development pipeline with our DevOps expertise. We implement CI/CD pipelines, 
              infrastructure as code, and automated testing to accelerate delivery and improve reliability.
            </p>
          </div>

          {/* Cloud Services */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            </div>
            <h3 className="tech-title">Cloud Services</h3>
            <p className="tech-description">
              Leverage the full potential of AWS, Azure, and GCP with our cloud-native solutions. We design 
              scalable, secure, and cost-effective cloud architectures tailored to your specific needs.
            </p>
          </div>

          {/* Full Stack Development */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
                <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
                <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
                <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3 className="tech-title">Full Stack Development</h3>
            <p className="tech-description">
              From frontend interfaces to backend systems, we deliver cohesive solutions using modern frameworks 
              and languages. Our full stack expertise ensures smooth integration between all components.
            </p>
          </div>

          {/* Mobile Development */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <h3 className="tech-title">Mobile Apps (iOS & Android)</h3>
            <p className="tech-description">
              Create exceptional mobile experiences with our iOS and Android development services. 
              We build native and cross-platform applications that are fast, intuitive, and feature-rich.
            </p>
          </div>

          {/* Web Applications */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <path d="M21 15l-5-5L5 21"></path>
              </svg>
            </div>
            <h3 className="tech-title">Web Applications</h3>
            <p className="tech-description">
              Develop modern, responsive web applications that deliver exceptional user experiences. 
              Our web development expertise spans React, Angular, Vue, and other leading frameworks.
            </p>
          </div>

          {/* Enterprise Applications */}
          <div className="tech-card">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                <path d="M18 14h-8"></path>
                <path d="M15 18h-5"></path>
                <path d="M10 6h8v4h-8V6Z"></path>
              </svg>
            </div>
            <h3 className="tech-title">Enterprise Solutions</h3>
            <p className="tech-description">
              Build robust, scalable enterprise applications that drive business growth. Our solutions 
              integrate seamlessly with your existing systems while providing advanced functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="why-us-section-subtitle">Success stories from businesses we've helped transform</p>
        
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Aetos AI transformed our outdated systems into a modern, scalable platform that has dramatically 
                improved our operational efficiency. Their technical expertise and client-focused approach made 
                them the perfect partner for our digital transformation journey."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>JD</span>
              </div>
              <div className="author-info">
                <h4 className="author-name">John Doe</h4>
                <p className="author-title">CTO, Enterprise Solutions Inc.</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The mobile application developed by Aetos AI has received outstanding feedback from our users. 
                Their development process was transparent, and they consistently delivered on time and within 
                budget. We couldn't be happier with the results."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>SJ</span>
              </div>
              <div className="author-info">
                <h4 className="author-name">Sarah Johnson</h4>
                <p className="author-title">Product Manager, TechInnovate</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Aetos AI's cloud migration strategy saved us significant operational costs while improving 
                our system's performance and reliability. Their team's deep expertise in cloud services and 
                DevOps has been invaluable to our business growth."
              </p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>RM</span>
              </div>
              <div className="author-info">
                <h4 className="author-name">Robert Miller</h4>
                <p className="author-title">CEO, Cloud Solutions Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-us-footer">
        <p className="why-us-footer-text">
          Choose Aetos AI for a partner that combines technical excellence with a genuine commitment to your success. 
          Our innovative approach, efficiency, and deep expertise make us the ideal choice for organizations 
          seeking to transform their digital presence and capabilities.
        </p>
        <div className="why-us-cta">
          <a href="#contact" className="why-us-cta-button">
            Start Your Journey With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage; 