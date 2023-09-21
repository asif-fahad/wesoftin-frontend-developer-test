import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";
import UsersList from "../components/UsersList/UsersList";
import UserDetails from "../components/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Error 404</h1>
            <Link to='/'><button className="p-2 border-white bg bg-red-500 text-white rounded-md">Return to Home</button></Link>
        </div>,
        children: [
            {
                path: '/',
                element: <UsersList />,
            },
            {
                path: '/usersDetails/:id',
                element: <UserDetails />,
            },
            {
                path: '/about',
                element: <h1 className="text-center text-5xl font-bold">About</h1>,
            },
            {
                path: '/services',
                element: <h1 className="text-center text-5xl font-bold">Services</h1>,
            },
            {
                path: '/contact',
                element: <h1 className="text-center text-5xl font-bold">Contact</h1>,
            },
        ],
    },
]);

export default router;