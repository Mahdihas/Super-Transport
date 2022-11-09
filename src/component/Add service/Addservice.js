import React, { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../hook/useTitle';


const Addservice = () => {
  useTitle('Add Service')
  const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const des = form.des.value;
    const name= form.name.value;
    const price = form.price.value;


    const service = {
   
        name: name,  
        img:img,
        price:price,
        des:des

       
    }

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }
    fetch('http://localhost:5000/services',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(service)
    })
        .then(data => {
            console.log(data)
        
                toast.success('Service added  successfully')
                form.reset();
           

        })
        .catch(er => console.error(er));


}


return (
  <div className='px-4 py-4'>
      <div className="flex justify-center">
    </div>
      <form onSubmit={handlePlaceOrder} className='my-12'>
          
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-12">
      <input name='name' type="text" placeholder="Service Name"  className="input input-bordered" required />
      <input name='img' type="text" placeholder="give the phot URL" className="input input-bordered "  required/>
      <input name='price' type="text" placeholder="select the price"  className="input input-bordered " required />

     </div>
      <div className="text-center">
      <textarea name='des' className='w-[100%] border-primary border-4 h-[80px]'></textarea>
          <input type="submit" value="Please Order" className='btn mx-auto btn-secondary text-[skyblue] font-bold' required></input>
      </div>
     </form>



     <Toaster />

  </div>
)
}

export default Addservice