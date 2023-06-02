import React from 'react';
import {User} from "../routes/user";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../session";
import './navbar.scss';

const feather = require('feather-icons')
function Navbar() {
  let navigate = useNavigate();
const onLogout = () => {
  endSession();
  navigate("/login");
}
  feather.replace();
  return (
      <nav class="navbar">
  <ul class="navbar__menu">
    <li class="navbar__item">
      <a href="#" class="navbar__link"><i data-feather="home" className='icon-12'></i><span>Home</span></a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link"><i data-feather="message-square"></i><span>Messages</span></a>        
    </li>
    
    <li class="navbar__item">
      <a href="#" class="navbar__link"><i data-feather="folder"></i><span>Tasks</span></a>        
    </li>
    
    <li class="navbar__item">
      <a href="#" class="navbar__link"><i data-feather="help-circle"></i><span>Help</span></a>        
    </li>
    <li class="navbar__item">
      <a href="" class="navbar__link" onClick={onLogout}><i data-feather="log-out"></i><span>Logout</span></a>        
    </li>
  </ul>
</nav>
  )
}

export default Navbar
