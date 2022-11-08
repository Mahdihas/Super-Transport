
import { createBrowserRouter } from 'react-router-dom'
import Addservice from '../component/Add service/Addservice'
import Blog from '../component/blog/Blog'
import Error from '../component/error/Error'
import Home from '../component/Home/Home'
import Login from '../component/login/Login'
import Register from '../component/login/Register'
import Myreviews from '../component/My reviews/Myreviews'
import ReviewForm from '../component/serviceDetails/ReviewForm'
import ServiceDetails from '../component/serviceDetails/ServiceDetails'
import Services from '../component/services/Services'
import Main from '../layout/Main'

const router = createBrowserRouter([{
  path: '/',
 
  element: <Main></Main>,


    errorElement: <Error></Error>,
    children: [
    
      {
        path: '/',
   
        loader: async () =>{
          return fetch('http://localhost:5000/services')
        },
       
        element: <Home></Home>
      },
      {
        path: '/home',
   
        loader: async () =>{
          return fetch('http://localhost:5000/services')
        },
       
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
      ,
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/Myreviews',
        element:<Myreviews></Myreviews>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/Addservice',
        element:<Addservice></Addservice>
      },
      {
        path: '/Service',
        loader: async () =>{
          return fetch('http://localhost:5000/services')
        },
        element:<Services></Services>
      },
      {
        path:'',
          element: <ReviewForm></ReviewForm>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },

      {
        path: '/service/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
      ,
      
  
      
    ]
}


    
    
])


export default router
