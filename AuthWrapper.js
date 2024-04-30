import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RenderRoutes } from "../structure/RenderRoutes";
import Axios from "axios";



const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: false });
    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            await Axios.post("http://localhost:8080/login", {
                username,
                password
            }).then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                setUser({ isAuthenticated: true })
                navigate('/dashboard');
            }).catch(err => {
                alert('invalid creds')
                console.log(err)

            });


        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Incorrect password');
        }
    }



    const logout = () => {
        localStorage.removeItem('token')
        setUser({ isAuthenticated: false })
        navigate('/login');
    }
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            <>
                <RenderRoutes />

            </>

        </AuthContext.Provider>
    )
}