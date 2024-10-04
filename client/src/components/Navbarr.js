import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        position: "fixed",
        width: "100%",

        zIndex: 10000,
        backgroundColor: "var(--ghostwhite)",
        padding: "0.1rem 0",
        // height: "5rem",
        top: "2.5rem",
      }}
    >
      <Container  style={{ backgroundColor: "var(--ghostwhite)" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          style={{ margin: "0px 10px" }}
        >
          {/* <h4
            className="navlogo"
            style={{
              fontWeight: "400",
              position: "relative",
              top: "4px",
              color: "#454545",
            }}
          >
            CoSpaceX
          </h4> */}
          <img src={logo} alt=""
          style={{
           width:"7rem",
           height:"4rem"
            }} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleToggle}
          style={{ margin: "0px 10px" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
            <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
              Home
            </Nav.Link>{" "}
            <NavDropdown title="Coworking Spaces" id="basic-nav-dropdown">
              
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/review" onClick={handleNavLinkClick} >
                  Review
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick} >
                 Contact Us
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/services" onClick={handleNavLinkClick} >
                 Our Services
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick} > 
                 Our Blogs
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/membership" onClick={handleNavLinkClick}>
              Memberships Plan
            </Nav.Link>{" "}
            {/* <Nav.Link as={Link} to="/services" onClick={handleNavLinkClick}>
              Services
            </Nav.Link>{" "} */}
         
            <Nav.Link as={Link} to="/event" onClick={handleNavLinkClick}>
              Events/Workshops
            </Nav.Link>{" "}

            <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick}>
              About Us
            </Nav.Link>{" "}
           
            {/* <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
              Blogs
            </Nav.Link>{" "} */}
          </Nav>
          <Form
            className="d-flex nav-btns"
            style={{ display: "flex" }}
          >
            <button
              className="buttonn"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "800",
                border: "3px solid var(--primary)",
              }}
            >
            <Nav.Link as={Link} to="/signup" onClick={handleNavLinkClick} style={{color:"white"}}>
             Register
            </Nav.Link>{" "}
            </button>
            <button
              className="buttonn"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontWeight: "800",
                color: "var(--primary)",
                border: "2px solid var(--primary)",
              }}
            >
             <Nav.Link as={Link} to="/login" onClick={handleNavLinkClick} style={{color:"var(--primary)"}}>
              Login
            </Nav.Link>{" "}
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
