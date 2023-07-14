import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({Component}) => {
    const { isAuth } = useAuthContext()
    const location = useLocation()

    if (!isAuth)
        return <Navigate to="/auth" state={{ from: location.pathname }} replace />

    return (
        <Component />
    )
}

export default PrivateRoute