import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../hook/useTitle';
import DisplayReview from '../serviceDetails/DisplayReview';
import MyReviewCard from './MyReviewCard';


const Myreviews = () => {
  const {user,logOut}=useContext(AuthContext)
    const [orders, setOrders] = useState([])

    console.log(orders);      
    useTitle('my review')
    

  useEffect(() => {
      fetch(`http://localhost:5000/order?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('Tranport-token')}`
        }
    })
        
          .then(res => {
              if (res.status === 401 || res.status === 403) {
                  return logOut();
              }
              return res.json();
          })
        
         
          .then(data => {
              setOrders(data);
          })
  }, [user?.email,orders, logOut])
  console.log(orders);


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this review');
    if (proceed) {
        fetch(`http://localhost:5000/order/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
    }
}
   



return (
<div>
{
                                orders?.length===0?
                <>  
                    <div className=" h-[60vh] flex justify-center items-center">
                        <h1 className='text-4xl font-bold'>No Review found Please Add a review</h1>
                </div>
                                    </>
                                    :
                      <>

                    
    {
        orders.map(order=><MyReviewCard key={order._id} order={order} handleDelete={handleDelete} ></MyReviewCard>)
    }
                </>
              
            }
        

    
     <Toaster></Toaster>

</div>
)
}

export default Myreviews