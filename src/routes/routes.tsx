import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Layout from "../pages/layout/layout";
import Products from "../pages/products/products";
import Register from "../pages/register/register";
import ProtectedRoute from "./protectedroute";
import { UserProvider } from "../auth/authcontext";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserProvider><Layout /></UserProvider>,
        children: [
            { path: "", element: <Home /> },
            {
                path: "/products",
                element: (
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                )
            },
        ],
    },
    {
        path: "/login",
        element: <UserProvider><Login /></UserProvider>
    },
    {
        path: "/register",
        element: <UserProvider><Register /></UserProvider>
    },
]);