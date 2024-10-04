
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from '../cards/BlogCard';
import axios from 'axios';

const Blogs = () => {
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
    <Container className="mt-4">
      <h2 className="sec-title">Blogs</h2>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog._id} sm={12} md={6} lg={4} style={{margin:"10px 0"}}>
            <BlogCard
              id={blog._id}
              title={blog.title}
              date={blog.createdAt} 
              summary={blog.content}
              image={blog.imageUrl} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
