// frontend/src/components/AllReview.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, ListGroup,Row,Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const AllReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="#e4e5e9" />);
      }
    }
    return stars;
  };

  return (
    <Container>
      <h2 className="mt-5">All Reviews</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {reviews.map((review) => (
          <Col key={review._id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {renderStars(review.rating)}
                </Card.Subtitle>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllReview;
