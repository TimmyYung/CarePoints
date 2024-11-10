'use client'

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, MenuItem, TextField } from '@mui/material';

const category = [
    { value: 'general', label: 'General Care' },
    { value: 'respite', label: 'Respite Care' },
    { value: 'palliative', label: 'Palliative Care' },
    { value: 'dementiaAlzheimer', label: 'Dementia & Alzheimer’s Care' },
    { value: 'respirationTherapy', label: 'Respiration Therapy' },
];

export default function PatientHome() {
    const [postError, setPostError] = useState(false);
    const [postErrorMessage, setPostErrorMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (postError) {
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            postalCode: data.get('postCode'),
            category: data.get('category'),
        });
    };
    const validateInputs = () => {
        const postal = document.getElementById('postCode');

        let isValid = true;

        if (!postal.value || !/^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(postal.value)) {
            setPostError(true);
            setPostErrorMessage('Please enter a valid postal code.');
            isValid = false;
        } else {
            setPostError(false);
            setPostErrorMessage('');
        }

        return isValid;
    };

    return (
        <div>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 5, padding: 20, justifyContent: 'center', alignItems: 'center'}}
            >
                <FormControl>
                    <FormLabel htmlFor="postCode">Postal Code</FormLabel>
                    <TextField
                        error={postError}
                        helperText={postErrorMessage}
                        id="postCode"
                        type="text"
                        name="postCode"
                        placeholder="X1X 1X1"
                        autoComplete="postal-code"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        aria-label="Postal Code"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <TextField
                        id="category"
                        type="text"
                        name="category"
                        defaultValue="general"
                        select
                        fullWidth
                        variant="outlined"
                        color="primary"
                        aria-label="Category"
                        sx={{width: 500}}
                    >
                        {category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <Button type='submit' variant='contained' sx={{ height: '100%' }} onClick={validateInputs}>Find caretaker</Button>
            </Box>
        </div>
    );
}
