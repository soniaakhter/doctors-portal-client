import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    const [loginName, setLoginName] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginName = { ...loginName };
        newLoginName[field] = value;
        setLoginName(newLoginName);
       
    }
    const handleLoginSubmit = e => {
        alert("hello")
        e.preventDefault()
    }
    

    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:20}} xs={12} md={6}>
                    
                    <Typography variant="body1" gutterBottom> Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%',m:1}}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant="contained">Login</Button>


                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        
                        
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;