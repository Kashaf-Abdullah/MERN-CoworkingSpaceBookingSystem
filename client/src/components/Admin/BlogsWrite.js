import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
const BlogsWrite = () => {
  const [email,setEmail]=useState('')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email)
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
     const response = await axios.post(`http://localhost:5000/api/blogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog created:', response.data);
      // Reset the form fields
      setEmail('')
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2 className="sec-title mb-4">Write a Blog</h2>
      <Form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderRadius: '5px' }}
          />
        </Form.Group>
     
     
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ borderRadius: '5px' }}
          />
        </Form.Group>
        <Form.Group controlId="formContent" className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your blog content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ borderRadius: '5px' }}
          />
        </Form.Group>
        <Form.Group controlId="formImage" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ borderRadius: '5px' }}
          />
        </Form.Group>
        <button className="button-29" type="submit" block style={{ width: '100%', padding: '10px', borderRadius: '5px' }}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default BlogsWrite;
