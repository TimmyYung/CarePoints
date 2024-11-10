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
    { value: 'specialized_care', label: 'Specialized Dementia and Alzheimer’s Care' },
    { value: 'transportation', label: 'Transportation and Errand Services' },
    { value: 'nutritional_support', label: 'Nutritional Support and Dietary Assistance' }
];


export default function ClientJobPostAdd(){
    const [categoryError, setCategoryError] = useState(false);
    const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
    const [volunteerNoError, setVolunteerNoError] = useState(false);
    const [volunteerNoErrorMessage, setVolunteerNoErrorMessage] = useState('');
    const [serHourError, setSerHourError] = useState(false);
    const [serHourErrorMessage, setSerHourErrorMessage] = useState('');
    const [pointsError, setPointsError] = useState(false);
    const [pointsErrorMessage, setPointsErrorMessage] = useState('');

    const [category, setCategory] = useState([]);
    const [notes, setNotes] = useState("");
    const [volunteerNo, setVolunteerNo] = useState(0);
    const [serHour, setSerHour] = useState(0);
    const [points, setPoints] = useState(0);

    const handleAddJob = async (e) => {
        e.preventDefault();
        if(categoryError || volunteerNoError || serHourError|| pointsError){
            return;
        }
        console.log("success");
    }

    const handleCatgoryChange = (event) => {
        const {
          target: { value },
        } = event;
        setCategory(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const validateInputs = () => {
        const category = document.getElementById('category');
        const volunteerNo = document.getElementById('volunteerNo');
        const serHour = document.getElementById('serHour');
        const points = document.getElementById('points');

        let isValid = true;

        if (category.length === 0) {
            setCategoryError(true);
            setCategoryErrorMessage('Please select at least 1 category');
            isValid = false;
        } else {
            setCategoryError(false);
            setCategoryErrorMessage('');
        }

        if (!volunteerNo.value || volunteerNo.value <= 0 ) {
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
    }

    return (
        <div>
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
                    sx={{ paddingLeft: 6, paddingTop: 3, paddingBottom: 2 }}
                >
                    Add Your Job Request
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleAddJob}
                    noValidate
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 6, paddingTop: 0 }}
                >
                    <FormControl error={categoryError}>
                        <FormLabel htmlFor="category">Category</FormLabel>
                        <Select
                            id="category"
                            multiple
                            required
                            value={category}
                            onChange={handleCatgoryChange}
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
                            sx={{ ariaLabel: 'Notes' }}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </FormControl>
                    <Box sx={{  display: 'flex', flexDirection: 'row', gap: 2, paddingBottom: 5 }}>
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
                                sx={{ ariaLabel: 'Number of Volunteers Needed', width: '100%' }}
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
                                sx={{ ariaLabel: 'Hours of Service Needed', width: '100%' }}
                                value={serHour}
                                onChange={(e) => setSerHour(e.target.value)}
                            />
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormLabel htmlFor="points">Points</FormLabel>
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
                                sx={{ ariaLabel: 'Points', width: '100%' }}
                                value={points}
                                onChange={(e) => setPoints(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                    <Button type="submit" variant="contained" onClick={validateInputs} sx={{width: '30%', alignSelf: 'center', padding: 1 }}>
                        Add Job Request
                    </Button>
                </Box>
             </Box>
        </div>
    );
}