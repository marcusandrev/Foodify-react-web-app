import React from 'react'

//log in card
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';

const Login=()=>{
    const paperStyle={padding :20,height:'45vh',width:538, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Welcome</h2>
                    <p>Please enter your account details.</p>
                </Grid>
                <label>Email</label>
                <TextField placeholder='Enter your e-mail' variant="outlined" fullWidth required/>
                <label>Password</label>
                <TextField placeholder='Enter your password' type='password' variant="outlined" fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log In</Button>
                <Typography align='right'>
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
            </Paper>
            <Typography align='center'> Do you have an account ?
                     <Link href="#" >
                        Sign Up
                </Link>
            </Typography>
        </Grid>
    )
}

export default Login
