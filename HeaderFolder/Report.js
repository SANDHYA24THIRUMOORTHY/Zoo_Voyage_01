import React from 'react';
import emailjs from 'emailjs-com';
import './Report.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';

const Report = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define service, template, and user ID
    const SERVICE_ID = 'service_61sx8ns';
    const TEMPLATE_ID = 'template_5acbqs3';
    const USER_ID = 'OBGnHpbCsJqaXH0BS';

    // Send email using emailjs
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-container">
      <header className='head'>
        <h4 className="Z">REPORT</h4>
        

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="report-form-group">
            <label htmlFor="name">NAME:</label><br></br>
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="name" 
              required 
            />
          </div>

          <div className="report-form-group">
            <label htmlFor="email">EMAIL:</label><br></br>
            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="email" 
              required 
            />
          </div>

          <div className="report-form-group">
            <label htmlFor="zoo-name">ZOO NAME:</label><br></br>
            <input 
              id="zoo-name"
              type="text" 
              name="zoo-name" 
              placeholder="name of the zoo" 
              required 
            />
          </div>

          <div className="report-form-group">
            <label htmlFor="message">MESSAGE:</label><br></br>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="your message" 
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">SUBMIT</button>
        </form>
      </header>

      <main className="contact-info">
        <h5 className="Z">CONTACT INFORMATION</h5>
        <p>Email: support@zoovoyage.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Zoo Lane, Animal City, World</p>
      </main>

      <footer className='f'>
        <div className="social-media">
          <h5 className="Z">FOLLOW US</h5>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Report;
