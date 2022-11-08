import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import HomeCard from './HomeCard';

const Home = () => {


  const { count, products } = useLoaderData([]);
  const newProducts = [...products.slice(0, 3)];
  console.log(newProducts);
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
        <div className=" grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-6">
           
        {
          newProducts.map(service=><HomeCard key={service._id} service={service}></HomeCard>)
          }
          
        </div>
        <div className="flex justify-center items-center">
<Link to={'/service'}>        <button className="btn text-center w-[200px] text-white mx-auto btn-primary">See All</button></Link>
        </div>
      </div>





      <div className="my-8 Work sm:flex ">
        <div className=" sm:w-[50%] h-[400px]">
          <img className='w-[100%] h-[100%]' src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter-bg.jpg" alt="" />
        </div>
        <div className=" sm:w-[50%] px-8 pt-4 lg:h-[400px]">
          <p className='text-[#aeb0b2] font-semibold '> Stats</p>
          <h1 className='text-[#aeb0b2] font-normal text-2xl '>HOW <span className='text-black font-bold'>WE WORK</span></h1>
          <p className='text-[#aeb0b2]  '>We are one of the world's leading management consulting firms, where bold thinking, inspired people and a passion for results come together for extraordinary impact.</p>
          <div className="mt-4 grid grid-cols-2 gap-4 ">
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter1.png" alt="" />
              <h1 className='text-4xl font-bold'>1354</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>PROJECTS COMPLETED</h1>
             
            </div>
            <div className="">
              <img src="http://webdesign-finder.com/amply/wp-content/uploads/2019/09/counter2.png" alt="" />
              <h1 className='text-4xl font-bold'>846</h1>
              <h1 className='text-[#aeb0b2] font-semibold '>HAPPY CLIENTS</h1>
             
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
    </div>
  )
}

export default Home