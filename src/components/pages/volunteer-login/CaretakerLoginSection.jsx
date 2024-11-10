'use client'
import TextField from "@mui/material/TextField";
import "./caretaker-login.css";
import Button from "@mui/material/Button";
import { useState } from "react";

const CaretakerLoginSection = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if(email != "" && password != "")
            window.location = "../volunteer/find-clients"
    }
    return (
        <div id="caretaker-login-section" style={{width:"100%", alignItems:"center"}}>
            <div id="caretaker-login" style={{display:"flex", justifyContent:"center", width:"100%", alignItems:"center"}}>
                <h1 style={{color:"white"}}>Volunteer Login</h1>
                <br/><br/>
                <TextField style={{backgroundColor:"white", borderRadius:"10px", width:"50%"}} error={email == ""} required label="Email:" id="volunteer-email" onChange={(e) => {setEmail(e.target.value)}}/>
                <br/><br/>
                <TextField style={{backgroundColor:"white", borderRadius:"10px", width:"50%"}} error={password == ""} required label="Password:" id="volunteer-password" onChange={(e) => {setPassword(e.target.value)}}/>
                <br/><br/>
                <a href="../volunteer/sign-up" style={{color:"black"}}>Don't have an account?</a><br/>
                <Button style={{backgroundColor:"white", fontFamily:"pixel", fontSize:"15px", width:"10%", borderRadius:"0"}} onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}
export default CaretakerLoginSection;