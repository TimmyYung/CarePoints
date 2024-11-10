'use client'
import TextField from "@mui/material/TextField";
import "./CaretakerSignUp.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "../font.css"

const CaretakerSignUp = ({signup}) => {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [postalError, setPostalError] = useState(false);

    const [eduError, setEduError] = useState(false);
    const [expError, setExpError] = useState(false);
    // const [idUploadedError, setIdUploadedError] = useState(false);
    const [servicesError, setServicesError] = useState(false);
    const [availabilityError, setAvailabilityError] = useState(false);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newVolunteerName, setNewVolunteerName] = useState('');
    const [newVolunteerEmail, setNewVolunteerEmail] = useState('');
    const [newVolunteerPassword, setNewVolunteerPassword] = useState('');
    const [newVolunteerEducation, setNewVolunteerEducation] = useState('');
    const [newVolunteerPhoneNumber, setNewVolunteerPhoneNumber] = useState('');
    
    useEffect(() => {
      fetch('/api/timtest') // assuming you have an endpoint set up at this URL
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Error fetching data');
        });
    });
    const handleAddVolunteer = async (e) => {
      e.preventDefault();
    
      if (newVolunteerName && newVolunteerEmail && newVolunteerPassword && newVolunteerPhoneNumber) {
        const newVolunteer = {
          volunteer_name: newVolunteerName,
          volunteer_email: newVolunteerEmail,
          volunteer_password: newVolunteerPassword,
          volunteer_education: newVolunteerEducation,
          volunteer_phone_number: newVolunteerPhoneNumber,
          volunteer_points: 0,
          volunteer_credentials_photo: "",
          what_jobs_they_enroll_in: [],
          average_rating: 0
        };
    
        try {
          const response = await fetch('http://localhost:5000/add-volunteer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVolunteer),
          });
    
          if (!response.ok) {
            throw new Error('Failed to add volunteer');
          }
    
          setNewVolunteerName('');
          setNewVolunteerEmail('');
          setNewVolunteerPassword('');
          setNewVolunteerEducation('');
          setNewVolunteerPhoneNumber('');
    
          fetch('/api/timtest')
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData));
          
        } catch (error) {
          console.error('Error adding volunteer:', error);
        }
      }

      if(document.getElementById("caretaker-name").innerHTML == "")
        setNameError(true);
    else
        setNameError(false);

    if(document.getElementById("caretaker-email").innerHTML == "")
        setEmailError(true);
    else
        setEmailError(false);

    if(document.getElementById("caretaker-phone").innerHTML == "")
        setPhoneError(true);
    else
        setPhoneError(false);

    if(document.getElementById("caretaker-password").innerHTML == "")
        setPasswordError(true);
    else
        setPasswordError(false);

    if(document.getElementById("caretaker-postal").innerHTML == "")
        setPostalError(true);
    else
        setPostalError(false);

    if(document.getElementById("caretaker-edu").innerHTML == "")
        setEduError(true);
    else
        setEduError(false);

    if(document.getElementById("caretaker-exp").innerHTML == "")
        setExpError(true);
    else
        setExpError(false);

    if(document.getElementById("caretaker-services").innerHTML == "")
        setServicesError(true);
    else
        setServicesError(false);

    if(document.getElementById("caretaker-avail").innerHTML == "")
        setAvailabilityError(true);
    else
        setAvailabilityError(false);

    if(!nameError && !emailError && !phoneError && !passwordError && !postalError && !eduError && !expError && !servicesError && !availabilityError)
        window.location = "../volunteer/find-clients"
    };
    // const handleSubmit = () => {
    //     if(document.getElementById("caretaker-name").innerHTML == "")
    //         setNameError(true);
    //     else
    //         setNameError(false);
    
    //     if(document.getElementById("caretaker-email").innerHTML == "")
    //         setEmailError(true);
    //     else
    //         setEmailError(false);
    
    //     if(document.getElementById("caretaker-phone").innerHTML == "")
    //         setPhoneError(true);
    //     else
    //         setPhoneError(false);

    //     if(document.getElementById("caretaker-password").innerHTML == "")
    //         setPasswordError(true);
    //     else
    //         setPasswordError(false);

    //     if(document.getElementById("caretaker-postal").innerHTML == "")
    //         setPostalError(true);
    //     else
    //         setPostalError(false);

    //     if(document.getElementById("caretaker-edu").innerHTML == "")
    //         setEduError(true);
    //     else
    //         setEduError(false);

    //     if(document.getElementById("caretaker-exp").innerHTML == "")
    //         setExpError(true);
    //     else
    //         setExpError(false);

    //     if(document.getElementById("caretaker-services").innerHTML == "")
    //         setServicesError(true);
    //     else
    //         setServicesError(false);

    //     if(document.getElementById("caretaker-avail").innerHTML == "")
    //         setAvailabilityError(true);
    //     else
    //         setAvailabilityError(false);

    //     if(!nameError && !emailError && !phoneError && !passwordError && !postalError && !eduError && !expError && !servicesError && !availabilityError)
    //         window.location = "../volunteer/find-clients"
    // }

    return (
        <div id="caretaker-sign-up">
            <div>
                <><div>
                    <h3>Caretaker Sign Up</h3>
                    <br/>
                    <TextField 
                      error={nameError} 
                      label="Full name:" 
                      id="caretaker-name" 
                      required 
                      value={newVolunteerName}
                      onChange={(e) => {
                        if (e.target.value !== '') setNameError(false);
                        setNewVolunteerName(e.target.value); 
                      }}
                    />
                    <br/>
                    <TextField 
                      error={emailError} 
                      label="Email:" 
                      id="caretaker-email" 
                      required 
                      value={newVolunteerEmail}
                      onChange={(e) => {
                        if (e.target.value !== '') setEmailError(false);
                        setNewVolunteerEmail(e.target.value); // Update state with input value
                      }}
                    />
                    <br/>
                    <TextField 
                      error={phoneError} 
                      label="Phone Number:" 
                      id="caretaker-phone" 
                      required value={newVolunteerPhoneNumber}
                      onChange={(e) => {
                        if (e.target.value !== '') setPhoneError(false);
                        setNewVolunteerPhoneNumber(e.target.value); setPhoneError(false)
                      }}/>
                    <br/>
                    <TextField 
                      error={passwordError} 
                      label="Password:" 
                      id="caretaker-password" 
                      required 
                      value={newVolunteerPassword}
                      onChange={(e) => {
                        if (e.target.value !== '') setPasswordError(false);
                        setNewVolunteerPassword(e.target.value); // Update state with input value
                      }}
                    />
                    <br/>
                    <TextField 
                      error={postalError} 
                      id="caretaker-postal" 
                      label="Postal Code:" 
                      required onChange={(e) => {if(e.target.value != "") 
                      setPostalError(false)}}
                    />
                </div>
                <div>
                    <TextField error={eduError} 
                      label="Education:" 
                      required 
                      id="caretaker-edu" 
                      onChange={(e) => {if(e.target.value != "") 
                      setEduError(false)}}
                    />
                    <br/>
                    <TextField 
                      error={expError} 
                      label="Work Experience:" 
                      required 
                      id="caretaker-exp" 
                      onChange={(e) => {if(e.target.value != "") 
                      setExpError(false)}}
                    />
                    <br/>
                    {signup && <>
                        <label htmlFor="caretaker-id">Photo ID:</label>
                        <input required id="caretaker-id" type="file" accept="image/*" />
                        <br/>
                    </>}
                    {signup && <>
                        <label htmlFor="caretaker-license">Photo of medical license:</label>
                        <input required id="caretaker-id" type="file" accept="image/*" />
                        <br/>
                    </>}
                    <TextField error={servicesError} required label="Services:" id="caretaker-services" onChange={(e) => {if(e.target.value != "") setServicesError(false)}}/>
                    <br/>
                    <TextField error={availabilityError} required label="Availability:" id="caretaker-avail" onChange={(e) => {if(e.target.value != "") setAvailabilityError(false)}}/>
                </div></>
            </div>
            {signup && <Button className="font" onClick={handleAddVolunteer}>Sign Up</Button>}
            {!signup && <Button className="font" onClick={handleAddVolunteer}>Save profile</Button>}

        </div>
    )
}
export default CaretakerSignUp;