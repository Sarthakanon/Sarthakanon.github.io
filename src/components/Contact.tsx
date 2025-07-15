import React from 'react';
import cartoonPhone from '../assets/cartoon-phone.png'; // Placeholder for cartoon calling graphic

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Let's create something amazing together! Reach out for collaborations or just to say hi 👋</p>
      <div className="contact-container contact-row-layout">
        <div className="contact-graphic-col">
          <img src={cartoonPhone} alt="Cartoon character calling with a phone" className="contact-cartoon-img" />
        </div>
        <div className="contact-content-col">
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 