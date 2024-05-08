import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetProjectsPage.css'; // Import CSS file for styling
import logo from '../assets/image.png'; // Import your logo image
import SuccessPage from './SuccessPage'; // Import SuccessPage component

const GetProjectsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Handle form submission here
    console.log('Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="get-projects-container">
      {submitted ? (
        <SuccessPage />
      ) : (
        <>
          <div className="registration-form-header">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <h1 className="registration-form-heading">Registration Form</h1>
            <h1 className="heading">Start Your Success Journey here!</h1>
            <div className="close-button-container" onClick={() => navigate('/')}>
              <span className="close-icon">X</span>
            </div>
          </div>
          <div className="registration-form-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label1"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your Name "
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label2"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit-button" disabled={!formData.name || !formData.email}>Submit</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default GetProjectsPage;
