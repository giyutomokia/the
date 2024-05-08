// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left" style={{ marginLeft: '30px' }}> {/* Apply margin-left to move "Talup" text */}
        © Talup 2023. All Rights Reserved.
      </div>
      <div className="right">
        <a href="#" style={{ marginLeft: '20px' }}>Privacy Policy</a> {/* Apply margin-left to move "Privacy Policy" link */}
        <span style={{ marginRight: '40px' }}></span>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
