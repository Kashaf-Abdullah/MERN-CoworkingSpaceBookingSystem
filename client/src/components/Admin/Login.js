

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/auth/login', {
//         email,
//         password,
//       });

//       const token = res.data.token;
//       localStorage.setItem('token', token); // Store token in localStorage

//       // Check if admin credentials are used
//       if (email === 'admin@gmail.com' && password === 'admin01#') {
//         navigate('/admin');
//       } else {
//         navigate('/admin-dashboard'); // Redirect to a different route for regular users
//       }
//     } catch (err) {
//       console.error('Login error:', err.response?.data?.msg || err.message);
//       setError(err.response?.data?.msg || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <Container className="mt-14" style={{ padding: "10rem 0" }}>
//       <h2 className="text-center">Login</h2>
//       <Form onSubmit={handleLogin}>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="password" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="w-100">Login</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, Image } from 'react-bootstrap';
import login from '../../assets/login.jpg'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/auth/login`, {
        email,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('token', token); // Store token in localStorage

      // Check if admin credentials are used
      if (email === 'admin@gmail.com' && password === 'admin01#') {
        navigate('/admin');
      } else {
        navigate('/admin-dashboard'); // Redirect to a different route for regular users
      }
    } catch (err) {
      console.error('Login error:', err.response?.data?.msg || err.message);
      setError(err.response?.data?.msg || 'Login failed. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh',padding:"32rem 0"}}>
      <Row className=" bg-white rounded" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src={login} alt="Login Illustration" fluid />
        </Col>
        <Col md={6} className="p-5">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Button style={{backgroundColor:"var(--primary)",border:"2px solid var(--primary)"}} type="submit" className="w-100">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
