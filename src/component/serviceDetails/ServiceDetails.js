import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/UserContext';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';
import useTitle from '../../hook/useTitle';


const ServiceDetails = () => {
    const service = useLoaderData([]);
  const { user } = useContext(AuthContext)
  
  useTitle('service')
    // console.log(service);
    const { _id,img,price,des,name,ratings} = service;



  return (
      <div className='w-full sm:flex  my-6 px-4'>
          <div className="sm:w-[60%]">
              
          <div className="card overflow-hidden bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
          <p>{des}</p>
          <p>Price : {price}$</p>
                      <p className='flex items-center'>Rating : <span className='mx-4'>{ ratings}.0</span> <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar><FaStar className='text-yellow-500 mx-1'></FaStar></p>


      
          <div className="card-actions w-full">
          <button className="btn btn-primary text-white">Contact Me</button>
    </div>
  </div>
</div>
          </div>

          <div className=" sm:w-[40%]">
              
          {
                                user?.email?
                <>
                <ReviewCard service={service} Id={_id}></ReviewCard>

               <ReviewForm ></ReviewForm>
              <div className="">
                    </div>

                                    </>
                                    :
                      <>
                          <p className='text-[#46bbe9] text-2xl px-2'>     Please Log in or Register</p>
                          <br />
                  <Link to='/login'> <button className='btn mx-2 w-full btn-dark'>Log In</button></Link>
                  
                                        
                </>
              
            }
             
          </div>

    </div>
  )
}

export default ServiceDetails