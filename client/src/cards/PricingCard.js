import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, price, features }) => {
  const cardStyle = {
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const priceStyle = {
    fontSize: '2.5rem',
    color: '#007bff',
  };

  const buttonStyle = {
    marginTop: '1rem',
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={titleStyle}>{title}</Card.Title>
        <Card.Subtitle style={priceStyle}>{price}</Card.Subtitle>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <FaCheck style={{ color: '#28a745', marginRight: '0.5rem' }} /> {feature}
            </li>
          ))}
        </ul>
        <Button variant="primary" style={buttonStyle}>Choose Plan</Button>
      </Card.Body>
    </Card>
  );
}
export default PricingCard;