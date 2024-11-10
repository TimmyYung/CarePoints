import React from 'react';
import { Box, IconButton, Typography, Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function ClientJobPost(){
    return (
    <div>
        <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%', padding: 5, paddingTop: 3}}>
            <Box sx={{  display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton aria-label="profile" color="primary" href="/client" size="large">
                    <PersonIcon fontSize="inherit"/>
                </IconButton>
            </Box>
            <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 2, gap: 3}}>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', paddingLeft: 1, paddingBottom: 0.1 }}
                >
                    Your Posted Jobs
                </Typography>
                <Button variant='contained' color="primary" href="/job-post-add" sx={{marginLeft: 'auto', marginRight: 0}}>
                    Add Job Request
                </Button>
                
            </Box>
        </Box>
    </div>);
}