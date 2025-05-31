import {
  createBrowserRouter,  
} from "react-router";
import Roots from "../Root/Roots";
import Home from "../Components/Home";
import JobDetails from "../Pages/JobDetails";
import JobSite from "../Components/JobSite";
import JobApply from "../Components/JobApply";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>

      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>

      },
      {
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>,
      },
      {
        path:'/jobSite',
        element:<JobSite></JobSite>,
        loader:()=>fetch('http://localhost:3000/jobs')
      }
    ]
  },
]);