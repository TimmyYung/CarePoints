'use client'
import React, { useState } from 'react';
import { Box, IconButton, Button, Typography, FormControl, FormLabel, TextField } from '@mui/material';
import { MenuItem, Select, OutlinedInput, Checkbox, ListItemText, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
    { value: 'personal_care', label: 'Personal Care Assistance' },
    { value: 'companionship', label: 'Companionship and Social Interaction' },
    { value: 'housekeeping', label: 'Housekeeping and Homemaking' },
    { value: 'physical_therapy', label: 'Physical Therapy Exercises' },
    { value: 'health_monitor', label: 'Health Monitoring' },
    { value: 'specialized_care', label: 'Specialized Dementia and Alzheimer\'s Care' },
    { value: 'transportation', label: 'Transportation and Errand Services' },
    { value: 'nutritional_support', label: 'Nutritional Support and Dietary Assistance' }
];

export default function ClientJobPostAdd() {
    const [categoryError, setCategoryError] = useState(false);
    const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
    const [postError, setPostError] = useState(false);
    const [postErrorMessage, setPostErrorMessage] = useState('');
    const [volunteerNoError, setVolunteerNoError] = useState(false);
    const [volunteerNoErrorMessage, setVolunteerNoErrorMessage] = useState('');
    const [serHourError, setSerHourError] = useState(false);
    const [serHourErrorMessage, setSerHourErrorMessage] = useState('');
    const [pointsError, setPointsError] = useState(false);
    const [pointsErrorMessage, setPointsErrorMessage] = useState('');
    const [notes, setNotes] = useState("");
    const [category, setCategory] = useState([]);
    const [postCode, setPostCode] = useState("");
    const [volunteerNo, setVolunteerNo] = useState(0);
    const [serHour, setSerHour] = useState(0);
    const [points, setPoints] = useState(0);

    const handleCategoryChange = (event) => {
        const {
          target: { value },
        } = event;
        setCategory(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const validateInputs = () => {
        let isValid = true;

        if (category.length === 0) {
            setCategoryError(true);
            setCategoryErrorMessage('Please select at least 1 category');
            isValid = false;
        } else {
            setCategoryError(false);
            setCategoryErrorMessage('');
        }

        if (!postCode || !/^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(postCode)) {
            setPostError(true);
            setPostErrorMessage('Please enter a valid postal code.');
            isValid = false;
        } else {
            setPostError(false);
            setPostErrorMessage('');
        }

        if (!volunteerNo || volunteerNo <= 0) {
            setVolunteerNoError(true);
            setVolunteerNoErrorMessage('Number of volunteers needed must be greater than 0.');
            isValid = false;
        } else {
            setVolunteerNoError(false);
            setVolunteerNoErrorMessage('');
        }

        if (!serHour || serHour <= 0) {
            setSerHourError(true);
            setSerHourErrorMessage('Service hours must be greater than 0.');
            isValid = false;
        } else {
            setSerHourError(false);
            setSerHourErrorMessage('');
        }

        if (!points || points <= 0) {
            setPointsError(true);
            setPointsErrorMessage('Points must be greater than 0.');
            isValid = false;
        } else {
            setPointsError(false);
            setPointsErrorMessage('');
        }

        return isValid;
    };

    const handleAddJob = async (e) => {
        e.preventDefault();
        
        if (!validateInputs()) {
            return;
        }

        const newJob = {
            description: notes,
            categories: category,
            volunteers_needed: parseInt(volunteerNo, 10),
            postal_code: postCode,
            points_per_job: parseInt(points, 10),
            hours_expected: parseInt(serHour, 10),
            client_email: "test@test.com" // You'll need to get this from user session/auth
        };

        try {
            const response = await fetch("http://localhost:5000/add-job", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newJob),
            });

            if (!response.ok) {
                throw new Error("Failed to add job");
            }

            // Clear input fields after successful submission
            setCategory([]);
            setNotes("");
            setPostCode("");
            setVolunteerNo(0);
            setSerHour(0);
            setPoints(0);

            console.log("Job added successfully!");
        } catch (error) {
            console.error("Error adding job:", error);
        }
    };

    return (
        <div style={{
            backgroundColor:"#AFCFF2", height:"100%"
          }}>
            <Box sx={{  display: 'flex', flexDirection: 'column', padding: 5, paddingTop: 3}}>
                <Box sx={{  display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                    <IconButton aria-label="home" color="primary" href="/client/job-post" size="large">
                        <HomeIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton aria-label="profile" color="primary" href="/client" size="large">
                        <PersonIcon fontSize="inherit"/>
                    </IconButton>
                </Box>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ paddingLeft: 6, paddingTop: 3, paddingBottom: 2, fontFamily:"pixel" }}
                >
                    Add Your Job Request
                </Typography><br/>
                <Box
                    component="form"
                    onSubmit={handleAddJob}
                    noValidate
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 6, paddingTop: 0 }}
                >
                    <FormControl error={categoryError}>
                        <FormLabel htmlFor="category">Category</FormLabel>
                        <Select
                        style={{ backgroundColor:"white" }}
                            id="category"
                            multiple
                            required
                            value={category}
                            onChange={handleCategoryChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => 
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={categories.find(option => option.value === value)?.label} />
                                    ))}
                                </Box>
                            }
                            MenuProps={MenuProps}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                <Checkbox checked={category.includes(option.value)} />
                                <ListItemText primary={option.label} />
                                </MenuItem>
                            ))}
                        </Select>
                        {categoryError && <Typography variant="caption" color="error">{categoryErrorMessage}</Typography>}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="notes">Notes</FormLabel>
                        <TextField
                            id="note"
                            type="text"
                            name="note"
                            placeholder="Enter any extra information"
                            variant="outlined"
                            color={'primary'}
                            sx={{ ariaLabel: 'Notes', backgroundColor:"white", borderRadius: 2 }}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="postCode">Where Service is Needed (Postal Code)</FormLabel>
                        <TextField
                            sx={{ backgroundColor:"white", borderRadius: 2  }}
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
                            value={postCode}
                            onChange={(e) => setPostCode(e.target.value)}
                            aria-label="Postal Code"
                        />
                    </FormControl>
                    <Box sx={{  display: 'flex', flexDirection: 'row', gap: 2, paddingBottom: 5, borderRadius: 2  }}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel htmlFor="volunteerNo">Number of Volunteers Needed</FormLabel>
                            <TextField
                                id="volunteerNo"
                                error={volunteerNoError}
                                helperText={volunteerNoErrorMessage}
                                type="number"
                                name="volunteerNo"
                                placeholder="0"
                                required
                                variant="outlined"
                                color={'primary'}
                                sx={{ ariaLabel: 'Number of Volunteers Needed', width: '100%', backgroundColor:"white", borderRadius: 2 }}
                                value={volunteerNo}
                                onChange={(e) => setVolunteerNo(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel htmlFor="serHour">Hours of Service Needed</FormLabel>
                            <TextField
                                id="serHour"
                                error={serHourError}
                                helperText={serHourErrorMessage}
                                type="number"
                                name="serHour"
                                placeholder="0"
                                required
                                variant="outlined"
                                color={'primary'}
                                sx={{ ariaLabel: 'Hours of Service Needed', width: '100%', backgroundColor:"white", borderRadius: 2  }}
                                value={serHour}
                                onChange={(e) => setSerHour(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel htmlFor="points">Points that Caretaker Receives</FormLabel>
                            <TextField
                                id="points"
                                error={pointsError}
                                helperText={pointsErrorMessage}
                                type="number"
                                name="points"
                                placeholder="0"
                                required
                                variant="outlined"
                                color={'primary'}
                                sx={{ ariaLabel: 'Points', width: '100%', backgroundColor:"white", borderRadius: 2 }}
                                value={points}
                                onChange={(e) => setPoints(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                    <Button type="submit" variant="contained" sx={{width: '30%', alignSelf: 'center', padding: 1 }}>
                        Add Job Request
                    </Button>
                </Box>
            </Box>
        </div>
    );
}