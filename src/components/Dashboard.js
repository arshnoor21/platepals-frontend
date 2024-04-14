// // src/components/Dashboard.js
// import React from 'react';
// import { Button, TextField } from '@mui/material';

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <p>This is the dashboard component.</p>
//             <TextField
//                 required
//                 id="outlined-required-firstName"
//                 label="First Name"
//                 variant="filled"
//             />
//             <TextField
//                 required
//                 id="outlined-required-lastName"
//                 label="Last Name"
//                 variant="filled"
//             />

//             <Button variant="contained" href="/dashboard">Join a Room</Button>
//             <Button variant="contained" href="/dashboard">Create a Room</Button>
//         </div>
//     );
// }

// export default Dashboard;
// src/components/Dashboard.js
import React from 'react';
import { Button, TextField, Typography, Grid, Paper, Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="body1" gutterBottom>
                    Welcome to your dashboard. Please enter your information below.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required-firstName"
                            label="First Name"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required-lastName"
                            label="Last Name"
                            variant="filled"
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Button variant="contained" color="primary" href="/join-room" style={{ marginRight: '10px' }}>
                Join a Room
            </Button>
            <Button variant="contained" color="primary" href="/create-room">
                Create a Room
            </Button>
        </Box>
    );
}

export default Dashboard;
