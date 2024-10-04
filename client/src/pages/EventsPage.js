import React from 'react'
import EventList from '../components/EventList'
import FAQs from '../components/FAQs'
import Intro from '../components/Intro'

const EventsPage = () => {
  return (
    <div>
  <h2 className="sec-title"> Engage and Grow with Our Events & Workshops</h2>
      <p className='text' style={{textAlign:"center"}}>

Join our curated events and workshops to learn, network, and grow your business. From industry talks and startup meetups to wellness sessions, there's something for everyone.</p>
      <EventList/>
      <FAQs/>
    </div>
  )
}

export default EventsPage
