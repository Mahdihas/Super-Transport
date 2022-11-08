import React from 'react'

const DisplayReview = ({order,handleDelete}) => {
    const { _id, img,date,serviceName
    , price, circle, name } = order;
  
  
  
  return (
      <div>
      
  <div className="card-body">
              <h2 className="card-title">{serviceName}</h2>
              <img className='w-[40%]' src={img} alt="Shoes" />
              <p>date : {date}</p>
              <img src={circle} alt="img" />
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(_id)}  className="btn btn-primary text-white">Delete</button>
    </div>
  </div>

          
    </div>
  )
}

export default DisplayReview