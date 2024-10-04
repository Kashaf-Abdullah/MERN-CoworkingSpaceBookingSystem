import React, { useEffect } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../assets/user.avif'
import { useLocation } from 'react-router-dom';
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    date: 'Joined: Jan 2021',
    imageUrl: user,
    rating: 5
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer',
    date: 'Joined: Mar 2020',
    imageUrl:  user,
    rating: 4
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Project Manager',
    date: 'Joined: Aug 2019',
    imageUrl:  user,
    rating: 3
  },
  {
    id: 4,
    name: 'Sara Williams',
    role: 'QA Engineer',
    date: 'Joined: Nov 2021',
    imageUrl: user,
    rating: 5
  }
];

const Team = () => {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.hash === '#team') {
  //     const teamSection = document.getElementById('team');
  //     if (teamSection) {
  //       teamSection.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);





  // useEffect(() => {
  //   if (location.hash === '#team') {
  //     const teamSection = document.getElementById('team');
  //     if (teamSection) {
  //       const offset = 120; // Adjust this value as needed
  //       const elementPosition = teamSection.getBoundingClientRect().top + window.pageYOffset;
  //       const offsetPosition = elementPosition - offset;
  
  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: 'smooth'
  //       });
  //     }
  //   }
  // }, [location]);
  
  


  useEffect(() => {
    if (location.hash === '#team') {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        // Adjust offset based on viewport height
        const offset = window.innerHeight * 0.17; // 20% of the viewport height
        const elementPosition = teamSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);
  
  return (
    <Container  id="team" >
    <h3 className='sec-title' >Our Team</h3>
      <Row>
        {teamMembers.map((member) => (
          <Col key={member.id} md={3} style={{ marginBottom: '20px' }}>
            <Card style={{ textAlign: 'center', padding: '20px' }}>
              <Card.Img 
                variant="top" 
                src={member.imageUrl} 
                style={{ 
                  borderRadius: '50%', 
                  width: '150px', 
                  height: '150px', 
                  objectFit: 'cover', 
                  margin: 'auto' 
                }} 
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
                <div>
                  {Array.from({ length: member.rating }).map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                  {Array.from({ length: 5 - member.rating }).map((_, index) => (
                    <span key={index} style={{ color: '#ddd' }}>&#9733;</span>
                  ))}
                </div>
                <Card.Text style={{ marginTop: '10px' }}>
                  <small className="text-muted">{member.date}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;