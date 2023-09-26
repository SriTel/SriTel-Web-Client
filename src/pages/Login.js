import React from "react";
import { Typography, Button, TextField } from "@mui/material"
import { useNavigate } from 'react-router';
import { Stack } from "@mui/system";
import Image from "../assests/login.png"

const Login = () => {
    const navigate = useNavigate("")
    // directs to signup page
    const signup = () => {
        navigate("/signup")
    }
    // directs to forgotpassword page
    const forgotpassword = () => {
        navigate("/forogtpassword")
    }
    // direct to home page
    const homepage = () => {
        navigate("/home")
        
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ width: '45%', height: '100vh', backgroundImage:`url(${Image})`}}></div>

            <div style={{ width: '47%', height: '50%', marginBottom: '1%', marginTop: '10%', marginLeft: '1%', marginRight: '1%', padding: '2%', backgroundColor: '#F0F0F5', borderRadius: '10px' }}>
                <Typography sx={{ fontSize: '40px', color: 'blue', fontWeight: 'bold' }}>Sign-In</Typography>
                <hr style={{ width: '100%', borderTop: '2px solid blue', margin: '5px 0' }} />

                <div style={{ marginBottom: '2%', marginTop:'2%' }}>
                    <TextField
                        id="outlined-textarea"
                        label=" Mobile Number "
                        placeholder="Mobile Number"
                        multiline
                        sx={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '2%' }}>
                    <TextField
                        type="password"
                        id="outlined-textarea"
                        label="Password"
                        placeholder="Password"
                        multiline
                        sx={{ width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '2%' }}>
                    <Button sx={{ backgroundColor: 'blue', ':hover': { backgroundColor: 'blue' }, width: '100%', padding: '2%', borderRadius: '10px', color: 'white' }}
                        onClick={homepage}>
                        Login
                    </Button>
                </div>

                <div style={{ marginLeft:'30%'}}>
                    <Stack sx={{display:'flex', flexDirection:'row'}}>
                        <Typography>Create a new account? </Typography>
                        <Button onClick={signup} sx={{padding:'0'}}>SignUp</Button>
                    </Stack>
                    <Stack  sx={{display:'flex', flexDirection:'row'}}>
                        <Typography>Forgot Password? </Typography>
                        <Button onClick={forgotpassword} sx={{padding:'0'}}>Forgot Password</Button>
                    </Stack>
                </div>
            </div>
        </div >
    )
}

export default Login;