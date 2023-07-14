import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NoPage from '../NoPage'
import Login from './Login'

const Auth = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NoPage/>}/>
    </Routes>
  )
}

export default Auth