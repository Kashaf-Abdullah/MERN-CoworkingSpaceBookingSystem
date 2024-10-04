import React from 'react'
import About from '../components/About'
import FAQs from '../components/FAQs'
import Team from '../components/Team'
import IntroService from '../components/IntroService'

const AboutUsPage = () => {
  return (
    <div>
    <IntroService/>
      <About/>
      <Team/>
      <FAQs/>
    </div>
  )
}

export default AboutUsPage
