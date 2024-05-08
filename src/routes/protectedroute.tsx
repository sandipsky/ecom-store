import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authcontext";

type Props = { children: React.ReactNode };

const ProtectedRoute = ({ children }: Props) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn() ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
