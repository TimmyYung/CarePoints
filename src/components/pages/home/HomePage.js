'use client'

import { useState } from "react";
import "./home.css";
import Button from '@mui/material/Button';
import "../../font.css"

const HomePage = () => {
    const [selection, setSelection] = useState(0);
    const handleCaretakerClick = () => {
        if(selection == "1")
            window.location = "../volunteer/sign-up";
        else
            window.location = "../volunteer/login";
    }
    const handleClientClick = () => {
        if(selection == "1")
            window.location = "../client/sign-up";
        else
            window.location = "../client/login";
    }
    return (
        <div id="home-page">
            <h1 id="home-header">Welcome to [blank]!</h1>
            <p id="home-description">Our goal is to connect caretakers with local volunteers to help with various medical tasks.</p>
            <hr/>
            <h2 id="home-cont">I want to...</h2>
            {selection == 0 && <div id="home-buttons">
                <Button id="home-sign-up" variant="contained" onClick={() => setSelection(1)}>Sign Up</Button>
                <Button variant="contained" id="home-login" onClick={() => setSelection(2)}>Login</Button>
            </div>}
            {/* if sign up is selected */}
            {selection == 1 && <div id="home-buttons">
                <Button id="home-sign-up" disabled>Sign Up</Button>
                <Button id="home-login" variant="outlined" onClick={() => setSelection(2)}>Login</Button>
            </div>}
            {/* if login is selected */}
            {selection == 2 && <div id="home-buttons">
                <Button id="home-sign-up" variant="outlined" onClick={() => setSelection(1)}>Sign Up</Button>
                <Button id="home-login" disabled>Login</Button>
            </div>}
            {selection != 0 && <div>
                <br/>
                <hr/>
                <br/>
                {selection == 1 && <h2 className="font">I am signing up as a...</h2>}
                {selection == 2 && <h2 className="font">I am logging in as a...</h2>}
                <br/>
                <div>
                    <Button onClick={handleCaretakerClick} className="font" variant="contained" style={{marginRight:"20px", borderRadius:"0"}}>Volunteer</Button>
                    <Button onClick={handleClientClick} className="font" variant="contained" style={{borderRadius:"0"}}>Client</Button>
                </div>
            </div>}
        </div>
    )
}
export default HomePage