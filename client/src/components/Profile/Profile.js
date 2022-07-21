import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Header } from "../Header/Header";

export const Profile = ()=>{

const { user, isAuthenticated, loading } = useSelector((state) => state.user);



    return(
        <>
 <Header/>
 <div style = {{position:"absolute",top:"20%"}} className="profile">
       <img src = "/Profile.png"/>
        <h2 >userName:{user.username}</h2>
        <h1>{new Date(user.dob).toDateString()}</h1>
        <h2>gender:{user.gender}</h2>

 </div>
        </>
    )
}