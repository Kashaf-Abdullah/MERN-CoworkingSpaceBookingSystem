import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SpaceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    capacity: '',
    amenities: '',
    description: '',
    date: '',
    times: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/admin/space/spaces`, formData);
      console.log('Space created:', res.data);
      // Optionally, you can handle success feedback or redirect to another page
    } catch (error) {
      console.error('Error creating space:', error);
      // Handle error feedback to the user
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Add a Space</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter space name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                required 
                placeholder="Enter location"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formCapacity">
              <Form.Label>Capacity</Form.Label>
              <Form.Control 
                type="number" 
                name="capacity" 
                value={formData.capacity} 
                onChange={handleChange} 
                required 
                placeholder="Enter capacity"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAmenities">
              <Form.Label>Amenities (comma-separated)</Form.Label>
              <Form.Control 
                type="text" 
                name="amenities" 
                value={formData.amenities} 
                onChange={handleChange} 
                placeholder="e.g. WiFi, Parking, Projector"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Enter a brief description"
            rows={3}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTimes">
              <Form.Label>Times (comma-separated)</Form.Label>
              <Form.Control 
                type="text" 
                name="times" 
                value={formData.times} 
                onChange={handleChange} 
                placeholder="e.g. 09:00, 13:00, 15:00"
              />
            </Form.Group>
          </Col>
        </Row>

        <button  type="submit" style={{padding:"1.2rem 0"}} className="m-auto button button-64 mt-4">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default SpaceForm;