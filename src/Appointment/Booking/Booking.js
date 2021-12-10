import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Booking = ({ booking }) => {
    const { name, space, time } = booking;
    return (

        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }} >
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>

    );
};

export default Booking;