import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NewsCards from "../components/NewsCards";
import { id } from "date-fns/locale";




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