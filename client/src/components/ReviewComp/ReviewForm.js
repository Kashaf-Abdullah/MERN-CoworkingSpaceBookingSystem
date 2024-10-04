// frontend/src/components/ReviewForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import StarRating from './StarRating';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      name,
      comment,
      rating
    };

    try {
      const response = await axios.post(`http://localhost:5000/api/reviews`, newReview);
      setReviews([...reviews, response.data]);
      setName('');
      setComment('');
      setRating(1);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className='sec-title'>Leave a Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <StarRating rating={rating} setRating={setRating} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Write your comment"
                required 
              />
            </Form.Group>
            <button  class="button-64"  type="submit" style={{height:"4rem"}}>
              Submit Review
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewForm;
