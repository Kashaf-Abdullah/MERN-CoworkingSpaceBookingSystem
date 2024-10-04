// frontend/src/components/StarRating.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, setRating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={30}
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
