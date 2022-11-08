import React from 'react'
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const HomeCard = ({ service }) => {
    
    const { name,des,img,price} = service;

  
  return (
      <div>
          
          <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="img" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
          <p className='text-start'>{des.length > 100 ? des.slice(0, 100) + '...' : des}</p>
          <p className='text-start'>Price : {price}$</p>
         <p className='flex items-center'>Rating : <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>


      
          <div className="card-actions w-full">
            <Link to={`/service/${service._id}`}> <button className="btn btn-primary">view details </button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default HomeCard