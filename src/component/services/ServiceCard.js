import { FaUsersCog,FaStar,FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceCard = ({ product }) => {
  const { name, des, img, price } = product;
  useTitle('service')

  
  return (
      <div>
         <PhotoProvider>
          <div className="card overflow-hidden bg-base-100 shadow-xl">
          <figure> <PhotoView src={img}><img src={img} className="h-[300px] w-[100%]" alt="Shoes" /></PhotoView></figure>
  <div className="card-body">
                  <h2 className="card-title capitalize">{ name}</h2>
          <p>{des.length > 100 ? des.slice(0, 100) + '...' : des}</p>
          <p>Price : {price}$</p>
         <p className='flex items-center'>Rating : <FaStar className='text-yellow-500 px-4'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar><FaStar className='text-yellow-500'></FaStar></p>


      
          <div className="card-actions w-full">
          <Link to={`/service/${product._id}`}> <button className="btn btn-primary">view details </button></Link>
    </div>
  </div>
</div>
</PhotoProvider> 
    </div>
  )
}

export default ServiceCard