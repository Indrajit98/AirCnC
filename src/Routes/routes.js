import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import PrivateRoute from './PrivateRoute'
import Checkout from '../Pages/Checkout'
import Dashboard from '../Layout/Dashboard'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import ManageHomes from '../Pages/Dashboard/ManageHomes'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AddHome from '../Pages/Dashboard/AddHome'
import AllHome from '../Pages/AllHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon/>
      },
      {
        path: '/service-details/:id',
        element: <Details/>,
        loader:({params})=>fetch(`${process.env.REACT_APP_API_URL}/home/${params.id}`)
      },
      {
        path: '/search-result',
        element: <SearchResult/>
      }, 
      {
        path: '/all-homes',
        element: <AllHome/>,
      }, 
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout/></PrivateRoute>
      }, 
    ], 
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'',
        element: <Welcome/>
      },
      {
        path:'my-bookings',
        element: <PrivateRoute><MyBookings/></PrivateRoute>,
      },
      {
        path:'become-host',
        element: <PrivateRoute><BecomeAHost/></PrivateRoute>
      },
      {
        path:'all-users',
        element: <PrivateRoute><AllUsers/></PrivateRoute>
      },
      {
        path:'all-bookings',
        element: <PrivateRoute><AllBookings/></PrivateRoute>
      },
      {
        path:'add-home',
        element: <PrivateRoute><AddHome/></PrivateRoute>
      },
      {
        path:'manage-homes',
        element:<PrivateRoute> <ManageHomes></ManageHomes> </PrivateRoute>
      }
    ]
  }
  
])

export default router
