import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AddCoffee from "../components/Coffee/AddCoffee";
import UpdateCoffee from "../components/Coffee/UpdateCoffee";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import Users from "../components/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <div>404</div>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('https://coffee-store-server.onrender.com/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server.onrender.com/coffee/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://coffee-store-server.onrender.com/user')
            }
        ]
    }
])
export default router;