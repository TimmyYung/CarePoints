'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, FormControl, FormLabel, TextField, Link} from '@mui/material';
import Linking from 'next/link';

export default function PatientSignUp (){
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [newClientName, setNewClientName] = useState('');
    const [newClientEmail, setNewClientEmail] = useState('');
    const [newClientPhoneNumber, setNewClientPhoneNumber] = useState('');
    const [newClientPassword, setNewClientPassword] = useState('');
  
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
      const handleNewClient = async (e) => {
        e.preventDefault();
    
        if (newClientName && newClientEmail && newClientPhoneNumber && newClientPassword) {
          const newClient = {
            client_name: newClientName,
            client_email: newClientEmail,
            client_phone_number: newClientPhoneNumber,
            password: newClientPassword,
          };
    
          try {
            // Send POST request to Node.js backend
            const response = await fetch('http://localhost:5000/add-client', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newClient),
            });
    
            if (!response.ok) {
              throw new Error('Failed to add client');
            }
    
            // Clear input fields after successful submission
            setNewClientName('');
            setNewClientEmail('');
            setNewClientPhoneNumber('');
            setNewClientPassword('');
    
            // Optionally refetch or update state with new client list
            fetch('/api/timtest')
              .then((response) => response.json())
              .then((jsonData) => setData(jsonData));
            
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

        if (!phoneno.value || phoneno.value.length < 6 || isNaN(phoneno.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid phone number.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
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
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', paddingLeft: 5, paddingTop: 10, paddingBottom: 2 }}
            >
                Sign up
            </Typography>
            <Box
            component="form"
            onSubmit={handleNewClient}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 2, padding: 5, paddingTop: 0 }}
            >
                <FormControl>
                    <FormLabel htmlFor="fullname">Full Name</FormLabel>
                    <TextField
                        id="fullname"
                        type="fullname"
                        name="fullname"
                        placeholder="John Doe"
                        required
                        variant="outlined"
                        color={'primary'}
                        sx={{ ariaLabel: 'Full Name' }}
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
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
                        sx={{ ariaLabel: 'Email' }}
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
                        sx={{ ariaLabel: 'Phone Number' }}
                        value={newClientPhoneNumber}
                        onChange={(e) => setNewClientPhoneNumber(e.target.value)}
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
                        value={newClientPassword}
                        onChange={(e) => setNewClientPassword(e.target.value)}
                    />
                </FormControl>
                <Link
                    component="button"
                    type="button"
                    variant="body2"
                    sx={{ alignSelf: 'baseline' }}
                    >
                     <Linking href="/patient-login">Already have an account?</Linking>
                </Link>
                <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
                    Sign up
                </Button>
            </Box>
        </div>
    );
}