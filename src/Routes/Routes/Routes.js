import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home"
import StudentProfile from "../../Pages/StudentProfile/StudentProfile"
import Hostel from "../../Pages/Hostel/Hostel"
import Transport from "../../Pages/Transport/Transport"
import NotFound from "../../Pages/NotFound/NotFound";
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/Register"
import Services from "../../Pages/Services/Services"
import Apply from "../../Pages/Apply/Apply"
import SingleService from "../../Pages/Services/SingleService"
import AddService from "../../Pages/Admin/AddService"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Admin from "../../Pages/Admin/Admin";
import FinalApply from "../../Pages/Apply/FinalApply";
import Applied from "../../Pages/Apply/Applied";
import AppliedCard from "../../Pages/Apply/AppliedCard";
import SingleApplicant from "../../Pages/Admin/SingleApplicant"
import AllCardsPrint from "../../Pages/Admin/AllCardsPrint";

export const routes = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/studentProfile',
                element: <PrivateRoute><StudentProfile></StudentProfile></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },{
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/hostel',
                element: <PrivateRoute><Hostel></Hostel></PrivateRoute>,
            },
            {
                path: '/transport',
                element: <PrivateRoute><Transport></Transport></PrivateRoute>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services'),
            },
            {
                path: '/allCards',
                element: <AllCardsPrint></AllCardsPrint>,
                loader: () => fetch('http://localhost:5000/apply'),
            },
            {
                path: '/services/:id',
                element: <SingleService></SingleService>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path: '/admin',
                element: <PrivateRoute><Admin></Admin></PrivateRoute>,
            },
            {
                path: '/applied',
                element: <Applied></Applied>,
            },
            {
                path: '/apply/:id',
                element: <PrivateRoute><Apply></Apply></PrivateRoute>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/apply/${params.id}`)
            },
            {
                path: '/apply/:id',
                element: <PrivateRoute><FinalApply></FinalApply></PrivateRoute>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/apply/${params.id}`)
            },
            {
                path: '/appliedCard/:id',
                element: <PrivateRoute><AppliedCard></AppliedCard></PrivateRoute>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/appliedCard/${params.id}`)
            },
            {
                path: '/applicant/:id',
                element: <SingleApplicant></SingleApplicant>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/applicant/${params.id}`)
            },

    ]
},
    {path: '*', element: <NotFound></NotFound>}
])