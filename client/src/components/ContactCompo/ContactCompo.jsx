import React from 'react'
import './ContactCompo.css'

function ContactCompo() {
  return (
    <div className='contact-container w-full flex justify-center'>
        <div className='contact w-2/4 '>
            <p className='contactus text-2xl py-8'>Contact Us</p>
            <div className='opacity-70 mb-10 '>
                <p className='contact-title '>Via Phone</p>
                <p className='tel'>Monday to Friday [9.30 A.M - 4.30 P.M.] <br/> <tel>+94 71 929 7961</tel> </p>
            </div>
            <div className='opacity-70 mb-10'>
                <p className='contact-title'>Corporate Address</p>
                <p className='address'>No 225/A, <br/>Bandaranayake Road, <br/> Katubedda, <br/> Moratuwa, <br/> Sri Lanka </p>
            </div>
            <div className='flex flex-col '>
                <p className='mb-10 opacity-70'>For futher inquries contact us at <a href='#'>nalakadinesh97@gmail.com</a></p>
                <form className='flex flex-col gap-8'>
                    <div className=' flex gap-6'>
                        <input type='text' name='name' placeholder='Name' className='x'/>
                        <input type='email' name='email' placeholder='Email*' required className='x'/>
                    </div>
                    <input type='number' name='phone' placeholder='Phone Number'/>
                    <input type='text' name='subject' placeholder='Reason for contact'/>
                    <textarea rows={10} name='massage' placeholder='Comment' />
                    <button className='send'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactCompo