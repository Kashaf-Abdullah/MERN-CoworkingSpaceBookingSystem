


import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faLaptopHouse,
  faBriefcase,
  faUsers,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [activeStep, setActiveStep] = useState(1);

  
  const handleStepClick = (step) => {
    setActiveStep(step);
  };


  // Steps and Icons
  const steps = [
    { id: 1, label: "Hot Desks", icon: faChair },
    { id: 2, label: "Dedicated Desks", icon: faLaptopHouse },
    { id: 3, label: "Private Offices", icon: faBriefcase },
    { id: 4, label: "Meeting Rooms", icon: faUsers },
    { id: 5, label: "Event Spaces", icon: faCalendarAlt },
  ];

  // Section Content with Bullet Points
  const sectionContent = [
    {
      id: 1,
      title: "Hot Desks",
      content:
        "Our hot desks offer flexible seating on a first-come, first-served basis. Ideal for freelancers and remote workers looking for a collaborative environment. Enjoy high-speed internet, comfortable seating, and access to common areas.",
      points: ["Flexible seating", "High-speed internet", "Access to common areas"],
    },
    {
      id: 2,
      title: "Dedicated Desks",
      content:
        "Dedicated desks provide a personal workspace that's all yours. Perfect for individuals needing a consistent workspace with more storage and privacy than a hot desk. Comes with ergonomic chairs and lockable storage.",
      points: ["Personal workspace", "Ergonomic chairs", "Lockable storage"],
    },
    {
      id: 3,
      title: "Private Offices",
      content:
        "Private offices offer a secluded, lockable space for you or your team. Fully furnished with desks, chairs, and storage, these offices provide a quiet and professional environment ideal for focused work or confidential meetings.",
      points: ["Secluded, lockable space", "Fully furnished", "Quiet environment"],
    },
    {
      id: 4,
      title: "Meeting Rooms",
      content:
        "Our meeting rooms are designed for professional gatherings, equipped with conference tables, chairs, projectors, and teleconferencing tools. Book these rooms for team meetings, client presentations, or brainstorming sessions.",
      points: ["Conference tables", "Projectors and AV equipment", "Teleconferencing tools"],
    },
    {
      id: 5,
      title: "Event Spaces",
      content:
        "Event spaces are versatile areas perfect for hosting workshops, seminars, or networking events. These spaces are equipped with AV technology and can be arranged to suit the nature of your event, from casual gatherings to formal presentations.",
      points: ["Versatile layout options", "Equipped with AV technology", "Ideal for events"],
    },
  ];

  const mainStyle = {
    margin: 0,
    fontFamily: "'Roboto Condensed', sans-serif",
  };

  const h4Style = {
    color: "#333",
    fontWeight: 800,
    margin: "70px 0",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "4px",
    lineHeight: "23px",
    fontSize:"43px"
  };

  const processWrapperStyle = {
    margin: "auto",
    maxWidth: "1080px",
  };

  const progressBarContainerStyle = {
    position: "relative",
    width: "90%",
    margin: "auto",
    height: "100px",
    marginTop: "40px",
  };

  const ulStyle = {
    padding: 0,
    margin: 0,
    paddingTop: "15px",
    zIndex: 9999,
    position: "absolute",
    width: "100%",
    marginTop: "-40px",
    display: "flex",
    justifyContent: "space-between",
  };

  const liStyle = {
    listStyle: "none",
    width: "20%",
    textAlign: "center",
    color: "#aaa",
    textTransform: "uppercase",
    fontSize: "11px",
    cursor: "pointer",
    fontWeight: 700,
    transition: "all ease 0.2s",
    verticalAlign: "bottom",
    height: "70px",
    position: "relative",
  };

  const stepInnerStyle = {
    position: "absolute",
    width: "100%",
    bottom: 0,
    fontSize: "14px",
  };

  const lineStyle = {
    width: "80%",
    margin: "auto",
    background: "#E9EAF2",
    height: "6px",
    position: "absolute",
    left: "10%",
    top: "57px",
    zIndex: 1,
    borderRadius: "50px",
    transition: "all ease 0.9s",
  };

  const lineProgressStyle = {
    content: " ",
    width: `${(activeStep - 1) * 25}%`,
    height: "100%",
    background: "#4EA5B7",
    position: "absolute",
    zIndex: 2,
    borderRadius: "50px",
    transition: "all ease 0.9s",
  };

  const progressContentSectionStyle = {
    width: "90%",
    margin: "auto",
    background: "#4EA5B7",
    borderRadius: "4px",
  };

  const sectionContentStyle = {
    padding: "30px 40px",
    textAlign: "center",
    display: "none",
    animation: "FadeInUp 700ms ease 1",
    animationFillMode: "forwards",
    transform: "translateY(15px)",
    opacity: 0,
    background: "#fff",
    borderRadius: "4px",
    marginTop: "20px",
  };

  const sectionContentActiveStyle = {
    ...sectionContentStyle,
    display: "block",
    transform: "translateY(0px)",
    opacity: 1,
  };

  return (
    <Container>
      <h4 className="sec-title"> Services</h4>
      <div style={mainStyle}>
        <div style={processWrapperStyle}>
          <div style={progressBarContainerStyle}>
            <ul style={ulStyle}>
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={`step step0${step.id} ${
                    activeStep >= step.id ? "active" : ""
                  }`}
                  style={{
                    ...liStyle,
                    color: activeStep >= step.id ? "var(--primary)" : "var(--gray)",
                  }}
                  onClick={() => handleStepClick(step.id)}
                >
                  <FontAwesomeIcon icon={step.icon} size="2x" />
                  <div className="step-inner" style={stepInnerStyle}>
                    {step.label}
                  </div>
                </li>
              ))}
            </ul>
            <div id="line" style={lineStyle}>
              <div id="line-progress" style={lineProgressStyle}></div>
            </div>
          </div>

          <div
            id="progress-content-section"
            style={progressContentSectionStyle}
          >
            {sectionContent.map((content) => (
              <div
                key={content.id}
                className={`section-content ${
                  activeStep === content.id ? "active" : ""
                }`}
                style={
                  activeStep === content.id
                    ? sectionContentActiveStyle
                    : sectionContentStyle
                }
              >
                <h2 style={{color:"var(--primary)",margin:"2rem 0"}}>{content.title}</h2>
                <p>{content.content}</p>
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  {content.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;