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
import './user.css';
export default function Connectsocialmedias() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
    let session = getSession();
    setEmail(session.email);
  }, [navigate]);
  const onLogout = () => {
    endSession();
    navigate("/login");
  }
  return (
    <div>
      <div className="main-div-users">
        
      </div>
    </div>
  )
  
}
