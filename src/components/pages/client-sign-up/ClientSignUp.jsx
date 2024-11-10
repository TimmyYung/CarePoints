'use client';

import React, { useState } from 'react';
import { Box, Button, Typography, FormControl, FormLabel, TextField, Link} from '@mui/material';
import Linking from 'next/link';

export default function ClientSignUp (){
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [ePhoneError, setEPhoneError] = useState(false);
    const [ePhoneErrorMessage, setEPhoneErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailError || passwordError || phoneError) {
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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

        if (!phoneno.value || phoneno.value.length < 6 || isNaN(phoneno.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid phone number.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
        }

        if (!ephoneno.value || ephoneno.value.length < 6 || isNaN(ephoneno.value)) {
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
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '100%', paddingLeft: 6, paddingTop: 3, paddingBottom: 2 }}
            >
                Sign up
            </Typography>
            <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 2, padding: 6, paddingTop: 0 }}
            >
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
                        sx={{ ariaLabel: 'Full Name' }}
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
                        sx={{ ariaLabel: 'Date of Birth' }}
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
                        sx={{ ariaLabel: 'Emergency Contact Phone Number' }}
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