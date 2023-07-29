import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home"
import Publications from "../../Pages/Publications/Publications"
import NotFound from "../../Pages/NotFound/NotFound";
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/Register"

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
                path: '/login',
                element: <Login></Login>,
            },{
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/publications',
                element: <Publications></Publications>,
            },

    ]
},
    {path: '*', element: <NotFound></NotFound>}
])