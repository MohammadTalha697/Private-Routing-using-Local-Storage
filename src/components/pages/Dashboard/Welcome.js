import { AiFillCalendar } from "react-icons/ai"; 
import { AiFillIdcard } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
  let { setIsAuth, user } = useAuthContext()
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsAuth(false)
  }
  const handleHome = () => {
    navigate('/')
  }
  return (
    <div className="bg-primary min-vh-100 text-light">
      <div className="container">
        <div className="row" style={{rowGap: "100px"}}>
          <div className="col text-center">
            <h1 className=' my-5'>Welcome to Dashboard {user.fullName}</h1>
            <div className="d-flex justify-content-around">
              <button className="btn btn-light" onClick={handleLogout}><BiLogOut className="mb-1" /> LOG OUT</button>
              <button className="btn btn-outline-light" onClick={handleHome}><AiFillHome className="mb-1" /> Go to Home</button>
            </div>
          </div>
          <div className="col-12">
            <ul className="list-group text-center h5 list-group-hover">
              <li className="list-group-item list-group-item-primary p-3">
                Username <AiOutlineUser className="mb-1" /> : {user.fullName}
              </li>
              <li className="list-group-item list-group-item-success p-3">
                Email <AiOutlineMail className="mb-1" /> : {user.email}
              </li>
              <li className="list-group-item list-group-item-danger p-3">
                ID <AiFillIdcard className="mb-1"/> : {user.id}
              </li>
              <li className="list-group-item list-group-item-dark p-3">
                Date you logged in <AiFillCalendar className="mb-1"/> : {user.dateLoggedIn}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome