import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/esm/Row'
import i1 from '../assets/1.png'
import Aos from "aos";
import "aos/dist/aos.css";
// import video1 from '../assets/Work/Soly Systems/Balance Out your Energy Use.mp4'
import {
 
  FaLinkedin,
  FaStar,
 
} from "react-icons/fa";
import { Nav } from 'react-bootstrap'
const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const iconStyle={
    backgroundColor: "var(--white)",
              fontSize: "20px",
              fontWeight: "800",
              color: "var(--green)",
              border: "2px solid var(--green)",
              borderRadius:"50%",
              margin:"0 1px",
              padding:"8px 10px"
             
  }
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
      <Container  data-aos="fade-right">
      <Row className="align-items-center" style={{ justifyContent: 'space-between',paddingTop:"4rem" ,margin:"4rem 0"}}>
        <Col lg={6} md={6} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Row>
            <h4 style={{textAlign:"left",fontWeight:"800",fontSize:"2.2rem",textAlign:"left",color:"var(--gray)",marginBottom:"1rem"}}>Coworking space booking</h4>
          <p className='text'>

          we believe that the future of work is flexible, collaborative, and inspiring. Our coworking space is designed to foster innovation, creativity, and productivity, providing a professional yet comfortable environment for freelancers, entrepreneurs, startups, and established businesses alike.</p>

          <h4  style={{textAlign:"left",fontWeight:"600",fontSize:"1.4rem",margin:"1rem 0"}}><i> Choose the plan that fits your work style and budget, and enjoy the freedom to scale up or down as your business grows.</i></h4>
<p  className='text'>
our coworking space offers easy access to transportation, dining, and entertainment options. Whether you're commuting from nearby neighborhoods or meeting clients in the city, our convenient location makes us the perfect choice
</p>

<div className="logo-social-media" style={{ margin: "1rem 0" }}>

    <button className='button-52' style={{margin:"0 4px"}}>
    <Nav.Link as={Link} to="/event" onClick={handleNavLinkClick} style={{color:"white"}}>
            Events
            </Nav.Link>
    </button>
        </div>
       
            </Row>
        </Col>
        <Col lg={6} md={6} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,color:"var(--white)"}}>

      
          <div className="circle">
            <img
              src={i1}
              alt="description"
              className="img-fluid"
            />
          </div>
        </Col>
        </Row>
      </Container>
 
  )
}

export default Intro
