
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [position, setPosition] = useState('');
//   const [bio, setBio] = useState('');
//   const [communicationPreferences, setCommunicationPreferences] = useState('');
//   const [workspacePreferences, setWorkspacePreferences] = useState('');
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('username', username);
//     formData.append('password', password);
//     formData.append('phoneNumber', phoneNumber);
//     formData.append('companyName', companyName);
//     formData.append('position', position);
//     formData.append('bio', bio);
//     formData.append('communicationPreferences', communicationPreferences);
//     formData.append('workspacePreferences', workspacePreferences);
//     formData.append('profilePicture', profilePicture);

//     try {
//       const response = await axios.post('http://localhost:5000/auth/signup', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       localStorage.setItem('token', response.data.token);
//       navigate('/admin');
//     } catch (err) {
//       console.error('Signup error:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Signup failed. Please try again.');
//     }
//   };

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   return (
//     <Container className="mt-5"  style={{padding:"10rem 0"}}>
//       <h1 className="text-center">Signup</h1>
//       <Form onSubmit={handleSignup} encType="multipart/form-data">
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="username" className="mb-3">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="password" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="phoneNumber" className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="companyName" className="mb-3">
//               <Form.Label>Company Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Form.Group controlId="position" className="mb-3">
//           <Form.Label>Position</Form.Label>
//           <Form.Control
//             type="text"
//             value={position}
//             onChange={(e) => setPosition(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="bio" className="mb-3">
//           <Form.Label>Bio</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="communicationPreferences" className="mb-3">
//           <Form.Label>Communication Preferences</Form.Label>
//           <Form.Control
//             type="text"
//             value={communicationPreferences}
//             onChange={(e) => setCommunicationPreferences(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="workspacePreferences" className="mb-3">
//           <Form.Label>Workspace Preferences</Form.Label>
//           <Form.Control
//             type="text"
//             value={workspacePreferences}
//             onChange={(e) => setWorkspacePreferences(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="profilePicture" className="mb-3">
//           <Form.Label>Profile Picture</Form.Label>
//           <Form.Control type="file" onChange={handleFileChange} />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="w-100">Signup</Button>
//       </Form>
//     </Container>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col, Image } from 'react-bootstrap';
import login from '../../assets/login.jpg'
function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [bio, setBio] = useState('');
  const [communicationPreferences, setCommunicationPreferences] = useState('');
  const [workspacePreferences, setWorkspacePreferences] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('companyName', companyName);
    formData.append('position', position);
    formData.append('bio', bio);
    formData.append('communicationPreferences', communicationPreferences);
    formData.append('workspacePreferences', workspacePreferences);
    formData.append('profilePicture', profilePicture);

    try {
      const response = await axios.post(`http://localhost:5000/auth/signup`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' ,padding:"42rem 0"}}>
      <Row className="  bg-white rounded" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src={login} alt="Signup Illustration" fluid />
        </Col>
        <Col md={6} className="p-5">
          <h1 className="text-center">Signup</h1>
          <Form onSubmit={handleSignup} encType="multipart/form-data">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group controlId="phoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="companyName" className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="position" className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="bio" className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="communicationPreferences" className="mb-3">
              <Form.Label>Communication Preferences</Form.Label>
              <Form.Control
                type="text"
                value={communicationPreferences}
                onChange={(e) => setCommunicationPreferences(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="workspacePreferences" className="mb-3">
              <Form.Label>Workspace Preferences</Form.Label>
              <Form.Control
                type="text"
                value={workspacePreferences}
                onChange={(e) => setWorkspacePreferences(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="profilePicture" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Button style={{backgroundColor:"var(--primary)",border:"2px solid var(--primary)"}} type="submit" className="w-100">Signup</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
