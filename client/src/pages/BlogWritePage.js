import React from 'react'
import BlogsWrite from '../components/Admin/BlogsWrite'
import { Col, Container, Row } from 'react-bootstrap'
import BlogList from '../components/BlogList'

const BlogWritePage = () => {
  return (
    <Container fluid>
    <Row className="w-100" style={{ display: 'flex',padding:"1rem 0" }}>
        <Col lg={8} md={12} style={{ backgroundColor: '#f8f9fa', padding: '20px', overflowY: 'auto' }}>
          <BlogsWrite />
        </Col>
        <Col lg={4} md={12} style={{ backgroundColor: '#ffffff', padding: '20px', overflowY: 'auto' }}>
          <BlogList />
        </Col>
      </Row>
      </Container>
  )
}

export default BlogWritePage
