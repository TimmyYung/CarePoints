'use client';

import "../../font.css";

import React, { useState } from 'react';
import { Box, Button, Typography, FormControl, FormLabel, TextField, Link} from '@mui/material';
import { useRouter } from 'next/navigation';
import Linking from 'next/link';
import clientData from '/src/app/(routes)/timtest/data.json';

export default function ClientLogin (){
    const router = useRouter();
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    
        const client = Object.values(clientData.client).find(
          (client) => client.client_email === email
        );
    
        if (client) {
          if (client.password === password) {
            setErrorMessage(''); 
            router.push('/client/job-post');  // Successful login
          } else {
            setErrorMessage('Incorrect password. Please try again.');
          }
        } else {
          setErrorMessage('Email not found. Please try again.');
        }
      };

    const validateInputs = () => {
        const email = document.getElementById('email');
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
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', fontFamily:"pixel", paddingLeft: 5, paddingTop: 10, paddingBottom: 2 }}
            >
                Login
            </Typography>
            <Box
                component="form"
                onSubmit={handleLogin}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 2, padding: 5, paddingTop: 0 }}
            >
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
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
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </FormControl>
                <Link
                    component="button"
                    type="button"
                    variant="body2"
                    sx={{ alignSelf: 'baseline', fontFamily:"pixel" }}
                    >
                    <Linking href="/client/sign-up">Don't have an account?</Linking>
                </Link>
                <Button type="submit" fullWidth variant="contained" onClick={validateInputs} style={{fontFamily:"pixel"}}>
                    Login
                </Button>
            </Box>
        </div>
    );
}