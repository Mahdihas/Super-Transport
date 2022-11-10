import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import { TypeAnimation } from 'react-type-animation';


const Progress = () => {




  return (
      <div>
           <PhotoProvider>
          <h1 className='font-bold py-6 text-4xl text-center text-[#97ba1f] '>Progress</h1>

<div className="my-8 px-4 Work sm:flex ">
  <div className=" sm:w-[50%] h-[400px]">
  <PhotoView src='https://th.bing.com/th/id/R.a10f6e9624b1e574ce8ed10a91ba7268?rik=BtWng6%2fDzn7yKQ&pid=ImgRaw&r=0'>
                    <img className='w-[100%] rounded-lg h-[100%]' src="https://th.bing.com/th/id/R.a10f6e9624b1e574ce8ed10a91ba7268?rik=BtWng6%2fDzn7yKQ&pid=ImgRaw&r=0" alt="Shoes" /></PhotoView>
  </div>
  <div className=" sm:w-[50%] px-8 pt-4 lg:h-[400px]">
    <p className='text-[#aeb0b2] font-semibold uppercase '> Status</p>
      <h1 className='text-[#aeb0b2] font-normal text-2xl '> <span className='text-black text-[16px] font-bold'>
      <TypeAnimation
// Same String at the start will only be typed once, initially
sequence={[
'HOW I WORK',
1000,
'HOW I BOOK',
1000,
'I BOOK ONLINE',
1000,
'HOW I WORK',
1000,
]}
speed={50} // Custom Speed from 1-99 - Default Speed: 40
style={{ fontSize: '2em' }}
wrapper="span" // Animation will be rendered as a <span>
repeat={Infinity} // Repeat this Animation Sequence infinitely
/>
      </span>
 </h1>
    <p className='text-[#aeb0b2]  '>I am a Single Rider I have some car to ride people for visitng. any kind of trip . and also I ride wokers at their office </p>
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

</PhotoProvider>

    </div>
  )
}

export default Progress