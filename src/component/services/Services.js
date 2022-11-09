import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
  return (
      <div className="px-2 sm:flex">
          
          <div>
          <h1  className='my-6 font-bold text-5xl text-[#459abc] text-center'>          My All Type of Services ! </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                  services.map(product=><ServiceCard key={product._id} product={product}></ServiceCard>)
              }
          </div>
    </div>
    
       
      </div>
  )
}

export default Services