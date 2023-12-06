import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import AddCoffee from "../components/Coffee/AddCoffee";
import UpdateCoffee from "../components/Coffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <div>404</div>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addcoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updatecoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])
export default router;