import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    if (!user)
        setUser({ fullName: "", email: "", password: "" })

    let initialState;
    !user ? initialState = false : initialState = true

    const [isAuth, setIsAuth] = useState(initialState)

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    return useContext(AuthContext)
}


export default AuthContextProvider