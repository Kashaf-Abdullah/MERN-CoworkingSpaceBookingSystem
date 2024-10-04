


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog._id} lg={12} md={12} sm={12} className="mb-4">
            <Card className="d-flex flex-row" style={{height:"100%"}}>
              {blog.imageUrl && (
                <Card.Img variant="top" src={blog.imageUrl} alt={blog.title} style={{ width: '50%',height:"100%", objectFit: 'cover' }} />
              )}
              <Card.Body className="d-flex flex-column justify-content-between" style={{width:"50%"}}>
                <div>
                  <Card.Title>
                  {blog.title.split(' ').slice(0, 15).join(' ')}...
                 </Card.Title>
                  <Card.Text>
                    {blog.content.split(' ').slice(0, 10).join(' ')}...
                  </Card.Text>
                </div>
                <Link to={`/blog/${blog._id}`}>
                 Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;
