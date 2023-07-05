import React from 'react';
import "./globalreading.css";
import Navbar from "../components/navbar";
import './user.css';
import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../session";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get, limitToLast } from "firebase/database";
import { onValue, query, } from 'firebase/database';
import { RealtimeData } from "../realtimeData/index";
export default function Globalreading() {
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
    <div className='reading-container'>
            <Navbar/>
      <div className='reading-description'>
        <div className='reading-title'>
            <h1 className='reading-club'> <span className='reading-club-marked'></span></h1>
        </div>
      </div>
    </div>
  )
}

