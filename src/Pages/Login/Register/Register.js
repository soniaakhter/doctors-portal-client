import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Register = () => {
    const [loginName, setLoginName] = useState({});
    const { user, signInUsingGoogle, registerUser } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginName = { ...loginName };
        newLoginName[field] = value;
        setLoginName(newLoginName);

    }
    const handleLoginSubmit = e => {
        if (loginName.password !== loginName.password2) {
            alert("Your password didn't match!!");
            return
        }
        registerUser(loginName.email, loginName.password)
        e.preventDefault()
    }



   
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/appointment'
    console.log('Came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>

                    <Typography variant="body1" gutterBottom> Register</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onChange={handleOnChange}
                            label="Re-Type Your Password"
                            type="password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant="contained">Register</Button>
                        <div>------------or-------------</div>
                        <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1 }} variant="contained">Google SignIn</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;