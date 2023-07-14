import React, { useRef } from 'react'
import { Form, Button, Input, Spin, Divider, Typography } from 'antd'
import error from '../../../assets/mixkit-double-beep-tone-alert-2868.wav'
import sound from '../../../assets/mixkit-access-allowed-tone-2869.wav'
import { useAuthContext } from '../../contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import { useState } from 'react'
import { AttentionSeeker } from 'react-awesome-reveal'
import dayjs from 'dayjs'
const Login = () => {
  let { user, setUser, setIsAuth } = useAuthContext()
  let [isLoading, setIsLoading] = useState(false)
  useEffect(
    () => {
      setUser({
        fullName: "", email: "", password: "", id: Math.random().toString(36).slice(2) , dateLoggedIn: dayjs(new Date()).format('hh:mm A dddd , MMMM D, YYYY') 
      })
    }, []

  )
  // TOASTIFY
  let notify = (msg, typeName) => {
    toast(msg, {
      type: typeName,
      theme: "colored",
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 1000
    })
  }

  const getInputs = (e) => {
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  let errorSound = useRef()
  let normalSound = useRef()

  const handleLogin = (e) => {
    let { fullName, email, password } = user
    if (fullName.length < 3) {
      notify("Full Name must be more than 3 characters", "error")
      errorSound.current.play()
      return
    }
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (reg.test(email) === false) {
      notify("Please enter your email in correct way", "error")
      errorSound.current.play()
      return
    }
    if (password.length < 6) {
      notify("Password must be more than 6 characters", "error")
      errorSound.current.play()
      return
    }
    notify("You have been logged in", "success")
    normalSound.current.play()
    setIsLoading(true)
    setInterval(() => {
      setIsLoading(false)
      localStorage.setItem("user", JSON.stringify(user))
      setIsAuth(true)
    }, 2000);
  }

  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <ToastContainer />
        <div className="col-12 text-center">
          <AttentionSeeker>
            <div className="card mx-auto border-0" id='loginCard'>
              <div className="card-body">

                <Form onFinish={handleLogin} layout='vertical'>
                  <Typography.Title level={1} >
                    LOGIN
                  </Typography.Title>
                  <Divider />
                  <Form.Item label="Full Name" >
                    <Input placeholder='Full Name' name="fullName" onChange={getInputs} />
                  </Form.Item>
                  <Form.Item label="Email" >
                    <Input type='email' placeholder='Email' name="email" onChange={getInputs} />
                  </Form.Item>
                  <Form.Item label="Password" >
                    <Input.Password placeholder='Password' name="password" onChange={getInputs} />
                  </Form.Item>
                  <Form.Item >
                    <Button disabled={isLoading} type='primary' htmlType='submit' block>Login <Spin className='ms-2' spinning={isLoading}></Spin></Button>
                  </Form.Item>
                </Form>
                <audio src={error} ref={errorSound} />
                <audio src={sound} ref={normalSound} />
              </div>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </div>
  )
}

export default Login