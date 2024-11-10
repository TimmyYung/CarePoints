'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography, FormControl, FormLabel, TextField, Link} from '@mui/material';
import Linking from 'next/link';
import Image from '../../riverbg.png';

import "../../font.css"

export default function ClientSignUp (){
    const router = useRouter();
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [ePhoneError, setEPhoneError] = useState(false);
    const [ePhoneErrorMessage, setEPhoneErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newClientName, setNewClientName] = useState('');
    const [newClientEmail, setNewClientEmail] = useState('');
    const [newClientPhoneNumber, setNewClientPhoneNumber] = useState('');
    const [newClientPassword, setNewClientPassword] = useState('');
    const [newClientDOB, setNewClientDOB] = useState('');
    const [newEmergencyContactPhone, setNewEmergencyContactPhone] = useState('');
    
  
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
      const handleAddClient = async (e) => {
        e.preventDefault();
        if (newClientName && newClientEmail && newClientPhoneNumber && newClientPassword && newClientDOB && newEmergencyContactPhone) {
          const newClient = {
            client_name: newClientName,
            client_email: newClientEmail,
            client_phone_number: newClientPhoneNumber,
            password: newClientPassword,
            DOB: newClientDOB,
            Emergency_Contact_Phone: newEmergencyContactPhone,
          };
          
          try {
            const response = await fetch('http://localhost:5000/add-client', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newClient),
            });
            
            if (!response.ok) throw new Error('Failed to add client');
            
            // Clear input fields after successful submission
            setNewClientName('');
            setNewClientEmail('');
            setNewClientPhoneNumber('');
            setNewClientPassword('');
            setNewClientDOB('');
            setNewEmergencyContactPhone('');
            router.push('/client/job-post');
          } catch (error) {
            console.error('Error adding client:', error);
          }
        }
      };
      

      if (error) {
        return <div>{error}</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }

    const validateInputs = () => {
        const email = document.getElementById('email');
        const phoneno = document.getElementById('phoneno');
        const ephoneno = document.getElementById('e-phoneno');
        const password = document.getElementById('password');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!phoneno.value || phoneno.value.length < 10 || isNaN(phoneno.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid phone number.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
        }

        if (!ephoneno.value || ephoneno.value.length < 10 || isNaN(ephoneno.value)) {
            setEPhoneError(true);
            setEPhoneErrorMessage('Please enter a valid phone number.');
            isValid = false;
        } else {
            setEPhoneError(false);
            setEPhoneErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };
    return (
        <div>
             <Box
                    style={{
                        backgroundImage: `url(${Image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.85,  
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,  
                    }}
                />
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative', zIndex: 1, color:'white'}}>
                <Box
                component="form"
                onSubmit={handleAddClient}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 2, padding: 6, paddingTop: 5 }}
                >
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', paddingTop: 3, paddingBottom: 2 , fontFamily:"pixel"}}
                    >
                        Sign up
                    </Typography>
                    <FormControl>
                        <FormLabel htmlFor="fullname">Full Name</FormLabel>
                        <TextField
                            id="fullname"
                            type="text"
                            name="fullname"
                            placeholder="John Doe"
                            required
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Full Name', backgroundColor: 'white', borderRadius: 2}}
                            value={newClientName}
                            onChange={(e) => setNewClientName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="birthDay">Date of Birth</FormLabel>
                        <TextField
                            id="birthDay"
                            type="date"
                            name="birthDay"
                            required
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Date of Birth', backgroundColor: 'white', borderRadius: 2 }}
                            value={newClientDOB}
                            onChange={(e) => setNewClientDOB(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Email', backgroundColor: 'white', borderRadius: 2 }}
                            value={newClientEmail}
                            onChange={(e) => setNewClientEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="phoneno">Phone Number</FormLabel>
                        <TextField
                            error={phoneError}
                            helperText={phoneErrorMessage}
                            id="phoneno"
                            type="phoneno"
                            name="phoneno"
                            placeholder="1234567899"
                            required
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Phone Number', backgroundColor: 'white', borderRadius: 2 }}
                            value={newClientPhoneNumber}
                            onChange={(e) => setNewClientPhoneNumber(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="e-phoneno">Emergency Contact Phone Number</FormLabel>
                        <TextField
                            error={ePhoneError}
                            helperText={ePhoneErrorMessage}
                            id="e-phoneno"
                            type="e-phoneno"
                            name="e-phoneno"
                            placeholder="1234567899"
                            required
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Emergency Contact Phone Number', backgroundColor: 'white', borderRadius: 2 }}
                            value={newEmergencyContactPhone}
                            onChange={(e) => setNewEmergencyContactPhone(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Password', backgroundColor: 'white', borderRadius: 2 }}
                            value={newClientPassword}
                            onChange={(e) => setNewClientPassword(e.target.value)}
                        />
                    </FormControl>
                    <Link
                        component="button"
                        type="button"
                        variant="body2"
                        sx={{ alignSelf: 'baseline', fontFamily:"pixel", color:'white' }}
                        >
                        <Linking href="/client/login">Already have an account?</Linking>
                    </Link>
                    <Button style={{fontFamily:"pixel"}} type="submit" fullWidth variant="contained" onClick={validateInputs}>
                        Sign up
                    </Button>
                </Box>
            </Box>
        </div>
    );
}