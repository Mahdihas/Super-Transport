import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    
    const [order, setOrder] = useState(storedUser);
    const navigate=useNavigate()

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/order/${storedUser._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('review  updated')
                console.log(data);
            }
            navigate('/Myreviews')

        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...order}
        newUser[field] = value;
        setOrder(newUser);
    }

    return (
        <div className='w-full h-[400px] flex justify-center items-center'>
            <div className="">
            <h2 className='text-purple-500'>Please Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input className='border-[2px] px-6 py-2 my-2  border-[black]' onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' required />
                <br />
                <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.serviceName} name='serviceName' placeholder='address' required />
                <br />
                <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.price} name="price" id="" placeholder='email' required />
                <br />
                <input className='border-[2px] px-6 py-2   border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.img} name='img' placeholder='address' required />
                <br />
                <input className='border-[2px] px-6 py-2 my-2  border-[black]'  onChange={handleInputChange} type="text" defaultValue={storedUser.circle} name="circle" id="" placeholder='email' required />
                <br />
                <button className='btn btn-secondary text-white my-4' type="submit">Update review</button>
                </form>  
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Update;