import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { BsMailbox,BsGeoAltFill,BsTelephonePlus } from "react-icons/bs";
import HomeCard from './HomeCard';
import useTitle from '../../hook/useTitle';
import Car from '../car/Car';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactiveButton from 'reactive-button';
import { TypeAnimation } from 'react-type-animation';
import Progress from '../progress/Progress';
import Contact from '../contact/Contact';






const Home = () => {
 useTitle(' Home page')

  const [state, setState] = useState('idle');
  


 const onClickHandler = () => {
  setState('loading');
  setTimeout(() => {
      setState('success');
  }, 2000);
}


  const [services, setServices] = useState([]);

    
useEffect( () =>{
    fetch('https://server-side-weld.vercel.app/serviceLimit')
    .then(res =>res.json())
    .then(data => setServices(data))
}, []);
  

  return (
    <div>
               <PhotoProvider>

      <div className="">
      <div className="hero h-[600px]" style={{ backgroundImage: `url("https://exoticcarcollection010.files.wordpress.com/2018/01/one-off-multicolor-stalker-car-2.jpg")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-[#97ba1f] font-bold"> <span className='text-5xl ml-2 text-xl text-white font-bold tracking-wide #302e2c text-shadow-lg'>
            Super <span className='text-[#97ba1f]'>Transport</span>

            </span> </h1>
      <p className="mb-5 text-[#d2c9c9] font-bold">Super Transport is an online car booking site.I provide cars/texi one city to another city as visite/travel purpose .  Also  you can book  car   through internet for any places in the Bangladesh  </p>
      <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'teal'}
            idleText={'Visit Now'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px', font:'bold' ,padding:'15px 60px' }}
            outline={true}
            shadow={true}
            rounded={true}
         
            messageDuration={2000}
           


        > </ReactiveButton>
                
    </div>
  </div>
        </div>
        <h1 className='font-normal py-6 text-4xl text-center text-[#97ba1f] '>MY Services</h1>
        <div className=" grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-6">
           
          
        {
          services.map(service=><HomeCard key={service._id} service={service}></HomeCard>)
          }
          
        </div>
        <div className="flex justify-center items-center">
     <Link to={'/service'}>        <button className="btn text-center w-[200px] text-white mx-auto btn-primary">See All</button></Link>
        </div>
      </div>
      <h1 className='my-6 pt-6  text-center text-1xl font-[12px] text-[#2d3542] '>HELPS YOU TO VISIT PERFECT PLACE</h1>
      <h1 className='my-4 capitalize text-center text-3xl font-bold text-[##253241]   sm:text-4xl'>My Vehicles <span className="text-[#d22b2b]">Listing</span></h1>

      
        
       <div className="px-2">
       <Car></Car>
      </div>

   
         <Progress></Progress>
        
         <Contact></Contact>


     
        </PhotoProvider>

      </div>
      
   
  )
}

export default Home