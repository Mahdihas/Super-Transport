import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceCard from './ServiceCard';
import ClipLoader from "react-spinners/ClipLoader";

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('service')

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },1000)
        
    },[])
    
    useEffect( () =>{
        fetch('https://server-side-weld.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
  return (
      <div className="px-2 sm:flex">
          
          {loading ?
              <div className='flex justify-center items-center h-[100vh] w-full'><ClipLoader loading={loading} size={100} color="#36d7b7" /></div> :
              <div>
              
              <h1  className='my-6 font-bold text-5xl text-[#459abc] text-center'>          My All Type of Services ! </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {
                      services.map(product=><ServiceCard key={product._id} product={product}></ServiceCard>)
                  }
              </div>
        </div>
        
              
              }
         
       
      </div>
  )
}

export default Services