import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import DisplayReview from './DisplayReview';

const ReviewCard = ({service,Id}) => {
    const { user, logOut } = useContext(AuthContext);
const navigate=useNavigate()


    
    const [orders, setOrders] = useState([]);

    
console.log(orders);        
      
        useEffect(() => {
            fetch(`http://localhost:5000/Allorder?id=${service,Id}`)
              
            .then(res => res.json())
                .then(data => {
                    setOrders(data);
                 
                })
        }, [service,Id])
        console.log(orders);
      
        const handleDelete = id => {
          const proceed = window.confirm('Are you sure, you want to cancel this order');
          if (proceed) {
              fetch(`http://localhost:5000/Allorder/${id}`,{
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          alert('deleted successfully');
                          const remaining = orders.filter(odr => odr._id !== id);
                          setOrders(remaining);
                      }
                  })
          }
        }
 
    
  return (
      <div>
                  
{/*           
          {
              orders.map(order=><DisplayReview key={order._id} handleDelete={handleDelete} order={order}></DisplayReview>)
          } */}
                 
                 {
              orders.map(order=><DisplayReview key={order._id} handleDelete={handleDelete} order={order}></DisplayReview>)
          } 

    </div>
  )
}

export default ReviewCard