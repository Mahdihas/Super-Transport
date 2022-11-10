import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../hook/useTitle';
import Social from './Social';




const Login = () => {

    const { Login ,setLoading} = useContext(AuthContext);
    const location = useLocation(); 
    const navigate = useNavigate()
    const [error, setError] = useState('');
    useTitle('Login')


  const from = location.state?.from?.pathname || '/';
  

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    Login(email, password)
        .then(result => {
            const user = result.user;
            const currentUser = {
                email: user?.email

            }
            console.log(currentUser);

            // get jwt

            fetch('https://server-side-weld.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                    
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // local storage is the easiest but not the best place to store jwt token
                localStorage.setItem('Tranport-token', data.token);
                setError('');
                toast.success('successfully login.')

              navigate(from, { replace: true });
              
            form.reset();
            setLoading(false)
            });

    
        

        })
        .catch(error => {
            console.error(error)
            setError(error.message);


        })
      .finally(() => {
        setLoading(false)
      
    })

  }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://3.bp.blogspot.com/-cCaFCRcQK1I/TzZy16mAvSI/AAAAAAAABg4/qaCMAqYEJ-A/s1600/Copy+(2)+of+Copy+of+Wallpapers+Max+Ultimate+Pack+No.+(1369).jpg")` }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
              <div className="card w-[90%] mx-auto sm:w-[400px] shadow-2xl text-[#494b88] py-20">
                    <h1 className="text-5xl text-[skyblue] text-center font-bold">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label flex justify-between">
                                <p className='text-orange-600'>                {error}</p>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-white" type="submit" value="Login" />
                        </div>
                        </form>
                        <Toaster></Toaster>
                    <p className='text-center text-white'>Not a member <Link className='text-[#57b8df] font-bold' to="/register">Sign Up</Link> </p>
                <Social></Social>
                </div>
          </div>
        </div>
      </div>


  )
}

export default Login