import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkmark } from 'react-checkmark';
import './SuccessPage.css'; // Import CSS file for styling
import logo from '../assets/image.png'; // Import your logo image

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect to homepage after 5 seconds

    return () => clearTimeout(timeout); // Cleanup function to clear the timeout
  }, [navigate]);

  return (
    <div className="success-page-container">
      <div className="logo1">
        <img src={logo} alt="Logo1" className="logo1" />
      </div>
      <div className="success-content">
        <Checkmark size="xxLarge" className="success-icon" />
        <h1 className="success-message">Congratulations!</h1>
        <p className="success-description">
          Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates.
        </p>
        <p className="redirect-message">Redirecting you to Homepage in 5 Seconds</p>

      </div>
    </div>
  );
};

export default SuccessPage;
