import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { User } from "../models/user";
import { handleError } from "../helpers/errorhandler";

type AuthContextType = {
    token: string | null;
    user: User | null;
    registerUser: (formData: User) => void;
    loginUser: (formData: User) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const api = "your_api_base_url_here/";
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const registerUser = async (formData: User) => {
        try {
            const data = await axios.post(api + "/account/register", {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            });
            handleAuthResponse(data);
        } catch (error) {
            handleError(error);
        }
    };

    // const loginUser = async (formData: User) => {
    const loginUser = async () => {
        // try {
        //     const data = await axios.post(api + "/account/login", {
        //         username: formData.username,
        //         password: formData.password,
        //     });
        //     handleAuthResponse(data);
        // } catch (error) {
        //     handleError(error);
        // }
        localStorage.setItem("token", "asdfsaf");
        localStorage.setItem("user", JSON.stringify({ username: "sandip", email: "sandipshakya75@gmail.com" }));
        setToken("asdfsaf");
        setUser({ username: "sandip", email: "sandipshakya75@gmail.com" });
        toast.success("Login Success!");
        navigate("/");
    };

    const handleAuthResponse = (data: any) => {
        if (data) {
            const userObj = {
                userName: data?.username,
                email: data?.email,
            };
            localStorage.setItem("token", data?.data.token);
            localStorage.setItem("user", JSON.stringify(userObj));
            setToken(data?.token!);
            toast.success("Login Success!");
            navigate("/");
        }
    };

    const isLoggedIn = () => {
        const userToken = localStorage.getItem("token");
        return userToken != null;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken("");
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{ loginUser, token, user, logout, isLoggedIn, registerUser }}>
            <>{children}</>
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
