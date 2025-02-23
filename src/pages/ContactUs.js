import React, { useState } from "react";
import "./ContactUs.css"; // Link to your CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    organization: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Form submission logic here (e.g., send to an API)
  };

  return (
    <div className="contact-us-page">
      {/* Upper Section with background image */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please reach out with any questions or inquiries.</p>
      </div>

      {/* Bottom Section with two parts */}
      <div className="contact-body">
        {/* Left Part: Follow us on social media in the middle */}
        <div className="social-media-container">
          <div className="social-media-content">
            <h2>Follow Us On</h2>
            <p className="social-media-description">
               Stay connected with us across all platforms for the latest updates, 
               <p className="social-media-description" >news, and exclusive offers. Follow us and join the community.</p>
            </p>
            <div className="social-media-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="download.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="download (1).png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="download (2).png" alt="YouTube" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="download (3).png" alt="X" className="social-icon" />
              </a>
              <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                <img src="download (4).png" alt="Threads" className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Part: Contact Form */}
        <div className="contact-form-container">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>Follow us on:</p>
        <div className="social-media-footer">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram.jpg" alt="Instagram" className="social-icon-footer" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook.jpg" alt="Facebook" className="social-icon-footer" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="utube.jpg" alt="YouTube" className="social-icon-footer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="X.jpg" alt="X" className="social-icon-footer" />
          </a>
          <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
            <img src="thread.jpg" alt="Threads" className="social-icon-footer" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;



