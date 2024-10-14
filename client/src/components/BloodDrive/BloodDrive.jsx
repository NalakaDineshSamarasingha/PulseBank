import React from 'react'
import './BloodDrive.css'

import Img from '../../assets/blood-drive.jpg'

function BloodDrive() {
  return (
    <div className='bloodDriveCont w-3/4 grid grid-flow-col gap-4 m-auto my-8'>
        <div className='left'>
            <img src={Img} alt='Blood True' />
        </div>
        <div className='right'>
            <h2 className='text-3xl font-bold uppercase mb-4' style={{ color: '#E70606' }}>Blood True</h2>
            <p className='font-normal'>Welcome to PulseBank, your reliable and 
            trusted partner in managing blood donations with the highest level 
            of efficiency and reliability. Our primary goal is to create a seamless
            connection between blood donors and patients in urgent need, ensuring that 
            the vital, life-saving resource of blood is delivered to hospitals and medical
            facilities without delay. We are dedicated to making the blood donation 
            process faster, easier, and more organized to ensure
            that no life is lost due to a shortage of available blood supplies.</p>
        </div>
    </div>
  )
}

export default BloodDrive