import React from 'react'
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";


const AddedServiceCard = ({ service }) => {
  
  const { img,name,price,des} = service;
  return (
    <div>
       <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="img" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>

          <p className='text-start'>Price : {price}$</p>
         <p className='flex items-center'>Rating : <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>


      
        
  </div>
</div>
      
    </div>
  )
}

export default AddedServiceCard