import React from 'react'
import { useLoaderData } from 'react-router-dom';
import AddedServiceCard from './AddedServiceCard';

const AddServiceMap = () => {
    
  const  addService  = useLoaderData([]);
  const newAddServices = [...addService.slice(0, 3)];


  return (
      <div>
         <div className= "grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-6">
         {
          newAddServices.map(service=><AddedServiceCard key={service._id} service={service}></AddedServiceCard>)
          }
        </div>
    </div>
  )
}

export default AddServiceMap