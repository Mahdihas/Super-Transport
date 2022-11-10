import React from 'react'
import { FaCalendarAlt,FaTachometerAlt,FaPaintRoller,FaBity } from "react-icons/fa";
import './Car.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Car = () => {
  return (
      <div className=' sm:flex'>
                   <PhotoProvider>

          
          <div className="sm:w-[49%] mx-[1%]">
          <div className="card   shadow-xl">
                      <figure><PhotoView src='https://revus.templines.org/rent/wp-content/uploads/2019/07/bmw_m8_competition_coupe_2020_5k_3-1280x720-1-750x430.jpg'>
                          <img src="https://revus.templines.org/rent/wp-content/uploads/2019/07/bmw_m8_competition_coupe_2020_5k_3-1280x720-1-750x430.jpg" alt="Shoes" /></PhotoView> </figure>
  <div className="card-body bg-[#253241]">
         <h1 className='flex  justify-center items-center text-white font-bold'> <span className='bg-[#97ba1f] px-2 mx-2 text-white'>HOT</span> <span>Ford Focus ST</span> </h1>
            
         <div className="flex justify-center">
                          <div className='flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaCalendarAlt></FaCalendarAlt> </span><span>2019</span></div>
                         
                          <div className='flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaTachometerAlt></FaTachometerAlt> </span> <span>20000</span></div>

                          
                          <div className='hd flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaBity></FaBity>  </span> <span>Automatic</span></div>

           </div>
                  </div>
                  <div className='bg-[#253241] border-t-[1px] border-[#d4cbcb] py-4'>
                  <h1 className='py-4  text-center text-1xl font-bold  hover:text-white text-[#2d3542] '>$150 /per day</h1>

                      
                      </div>
</div>
              </div>
              <div className="sm:w-[49%] mx-[1%]">
          <div className="card   shadow-xl">
                      <figure><PhotoView src='https://revus.templines.org/rent/wp-content/uploads/2019/07/mansory_lamborghini_urus_2020_5k-1280x720-1-750x430.jpg'>
                          <img src="https://revus.templines.org/rent/wp-content/uploads/2019/07/mansory_lamborghini_urus_2020_5k-1280x720-1-750x430.jpg" alt="Shoes" /></PhotoView> </figure>
  <div className="card-body bg-[#253241]">
  <h1 className='flex justify-center items-center text-white font-bold'> <span className='bg-[#8224e3] px-2  mx-2 text-white'>Super</span> <span>Ford Focus ST</span> </h1>
            
         <div className="flex justify-center">
                          <div className='flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaCalendarAlt></FaCalendarAlt> </span><span>2019</span></div>
                         
                          <div className='flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaTachometerAlt></FaTachometerAlt> </span> <span>20000</span></div>

                          
                          <div className='hd flex items-center justify-center ' style={{color:'rgba(255, 255, 255, 0.7)'}} ><span className='px-2'><FaBity></FaBity>  </span> <span>Automatic</span></div>

           </div>
                  </div>
                  <div className='bg-[#253241] border-t-[1px] border-[#d4cbcb] py-4'>
                  <h1 className='py-4  text-center text-1xl font-bold  hover:text-white text-[#2d3542] '>$150 /per day</h1>

                      
                      </div>
</div>
          </div>

        
              
         </PhotoProvider>
    </div>
  )
}

export default Car