import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import map from '../../map.png';
import { BsMailbox,BsGeoAltFill,BsTelephonePlus } from "react-icons/bs";
import HomeCard from './HomeCard';
import AddServiceMap from '../Add service/AddServiceMap';
import AddedServiceCard from '../Add service/AddedServiceCard';


const Home = () => {






//   const [products, setProducts] = useState([]);

//   const newProducts = [...products.slice(0, 3)];
//   // console.log(newProducts);
  
//   useEffect(() => {
//     const url = `http://localhost:5000/services`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
      
//             setProducts(data.products);
//         })
// }, [products])

  const [services, setServices] = useState([]);
  const newAddServices = [...services.slice(0, 3)];

    
useEffect( () =>{
    fetch('http://localhost:5000/services')
    .then(res =>res.json())
    .then(data => setServices(data))
}, []);
  

  return (
    <div>
      <div className="">
      <div className="hero h-[600px]" style={{ backgroundImage: `url("https://media.evo.co.uk/image/private/s--BitLPnTy--/v1556227557/evo/images/dir_1171/car_photo_585649.jpg")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-[#97ba1f] font-bold"> <span className='text-5xl ml-2 text-xl text-white font-bold tracking-wide #302e2c text-shadow-lg'>
            Super <span className='text-[#97ba1f]'>Transport</span>

            </span> </h1>
      <p className="mb-5 text-[#d2c9c9] font-bold">Super Transport is an online car booking site.I provide cars/texi one city to another city as visite/travel purpose .  Also  you can book  car   through internet for any places in the Bangladesh  </p>
      <button className="btn btn-primary px-16 text-white">Viste Now</button>
    </div>
  </div>
        </div>
        <h1 className='font-normal py-6 text-4xl text-center text-[#97ba1f] '>MY Services</h1>
        <div className=" grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-6">
           
          
        {
          newAddServices.map(service=><HomeCard key={service._id} service={service}></HomeCard>)
          }
          
        </div>
        <div className="flex justify-center items-center">
<Link to={'/service'}>        <button className="btn text-center w-[200px] text-white mx-auto btn-primary">See All</button></Link>
        </div>
      </div>
      <div className="">

        <h1 className='font-normal py-6 text-4xl text-center text-[#97ba1f] '>Addeded Service</h1>
        <AddServiceMap></AddServiceMap>
        

      </div>

       


      <h1 className='font-normal py-6 text-4xl text-center text-[#97ba1f] '>Progress</h1>

      <div className="my-8 Work sm:flex ">
        <div className=" sm:w-[50%] h-[400px]">
          <img className='w-[100%] h-[100%]' src="https://th.bing.com/th/id/R.a10f6e9624b1e574ce8ed10a91ba7268?rik=BtWng6%2fDzn7yKQ&pid=ImgRaw&r=0" alt="" />
        </div>
        <div className=" sm:w-[50%] px-8 pt-4 lg:h-[400px]">
          <p className='text-[#aeb0b2] font-semibold uppercase '> Status</p>
          <h1 className='text-[#aeb0b2] font-normal text-2xl '>HOW <span className='text-black font-bold'>WE WORK</span></h1>
          <p className='text-[#aeb0b2]  '>We are one of the world's leading management consulting firms, where bold thinking, inspired people and a passion for results come together for extraordinary impact.</p>
          <div className="mt-4 grid grid-cols-2 gap-4 ">
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter1.png" alt="" />
              <h1 className='text-4xl font-bold'>1354</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>Super Speed</h1>
             
            </div>
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter2.png" alt="" />
              <h1 className='text-4xl font-bold'>846</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>HAPPY Travel</h1>
             
            </div>
         
          
        
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter3.png" alt="" />
              <h1 className='text-4xl font-bold'>370</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>AWARDS EARNED</h1>
             
            </div>
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter4.png" alt="" />
              <h1 className='text-4xl font-bold'>240</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>YEARS EXPERIENCE</h1>
             
            </div>
           </div>

        </div>

      </div>
      <h1 className='font-normal py-6 text-4xl text-center text-[#97ba1f] '>Contact Me</h1>

      <div className="flex shadow-2xl border-[2px] border-[black] bg-[#262c31]">

        <div className=" sm:w-[50%] py-6 px-6">
          <h1  className='text-semi-bold text-[#f8f6f9] px-4 py-2'>CONTACT DETAILS</h1>
          <h1 className='text-4xl font-bold text-white px-4  py-2'>Station<span className='px-2 text-[#ffffde]'>LOCATIONS</span></h1>
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

export default Home