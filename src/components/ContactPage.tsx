import React, { useState, useEffect } from 'react';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (name: string) => {
    setFocused(name);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-header">
        <div className="contact-header-content">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Let's Start a Conversation
          </h2>
          <p className="contact-header-subtitle">
            Reach out and let us know how we can help transform your business
          </p>
        </div>
        <div className="contact-header-decoration"></div>
      </div>

      <div className="contact-page-content">
        <div className="contact-layout">
          <div className="contact-form-section">
            {submitted ? (
              <div className="contact-success-message">
                <div className="contact-success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="contact-success-title">Message Received!</h3>
                <p className="contact-success-text">
                  Thank you for reaching out. Our team will get back to you shortly to discuss how we can help with your project.
                </p>
                <button 
                  className="contact-new-message-button"
                  onClick={() => setSubmitted(false)}
                >
                  <span>Send Another Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            ) : (
              <div className="contact-form-container">
                <h3 className="contact-form-title">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-page-form">
                  <div className="contact-form-field">
                    <label htmlFor="name" className={`contact-input-label ${focused === 'name' || formData.name ? 'contact-label-active' : ''}`}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={errors.name ? 'error' : ''}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="contact-error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="contact-form-field">
                    <label htmlFor="email" className={`contact-input-label ${focused === 'email' || formData.email ? 'contact-label-active' : ''}`}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={errors.email ? 'error' : ''}
                      placeholder="Your email address"
                    />
                    {errors.email && <span className="contact-error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label htmlFor="company" className={`contact-input-label ${focused === 'company' || formData.company ? 'contact-label-active' : ''}`}>Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div className="contact-form-field">
                      <label htmlFor="phone" className={`contact-input-label ${focused === 'phone' || formData.phone ? 'contact-label-active' : ''}`}>Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="contact-form-field">
                    <label htmlFor="message" className={`contact-input-label ${focused === 'message' || formData.message ? 'contact-label-active' : ''}`}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={errors.message ? 'error' : ''}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <span className="contact-error-message">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="contact-submit-button">
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="contact-info-sidebar">
            <div className="contact-sidebar-content">
              <h3 className="contact-sidebar-title">Connect With Us</h3>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">Email</h4>
                    <a href="mailto:info@betaque.com" className="contact-method-value">info@betaque.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">Phone</h4>
                    <a href="tel:+12345678990" className="contact-method-value">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">Office</h4>
                    <p className="contact-method-value">
                      123 Tech Plaza, Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-business-hours">
                <h4 className="contact-hours-title">Business Hours</h4>
                <div className="contact-hours-item">
                  <span className="contact-day">Monday - Friday:</span>
                  <span className="contact-time">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="contact-hours-item">
                  <span className="contact-day">Saturday - Sunday:</span>
                  <span className="contact-time">Closed</span>
                </div>
              </div>

              <div className="contact-social-links">
                <a href="#" className="contact-social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="contact-social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="contact-social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 