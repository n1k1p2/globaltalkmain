import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../session";
import Navbar from "../components/navbar";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get, limitToLast } from "firebase/database";
import React from 'react';
import { onValue, query, } from 'firebase/database';
import { RealtimeData } from "../realtimeData/index";
import './tasks.css';
export default function Tasks() {
    let navigate = useNavigate();
  let [email, setEmail] = useState("");
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    let session = getSession();
    setEmail(session.email);
    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);
  const onLogout = () => {
    endSession();
    navigate("/login");
  }
  
  return (
    <div>
      <Navbar></Navbar>
      
      <nav className="navbar-mobile" role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    

    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      <a href="/user"><li>Friends</li></a>
      <a href="/tasks"><li>Tasks</li></a>
      <a href=""><li>My Profile</li></a>
      <a href="#"><li>Help</li></a>
      <a href="/globalreading"><li>Global.Reading</li></a>
      <a href="#" onClick={onLogout}><li>Logout</li></a>
    </ul>
  </div>
</nav>
        <div className="div-instructions">
            <h1>INSTRUCTIONS</h1>
            <div className="div-steps">
                <h2>STEP 1.</h2>
                <h3>Participants are required to choose a language exchange partner from the available list of candidates on the globaltalk.pro website</h3>
                <h2>STEP 2.</h2>
                <h3>You should then arrange a call with your chosen partner either through voice or video call. During this call, you will discuss the topic provided by the project instructors.</h3>
                <h2>STEP 3.</h2>
                <h3>You will create a written summary about a call and send it to your instructor.</h3>
            </div>
            <Button variant="contained" href="https://drive.google.com/file/d/1rCTVQ_7b74C5iYNWETQ2u17-0iBSYOJY/view?usp=sharing" target="_blank">
  WEEK 1 TASK
</Button>
        </div>
        
    </div>
  )
  
}