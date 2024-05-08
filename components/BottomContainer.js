import React, { useState } from 'react';
import './BottomContainer.css'; // Import the CSS file for styling
import unionImage from '../assets/union1.png';

const BottomContainer = () => {
  const [showContent, setShowContent] = useState({
    offerFreelancers: false,
    guaranteeSatisfaction: false,
    hireMultipleTalents: false,
    notGoToAgency: false,
    helpPickSkillset: false,
  });

  const handleToggleContent = (question) => {
    setShowContent((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div className="bottom-container">
      <div className="left-content">
        <span className="whats-on-your-mind">What's on your mind</span>
        <br/>
        <span className="ask-question">Ask questions?</span>
        <div className="union">
          <img src={unionImage} alt="union" style={{ width: '55%', height: '5%'}} />
        </div>
      </div>
      <div className="right-content">
        <span className="do-you-offer">Do you offer freelancers?</span>
        {/* Toggle button */}
        <span className="toggle-content" onClick={() => handleToggleContent('offerFreelancers')}>
          {showContent.offerFreelancers ? '-' : '+'}
        </span>
        {/* Additional content */}
        {showContent.offerFreelancers && <span className="addition-content">Addition content for offering freelancers...</span>}
        {/* Horizontal line */}
        <hr className="horizontal-line" />

        {/* Other questions */}
        <span className="do-you-offer">What's the guarantee that I will be satisfied with the hired talent?</span>
        <span className="toggle-content" onClick={() => handleToggleContent('guaranteeSatisfaction')}>
          {showContent.guaranteeSatisfaction ? '-' : '+'}
        </span>
        {showContent.guaranteeSatisfaction && <span className="addition-content">Addition content for satisfaction guarantee...</span>}
        <hr className="horizontal-line" />

        <span className="do-you-offer">Can I hire multiple talents at once?</span>
        <span className="toggle-content" onClick={() => handleToggleContent('hireMultipleTalents')}>
          {showContent.hireMultipleTalents ? '-' : '+'}
        </span>
        {showContent.hireMultipleTalents && <span className="addition-content">Addition content for hiring multiple talents...</span>}
        <hr className="horizontal-line" />

        <span className="do-you-offer">Why should I not go to an agency directly?</span>
        <span className="toggle-content" onClick={() => handleToggleContent('notGoToAgency')}>
          {showContent.notGoToAgency ? '-' : '+'}
        </span>
        {showContent.notGoToAgency && <span className="addition-content">Addition content for not going to agency directly...</span>}
        <hr className="horizontal-line" />

        <span className="do-you-offer">Who can help me pick a right skillset and duration for me?</span>
        <span className="toggle-content" onClick={() => handleToggleContent('helpPickSkillset')}>
          {showContent.helpPickSkillset ? '-' : '+'}
        </span>
        {showContent.helpPickSkillset && <span className="addition-content">Addition content for help in picking skillset...</span>}
        <hr className="horizontal-line" />

        {/* Union element */}
        
        
      </div>
    </div>
  );
};

export default BottomContainer;