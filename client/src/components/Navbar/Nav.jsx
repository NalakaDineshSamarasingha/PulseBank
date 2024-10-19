import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg'
import {ReactComponent as Close} from '../../assets/close.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Nav.css'
import Profile from '../../assets/profile.jpg'


const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    const profileImg = localStorage.getItem('profileImage'); 

    if (token) {
      setIsLoggedIn(true);
      if (profileImg) {
        setProfileImage(profileImg);
      }
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <p><span>P</span>ulse<span>B</span>ank</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showNavbar ? <Hamburger /> : <Close/>}
          
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">Donate</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
          </ul>
          {isLoggedIn ? (
            <NavLink to="/profile">
              <img
                src={profileImage || Profile} 
                alt="Profile"
                className="profile-image"
              />
            </NavLink>
          ) : (
            <NavLink to="/login">
              <FontAwesomeIcon icon={faUser} className="icon" size="xl" />
            </NavLink>
          )}
        </div>
      </div>
      
    </nav>
  )
}

export default Nav