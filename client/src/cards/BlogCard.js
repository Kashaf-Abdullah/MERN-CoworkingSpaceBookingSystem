



import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, date, summary, image }) => {
  // Limit the summary to 100 characters
  const shortSummary = summary.length > 100 ? `${summary.substring(0, 100)}...` : summary;

  return (
    <Card className="mb-4 blog-card" style={{height:"100%"}}>
      <Card.Img variant="top" src={image} alt={title} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{shortSummary}</Card.Text>
        <Link to={`/blog/${id}`}>
         See More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
