'use client'
import TextField from "@mui/material/TextField";
import "./caretaker-login.css";
import Button from "@mui/material/Button";
import { useState } from "react";

const CaretakerLoginSection = () => {

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleLogin = () => {
        if(document.getElementById("volunteer-email").innerHTML == "")
            setEmailError(true);
        else
            setEmailError(false);

        if(document.getElementById("volunteer-password").innerHTML == "")
            setPasswordError(true);
        else
            setPasswordError(false);

        if(!emailError && !passwordError)
            window.location = "../volunteer/find-clients";
    }
    return (
        <div id="caretaker-login-section">
            <div id="caretaker-login">
                <h3>Volunteer Login</h3>
                <br/>
                <TextField error={emailError} required label="Email:" id="volunteer-email" onChange={(e) => {if(e.target.value != "") setEmailError(false)}}/>
                <br/>
                <TextField error={passwordError} required label="Password:" id="volunteer-password" onChange={(e) => {if(e.target.value != "") setPasswordError(false)}}/>
                <br/>
                <a href="../volunteer/sign-up" style={{color:"blue"}}>Don't have an account?</a><br/>
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}
export default CaretakerLoginSection;