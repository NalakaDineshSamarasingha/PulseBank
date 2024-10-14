import React from 'react'
import AboutCompo from '../components/AboutCompo/AboutCompo'
import SignUpForm from '../components/Register/Register'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import BloodDrive from '../components/BloodDrive/BloodDrive'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'

function About() {
  return (
    <div>
        <AboutCompo/>
        <SocialMedia/>
        <BloodDrive/>
        <WhoWeAre/>
    </div>
  )
}

export default About