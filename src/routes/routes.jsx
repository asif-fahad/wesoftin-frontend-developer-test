import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UsersList from "../pages/Users/UsersList";
import UserDetails from "../pages/Users/UserDetails";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
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
                element: <About></About>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ],
    },
]);

export default router;