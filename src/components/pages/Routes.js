import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend/Frontend'
import Dashboard from './Dashboard/Dashboard'
import Auth from './Auth/Auth'
import NoPage from './NoPage'
import PrivateRoute from '../important/PrivateRoute'
import { useAuthContext } from '../contexts/AuthContext'
const Index = () => {
  let {isAuth }  = useAuthContext()

  return (
    <Routes>
        <Route path='/*' element={<PrivateRoute Component={Frontend} />}/>
        <Route path='/auth/*' element={!isAuth ? <Auth/> : <Navigate to="/"/> } />
        <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard}/>}/>
        <Route path='*' element={<NoPage/>}/>
    </Routes>
  )
}

export default Index