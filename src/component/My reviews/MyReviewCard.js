import React from 'react'
import { Link } from 'react-router-dom';

const MyReviewCard = ({order,handleDelete,handleStatusUpdate}) => {
    const { _id, img,date,serviceName
        ,    customer,message,    price,circle, name } = order;
  return (
      <div className='w-[100%] sm:w-[80%] my-8 mx-auto'>
      
  <div className="card-body  shadow-2xl">
              <h2 className="card-title text-center text-slate-600"><p>Service Name : {serviceName}</p></h2>
              <img className='w-[100%]  sm:w-[70%] mx-auto h-[200px]' src={img} alt="Shoes" />
        <p className='px-6 sm:px-12'>date : {date}</p>
        <p className='px-6 sm:px-12'>Price : <span className='text-yellow-600'>{price}$</span></p>

        
        <div className="flex px-6  sm:px-12  justify-between items-center">
          <div className="">        <img className='w-[60px] h-[60px] rounded-full' src={circle} alt="img" /></div>
          <div className="">          <p className='p'>Customer Name : {customer}</p></div>

        </div>
        <p className='px-6  sm:px-12 '><span className='text-yellow-500'>Comment</span> : {message}</p>

    <div className="card-actions my-2 w-[80%] mx-auto justify-between">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary text-white">Delete</button>
          <Link to={`/order/${order._id}`}> <button  className="btn btn-primary text-white">Edit</button></Link>


    </div>
  </div>

          
    </div>
  )
}
export default MyReviewCard