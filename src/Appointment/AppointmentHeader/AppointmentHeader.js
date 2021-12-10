import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../images/chair.png';
import Calender from '../../Pages/Shared/Calender/Calender';


const AppointmentHeader = ({date,setDate}) => {
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;