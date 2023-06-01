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
export default function User() {
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
  getData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-div-users">
        <RealtimeData></RealtimeData>
      </div>
    </div>
  )
  
}
async function getData(){
  const db = getDatabase();
  const snapshot = await get(ref(db, 'users/'));
  let u = Object.keys(snapshot.val());
  console.log(u);
}
