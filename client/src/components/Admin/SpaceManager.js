
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Card, Col, Row, Container } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const SpaceManager = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [editingSpace, setEditingSpace] = useState(null);
//   const [editedSpace, setEditedSpace] = useState({
//     name: '',
//     location: '',
//     capacity: 0,
//     amenities: '',
//     description: '',
//     date: new Date(),
//     times: ['']
//   });
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchSpaces = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/admin/space/spaces');
//         setSpaces(response.data);
//       } catch (err) {
//         console.error('Error fetching spaces:', err);
//       }
//     };

//     fetchSpaces();
//   }, []);

//   const handleSaveSpace = (savedSpace) => {
//     if (editingSpace) {
//       setSpaces(spaces.map(space => (space._id === savedSpace._id ? savedSpace : space)));
//       setEditingSpace(null);
//     } else {
//       setSpaces([...spaces, savedSpace]);
//     }
//     closeModal(); // Close the modal after saving
//   };

//   const handleEdit = (space) => {
//     setEditingSpace(space);
//     setEditedSpace({
//       ...space,
//       amenities: space.amenities.join(', '),
//       date: new Date(space.date),
//       times: space.times
//     });
//     setShowModal(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/admin/space/spaces/${id}`);
//       setSpaces(spaces.filter(space => space._id !== id));
//     } catch (err) {
//       console.error('Error deleting space:', err);
//     }
//   };

//   const openModal = () => {
//     setEditingSpace(null);
//     setEditedSpace({
//       name: '',
//       location: '',
//       capacity: 0,
//       amenities: '',
//       description: '',
//       date: new Date(),
//       times: ['']
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleEditFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const updatedSpace = {
//         ...editedSpace,
//         amenities: editedSpace.amenities.split(',').map(item => item.trim()),
//         date: editedSpace.date.toISOString()
//       };

//       let response;
//       if (editingSpace) {
//         response = await axios.put(`http://localhost:5000/admin/space/spaces/${editedSpace._id}`, updatedSpace);
//         setSpaces(spaces.map(space => (space._id === editedSpace._id ? response.data : space)));
//       } else {
//         response = await axios.post('http://localhost:5000/admin/space/spaces', updatedSpace);
//         setSpaces([...spaces, response.data]);
//       }

//       closeModal();
//     } catch (err) {
//       console.error('Error updating space:', err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEditedSpace(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     setEditedSpace(prevState => ({
//       ...prevState,
//       date: date,
//     }));
//   };

//   const handleTimeChange = (index, value) => {
//     const newTimes = [...editedSpace.times];
//     newTimes[index] = value;
//     setEditedSpace(prevState => ({
//       ...prevState,
//       times: newTimes,
//     }));
//   };

//   const addTimeField = () => {
//     setEditedSpace(prevState => ({
//       ...prevState,
//       times: [...prevState.times, ''],
//     }));
//   };

//   const removeTimeField = (index) => {
//     setEditedSpace(prevState => ({
//       ...prevState,
//       times: prevState.times.filter((_, i) => i !== index),
//     }));
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="mb-4 text-center">Space Manager</h2>
//       <Button variant="primary" onClick={openModal} className="mb-4">
//         <i className="fas fa-plus"></i> Add New Space
//       </Button>

//       <Row xs={1} sm={2} md={3} lg={3} className="g-4">
//         {spaces.map(space => (
//           <Col key={space._id}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title><i className="fas fa-building"></i> {space.name}</Card.Title>
//                 <Card.Text><i className="fas fa-map-marker-alt"></i> Location: {space.location}</Card.Text>
//                 <Card.Text><i className="fas fa-users"></i> Capacity: {space.capacity}</Card.Text>
//                 <Card.Text><i className="fas fa-tools"></i> Amenities: {space.amenities.join(', ')}</Card.Text>
//                 <Card.Text><i className="fas fa-info-circle"></i> Description: {space.description}</Card.Text>
//                 <Card.Text><i className="fas fa-calendar-alt"></i> Date: {new Date(space.date).toLocaleDateString()}</Card.Text>
//                 <Card.Text><i className="fas fa-clock"></i> Times: {space.times.join(', ')}</Card.Text>
//                 <Button variant="outline-primary" className="me-2" onClick={() => handleEdit(space)}>
//                   <i className="fas fa-edit"></i> Edit
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleDelete(space._id)}>
//                   <i className="fas fa-trash"></i> Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editingSpace ? 'Edit Space' : 'Add New Space'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleEditFormSubmit}>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 value={editedSpace.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formLocation">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter location"
//                 name="location"
//                 value={editedSpace.location}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formCapacity">
//               <Form.Label>Capacity</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter capacity"
//                 name="capacity"
//                 value={editedSpace.capacity}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formAmenities">
//               <Form.Label>Amenities (comma separated)</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter amenities"
//                 name="amenities"
//                 value={editedSpace.amenities}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formDescription">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Enter description"
//                 name="description"
//                 value={editedSpace.description}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formDate">
//               <Form.Label>Date</Form.Label>
//               <DatePicker
//                 selected={editedSpace.date}
//                 onChange={handleDateChange}
//                 className="form-control"
//               />
//             </Form.Group>
//             <Form.Group controlId="formTimes">
//               <Form.Label>Times</Form.Label>
//               {editedSpace.times.map((time, index) => (
//                 <div key={index} className="mb-2">
//                   <Form.Control
//                     type="time"
//                     value={time}
//                     onChange={(e) => handleTimeChange(index, e.target.value)}
//                   />
//                   <Button
//                     variant="danger"
//                     onClick={() => removeTimeField(index)}
//                     className="ms-2"
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button variant="primary" type="button" onClick={addTimeField}>
//                 Add Time
//               </Button>
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               {editingSpace ? 'Save Changes' : 'Add Space'}
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default SpaceManager;

// src/components/Admin/SpaceManager.js
// src/components/Admin/SpaceManager.js


// src/components/Admin/SpaceManager.js




























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card, Col, Row, Container } from 'react-bootstrap';

// const SpaceManager = () => {
//   const [spaces, setSpaces] = useState([]);
//   const [filter, setFilter] = useState('all'); // 'all', 'approved', 'declined', 'waiting'

//   useEffect(() => {
//     const fetchSpaces = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/admin/space/spaces');
//         setSpaces(response.data);
//       } catch (err) {
//         console.error('Error fetching spaces:', err);
//       }
//     };

//     fetchSpaces();
//   }, []);

//   const updateSpaceStatus = async (id, status) => {
//     try {
//       const response = await axios.patch(`http://localhost:5000/admin/space/spaces/${id}/status`, { status });
//       console.log('Space status updated:', response.data);

//       // Update local state to reflect the change
//       setSpaces(spaces.map(space => (space._id === id ? { ...space, approvalStatus: status } : space)));

//       // Remove declined spaces if filter is not set to declined
//       if (status === 'declined' && filter !== 'declined') {
//         setSpaces(spaces.filter(space => space._id !== id));
//       }
//     } catch (err) {
//       console.error('Error updating space status:', err);
//     }
//   };

//   // Filter spaces based on selected filter
//   const filteredSpaces = spaces.filter(space => {
//     if (filter === 'all') return true;
//     return space.approvalStatus === filter;
//   });

//   return (
//     <Container className="mt-4">
//       <h2 className="mb-4 text-center">Space Manager</h2>

//       {/* Filter Buttons */}
//       <div className="text-center mb-4">
//         <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
//         <Button variant="secondary" className="mx-2" onClick={() => setFilter('approved')}>Approved</Button>
//         <Button variant="secondary" onClick={() => setFilter('declined')}>Declined</Button>
//         <Button variant="secondary" className="mx-2" onClick={() => setFilter('waiting')}>Waiting</Button>
//       </div>

//       <Row xs={1} sm={2} md={3} lg={3} className="g-4">
//         {filteredSpaces.map(space => (
//           <Col key={space._id}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>{space.name}</Card.Title>
//                 <Card.Text>Location: {space.location}</Card.Text>
//                 <Card.Text>Capacity: {space.capacity}</Card.Text>
//                 <Card.Text>Amenities: {space.amenities.join(', ')}</Card.Text>
//                 <Card.Text>Description: {space.description}</Card.Text>
//                 <Card.Text>Date: {new Date(space.date).toLocaleDateString()}</Card.Text>
//                 <Card.Text>Times: {space.times.join(', ')}</Card.Text>
                
//                 {/* Approval Status Buttons */}
//                 {space.approvalStatus !== 'approved' && (
//                   <>
//                     <Button
//                       variant="success"
//                       className="me-2"
//                       onClick={() => updateSpaceStatus(space._id, 'approved')}
//                     >
//                       Approve
//                     </Button>
//                     {space.approvalStatus !== 'declined' && (
//                       <Button
//                         variant="danger"
//                         className="me-2"
//                         onClick={() => updateSpaceStatus(space._id, 'declined')}
//                       >
//                         Decline
//                       </Button>
//                     )}
//                     {space.approvalStatus !== 'waiting' && (
//                       <Button
//                         variant="warning"
//                         onClick={() => updateSpaceStatus(space._id, 'waiting')}
//                       >
//                         Waiting
//                       </Button>
//                     )}
//                   </>
//                 )}
//                 {space.approvalStatus === 'approved' && (
//                   <Button variant="outline-success" disabled>
//                     Approved
//                   </Button>
//                 )}
//                 {space.approvalStatus === 'declined' && (
//                   <Button variant="outline-danger" disabled>
//                     Declined
//                   </Button>
//                 )}
//                 {space.approvalStatus === 'waiting' && (
//                   <Button variant="outline-warning" disabled>
//                     Waiting
//                   </Button>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default SpaceManager;















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

const SpaceManager = () => {
  const [spaces, setSpaces] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'approved', 'declined', 'waiting'

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/admin/space/spaces`);
        setSpaces(response.data);
      } catch (err) {
        console.error('Error fetching spaces:', err);
      }
    };

    fetchSpaces();
  }, []);

  const updateSpaceStatus = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:5000/admin/space/spaces/${id}/status`, { status });
      console.log('Space status updated:', response.data);

      // Update local state to reflect the change
      setSpaces(spaces.map(space => (space._id === id ? { ...space, approvalStatus: status } : space)));

      // Don't remove declined spaces if filter is set to 'declined'
      if (status === 'declined' && filter !== 'declined') {
        setSpaces(spaces.filter(space => space._id !== id));
      }
    } catch (err) {
      console.error('Error updating space status:', err);
    }
  };

  // Filter spaces based on selected filter
  const filteredSpaces = spaces.filter(space => {
    if (filter === 'all') return true;
    return space.approvalStatus === filter;
  });

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Space Manager</h2>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
        <Button variant="secondary" className="mx-2" onClick={() => setFilter('approved')}>Approved</Button>
        <Button variant="secondary" onClick={() => setFilter('declined')}>Declined</Button>
        <Button variant="secondary" className="mx-2" onClick={() => setFilter('waiting')}>Waiting</Button>
      </div>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {filteredSpaces.map(space => (
          <Col key={space._id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{space.name}</Card.Title>
                <Card.Text>Location: {space.location}</Card.Text>
                <Card.Text>Capacity: {space.capacity}</Card.Text>
                <Card.Text>Amenities: {space.amenities.join(', ')}</Card.Text>
                <Card.Text>Description: {space.description}</Card.Text>
                <Card.Text>Date: {new Date(space.date).toLocaleDateString()}</Card.Text>
                <Card.Text>Times: {space.times.join(', ')}</Card.Text>
                
                {/* Approval Status Buttons */}
                {space.approvalStatus !== 'approved' && (
                  <>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => updateSpaceStatus(space._id, 'approved')}
                    >
                      Approve
                    </Button>
                    {space.approvalStatus !== 'declined' && (
                      <Button
                        variant="danger"
                        className="me-2"
                        onClick={() => updateSpaceStatus(space._id, 'declined')}
                      >
                        Decline
                      </Button>
                    )}
                    {space.approvalStatus !== 'waiting' && (
                      <Button
                        variant="warning"
                        onClick={() => updateSpaceStatus(space._id, 'waiting')}
                      >
                        Waiting
                      </Button>
                    )}
                  </>
                )}
                {space.approvalStatus === 'approved' && (
                  <Button variant="outline-success" disabled>
                    Approved
                  </Button>
                )}
                {space.approvalStatus === 'declined' && (
                  <Button variant="outline-danger" disabled>
                    Declined
                  </Button>
                )}
                {space.approvalStatus === 'waiting' && (
                  <Button variant="outline-warning" disabled>
                    Waiting
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpaceManager;