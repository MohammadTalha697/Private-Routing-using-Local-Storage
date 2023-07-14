import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import React from 'react'
// ICONS
// import { GiHook } from "react-icons/gi";
// import { GiNotebook } from "react-icons/gi";
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'
import { HiBars3 } from 'react-icons/hi2'
// --
import logo from '../../assets/saylani.png'
import { NavLink, Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const Header = () => {
  const { setIsAuth } = useAuthContext()
  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsAuth(false)
  }
  let { isAuth } = useAuthContext()
  return (
    <header className="bg-primary text-light py-2 py-lg-0">
      <nav className="navbar navbar-expand-lg text-light navbar-dark p-0 ">
        <div className="container ">
          <NavLink className="navbar-brand me-4 d-flex align-items-center" style={{ maxWidth: "120px", maxHeight: "40px" }} to="/">
            <img src={logo} alt="Logo" className='p-0 m-0 img-fluid' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarNav">
            <ul className="navbar-nav my-2">
              <li className="nav-item">
                <NavLink className="nav-link header-links text-center" to="/">
                  <AiFillHome className='mb-1 ' /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header-links text-center mx-0 mx-lg-2" to="about">
                  <AiFillInfoCircle className='mb-1' /> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header-links text-center" to="contact">
                  <IoMdContact className='mb-1' /> Contact
                </NavLink>
              </li>
              <li className="nav-item">
                {!isAuth
                  ? <NavLink to="auth" className="nav-link header-links text-center"><CgLogIn className="mb-1" /> Login</NavLink>
                  : <NavLink to="dashboard" className="nav-link header-links text-center"><MdOutlineDashboardCustomize className="mb-1" /> Dashboard</NavLink>
                }
              </li>
              <li className="nav-item">
                <button className="nav-link header-links text-center" onClick={handleLogout}><CgLogIn className="mb-1" /> Logout</button>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle nav-link text-center"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiBars3 className='mb-1' /> Others
                </Link>
                <ul className="dropdown-menu p-0 dropdown-menu-dark">
                  {/* <li>
                    <NavLink className="dropdown-item text-center nav-link header-links" to="/todoAsk">
                      <GiNotebook className="mb-1" /> Todo App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item text-center nav-link header-links" to="/useReducer">
                      <GiHook className="mb-1" /> useReducer
                    </NavLink>
                  </li> */}
                </ul>
              </li>


            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header