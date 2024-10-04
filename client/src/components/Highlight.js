

// import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import i1 from '../assets/1.png';
// import i2 from '../assets/2.webp';
// import i3 from '../assets/3.jpeg';
// import i4 from '../assets/4.jpeg';
// import i5 from '../assets/5.jpeg';
// import i6 from '../assets/6.jpeg';
// import i7 from '../assets/7.jpeg';
// import i8 from '../assets/8.jpeg';

// const images = [

//   { id: 1, src: i1, alt: 'Image 1' },
//   { id: 2, src: i2, alt: 'Image 2' },
//   { id: 3, src: i3, alt: 'Image 3' },
//   { id: 4, src: i4, alt: 'Image 4' },
//   { id: 5, src: i5, alt: 'Image 5' },
//   { id: 6, src: i6, alt: 'Image 6' },
//   { id: 7, src: i7, alt: 'Image 7' },
//   { id: 8, src: i8, alt: 'Image 8' },
// ];

// const Highlights = () => {

//   return (
//     <Container fluid  data-aos="fade-up">
//       <h3 className='sec-title'>Highlighted Client
//       </h3>
//       <Row className="justify-content-center">
//         {images.map(image => (
//           <Col key={image.id} lg={3} md={6} sm={12} className="mb-3">
//             <Link to={`/client/${image.id}`}>
//               <div style={{
//                 width: '100%',
//                 height: '300px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 overflow: 'hidden',
//                 padding: '10px',
//                 background: '#f8f8f8'
//               }}>
//                 <img src={image.src} alt={image.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
//               </div>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Highlights;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i1 from '../assets/1.png';
import i2 from '../assets/2.webp';
import i3 from '../assets/3.jpeg';
import i4 from '../assets/4.jpeg';
import i5 from '../assets/5.jpeg';
import i6 from '../assets/6.jpeg';
import i7 from '../assets/7.jpeg';
import i8 from '../assets/8.jpeg';

const images = [
  { id: 1, src: i1, alt: 'Image 1' },
  { id: 2, src: i2, alt: 'Image 2' },
  { id: 3, src: i3, alt: 'Image 3' },
  { id: 4, src: i4, alt: 'Image 4' },
  { id: 5, src: i5, alt: 'Image 5' },
  { id: 6, src: i6, alt: 'Image 6' },
  { id: 7, src: i7, alt: 'Image 7' },
  { id: 8, src: i8, alt: 'Image 8' },
];

const Highlights = () => {
  // Define inline styles for the image container and images
  const containerStyle = {
    width: '100%',
    height: '300px', // Set a fixed height for all images
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: '#f8f8f8',
    border: '1px solid #ddd', // Optional: adds a border around each image container
    borderRadius: '5px', // Optional: rounds the corners of the container
  };

  const imageStyle = {
    width: '300px', // Set a fixed width for uniformity
    height: '300px', // Set a fixed height for uniformity
    objectFit: 'cover', // Ensures the image covers the container without distortion
  };

  return (
    <Container fluid data-aos="fade-up">
      <h3 className='sec-title'>Highlighted Clients</h3>
      <Row className="justify-content-center">
        {images.map(image => (
          <Col key={image.id} lg={3} md={6} sm={12} className="mb-3">
           
              <div style={containerStyle}>
                <img src={image.src} alt={image.alt} style={imageStyle} />
              </div>
         
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Highlights;