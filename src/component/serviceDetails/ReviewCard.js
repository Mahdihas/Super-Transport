import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import DisplayReview from './DisplayReview';

const ReviewCard = ({service,Id}) => {
    const { user, logOut } = useContext(AuthContext);


    
    const [orders, setOrders] = useState([]);
    console.log(orders);

    
console.log(orders);        
      
        useEffect(() => {
            fetch(`https://server-side-weld.vercel.app/Allorder?id=${service?._id,Id}`)
              
            .then(res => res.json())
                .then(data => {
                    setOrders(data);
                 
                })
        }, [orders,service?._id,Id])
        console.log(orders);
      
       
 
    
  return (
      <div>
                  

                 
                 {
              orders.map(order=><DisplayReview key={order._id}  order={order}></DisplayReview>)
          } 

    </div>
  )
}

export default ReviewCard