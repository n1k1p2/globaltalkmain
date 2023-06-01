import React from 'react';
import {ref, set, get, update, remove, child, onValue } from "firebase/database";
import {Table} from "react-bootstrap";
import { getDatabase } from "firebase/database";
import './users.css';
import avatarlogo from "../imgs/userlogo.jpg";
const db = getDatabase();
export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }
    componentDidMount() {
        const dbRef = ref(db, 'users');
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data});
            });
            this.setState({tableData: records});
        });
    }
    render(){
        return(
                
                    this.state.tableData.map((row,index)=>{
                    return (
                        <div className='main-table-line-div'>
                        <img src={avatarlogo} className='avatar-img'></img>
                        <div className='username-container'><h1>{'@'+row.key}</h1></div>
                        <div className='name-container'><h1>{row.data.name}</h1></div>
                        <div className='phone-container'><h1>{row.data.phoneNumber}</h1></div>
                        <div className='country-container'><h1>{row.data.country}</h1></div>
                        </div>
                    )
    })
        )
    }
}