import React from 'react'
import Hero from './Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Portfolio from '../portfolio/Portfolio'
import ContactUs from '../contact/ContactUs'
function Home() {
  return (
    <div style={{width:"100%"}} >
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <ContactUs/>
    
    </div>
  )
}

export default Home
