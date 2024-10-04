import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../assets/logodsp.png";
import { useNavigate } from 'react-router-dom';

function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page
  };
  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        position: "fixed",
        width: "100%",
        

        zIndex: 1000,
        backgroundColor: "var(--ghostwhite)",
        padding: "0.1rem 0",
        height: "5rem",
        top: "0",
      }}
    >
      <Container style={{ backgroundColor: "var(--ghostwhite)" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          style={{ margin: "0px 10px" }}
        >
          <h4
            className="navlogo"
            style={{
              fontWeight: "400",
              position: "relative",
              top: "4px",
              color: "#454545",
            }}
          >
            CoSpaceX Admin
          </h4>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleToggle}
          style={{ margin: "0px 10px" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
            <Nav.Link as={Link} to="/admin/spaces" onClick={handleNavLinkClick}>
              Add Spaces
            </Nav.Link>{" "}
          
         
            <Nav.Link as={Link} to="/admin/allspaces" onClick={handleNavLinkClick}>
             All Spaces
            </Nav.Link>{" "}
           
            <Nav.Link as={Link} to="/admin/approvedspaces" onClick={handleNavLinkClick}>
              Approve Spaces
            </Nav.Link>{" "}
         

         
            <Nav.Link as={Link} to="/admin/notif" onClick={handleNavLinkClick}>
             Notification
            </Nav.Link>{" "}
         
             </Nav>

          <Form
            className="d-flex nav-btns"
            style={{ display: "flex", flexWrap: "wrap" }}
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
            <Nav.Link as={Link} to="/signup" 
           onClick={handleLogout}>
            Logout
            </Nav.Link>{" "}
            </button>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
