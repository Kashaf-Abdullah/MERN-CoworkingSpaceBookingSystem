import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import i1 from '../assets/8.jpeg';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const About = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [expanded, setExpanded] = useState(false);
  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };
  
  const tickStyle = {
    color: "var(--white)",
    borderRadius: "50%",
    fontSize: "24px",
    position: "relative",
    top: "4px",
    marginRight: "6px",
    backgroundColor:"var(--primary)"
     };

  const listStyle = {
    
  };
  const list = {
    margin: "10px 0",
  };
  return (
    <Container>
    <Row
      style={{ display: "flex", flexDirection: props.dir, margin: "5rem 0" }}
    >
      <Col lg={6} md={6} sm={12}
      data-aos="fade-left"
    >
     
        <h4
      
          style={{
            fontSize: "2.9rem",
            fontWeight: "600",
            color: "var(--black)",
           
          }}
        >
         About Us
        </h4>

        <p className="text">
        Welcome to Cooworking Booking Space, where innovation meets collaboration. We are more than just a workspace; we are a vibrant community of professionals, entrepreneurs, and creatives, all working together to achieve their goals
        </p>
        <ul
          style={{
            display: props.dis,
            fontSize: "0.9rem",
            listStyleType: "none",
            paddingLeft: "0rem",
          }}
        >
        <li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> Flexible Workspace Options to Suit Your Needs
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> High-Speed Internet and Modern Office Equipment
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> Networking Opportunities with Like-Minded Professionals
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> Access to Meeting Rooms and Event Spaces
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> Complimentary Coffee, Tea, and Snacks
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> 24/7 Secure Access to the Workspace
</li>
<li style={{ margin: "5px 0", color: "var(--primary)" }}>
  <i className="fa fa-check-circle" style={tickStyle}></i> Community Events and Workshops to Boost Your Skills
</li>

        </ul>
        {/* <button class="button-52" role="button">
        Try Now
        </button> */}
        <button className='button-52' style={{margin:"0 4px"}}>
    <Link as={Link} to="/login" onClick={handleNavLinkClick} style={{color:"white"}}>
            Try Now
            </Link>
    </button>
      </Col>
      <Col lg={6} md={6} sm={12} data-aos="fade-right">
        <img
          src={i1}
          alt=""
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "10px",
            backgroundColor: "#DFF0D8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "2rem 0",
          }}
        />
      </Col>
    </Row>
    </Container>
  );
};

export default About;
