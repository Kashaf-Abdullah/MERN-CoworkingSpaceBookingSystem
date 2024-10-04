

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('accessToken');
//         const response = await fetch('http://localhost:3001/api/profile', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch user data');
//         }

//         const data = await response.json();
//         setUserData(data.user);
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//         setError(error.message);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Container>
//       <h1 className="mt-5 mb-4">Profile</h1>
//       <Row>
//         <Col md={6}>
//           {userData && (
//             <Card>
//               <Card.Body>
//                 <Card.Title>{userData.name}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
//                 <Card.Text>
//                   {/* Display additional user information here */}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // export default Profile;
// import React from 'react'

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if token is not available
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get('http://localhost:5000/auth/me', config);
        setUserData(res.data);
      } catch (err) {
        console.error('Error fetching user data:', err.response?.data || err.message);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page
  };

  // Inline CSS styles for the components
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    margin: '10px',
  };

  const profilePictureStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  border:"1px solid var(--primary)",
  padding:"10px"
  };

  const infoTextStyle = {
    margin: '5px 0',
    fontSize: '16px',
    color: '#333',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <Container style={{ marginTop: '7rem' }}>
    <Row>
      <Col md={4} className="text-center">
        <div style={cardStyle}>
          {userData.profilePicture && (
            <img
              src={`http://localhost:5000${userData.profilePicture}`}
              alt="Profile"
              style={profilePictureStyle}
            />
          )}
          <h4 style={headerStyle}>{userData.username}</h4>
          <p style={infoTextStyle}>{userData.email}</p>
          <p style={infoTextStyle}>{userData.bio}</p>
          <Button style={{backgroundColor:"var(--primary)"}} onClick={handleLogout}>Logout</Button>
        </div>
      </Col>
      <Col md={8}>
        <div style={cardStyle}>
          <h2 style={headerStyle}>User Information</h2>
          <Row>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Name:</strong> {userData.username}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Email:</strong> {userData.email}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Phone Number:</strong> {userData.phoneNumber}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Company Name:</strong> {userData.companyName}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Position:</strong> {userData.position}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Communication Preferences:</strong> {userData.communicationPreferences}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}><strong>Workspace Preferences:</strong> {userData.workspacePreferences}</div>
            </Col>
            <Col md={6}>
              <div style={infoTextStyle}>
                <strong>Status:</strong> 
                <span style={{ color: userData.status === 'Active' ? 'green' : 'gray', marginLeft: '10px' }}>
                  {userData.status}
                </span>
              </div>
            </Col>
          </Row>
          {/* <div style={{ marginTop: '20px' }}>
            <Link to="/admin/spaces" className="btn btn-primary" style={{ marginRight: '10px' }}>Add Spaces</Link>
            <Link to="/admin/allspaces" className="btn btn-secondary" style={{ marginRight: '10px' }}>All Spaces</Link>
            <Link to="/admin/approvedspaces" className="btn btn-secondary" style={{ marginRight: '10px' }}>Approve Spaces</Link>

</div> */}
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Profile
