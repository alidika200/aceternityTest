import React from 'react';
import PricingCard from './price-card';
import './pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <PricingCard title='Rookie' />
      <PricingCard  title='Expert' />
      <PricingCard  title='gold' />
    </div>
  );
};

export default Pricing;
