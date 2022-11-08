
import { createBrowserRouter } from 'react-router-dom'
import Addservice from '../component/Add service/Addservice'
import AddServiceMap from '../component/Add service/AddServiceMap'
import Blog from '../component/blog/Blog'
import Error from '../component/error/Error'
import Home from '../component/Home/Home'
import Login from '../component/login/Login'
import Register from '../component/login/Register'
import Myreviews from '../component/My reviews/Myreviews'
import DisplayReview from '../component/serviceDetails/DisplayReview'
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
        loader: async () =>{
          return fetch('http://localhost:5000/services')
        },
        element:<Services></Services>
      },

      {
        path: '/AddServices',
        loader: async () =>{
          return fetch('http://localhost:5000/addedService')
        },
        element:<AddServiceMap></AddServiceMap>
      },
      {
        path:'',
          element: <ReviewForm></ReviewForm>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/show',
        element:<DisplayReview></DisplayReview>
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
