import React from 'react';
import { Box, IconButton, Typography, Button, Card, CardContent, Chip, List} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function ClientProfile(){
    return(
        <div>
            <Box sx={{  display: 'flex', flexDirection: 'column', padding: 5, paddingTop: 3}}>
                <Box sx={{  display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                    <IconButton aria-label="home" color="primary" href="/client/job-post" size="large">
                        <HomeIcon fontSize="inherit"/>
                    </IconButton>
                </Box>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ paddingTop: 4, paddingBottom: 2, textAlign: 'center'}}
                >
                    Profile
                </Typography>
             </Box>
        </div>
    );
}