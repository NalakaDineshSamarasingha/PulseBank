import React from 'react'
import Nav from '../components/Navbar/Nav'
import Hero from '../components/Hero/Hero'
import Volunteer from '../components/Volunteer/Volunteer'
import Campaign from '../components/Campaign/Campaign'

function Home() {
  return (
    <div>
        <Hero/>
        <Volunteer/>
        <Campaign/>
    </div>
  )
}

export default Home