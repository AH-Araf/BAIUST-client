import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import StudentProfile from "../../Pages/StudentProfile/StudentProfile"
import Hostel from "../../Pages/Hostel/Hostel"
import Transport from "../../Pages/Transport/Transport"
import NotFound from "../../Pages/NotFound/NotFound";
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/Register"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const routes = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
            {
                path: '/studentProfile',
                element: <StudentProfile></StudentProfile>,
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

    ]
},
    {path: '*', element: <NotFound></NotFound>}
])