import React from 'react';
import { Box, IconButton, Typography, Button, Card, CardContent, Chip, List} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import jobData from '/src/app/(routes)/timtest/data.json';
// const tempdata = {"Job_page": {
//     "1": {
//       "Categories": [
//         "companionship",
//         "specialized_care"
//       ],
//       "Description": "Assistance with safe entry and exit from the bath or shower, and thorough cleaning.",
//       "Volunteers_Needed": 5,
//       "postal_code": "L2J 2J2",
//       "Points_per_job": 11,
//       "Hours_Expected": 3,
//       "email":"valid@example.com"
//     },
//     "2": {
//       "Categories": [
//         "transportation",
//         "physical_therapy"
//       ],
//       "Description": "I need to be dressed.",
//       "Volunteers_Needed": 9,
//       "postal_code": "H3H 3H3",
//       "Points_per_job": 44,
//       "Hours_Expected": 8,
//       "email":"valid@example.com"
//     },
//     "3": {
//       "Categories": [
//         "personal_care",
//         "companionship"
//       ],
//       "Description": "Do stuff for me.",
//       "Volunteers_Needed": 10,
//       "postal_code": "A1A 1A1",
//       "Points_per_job": 32,
//       "Hours_Expected": 4,
//       "email":"notvalid@example.com"
//     }
//   }}
const tempdata = jobData;

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

export default function ClientJobPost(){
    return (
    <div>
        <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%', padding: 5, paddingTop: 3}}>
            <Box sx={{  display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton aria-label="profile" color="primary" href="/client" size="large">
                    <PersonIcon fontSize="inherit"/>
                </IconButton>
            </Box>
            <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 2}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5}}> 
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', paddingLeft: 1}}
                    >
                        Your Posted Jobs
                    </Typography>
                    <Button variant='contained' color="primary" href="/client/job-post-add" sx={{ width: '18%'}}>
                        Add Job Request
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 500, overflow: 'auto', padding: 5, paddingTop: 0 }}>
                    <List>
                        {Object.keys(tempdata.Job_page).map((jobId) => {
                             if (tempdata.Job_page[jobId].Client_email !== "") {
                                return (
                                  <Card key={jobId} variant="outlined" sx={{ gap: 3 }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                      <Typography variant="h5" component="div" sx={{ paddingBottom: 0.5 }}>
                                        Categories:{' '}
                                        {tempdata.Job_page[jobId].Categories.map((value) => (
                                          <Chip
                                            key={value}
                                            sx={{ marginRight: 1 }}
                                            label={categories.find((option) => option.value === value)?.label}
                                          />
                                        ))}
                                      </Typography>
                                      <Typography variant="body">
                                        <Box fontWeight={'bold'} display="inline">Description: </Box>
                                        {tempdata.Job_page[jobId].Description}
                                      </Typography>
                                      <Typography variant="body">
                                        <Box fontWeight={'bold'} display="inline">Where Service is Needed (Postal Code): </Box>
                                        {tempdata.Job_page[jobId].postal_code}
                                      </Typography>
                                      <Typography variant="body">
                                        <Box fontWeight={'bold'} display="inline">Number of Volunteers Needed: </Box>
                                        {tempdata.Job_page[jobId].Volunteers_Needed}
                                      </Typography>
                                      <Typography variant="body">
                                        <Box fontWeight={'bold'} display="inline">Hours of Service Needed: </Box>
                                        {tempdata.Job_page[jobId].Hours_Expected}
                                      </Typography>
                                      <Typography variant="body">
                                        <Box fontWeight={'bold'} display="inline">Points that Caretaker Receives: </Box>
                                        {tempdata.Job_page[jobId].Points_per_job}
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                );
                            }
                            return null; 
                        })}
                    </List>
                </Box>
            </Box>
        </Box>
    </div>
    );
}