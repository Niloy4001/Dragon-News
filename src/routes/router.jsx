import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewsCards from "../components/NewsCards";
import { id } from "date-fns/locale";
import NewsDetails from "../components/NewsDetails";
import Auth from "../components/Auth";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgotPassword";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path:"/",
                element:<Navigate to={'/category/01'}></Navigate>,
            },
            {
                path:"/category/:id",
                element:<NewsCards></NewsCards>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:"/news/details/:id",
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"/auth",
        element:<Auth></Auth>,
        children:[
            {
                path:"/auth/",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            },
            {
                path:"/auth/forgot",
                element:<ForgotPassword></ForgotPassword>
            }
        ]
    },
    {
        path: "/about",
        element: <h1>about</h1>
    },
    {
        path: "/career",
        element: <h1>career</h1>
    },
    {
        path: "*",
        element: <h1>error</h1>
    }
])

export default router;