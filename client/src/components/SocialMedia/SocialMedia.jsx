import React from 'react'
import { SocialIcon } from 'react-social-icons'


function SocialMedia() {
  return (
    <div className='main-cont flex w-full justify-end p-2 gap-1'>
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://linkedin.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://youtube.com" />
    </div>
  )
}

export default SocialMedia