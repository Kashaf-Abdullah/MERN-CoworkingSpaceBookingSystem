import React from 'react';
import PricingCard from '../cards/PricingCard';

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <PricingCard
            title="Basic"
            price="$10/month"
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
        </div>
        <div className="col-md-4">
          <PricingCard
            title="Standard"
            price="$20/month"
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
        </div>
        <div className="col-md-4">
          <PricingCard
            title="Premium"
            price="$30/month"
            features={['Feature 1', 'Feature 2', 'Feature 3']}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;