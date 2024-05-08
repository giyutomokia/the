import React from 'react';
import './Matter.css'; // Import the CSS file for styling
import picture from '../assets/Picture1.png'; // Import the image

const Matter = () => {
  return (
    <div className="success-container">
      <div className="content">
        {/* Your content here */}
        <span className="success-stories">Success Stories</span>
        {/* Every success journey we’ve encountered */}
        <span className="success-journey">Every success journey we’ve encountered.</span>
      </div>
      <div className="image-container">
        <img src={picture} alt="Success" className="success-image" />
      </div>
      {/* Additional content */}
      <div className="additional-content">
        <span>Enhance fortune 50 company’s insights teams research capabilities</span>
        {/* Carousel dots */}
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          {/* Add more dots if needed */}
        </div>
      </div>
      {/* Explore more button */}
      <button className="explore-button">Explore More &#8594;</button>
    </div>
  );
};

export default Matter;
