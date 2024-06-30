import React from 'react';
import './PricingCard.css';

function PricingCard() {
  return (
    <div className="pricing-card">
      <div className="pricingcontent">
        <div>
          <h2 className="pricingtitle">Rookie</h2>
          <p className="pricingdescription">Grow steadily and pizza.</p>
        </div>
        <div className="pricingprice">
          <span className="pricingamount">$35</span>
          <span className="pricingper-month"> /mo</span>
        </div>
      </div>
      <div className="pricingbutton-container">
        <a className="pricingbutton" href="#">
          Get started
        </a>
      </div>
    </div>
    
  );
}

export default PricingCard;
