import React, { useState } from 'react'
import image from "../../../assets/saylani.png"
import { Select } from 'antd'
const Home = () => {
  const [todos, setTodos] = useState([])
  fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(json => setTodos(json))

  const [state, setState] = useState("true")
  let completedTodos = todos.filter(
    todo => todo.completed === "true"
  )
  let incompletedTodos = todos.filter(
    todo => todo.completed === "false"
  )
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-12">
            <div className="row" style={{ rowGap: "50px" }}>
              <div className="col-12 col-md-6 text-center" style={{ lineHeight: "50px" }}>
                <small>HELLO THERE WELCOME TO MY SITE</small>
                <h1><span className='display-6'>I'm</span> Mohammad Talha</h1>
                <h1 className='text-primary'>A Full Stack Developer</h1>
                <h1 className='display-6'>& UI UX Designer</h1>
              </div>
              <div className="col-12 col-md-6">
                <div className="container-fluid mt-5 p-0" id='image-container'>
                  <img src={image} alt={image} className='img-fluid w-100 h-100' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home