import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const {products,count} = useLoaderData([]);
    console.log(products);
  return (
      <div className="px-2 sm:flex">
           <div className="sn:w-[65%]">
          <div>
          <h1  className='my-6 font-bold text-5xl text-[#459abc] text-center'>          My All Type of Services ! </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                  products.map(product=><ServiceCard key={product._id} product={product}></ServiceCard>)
              }
          </div>
    </div>
          </div>
          
          <div className="sm:w-[35%]">
              ddd
          </div>
         
      </div>
  )
}

export default Services