// // components/EventList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EventList = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/events');
//                 setEvents(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchEvents();
//     }, []);

//     return (
//         <div style={{padding:"10rem 0"}}>
//             {events.map(event => (
//                 <div key={event._id}>
//                     <h3>{event.title}</h3>
//                     <p>{event.description}</p>
//                     <p>Start Time: {new Date(event.startTime).toLocaleString()}</p>
//                     <p>End Time: {new Date(event.endTime).toLocaleString()}</p>
//                     <a href={event.meetLink} target="_blank" rel="noopener noreferrer">Join Meeting</a>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default EventList;














// // components/EventList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Col, Container, Row } from 'react-bootstrap';

// const EventList = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/events');
//                 setEvents(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchEvents();

//         const interval = setInterval(() => {
//             fetchEvents();
//         }, 60000); // Fetch events every minute to update status
        
//         return () => clearInterval(interval);
//     }, []);

//     const isEventActive = (startTime, endTime) => {
//         const now = new Date();
//         return now >= new Date(startTime) && now <= new Date(endTime);
//     };

//     return (
       
//         <Container style={{ padding: "10rem 0" }}>
//         <Row>
//             {events.map(event => (
//                 <Col key={event._id} sm={12} md={6} lg={4} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>{event.title}</Card.Title>
//                             <Card.Text>
//                                 {event.description}
//                             </Card.Text>
//                             <Card.Text>
//                                 <strong>Start Time:</strong> {new Date(event.startTime).toLocaleString()}<br />
//                                 <strong>End Time:</strong> {new Date(event.endTime).toLocaleString()}
//                             </Card.Text>
//                             {isEventActive(event.startTime, event.endTime) ? (
//                                 <a href={event.meetLink} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
//                                     Join Meeting
//                                 </a>
//                             ) : (
//                                 <span style={{ color: 'red' }}>Meeting Inactive</span>
//                             )}
//                             <span style={{ color: isEventActive(event.startTime, event.endTime) ? 'green' : 'red', marginLeft: '10px' }}>
//                                 ●
//                             </span>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     </Container>
//     );
// };

// export default EventList;

// components/EventList.js













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Col, Container, Row } from 'react-bootstrap';

// const EventList = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/events');
//                 setEvents(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchEvents();

//         const interval = setInterval(() => {
//             fetchEvents();
//         }, 60000); // Fetch events every minute to update status
        
//         return () => clearInterval(interval);
//     }, []);

//     const isEventActive = (startTime, endTime) => {
//         const now = new Date();
//         return now >= new Date(startTime) && now <= new Date(endTime);
//     };

//     return (
//         <Container style={{ padding: "10rem 0" }}>
//             <Row>
//                 {events.map(event => (
//                     <Col key={event._id} sm={12} md={6} lg={4} className="mb-4">
//                         <Card>
//                             {/* {event.posterPicture && ( */}
//                                 <img src={`http://localhost:5000${event.eventPoster}`} alt={event.title} />
//                             {/* )} */}
//                             <Card.Body>
//                                 <Card.Title>{event.title}</Card.Title>
//                                 <Card.Text>
//                                     {event.description}
//                                 </Card.Text>
//                                 <Card.Text>
//                                     <strong>Start Time:</strong> {new Date(event.startTime).toLocaleString()}<br />
//                                     <strong>End Time:</strong> {new Date(event.endTime).toLocaleString()}
//                                 </Card.Text>
//                                 {isEventActive(event.startTime, event.endTime) ? (
//                                     <a href={event.meetLink} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
//                                         Join Meeting
//                                     </a>
//                                 ) : (
//                                     <span style={{ color: 'red' }}>Meeting Inactive</span>
//                                 )}
//                                 <span style={{ color: isEventActive(event.startTime, event.endTime) ? 'green' : 'red', marginLeft: '10px' }}>
//                                     ●
//                                 </span>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default EventList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Using the environment variable for the host URL
                const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/events`);
                setEvents(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();

        const interval = setInterval(() => {
            fetchEvents();
        }, 60000); // Fetch events every minute to update status
        
        return () => clearInterval(interval);
    }, []);

    const isEventActive = (startTime, endTime) => {
        const now = new Date();
        return now >= new Date(startTime) && now <= new Date(endTime);
    };

    return (
        <Container style={{ padding: "10rem 0" }}>
            <Row>
                {events.map(event => (
                    <Col key={event._id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <img src={`${process.env.REACT_APP_HOST_URL}${event.eventPoster}`} alt={event.title} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    {event.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Start Time:</strong> {new Date(event.startTime).toLocaleString()}<br />
                                    <strong>End Time:</strong> {new Date(event.endTime).toLocaleString()}
                                </Card.Text>
                                {isEventActive(event.startTime, event.endTime) ? (
                                    <a href={event.meetLink} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                                        Join Meeting
                                    </a>
                                ) : (
                                    <span style={{ color: 'red' }}>Meeting Inactive</span>
                                )}
                                <span style={{ color: isEventActive(event.startTime, event.endTime) ? 'green' : 'red', marginLeft: '10px' }}>
                                    ●
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default EventList;
