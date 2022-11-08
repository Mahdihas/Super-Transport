import React from 'react'

const DisplayReview = ({order,handleDelete}) => {
    const { _id, img,date,serviceName
    , price,customer, circle, message,name } = order;
  
  
  
  return (
      <div>
      
  <div className="card-body shadow-xl mx-4">
              <h2 className="card-title">{serviceName}</h2>
        <img className='w-[40%]' src={img} alt="Shoes" />
        <p>Price : {price}</p>

        <p>date : {date}</p>
        <div className="flex justify-between">
          <img className='w-[50px] h-[50px] rounded-full' src={circle} alt="img" />
          <p className='mx-4'>{customer}</p>
        </div>
        <p>Comment : {message}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(_id)}  className="btn btn-primary text-white">Delete</button>
    </div>
  </div>

          
    </div>
  )
}

export default DisplayReview