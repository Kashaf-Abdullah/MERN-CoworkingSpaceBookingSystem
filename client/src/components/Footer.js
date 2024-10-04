import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--primary)", padding: "2rem" }}>
        <Container>
          <Row>
            <Col lg={2} md={2} sm={12}>
              <h4
                className="navlogo"
                style={{
                  fontWeight: "400",
                  position: "relative",
                  top: "4px",
                  color: "var(--white)",
                }}
              >
                GEOTAB
              </h4>

              <div className="logo-social-media" style={{ margin: "1rem 0" }}>
                <FaFacebook
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaInstagram
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaYoutube
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <br />
                <FaPinterest
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaTwitter
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaLinkedin
                  style={{
                    background: "var(--white)",
                    color: "var(--primary)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
              </div>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>Our Services</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li><Link to="/services" style={{ color: "var(--white)" }}>Staging</Link></li>
                <li><Link to="/services" style={{ color: "var(--white)" }}>Design</Link></li>
                <li><Link to="/services" style={{ color: "var(--white)" }}>Live Consultations</Link></li>
              </ul>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>PAGES</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li><Link to="/" style={{ color: "var(--white)" }}>Home</Link></li>
                <li><Link to="/membership" style={{ color: "var(--white)" }}>Membership</Link></li>
                <li><Link to="/services" style={{ color: "var(--white)" }}>Services</Link></li>
                <li><Link to="/create-event" style={{ color: "var(--white)" }}>Create Event</Link></li>
                <li><Link to="/event" style={{ color: "var(--white)" }}>Event List</Link></li>
                <li><Link to="/blogs" style={{ color: "var(--white)" }}>Blogs</Link></li>
                <li><Link to="/login" style={{ color: "var(--white)" }}>Login</Link></li>
                <li><Link to="/signup" style={{ color: "var(--white)" }}>Signup</Link></li>
              </ul>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>GET HELP</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li><Link to="/help-center" style={{ color: "var(--white)" }}>Help Center</Link></li>
                <li><Link to="/contact-us" style={{ color: "var(--white)" }}>Contact Us</Link></li>
                <li><Link to="/privacy-policy" style={{ color: "var(--white)" }}>Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" style={{ color: "var(--white)" }}>Terms and Conditions</Link></li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div
                className="subs-form"
                style={{
                  padding: "2rem",
                  boxShadow: "var(--ghostwhite) 0px 2px 8px 0px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "var(--white)",
                  }}
                >
                  <FaMailBulk style={{ fontSize: "2rem", margin: "auto" }} />
                  <br />
                  SUBSCRIBE
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "var(--white)",
                  }}
                >
                  Subscribe to our newsletter and stay updated!
                </p>
                <Form onSubmit={""}>
                  <Form.Group controlId="firstName">
                    <Form.Label
                      style={{
                        color: "var(--white)",
                        fontWeight: "600",
                      }}
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="lastName">
                    <Form.Label
                      style={{
                        color: "var(--white)",
                        fontWeight: "600",
                      }}
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label
                      style={{
                        color: "var(--white)",
                        fontWeight: "600",
                      }}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    style={{
                      margin: "1rem 0",
                      color: "var(--primary)",
                      backgroundColor: "var(--white)",
                      border: "1p solid var(--white)",
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <p
        style={{
          textAlign: "center",
          position: "relative",
          top: "5px",
          padding: "0.2rem 0",
        }}
      >
        <span style={{ color: "var(--greenish_gray)" }}>
          COPYRIGHT COOWORKING SPACE -{" "}
        </span>{" "}
        <span style={{ color: "var(--lightbrown)" }}>
          TERMS & CONDITIONS PRIVACY POLICY
        </span>{" "}
      </p>
    </>
  );
};

export default Footer;
