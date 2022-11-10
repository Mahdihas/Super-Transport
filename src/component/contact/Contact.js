import React from 'react'
import { BsMailbox,BsGeoAltFill,BsTelephonePlus } from "react-icons/bs";
import App from '../../App';

import map from'../../map.png';

const Contact = () => {
    
  return (
      <div>
          
              <h1 className='font-bold py-6 text-4xl text-center text-[#97ba1f] '>Contact Me</h1>

              <div className=" sm:flex shadow-2xl border-[2px] border-[black] bg-[#262c31]">

<div className=" sm:w-[50%] py-6 px-6">
  <h1  className='text-semi-bold text-[#f8f6f9] px-4 py-2'>CONTACT DETAILS</h1>
  <h1 className='text-2xl sm:text-4xl font-bold text-white px-4  py-2'>Station<span className='px-2 text-[#ffffde]'>LOCATIONS</span></h1>
  <p className='text-semi-bold text-[#f8f6f9] px-4  py-2'>For Any Kind of Emergancy transportation <br /> you can contac us.</p>
  <div className="">
    <p className='my-4 text-1xl text-[#f8f6f9] font-semibold'> <span className=' px-4 py-2  hover:bg-[#97ba1f] '>Gazipur</span> <span className=' px-4 py-2  hover:bg-[#97ba1f] '>Uttora</span> <span className=' px-4 py-2  hover:bg-[#97ba1f] '>Barishal</span></p>
    <div className="border-2 border-[#a9c200] px-6 py-4">
    <p className='flex my-2 text-[#a9c200]'> <BsTelephonePlus></BsTelephonePlus> <span className='text-white px-4'>Phone 4567 -123-456</span></p>
    <p className='flex py-2 text-[#a9c200]'><BsMailbox></BsMailbox> <span className='text-white px-4'>hello@amply.com</span></p>
    <p className='flex my-2 text-[#a9c200]'> <BsGeoAltFill></BsGeoAltFill><span className='text-white px-4'>Address-1234 Airport Rd, Suite 203, Lakewood, NJ 08702</span></p>

    </div>
  </div>
</div>
<div className="py-4 sm:w-[50%]">
  <img className='mt-4 py-4' title='Gazipur' src={map} alt="" />
</div>
</div>
      </div>
  )
}

export default Contact