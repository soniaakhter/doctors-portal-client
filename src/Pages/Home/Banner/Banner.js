import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems:'center'
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter,textAlign:'left'}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ my:3, fontSize: 13, fontWeight: 300 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Button variant="contained" sx={{ fontWeight: 500, color: 'white' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width:'350px'}} src={chair} />
                        
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;