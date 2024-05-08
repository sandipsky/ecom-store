import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { User } from "../models/user";
import { handleError } from "../helpers/errorhandler";

type UserContextType = {
    token: string | null;
    registerUser: (formData: User) => void;
    loginUser: (formData: User) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const api = "your_api_base_url_here/";
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        if (userToken) {
            setToken(userToken);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
    }, []);

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

    const loginUser = async (formData: User) => {
        // try {
        //     const data = await axios.post(api + "/account/login", {
        //         username: formData.username,
        //         password: formData.password,
        //     });
        //     handleAuthResponse(data);
        // } catch (error) {
        //     handleError(error);
        // }

        localStorage.setItem("token", "asdfsdafvsadv234vgferv");
        setToken("asdfsdafvsadv234vgferv");
        toast.success("Login Success!");
        navigate("/");
    };

    const handleAuthResponse = (data: any) => {
        if (data) {
            localStorage.setItem("token", data?.data.token);
            const userObj = {
                userName: data?.data.userName,
                email: data?.data.email,
            };
            localStorage.setItem("user", JSON.stringify(userObj));
            setToken(data?.data.token!);
            toast.success("Login Success!");
            navigate("/search");
        }
    };

    const isLoggedIn = () => {
        console.log(token)
        return token != null;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken("");
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ loginUser, token, logout, isLoggedIn, registerUser }}
        >
            <>{children}</>
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);
