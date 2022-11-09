
import { createBrowserRouter } from 'react-router-dom'
import Addservice from '../component/Add service/Addservice'
import Blog from '../component/blog/Blog'
import Error from '../component/error/Error'
import Home from '../component/Home/Home'
import Login from '../component/login/Login'
import Register from '../component/login/Register'
import Myreviews from '../component/My reviews/Myreviews'
import Update from '../component/My reviews/Update'
import DisplayReview from '../component/serviceDetails/DisplayReview'
import ReviewCard from '../component/serviceDetails/ReviewCard'
import ReviewForm from '../component/serviceDetails/ReviewForm'
import ServiceDetails from '../component/serviceDetails/ServiceDetails'
import Services from '../component/services/Services'
import Main from '../layout/Main'
import Private from '../private/Private'

const router = createBrowserRouter([{
  path: '/',
 
  element: <Main></Main>,


    errorElement: <Error></Error>,
    children: [
    
      {
        path: '/',
   
        // loader: async () =>{
        //   return fetch('http://localhost:5000/services')
        // },
        loader: async () =>{
          return fetch('http://localhost:5000/addedService')
        },
       
       
        element: <Home></Home>
      },
      {
        path: '/home',
   
        // loader: async () =>{
        //   return fetch('http://localhost:5000/services')
        // },
        loader: async () =>{
          return fetch('http://localhost:5000/addedService')
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
        element:<Private><Myreviews></Myreviews></Private>
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
        // loader: async () =>{
        //   return fetch('http://localhost:5000/services')
        // },
        element:<Services></Services>
      },
      {
        path: '/review',
        loader: async () =>{
          return fetch('http://localhost:5000/services')
        },
        element:<ReviewCard></ReviewCard>
      },

     
     
      {

        path: '/service/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
      ,
      {
        path: '/order/:id',
        loader: ({params})=> fetch(`http://localhost:5000/order/${params.id}`),

        element:<Update></Update>
      }
  
      
    ]
}


    
    
])


export default router
