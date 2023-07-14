import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'
import NoPage from '../NoPage'
const Dashboard = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='*' element={<NoPage/>}/>

    </Routes>
  )
}

export default Dashboard