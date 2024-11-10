'use client'

import { useState } from "react";
import "./home.css";
import Button from '@mui/material/Button';

const HomePage = () => {
    const [selection, setSelection] = useState(0);
    return (
        <div id="home-page">
            <h1 id="home-header">Welcome to [blank]!</h1>
            <p id="home-description">Our goal is to connect caretakers with local volunteers to help with various medical tasks.</p>
            <hr/>
            <h2 id="home-cont">I want to...</h2>
            {selection == 0 && <div id="home-buttons">
                <Button id="home-sign-up" variant="contained" onClick={() => setSelection(1)}>Sign Up</Button>
                <Button variant="contained" onClick={() => setSelection(2)}>Login</Button>
            </div>}
            {selection == 1 && <div id="home-buttons">
                <Button id="home-sign-up" variant="contained">Sign Up</Button>
                <Button id="home-login" variant="outlined" onClick={() => setSelection(2)}>Login</Button>
            </div>}
            {selection == 2 && <div id="home-buttons">
                <Button id="home-sign-up" variant="outlined" onClick={() => setSelection(1)}>Sign Up</Button>
                <Button id="home-login" variant="contained">Login</Button>
            </div>}
            {selection != 0 && <div>
                <hr/>
                {selection == 1 && <h2>I signing up as a...</h2>}
                {selection == 2 && <h2>I logging in as a...</h2>}
                <div>
                    <Button>Caretaker</Button>
                    <Button>Patient</Button>
                </div>
            </div>}
        </div>
    )
}
export default HomePage