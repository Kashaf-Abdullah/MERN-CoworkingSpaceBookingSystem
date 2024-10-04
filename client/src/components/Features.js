import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import c1 from '../assets/1.png'
import c2 from '../assets/2.webp'

import c3 from '../assets/3.jpeg'

import   FeaturesCard from '../cards/FeaturesCard'
import Aos from "aos";
import "aos/dist/aos.css";
const   Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container 
    data-aos="fade-up">
    <h3 className="sec-title">
    Features
</h3>
<p className='title' style={{textAlign:"center",marginBottom:"20px"}} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et, dolore ab voluptatibus ipsam eius!</p>
   <div className="row" style={{marginBottom:"5rem"}}>
   <FeaturesCard
  fronthead1="Flexible"
  fronthead2="Workspace Booking"
  para="Book workspaces on-demand to fit your schedule. Whether you need a desk for an hour or a private office for a week, our platform allows seamless reservations to match your needs."
  // image={c1}
/>

<FeaturesCard
  fronthead1="Real-Time"
  fronthead2="Availability"
  para="View real-time availability of workspaces and meeting rooms. Instantly find and book the perfect spot for your work, meetings, or events without any hassle."
  // image={c2}
/>

<FeaturesCard
  fronthead1="Resource"
  fronthead2=" Management"
  para="Manage your workspace resources efficiently with alerts for upcoming bookings, cancellations, and maintenance schedules, ensuring a smooth and uninterrupted experience."
  // image={c3}
/>


   </div>
  
 

    </Container>
  )
}

export default Features
