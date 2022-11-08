import React from 'react'

const HomeCard = ({ service }) => {
    
    const { name,des,img,price} = service;

  
  return (
      <div>
          
          <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} className="h-[300px] w-[100%]" alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions ">
    </div>
  </div>
</div>
    </div>
  )
}

export default HomeCard