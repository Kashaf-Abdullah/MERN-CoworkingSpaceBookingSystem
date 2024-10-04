import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMailBulk,
    FaPinterest,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
  } from "react-icons/fa";
const ServiceIntro = () => {
    const iconStyle={
        backgroundColor: "var(--primary)",
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "var(--white)",
                  border: "2px solid var(--primary)",
                  borderRadius:"50%",
                  margin:"0 3px",
                  padding:"4px"
                 
      }
  return (
    <div className="service-intro-container">
      <div className="video-container">
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/dq4qoESPGiM?autoplay=1&mute=1&loop=1&controls=0&playlist=dq4qoESPGiM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="service-intro-overlay"></div>
      <div className="text-container">
        <h1 className="heading" style={{ color: "var(--primary)" }}>
        Our
          <span style={{ color: "var(--white)" }}> Services</span>{" "}
        </h1>
        <p className="text" style={{color:"var(--white)"}}>
       
        Our hot desks offer a flexible seating arrangement in a vibrant, shared workspace. Ideal for freelancers, remote workers, and small teams, our hot desks provide a dynamic environment that fosters creativity and collaboration</p>
      
        <div className="logo-social-media" style={{ margin: "1rem 0" }}>
        <FaFacebook style={iconStyle}/>
            {/* <FaInstagram style={iconStyle} /> */}
            <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
            <FaYoutube style={iconStyle} />
            <FaPinterest style={iconStyle} />
            <FaTwitter style={iconStyle} />
            <FaLinkedin style={iconStyle} />
        </div>

      
        
        
         </div>
    </div>
  );
}

export default ServiceIntro;
