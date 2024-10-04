




// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const NotifyButton = () => {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   const sendNotification = () => {
//     fetch('http://localhost:5000/send-notification', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: title,
//         body: body,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => console.log('Notification sent:', data))
//     .catch(error => console.error('Error:', error));
//   };

//   return (
//     <Container  className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <Row>
//         <Col  style={{padding:"6%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
//           <Form>
//             <Form.Group controlId="formTitle">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter notification title"
//               />
//             </Form.Group>

//             <Form.Group controlId="formBody">
//               <Form.Label>Body</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//                 placeholder="Enter notification body"
//               />
//             </Form.Group>

//             <button className=" buttonn button-64 mt-3" onClick={sendNotification} >
//               Send Notification
//             </button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default NotifyButton;





import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import bell from '../assets/Bell.gif'
const NotifyButton = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const sendNotification = () => {
    fetch(`${process.env.REACT_APP_HOST_URL}/send-notification`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log('Notification sent:', data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="p-3 bg-white rounded" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src={bell} alt="Notification Illustration" fluid />
        </Col>
        <Col md={6} className="p-5">
          <h2 className="text-center mb-4">Send Your Notification</h2>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter notification title"
                className="mb-3"
              />
            </Form.Group>

            <Form.Group controlId="formBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter notification body"
                className="mb-3"
              />
            </Form.Group>

            <Button  style={{backgroundColor:"var(--primary)",border:"2px solid var(--primary)"}}  onClick={sendNotification} className="w-100">
              Send Notification
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NotifyButton;
