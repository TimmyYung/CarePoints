'use client'
import TextField from "@mui/material/TextField";
import "./CaretakerSignUp.css";
import { Button } from "@mui/material";
import { useState } from "react";

const CaretakerSignUp = ({signup}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [postal, setPostal] = useState("");

    const [edu, setEdu] = useState("");
    const [exp, setExp] = useState("");
    const [idUploaded, setIdUploaded] = useState("false");
    const [services, setServices] = useState("");
    const [availability, setAvailability] = useState("");

    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleSubmit = () => {
        if(name != "" && email != "" && phone != "" && password != "" &&
            edu != "" && exp != "" && idUploaded != "false" && services != "" && availability != ""){
                window.location = "../caretaker-find-clients";
            }
        setSubmitAttempted(true);

    }

    return (
        <div id="caretaker-sign-up">
            <div>
                {!submitAttempted && <><div>
                    <h3>Caretaker Sign Up</h3>
                    <br/>
                    <TextField label="Full name:" id="caretaker-name" onChange={(e) => {setName(e.target.value)}}/>
                    <br/>
                    <TextField label="Email:" id="caretaker-email" onChange={(e) => {setEmail(e.target.value)}}/>
                    <br/>
                    <TextField label="Phone Number:" id="caretaker-phone" onChange={(e) => {setPhone(e.target.value)}}/>
                    <br/>
                    <TextField label="Password:" id="caretaker-password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <br/>
                    <TextField label="Postal Code:" onChange={(e) => {setPostal(e.target.value)}}/>
                </div>
                <div>
                    <TextField label="Education:" id="caretaker-edu" onChange={(e) => setEdu(e.target.value)}/>
                    <br/>
                    <TextField label="Work Experience:" id="caretaker-exp" onChange={(e) => setExp(e.target.value)}/>
                    <br/>
                    {signup && <>
                        <label htmlFor="caretaker-id">Photo ID:</label>
                        <input id="caretaker-id" type="file" accept="image/*" onChange={(e) => {if(e.target.value != null)setIdUploaded("true"); else setIdUploaded("false")}}/>
                        <br/>
                    </>}
                    <TextField label="Services:" id="caretaker-services" onChange={(e) => setServices(e.target.value)}/>
                    <br/>
                    <TextField label="Availability:" id="caretaker-avail" onChange={(e) => setAvailability(e.target.value)}/>
                </div></>}
                {submitAttempted && <><div>
                    <h3>Caretaker Sign Up</h3>
                    <br/>
                    {name != "" && <TextField label="Full name:" id="caretaker-name" onChange={(e) => {setName(e.target.value)}}/>}
                    {name == "" && <TextField label="Full name:" error helperText="Must not be empty" id="caretaker-name" onChange={(e) => {setName(e.target.value)}}/>}

                    <br/>
                    {email != "" && <TextField label="Email:" id="caretaker-email" onChange={(e) => {setEmail(e.target.value)}}/>}
                    {email == "" && <TextField label="Email:" error helperText="Must not be empty" id="caretaker-email" onChange={(e) => {setEmail(e.target.value)}}/>}

                    <br/>
                    {phone != "" && <TextField label="Phone number:" id="caretaker-phone" onChange={(e) => {setPhone(e.target.value)}}/>}
                    {phone == "" && <TextField label="Phone number:" error helperText="Must not be empty" id="caretaker-phone" onChange={(e) => {setPhone(e.target.value)}}/>}

                    <br/>
                    {password != "" && <TextField label="Password:" id="caretaker-password" onChange={(e) => {setPassword(e.target.value)}}/>}
                    {password == "" && <TextField label="Password:" error helperText="Must not be empty" id="caretaker-password" onChange={(e) => {setPassword(e.target.value)}}/>}

                    <br/>
                    {postal != "" && <TextField label="Postal Code:" onChange={(e) => {setPostal(e.target.value)}}/>}
                    {postal == "" && <TextField error helperText="Must not be empty" label="Postal Code:" onChange={(e) => {setPostal(e.target.value)}}/>}


                </div>
                <div>
                    {edu != "" && <TextField label="Education:" id="caretaker-edu" onChange={(e) => setEdu(e.target.value)}/>}
                    {edu == "" && <TextField label="Education:" error helperText="Must not be empty" id="caretaker-edu" onChange={(e) => setEdu(e.target.value)}/>}

                    <br/>
                    {exp != "" && <TextField label="Work experience:" id="caretaker-exp" onChange={(e) => setExp(e.target.value)}/>}
                    {exp == "" && <TextField label="Work experience:" error helperText="Must not be empty" id="caretaker-exp" onChange={(e) => setExp(e.target.value)}/>}

                    <br/>
                    <label>File upload:</label>
                    {idUploaded == "true" && <input id="caretaker-id" type="file" accept="image/*" onChange={(e) => {if(e.target.value != null)setIdUploaded("true"); else setIdUploaded("false")}}/>}
                    {idUploaded == "false" && <>
                        <input id="caretaker-id" type="file" accept="image/*" onChange={(e) => {if(e.target.value != null)setIdUploaded("true"); else setIdUploaded("false")}}/>
                        <p>Please upload a file</p>
                        </>}

                    <br/>
                    {services != "" && <TextField label="Services:" id="caretaker-services" onChange={(e) => setServices(e.target.value)}/>}
                    {services == "" && <TextField label="Services:" error helperText="Must not be empty" id="caretaker-services" onChange={(e) => setServices(e.target.value)}/>}
                    <br/>
                    {availability != "" && <TextField label="Availability:" id="caretaker-avail" onChange={(e) => setAvailability(e.target.value)}/>}
                    {availability == "" && <TextField label="Availability:" error helperText="Must not be empty" id="caretaker-avail" onChange={(e) => setAvailability(e.target.value)}/>}

                </div></>}
            </div>
            {signup && <Button onClick={handleSubmit}>Sign Up</Button>}
            {!signup && <Button onClick={handleSubmit}>Save profile</Button>}

        </div>
    )
}
export default CaretakerSignUp;