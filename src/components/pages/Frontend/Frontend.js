import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../frontend/Header'
import Footer from '../../frontend/Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NoPage from '../NoPage'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
    }}
    spin
  />
);
const Frontend = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  useEffect(
    () => {
      setTimeout(() => {
        setIsProcessing(true)
      }, 1500);
    }, []
  )
  return (
    <>
      {!isProcessing
        ? <>
          <div className="min-vh-100 d-flex justify-content-center align-items-center">
            {/* <span className="spinner spinner-border text-primary display-6" style={{ width: "6rem", height: "6rem" }}></span> */}
              <Spin indicator={antIcon} />
          </div>
        </>
        : <>
          <Header />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      }
    </>
  )
}

export default Frontend