import React from 'react';
import {User} from "../routes/user";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../session";
import './navbar.scss';
import {useEffect, useState} from "react";
const feather = require('feather-icons')
function Navbar() {
  let navigate = useNavigate();
const onLogout = () => {
  endSession();
  navigate("/login");
}
  feather.replace();
  return (
      <nav className="navbar">
  <ul className="navbar__menu">
    <li className="navbar__item">
      <a href="/user" className="navbar__link"><i data-feather="home" className='icon-12'></i><span>Friends</span></a>
    </li>
    <li className="navbar__item">
      <a href="#" className="navbar__link"><i data-feather="users"></i><span>My Profile</span></a>        
    </li>
    <li className="navbar__item">
      <a href="/globalreading" className="navbar__link"><i data-feather="book"></i><span>Global.Reading</span></a>        
    </li>
    <li className="navbar__item">
      <a href="#" className="navbar__link"><i data-feather="message-square"></i><span>Messages</span></a>        
    </li>
    
    <li className="navbar__item">
      <a href="/tasks" className="navbar__link"><i data-feather="folder"></i><span>Tasks</span></a>        
    </li>
    
    <li className="navbar__item">
      <a href="#" className="navbar__link"><i data-feather="help-circle"></i><span>Help</span></a>        
    </li>
    <li className="navbar__item">
      <a href="" className="navbar__link" onClick={onLogout}><i data-feather="log-out"></i><span>Logout</span></a>        
    </li>
  </ul>
</nav>
  )
}

export default Navbar
