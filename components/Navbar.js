import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import CSS file for styling
import image from '../assets/image.png'; // Import the image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={image} alt="" className="navbar-img" />
      </div>
      <div className="navbar-right">
        {/* Use Link instead of anchor tags */}
        <Link to="/get-projects" className="navbar-link">Get Projects</Link>
        <Link to="/onboard-talent" className="navbar-link">Onboard Talent</Link>
      </div>
    </nav>
  );
};

export default Navbar;
