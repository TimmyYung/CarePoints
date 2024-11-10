'use client'
import TextField from "@mui/material/TextField";
import "./caretaker-login.css";
import Button from "@mui/material/Button";
import { useState } from "react";

const CaretakerLoginSection = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginAttempted, setLoginAttempted] = useState(false);
    const handleLogin = () => {
        if(email != "" && password != "")
            window.location = "../volunteer/find-clients";
        setLoginAttempted(true);
    }
    return (
        <div id="caretaker-login-section">
            {!loginAttempted && <div id="caretaker-login">
                <h3>Caretaker Login</h3>
                <br/>
                <TextField label="Email:" onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <TextField label="Password:" onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <Button onClick={handleLogin}>Login</Button>
            </div>}
            {loginAttempted && <div id="caretaker-login">
                <h3>Caretaker Login</h3>
                <br/>
                {email != "" && <TextField label="Email:" onChange={(e) => setEmail(e.target.value)}/>}
                {email == "" && <TextField label="Email:" error helperText="Field cannot be empty" onChange={(e) => setEmail(e.target.value)}/>}

                <br/>
                {password != "" && <TextField label="Password:" onChange={(e) => setPassword(e.target.value)}/>}
                {password == "" && <TextField label="Password:" error helperText="Field cannot be empty" onChange={(e) => setPassword(e.target.value)}/>}
                <br/>
                <Button onClick={handleLogin}>Login</Button>
                {email}
                {password}
            </div>}
            <div id="block"/>
        </div>
    )
}
export default CaretakerLoginSection;