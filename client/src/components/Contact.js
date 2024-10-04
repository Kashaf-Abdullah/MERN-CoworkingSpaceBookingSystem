import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  // Correct initialization with empty strings for form fields
  const [formData, setFormData] = useState({
    username: '', // Correctly initialized with empty string
    number: '',   // Correctly initialized with empty string
    email: '',    // Correctly initialized with empty string
    message: ''   // Correctly initialized with empty string
  });

  // Handles input change and updates state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handles form submission and sends data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        // Clear the form fields after successful submission
        setFormData({
          username: '',
          number: '',
          email: '',
          message: ''
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <Container>
      <Row style={{padding:"0 0 2rem 0"}}>
        <Col lg={6} md={6} sm={12} className="d-flex flex-column justify-content-center align-items-start text-left">
          <div>
            <h1 className='heading' style={{ textAlign: "left", color: "black" }}>Let's Talk About Everything!</h1>
            <p className='text'>
              Hello there! If you'd like to ask us something, you can get in touch with us here! We'd love to address any and all concerns you may have.
            </p>
            <h3 className='heading' style={{ textAlign: "left", color: "black" }}>Head Office</h3>
            <p className='text'>
             


            Boston, Massachusetts, USA
            </p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className='text'>Your Name*</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter a username"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label className='text'>Phone Number*</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter a number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className='text'>Email Address*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className='text'>Your Message*</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter message"
                rows={3}
                required
              />
            </Form.Group>

            <button className="button-64 w-100 mt-3 h-16"  type="submit">
              Send Your Question
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
