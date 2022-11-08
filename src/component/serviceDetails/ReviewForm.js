import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const ReviewForm = () => {
 
    const service = useLoaderData();
    const {_id, name, img,price,des } = service;
console.log(service);
    const { user} = useContext(AuthContext)
    const navigate = useNavigate();

    
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'unregistered';
       
        const message = form.massage.value;
        const date = form.date.value;

        const order = {
            id: _id,
            serviceName: name,  
            customer: fullName,
            email,
            img:img,
            price:price,
            message,
            date,
            circle:user?.photoURL,
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                   
                    form.reset();
                }

            })
            .catch(er => console.error(er));


    }


  return (
      <div className='px-4 py-4'>
          <div className="flex justify-center">
          {/* <h1 className='font-bold text-4xl text-[skyblue] mx-4'>You have chosen {name}</h1> */}
        </div>
          <form onSubmit={handlePlaceOrder} className='my-12'>
              
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-12">
          <input name='first' type="text" placeholder="First Name" defaultValue={user?.name} className="input input-bordered " />
          <input name='last' type="text" placeholder="Last Name" defaultValue={user?.name} className="input input-bordered " />
          <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered " readOnly />
          <input name='date' type="date" placeholder="Your Phone" defaultValue='date' className="input input-bordered " />

             
              

          </div>
          <div className="text-center">
          <textarea name='massage' className='w-[100%] border-primary border-4 h-[80px]'></textarea>
              <input type="submit" value="Please Review" className='btn mx-auto bg-rose-400 text-[skyblue] font-bold'></input>
          </div>
         </form>





      </div>
  )
}

export default ReviewForm