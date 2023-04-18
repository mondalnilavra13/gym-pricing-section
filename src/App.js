import React from 'react';
import './style.css';

function GymPricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-plan">
        <h2>Basic</h2>
        <h3>$19.99/month</h3>
        <ul>
          <li>Access to gym during regular hours</li>
          <li>Basic workout equipment</li>
          <li>No personal training sessions</li>
        </ul>
        <button>Sign Up</button>
      </div>
      <div className="pricing-plan">
        <h2>Premium</h2>     
        <h3>$49.99/month</h3>
        <ul>
          <li>24/7 gym access</li>
          <li>Full range of workout equipment</li>
          <li>1 personal training session/month</li>
        </ul>
        <button>Sign Up</button>
      </div>
      <div className="pricing-plan">
        <h2>Elite</h2>
        <h3>$99.99/month</h3>
        <ul>
          <li>24/7 gym access</li>
          <li>Full range of workout equipment</li>
          <li>2 personal training sessions/month</li>
        </ul>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default GymPricing;
