import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Social = () => {

    const { GooogleSign, setLoading } = useContext(AuthContext);

    const handleGoogle = () => {
        GooogleSign()
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);
                setLoading(false)
            })
            .catch(error => console.log(error));
        
        

    }

  return (
      <div className='text-center'>
          <button onClick={handleGoogle} className='btn border-[tomato] text-[tomato] bg-white'>Google</button>
    </div>
  )
}

export default Social