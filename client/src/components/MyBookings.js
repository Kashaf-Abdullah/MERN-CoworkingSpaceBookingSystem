// src/components/MyBookings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/bookings/mine`, config);
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err.response?.data || err.message);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`${process.env.REACT_APP_HOST_URL}/bookings/${bookingId}`, config);
      setBookings(bookings.filter(booking => booking._id !== bookingId));
    } catch (err) {
      console.error('Error canceling booking:', err.response?.data || err.message);
    }
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Row>
        {bookings.map((booking) => (
          <Col md={4} key={booking._id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{booking.space.name}</Card.Title>
                <Card.Text>Date: {new Date(booking.date).toLocaleDateString()}</Card.Text>
                <Card.Text>Time: {booking.time}</Card.Text>
                <Card.Text>Duration: {booking.duration} hour(s)</Card.Text>
                <Button variant="danger" onClick={() => handleCancelBooking(booking._id)}>
                  Cancel Booking
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyBookings;
