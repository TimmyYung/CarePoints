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
        <div id="caretaker-login-section">
            <div id="caretaker-login">
                <h3>Volunteer Login</h3>
                <br/>
                <TextField error={email == ""} required label="Email:" id="volunteer-email" onChange={(e) => {setEmail(e.target.value)}}/>
                <br/>
                <TextField error={password == ""} required label="Password:" id="volunteer-password" onChange={(e) => {setPassword(e.target.value)}}/>
                <br/>
                <a href="../volunteer/sign-up" style={{color:"blue"}}>Don't have an account?</a><br/>
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}
export default CaretakerLoginSection;