import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../../context/UserContext';

import Social from './Social';

const Register = () => {
    const [error, setError] = useState('');

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
              toast.success('successfully Register.')


            // setAuthToken(user)
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        });
    }

    
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
  }
  

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://dogood.qodeinteractive.com/wp-content/uploads/2022/04/home-6-video-button-1536x620.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <div className="card  w-[90%] mx-auto sm:w-[400px]  shadow-2xl text-[#494b88] py-20">
                    <h1 className="text-5xl text-[skyblue] text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                               <div className="form-control">
          <label className="label">
            <span className="label-text text-white">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
              </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            <p className='text-[purple]'>                {error}
</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-white" type="submit" value="Sign Up" />
                        </div>
                        </form>
                        <Toaster />

                    <p className='text-white text-center'>Already have an account? <Link className='text-[#57b8df]  font-bold' to="/login">Login</Link> </p>
                <Social></Social>
                    </div>

          </div>
        </div>
      </div>
    );
};

export default Register;