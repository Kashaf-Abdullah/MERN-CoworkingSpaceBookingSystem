// src/components/Admin/AllSpaces.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Container } from 'react-bootstrap';

const AllSpaces = () => {
  const [approvedSpaces, setApprovedSpaces] = useState([]);

  useEffect(() => {
    const fetchApprovedSpaces = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/admin/space/spaces/approved`);
        setApprovedSpaces(response.data);
      } catch (err) {
        console.error('Error fetching approved spaces:', err);
      }
    };

    fetchApprovedSpaces();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Approved Spaces</h2>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {approvedSpaces.map(space => (
          <Col key={space._id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{space.name}</Card.Title>
                <Card.Text>Location: {space.location}</Card.Text>
                <Card.Text>Capacity: {space.capacity}</Card.Text>
                <Card.Text>Amenities: {space.amenities.join(', ')}</Card.Text>
                <Card.Text>Description: {space.description}</Card.Text>
                <Card.Text>Date: {new Date(space.date).toLocaleDateString()}</Card.Text>
                <Card.Text>Times: {space.times.join(', ')}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllSpaces;
