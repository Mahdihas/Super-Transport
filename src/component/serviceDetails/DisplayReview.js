import React from 'react'

const DisplayReview = ({order}) => {
    const { _id, img,date,serviceName
        ,        price, name } = order;
  return (
      <div>
          <div className="card bg-base-100 shadow-xl">
  <figure><img className='w-[40%]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-white">Delete</button>
    </div>
  </div>
</div>
          
    </div>
  )
}

export default DisplayReview