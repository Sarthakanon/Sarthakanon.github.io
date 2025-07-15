import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2024 Sarthak Acharya &nbsp;|&nbsp; Made with <span role="img" aria-label="heart">❤️</span> & React</span>
        <span className="footer-divider">|</span>
        <a href="mailto:sarthak@example.com" className="footer-link">Contact Me</a>
      </div>
    </footer>
  );
};

export default Footer; 