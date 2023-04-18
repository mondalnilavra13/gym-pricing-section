import React from 'react';
import './style.css';

function GymPricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-plan">
        <h2>Basic</h2>
        <img src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g" alt="Premium plan" />
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
        <img src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g" alt="Premium plan" />
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
        <img src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g" alt="Premium plan" />
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
